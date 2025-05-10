import { useUser } from "../../hooks";
import { useFormStore } from "../../store";

export const PlanAndCoverage = () => {
  const { user, loading, error } = useUser();
  console.log("🚀 ~ PlanAndCoverage ~ user:", user);
  console.log("🚀 ~ PlanAndCoverage ~ error:", error);
  console.log("🚀 ~ PlanAndCoverage ~ loading:", loading);

  const formData = useFormStore((state) => state.formData);
  console.log("🚀 ~ PlanAndCoverage ~ formData:", formData);

  return <div>PlanAndCoverage</div>;
};
