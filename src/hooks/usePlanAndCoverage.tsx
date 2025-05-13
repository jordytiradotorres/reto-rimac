import { useNavigate } from "react-router-dom";
import { usePlansStore } from "../store";
import { useUser } from "./useUsers";
import { useEffect, useMemo } from "react";
import { myAge, type PlanDetails } from "../types";

export const usePlanAndCoverage = () => {
  const navigate = useNavigate();
  const { error } = useUser();

  const selectedPlan = usePlansStore((state) => state.selectedPlan);
  const setSelectedPlan = usePlansStore((state) => state.setSelectedPlan);
  const setPlanDetails = usePlansStore((state) => state.setPlanDetails);
  const plans = usePlansStore((state) => state.plans);

  useEffect(() => {
    setSelectedPlan(""); // Resetea el plan seleccionado al cargar el componente
  }, [setSelectedPlan]);

  const filteredPlans = useMemo(
    () => plans?.list.filter((plan) => plan.age >= myAge),
    [plans]
  );

  const handlePlanSelect = (selectedId: string) => {
    setSelectedPlan(selectedId);
  };

  const handleSelectPlan = (plan: PlanDetails) => {
    setPlanDetails(plan);
    navigate("/summary");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return {
    error,
    selectedPlan,
    filteredPlans,
    handlePlanSelect,
    handleSelectPlan,
    handleBack,
  };
};
