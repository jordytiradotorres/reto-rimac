import { create } from "zustand";

interface UserStore {
  user: string | null;
  lastName: string | null;
  setName: (user: string) => void;
  setLastName: (lastName: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  lastName: null,
  setName: (user) => set({ user }),
  setLastName: (lastName) => set({ lastName }),
}));
