import { CardDetails, Skeleton } from "../../components";
import { usePlansStore } from "../../store";
import type { PlansSectionProps } from "../../types";
import styles from "./PlanAndCoverage.module.scss";

export const PlansSection = ({ plans, onSelectPlan }: PlansSectionProps) => {
  const loading = usePlansStore((state) => state.loadingPlan);

  if (loading) {
    return (
      <div className={styles.planAndCoverage__plans}>
        <Skeleton width="18rem" height="42.87rem" borderRadius="1rem" />
        <Skeleton width="18rem" height="42.87rem" borderRadius="1rem" />
        <Skeleton width="18rem" height="42.87rem" borderRadius="1rem" />
      </div>
    );
  }

  return (
    <section className={styles.planAndCoverage__plans}>
      {plans.map((plan) => (
        <CardDetails key={plan.name} plan={plan} onSelect={onSelectPlan} />
      ))}
    </section>
  );
};
