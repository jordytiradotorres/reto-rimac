import { usePlans } from "../../hooks";
import type { PlanCardProps } from "../../types";
import styles from "./SelectorPlan.module.scss";

export const PlanCard = ({ plan, selected, onSelect, name }: PlanCardProps) => {
  const { fetchplans } = usePlans();

  const handleChange = async () => {
    onSelect(plan.id);
    console.log("hice click");
    await fetchplans();
  };

  return (
    <div
      className={`${styles.planCard__card} ${
        selected ? styles.planCard__selected : ""
      }`}
    >
      <div className={styles.planCard__radioWrapper}>
        <input
          type="radio"
          name={name}
          checked={selected}
          onChange={handleChange}
        />
      </div>

      <div className={styles.planCard__iconWrapper}>{plan.icon}</div>

      <div className={styles.planCard__content}>
        <h3>{plan.title}</h3>
        <p>{plan.description}</p>
      </div>
    </div>
  );
};
