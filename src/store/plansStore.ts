import { create } from "zustand";
import type { PlanDetails } from "../types";

interface PlansStore {
  selectedPlan: string | null;
  planDetails: PlanDetails | null;
  setPlanDetails: (planDetails: PlanDetails) => void;
  setSelectedPlan: (plan: string) => void;
}

export const usePlansStore = create<PlansStore>((set) => ({
  selectedPlan: null,
  planDetails: null,
  setSelectedPlan: (plan) => set({ selectedPlan: plan }),
  setPlanDetails: (planDetails) => set({ planDetails }),
}));
