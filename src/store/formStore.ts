import { create } from "zustand";
import type { FormStore } from "../types";

export const useFormStore = create<FormStore>((set) => ({
  formData: null,
  setFormData: (data) => set({ formData: data }),
}));
