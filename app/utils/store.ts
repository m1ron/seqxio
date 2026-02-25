import { create } from "zustand";

const useStore = create((set) => ({
  // STATE OF NAVBAR
  openNav: false,
  setOpenNav: (open:boolean) => set({ openNav: open }),
}));

export default useStore;
