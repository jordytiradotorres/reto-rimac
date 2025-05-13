import { create } from "zustand";
import type { PlanDetails, PlanList } from "../types";

interface PlansStore {
  selectedPlan: string | null;
  plans: PlanList | null;
  planDetails: PlanDetails | null;
  loadingPlan: boolean;
  setLoadingPlan: (loading: boolean) => void;
  setPlanDetails: (planDetails: PlanDetails) => void;
  setSelectedPlan: (plan: string) => void;
  setPlans: (plans: PlanList) => void;
}

export const usePlansStore = create<PlansStore>((set) => ({
  selectedPlan: null,
  plans: null,
  planDetails: null,
  loadingPlan: false,
  setLoadingPlan: (loading) => set({ loadingPlan: loading }),
  setSelectedPlan: (plan) => {
    set({ selectedPlan: plan, loadingPlan: true });
    setTimeout(() => set({ loadingPlan: false }), 1000);
  },
  setPlanDetails: (planDetails) => set({ planDetails }),
  setPlans: (plans) => set({ plans }),
}));
