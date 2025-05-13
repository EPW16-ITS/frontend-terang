"use client";
import Typography from "@/components/Typography";
import { ApiService } from "@/services/apis/api-service";
import triggerToast from "@/utilities/toast/toast";
import { use, useEffect, useMemo, useState } from "react";
import { FaEdit, FaPlus, FaStar, FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import Button from "@/components/Button";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/navigation";
import { registrationStatusAtom } from "@/stores/atom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useAtom, useSetAtom } from "jotai";

let x = false;
type Userdata = {
  first_name?: string;
  last_name?: string;
  [key: string]: any;
};

export default function Home() {
  const [timeline, setTimeline] = useState<any>([]);
  const [userdata, setUserdata] = useState<Userdata>({});
  const [event, setEvent] = useState<any>([]);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // const setRegistrationStatus = useSetAtom(registrationStatusAtom)

  const apiService = new ApiService();
  // if (!x) {
  useMemo(() => {
    // console.log(apiService);
    // timeline
    apiService
      .get("/api/event/timeline")
      .then((res) => {
        console.log(res);
        if (res.success && Array.isArray(res.data)) {
          setLoading(true);
          console.log(res.data);
          setTimeline(res.data);
        } else {
          console.log("gagal");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });

    // user detial
    const userCredentials = localStorage.getItem("user-credentials") ?? "";
    const userCredentialsParsed = JSON.parse(userCredentials);
    const userid = userCredentialsParsed.state.id.user;

    apiService
      .get("/api/user/" + userid)
      .then((res) => {
        if (res.success) {
          // setLoading(true);
          console.log("res ", res.data);
          setUserdata(res.data);
          console.log("userdata", userdata);
        } else {
          console.log("gagal");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });

    apiService
      .get("/api/event/kalender?now=" + new Date().toISOString())
      .then((response) => {
        console.log("sampe sini");
        if (response.success) {
          setLoading(true);
          console.log(response.data);
          setEvent(response.data);
        } else {
          console.log("gagal");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
    x = true;
  }, [x])

  return (
    <section className="flex flex-col gap-6 px-2 w-full h-full items-center overflow-y-hidden overflow-x-auto ">
      <section className="flex flex-row  w-full lg:gap-10 md:gap-5 gap-2 ">
        <div className="w-full relative sm:static md:min-h-[330px] h-[250px]  flex flex-row mb-5 bg-primary-300 rounded-2xl ">
          <div className="absolute sm:relative flex flex-col md:px-10  my-auto md:gap-5 gap-0 z-20 p-3 w-full">
            <Typography.Sirukota
              level={9}
              className=" text-white lg:text-6xl  "
            >
              Hi, Space Ranger!
            </Typography.Sirukota>
            <Typography.Poppins
              level={10}
              size="sm"
              className="text-white  lg:text-xl  "
            >
              Welcome to your own personal control room. Let’s see your journey
              so far?
            </Typography.Poppins>
          </div>
          <div className=" relative right-10 w-full  ">
            <Image
              src={`/dashboard/UFO.svg`}
              alt="ufo"
              objectFit="cover"
              fill
              className="absolute right-0 z-5 "
            />
            <Image
              src={`/dashboard/Cancer.svg`}
              alt="ufo"
              width={50}
              height={50}
              className="absolute top-[30%] right-10 md:block hidden "
            />
            <Image
              src={`/dashboard/Cancer (1).svg`}
              alt="ufo"
              width={50}
              height={50}
              className="absolute bottom-[40%] right-[60%] md:block hidden "
            />
            <Image
              src={`/dashboard/Cancer (2).svg`}
              alt="ufo"
              width={140}
              height={140}
              className="absolute bottom-[20%] left-[40%] md:block hidden"
            />
          </div>
        </div>
        {/* profile edit */}
        <div className=" lg:max-w-[400px] w-full  min-w-[154px] md:min-h-[330px]  h-[250px] bg-primary-400 border-[2px] flex flex-col p-5 relative  border-white md:gap-10 rounded-2xl ">
          <div className="flex w-full   flex-row justify-between ">
            <Typography.Sirukota className="text-white" level={9}>
              My Profile
            </Typography.Sirukota>
            {/* <FaEdit className="text-white" size={30} /> */}
          </div>
          <FaUserCircle className="text-white mx-auto w-1/2   " size={150} />
          <div className="flex flex-col mx-auto items-center gap-1 ">
            <Typography.Poppins level={9} size="lg" className="text-white">
              {userdata.first_name}
            </Typography.Poppins>
            <Typography.Poppins level={10} size="sm" className="text-white">
              {userdata.last_name}
            </Typography.Poppins>
          </div>
        </div>
      </section>
      <section className="flex lg:flex-row md:flex-row  flex-col  gap-10 w-full">
        <div className=" w-full h-[371px] bg-secondary-300 rounded-2xl relative p-8 md:order-1 order-2">
          <Typography.Sirukota level={8} className="text-white mb-3">
            UPCOMING EVENT
          </Typography.Sirukota>
          <div className="custom-scrollbar flex flex-col w-full overflow-y-auto max-h-[280px]">
            {/* Add overflow-y-auto and max-h to make it scrollable */}
            {Array.isArray(timeline) &&
              timeline.length > 0 &&
              timeline.map((categoryData: any, index: number) => (
                <ul className="flex flex-col gap-5" key={index}>
                  <Typography.Steelfish level={7} className="text-white mb-2">
                     {categoryData.event_category}
                  </Typography.Steelfish>

                  {Array.isArray(categoryData.event) &&
                    categoryData.event.map((event: any, eventIndex: number) => (
                      <li
                        className="flex flex-row items-center w-full justify-between px-4 gap-5"
                        key={eventIndex}
                      >
                        <div className="flex flex-row items-center gap-5 text-white">
                          <FaStar size={30} color="#FFD23F" />
                          <Typography.Righteous level={6}>
                            {event.event_name}
                          </Typography.Righteous>
                        </div>
                        <Typography.Poppins level={7} className="text-white">
                          {event.event_date}
                        </Typography.Poppins>
                      </li>
                    ))}
                </ul>
              ))}
          </div>
        </div>
        <div className="flex max-w-[25rem] w-full mx-auto flex-col gap-6 items-center order-1 md:order-2">
          <div className=" w-full  h-[152px] border-[2px] flex flex-col gap-y-5 rounded-3xl relative">
            <div className=" flex justify-between px-4 items-center bg-primary-50 rounded-3xl w-full h-[55px]">
              <Typography.Steelfish level={7} className="text-white">
                CALENDAR
              </Typography.Steelfish>
              <Typography.Steelfish level={8} className="text-white">
                {new Date().toLocaleString("en-us", { month: "long" })}
              </Typography.Steelfish>
            </div>
            <div className="flex flex-row gap-x-6 justify-center items-center p-2 w-full">
              {event.map((data: any, index: number) => {
                const day_name = data.event_day.substr(0, 3);
                const day_number = data.event_day_number;
                const is_sun = day_name === "SUN";
                const is_event = data.event_name !== null;
                const text_color = is_event
                  ? "text-yellow-600"
                  : is_sun
                  ? "text-red-400"
                  : "text-white";

                return (
                  <div key={index} className="flex flex-col gap-y">
                    <Typography.Righteous
                      level={9}
                      className={["font-light", text_color].join(" ")}
                    >
                      {day_name}
                    </Typography.Righteous>
                    <Typography.Righteous
                      level={5}
                      className={["font-medium", text_color].join(" ")}
                    >
                      {day_number}
                    </Typography.Righteous>
                  </div>
                );
              })}
            </div>
            <div>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                <SwiperSlide></SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className=" w-full h-[189px] bg-fourtiary-300 rounded-2xl flex flex-col justify-center items-center">
            <Typography.Sirukota
              level={7}
              className="text-accent-neutral-0 mb-4"
            >
              SUBMISSION
            </Typography.Sirukota>
            <div className="space-y-4 flex flex-col justify-center">
              <Button.Primary
                type="text"
                prefix={<FaPlus size={15} />}
                className="flex"
                onClick={() => console.log("HandleSubmission")}
              >
                EPC: TRYOUT
              </Button.Primary>
              <Button.Primary
                type="text"
                prefix={<FaPlus size={15} />}
                className="flex"
                onClick={() => console.log("HandleEssaySubmission")}
              >
                EPC: ESSAY SUBMISSION
              </Button.Primary>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
