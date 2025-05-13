import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from "axios";
import {
  loginStorage,
  messageContent,
  setMessageContent,
} from "@/stores/atom";
import * as base_url from "../urls/base";
import { triggerToast } from "@/utilities/toast/toast";

function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift();
}
let errorHandle = false;
export class ApiService {
  /**
   * Create Axios Instance.
   */
  public axiosInstance: AxiosInstance;
  /**
   * Login data declaration from local storage.
   * @returns Login Data string
   */
  private loginData(): string {
    const data = localStorage.getItem("user-credentials");
    return data ?? "";
  }

  /**
   * API Service constructor.
   * Contains of declaration of API Base URL, Request Interceptor, and Response Interceptor.
   */
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: base_url.APIURL,
      withCredentials: true,
    });

    this.initializeRequestInterceptor();
    this.initializeResponseInterceptor();
  }

  /**
   * Request Interceptor
   * For intercepting the request call to the API.
   * Adding the Authorization headers for using a access token from Backend
   */
  private initializeRequestInterceptor(): void {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        
        const userDataString = this.loginData();
        if (userDataString) {
          const userData = JSON.parse(userDataString);
          config.headers[
          "Authorization"
        ] = `Bearer ${userData.state.token.access}`;
        } 
        config.headers["ngrok-skip-browser-warning"] = true;
        // read xsfr token from cookie
        const xsrfToken = getCookie("XSRF-TOKEN")
        config.headers["XSRF-TOKEN"] = xsrfToken
     
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  /**
   * Response Interceptor
   * For intercepting the response call to the API.
   * When the access token is invalid, the API is automatically call the refresh token API
   */
  private initializeResponseInterceptor(): void {
    this.axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (err) => {
        console.log(err)
        const userDataString = this.loginData();
        const originalConfig = err.config;
  
        if (err.config != undefined) {
          if (
            userDataString != "" &&
            err.config.url !== base_url.LoginURL &&
            err.response.status === 401 &&
            !originalConfig._retry
          ) {
            let userData = JSON.parse(userDataString);
            originalConfig._retry = true;
            try {
              const data = {
                refresh: userData.state.token.refresh,
              };
              const rs = await this.axiosInstance.post(
                base_url.RefreshTokenURL(),
                data
              );
  
              userData.state.token = rs.data;
              return this.axiosInstance(originalConfig);
            } catch (_error) {
              this.errorHandling(_error as AxiosError);
              return Promise.reject(_error); 
            }
          }
        }
        this.errorHandling(err); 
        return Promise.reject(err); 
      }
    );
  }
  
  /**
   * Notification Handling
   * To store the message content to Jotai Atom state management.
   * @param type Toast Message type
   * @param message Message from API Response
   * @returns Message Response string
   */
  private notifHandling(type: any, message: string) {
    setMessageContent.set(messageContent, {
      type: type,
      title: "Something went wrong",
      description: message,
    });
    return message;
  }

  /**
   * Error Handling
   * Used for handling the error when the access token and refresh token is invalid.
   * @param error Error response from API
   * @returns Notification handling function
   */
  private errorHandling(error: AxiosError) {
    delete axios.defaults.headers["Authorization"];
    delete axios.defaults.headers.common["Authorization"];
    if (error?.response?.status === 401) {
      loginStorage.setState((prev: any) => ({
        ...prev,
        login: false,
        userData: {},
        token: {
          access: null,
          refresh: null,
        },
        setup: {
          mode: "light",
        },
      }));
    }
    return this.notifHandling("warning", String(error?.response));
  }

  /**
   * Request function
   * Used for generalizing the request method from Axios.
   * @param config Axios Request Config
   * @returns Axios Instance function
   */
  protected async request(config: AxiosRequestConfig, skipToast?: boolean) {
    return this.axiosInstance(config)
      .then((response) => {
        return response.data;
      })
      .catch((error) =>{
        if(!errorHandle){

          if ("response" in error) return this.notifHandling("warning", error.response.data)
            if(!skipToast){
              triggerToast({
                message: "Server Offline !",
              type: "error",
              actionLabel: "OK",
              description: "We can't continue with your request. Please try again later.",
            })
            errorHandle = true
            return this.notifHandling("warning", "We can't continue with your request. Please try again later.")
          }
      }
      });
  }

  public async get(url: string, skipToast?: boolean) {
    return await this.request({ method: "GET", url: url, withCredentials: true }, skipToast);
  }

  public async post(url: string, payload?: any) {
    return await this.request({ method: "POST", url: url, data: payload
    });
  }

  public async postWithHeaders(url: string, payload?: any, headers?: any) {
    return await this.request({ method: "POST", url: url, data: payload, headers: headers });
  }

  public async postWithCsrf(url: string, payload?: any) {
    return this.get(base_url.APIURL + "/api/csrf?app_id=YqMZkPswFX648mpfHJGE5yTeDb72ajgLncUQz", true).then(async (r) => {
     
      return await this.post(url, payload)
    })
  }

  public async put(url: string, payload?: any) {
    return await this.request({ method: "PUT", url: url, data: payload });
  }

  public async patch(url: string, payload?: any) {
    return await this.request({ method: "PATCH", url: url, data: payload });
  }

  public async delete(url: string, payload?: any) {
    return await this.request({ method: "DELETE", url: url, data: payload });
  }
}
