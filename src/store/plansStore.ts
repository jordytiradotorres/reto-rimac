import { create } from "zustand";

interface PlansStore {
  selectedPlan: string | null;
  setSelectedPlan: (plan: string | null) => void;
}

export const usePlansStore = create<PlansStore>((set) => ({
  selectedPlan: null,
  setSelectedPlan: (plan) => set({ selectedPlan: plan }),
}));
