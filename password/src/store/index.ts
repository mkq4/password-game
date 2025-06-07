import { create } from "zustand";

type Store = {
    password: string;
    setPassword: (value: string) => void;
}

export const store = create<Store>((set) => ({
  password: "",
  setPassword: (value: string) => set({ password: value }),
}));

