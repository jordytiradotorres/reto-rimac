import { create } from "zustand";
import type { User } from "../types";

interface UserStore {
  user: User | null;
  name: string | null;
  lastName: string | null;
  isLoadingUser: boolean;
  setIsLoadingUser: (loading: boolean) => void;
  setName: (name: string) => void;
  setLastName: (lastName: string) => void;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  name: null,
  lastName: null,
  isLoadingUser: false,
  setIsLoadingUser: (isLoadingUser) => set({ isLoadingUser }),
  setName: (name) => set({ name }),
  setLastName: (lastName) => set({ lastName }),
  setUser: (user) => set({ user }),
}));
