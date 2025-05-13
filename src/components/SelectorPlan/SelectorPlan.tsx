import { memo, useCallback, useState } from "react";
import { PlanCard } from "./PlanCard";
import type { PlanSelectorProps } from "../../types";
import styles from "./SelectorPlan.module.scss";

export const SelectorPlan = memo(
  ({ plans, onPlanSelect }: PlanSelectorProps) => {
    const [selectedId, setSelectedId] = useState<string>("");

    const handleSelect = useCallback(
      (id: string) => {
        setSelectedId(id);
        onPlanSelect(id);
      },
      [onPlanSelect]
    );

    return (
      <div className={styles.planSelector}>
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            selected={plan.id === selectedId}
            onSelect={handleSelect}
            name="plan"
          />
        ))}
      </div>
    );
  }
);
