import { SelectorPlan, Skeleton } from "../../components";
import { useUser } from "../../hooks";
import type { Plan } from "../../types";
import styles from "./PlanAndCoverage.module.scss";

interface ChoosePlanSectionProps {
  plans: Plan[];
  onPlanSelect: (selectedId: string) => void;
}

export const ChoosePlanSection = ({
  plans,
  onPlanSelect,
}: ChoosePlanSectionProps) => {
  const { loading, user } = useUser();
  console.log("🚀 ~ loading:", loading);

  return (
    <section className={styles.planAndCoverage__choosePlan}>
      <h2>
        {loading ? (
          <Skeleton width="7rem" height="2rem" borderRadius="1rem" />
        ) : (
          <span>{user?.name}</span>
        )}
        , ¿Para quién deseas cotizar?
      </h2>
      <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
      <SelectorPlan plans={plans} onPlanSelect={onPlanSelect} />
    </section>
  );
};
