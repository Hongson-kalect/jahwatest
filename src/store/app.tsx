import { create } from "zustand";

type appProps = {
  showMobileMenu: boolean;
  setShowMobileMenu: (val: boolean) => void;
};

export const useAppStore = create<appProps>((set) => ({
  showMobileMenu: false,
  setShowMobileMenu: (val) => set(() => ({ showMobileMenu: val })),
  // setShowMobileMenu: (val) => set((state) => ({ showMobileMenu: val })),
}));
