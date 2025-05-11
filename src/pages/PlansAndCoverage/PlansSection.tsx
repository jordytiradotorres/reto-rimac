import { CardDetails } from "../../components";
import type { PlanDetails } from "../../types";
import styles from "./PlanAndCoverage.module.scss";

interface PlansSectionProps {
  plans: PlanDetails[];
  onSelectPlan: (plan: PlanDetails) => void;
}

export const PlansSection = ({ plans, onSelectPlan }: PlansSectionProps) => {
  return (
    <section className={styles.planAndCoverage__plans}>
      {plans.map((plan) => (
        <CardDetails key={plan.name} plan={plan} onSelect={onSelectPlan} />
      ))}
    </section>
  );
};
