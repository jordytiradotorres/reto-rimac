import { SelectorPlan } from "../../components";
import type { Plan } from "../../types";
import styles from "./PlanAndCoverage.module.scss";

interface ChoosePlanSectionProps {
  userName: string;
  plans: Plan[];
  onPlanSelect: (selectedId: string) => void;
}

export const ChoosePlanSection = ({
  userName,
  plans,
  onPlanSelect,
}: ChoosePlanSectionProps) => {
  return (
    <section className={styles.planAndCoverage__choosePlan}>
      <h2>{userName}, ¿Para quién deseas cotizar?</h2>
      <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
      <SelectorPlan plans={plans} onPlanSelect={onPlanSelect} />
    </section>
  );
};
