import { useUser } from "../../hooks";

export const PlanAndCoverage = () => {
  const { user, loading } = useUser();
  console.log("🚀 ~ PlanAndCoverage ~ user:", user);
  console.log("🚀 ~ PlanAndCoverage ~ loading:", loading);

  return <div>PlanAndCoverage</div>;
};
