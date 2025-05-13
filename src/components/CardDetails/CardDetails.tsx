import type { PlanDetails } from "../../types";
import styles from "./CardDetails.module.scss";
import { Separator } from "../Separator";
import { Button } from "../Button";
import { usePlansStore } from "../../store";
import { getPlanImage } from "../../utils";
import { Skeleton } from "../Skeleton";

interface PlanCardProps {
  plan: PlanDetails;
  onSelect: (plan: PlanDetails) => void;
}

export const CardDetails = ({ plan, onSelect }: PlanCardProps) => {
  const selectedPlan = usePlansStore((state) => state.selectedPlan);
  const isLoading = usePlansStore((state) => state.loadingPlan);

  if (isLoading) {
    return (
      <div className={styles.cardDetails}>
        <div style={{ marginBottom: "1rem" }}>
          <Skeleton width="60%" height="1.5rem" borderRadius="8px" />
          <Skeleton width="80%" height="1rem" borderRadius="8px" />
          <Skeleton width="100%" height="7rem" borderRadius="8px" />
        </div>
        <div className={styles.cardDetails__description}>
          <Skeleton
            width="100%"
            height="2rem"
            borderRadius="16px"
            style={{ marginBottom: "1.5rem" }}
          />
          <Skeleton
            width="100%"
            height="2rem"
            borderRadius="16px"
            style={{ marginBottom: "1.5rem" }}
          />
          <Skeleton
            width="100%"
            height="2rem"
            borderRadius="16px"
            style={{ marginBottom: "1.5rem" }}
          />
        </div>
        <div>
          <Skeleton
            width="100%"
            height="3rem"
            borderRadius="8px"
            style={{ marginTop: "8rem" }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cardDetails}>
      <div className={styles.cardDetails__header}>
        <div>
          <h3>{plan.name}</h3>
          <h4>Costo del plan</h4>
          {selectedPlan !== "me" && selectedPlan !== null && (
            <span className={styles.cardDetails__priceBefore}>
              ${plan.price.toFixed(2)} antes
            </span>
          )}

          <span
            className={styles.cardDetails__price}
            style={
              selectedPlan === null || selectedPlan === "me"
                ? { marginTop: "0.25rem" }
                : {}
            }
          >
            $
            {selectedPlan !== "me" && selectedPlan !== null
              ? (plan.price * 0.95).toFixed(2)
              : plan.price.toFixed(2)}{" "}
            al mes
          </span>
        </div>
        <img src={getPlanImage(plan.name)} alt={plan.name} />
      </div>

      <Separator size="small" />

      <div className={styles.cardDetails__body}>
        <ul className={styles.cardDetails__description}>
          {plan.description.map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </div>

      <Button
        label="Seleccionar Plan"
        size="large"
        variant="secondary"
        onClick={() => onSelect(plan)}
      />
    </div>
  );
};
