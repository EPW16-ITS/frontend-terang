import { atom, createStore } from "jotai";
import { atomWithStore } from "jotai-zustand";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface LoginDataType {
  login: boolean;
  userData: Object;
  token: {
    access: string | null;
    refresh: string | null;
  };
  setup: {
    mode: "light" | "dark" | string;
  };
}

export const loginStorage = create(
  persist(
    () => ({
      login: false,
      userData: { role: "client" },
      token: {
        access: null,
        refresh: null,
      },
      setup: {
        mode: "light",
      },
    }),
    {
      name: "user-login",
      getStorage: () => localStorage,
    }
  )
);

export const loginData = atomWithStore(loginStorage);

/**
 * Message content state
 */
export const messageContent = atom<any>({
  type: "success",
  title: null,
  description: null,
});
export const setMessageContent = createStore();

export const registrationStatusAtom = atom({
  epc: false,
  injection: false,
  micon: false,
  ephyfest: false,
});
