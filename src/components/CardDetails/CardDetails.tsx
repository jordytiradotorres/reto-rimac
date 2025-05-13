import { usePlansStore } from "../../store";
import { Separator, Button } from "..";
import { getPlanImage } from "../../utils";
import type { CardDetailsProps } from "../../types";
import styles from "./CardDetails.module.scss";

export const CardDetails = ({ plan, onSelect }: CardDetailsProps) => {
  const selectedPlan = usePlansStore((state) => state.selectedPlan);

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
