import { memo, useCallback } from "react";
import { usePlans } from "../../hooks";
import type { PlanCardProps } from "../../types";
import styles from "./SelectorPlan.module.scss";

export const PlanCard = memo(
  ({ plan, selected, onSelect, name }: PlanCardProps) => {
    const { fetchplans } = usePlans();

    const handleChange = useCallback(async () => {
      onSelect(plan.id);
      await fetchplans();
    }, [onSelect, plan.id, fetchplans]);

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
  }
);
