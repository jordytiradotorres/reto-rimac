import { useState } from "react";
import { getPlans } from "../api";
import { usePlansStore } from "../store";

export const usePlans = () => {
  const [error, setError] = useState<string | null>(null);

  const plans = usePlansStore((state) => state.plans);
  const loadingPlan = usePlansStore((state) => state.loadingPlan);
  const setLoading = usePlansStore((state) => state.setLoadingPlan);
  const setPlans = usePlansStore((state) => state.setPlans);

  const fetchplans = async () => {
    try {
      setLoading(true);
      const data = await getPlans();
      setPlans(data);
    } catch (err) {
      setError("Error fetching plans");
    } finally {
      setLoading(false);
    }
  };

  return { plans, loadingPlan, error, fetchplans };
};
