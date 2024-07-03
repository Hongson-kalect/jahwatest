import { create } from "zustand";

type appProps = {
  showMobileMenu: boolean;
  setShowMobileMenu: (val: boolean) => void;
};

export const useAppStore = create<appProps>((set) => ({
  showMobileMenu: true,
  setShowMobileMenu: (val) => set((state) => ({ showMobileMenu: val })),
}));
