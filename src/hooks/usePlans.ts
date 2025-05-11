import { useEffect, useState } from "react";
import type { PlanList } from "../types";
import { getPlans } from "../api";

export const usePlans = () => {
  const [plans, setPlans] = useState<PlanList | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchplans = async () => {
      try {
        const data = await getPlans();
        setPlans(data);
      } catch (err) {
        setError("Error fetching plans");
      } finally {
        setLoading(false);
      }
    };

    fetchplans();
  }, []);

  return { plans, loading, error };
};
