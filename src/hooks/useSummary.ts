import { useNavigate } from "react-router-dom";
import { useFormStore, usePlansStore, useUserStore } from "../store";

export const useSummary = () => {
  const navigate = useNavigate();

  const formData = useFormStore((state) => state.formData);
  const user = useUserStore((state) => state.user);
  const planDetails = usePlansStore((state) => state.planDetails);

  const handleBack = () => {
    navigate(-1);
  };

  return {
    formData,
    user,
    planDetails,
    handleBack,
  };
};
