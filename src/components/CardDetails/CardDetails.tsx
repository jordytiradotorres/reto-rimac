import type { PlanDetails } from "../../types";
import HomeLight from "../../assets/images/homeLight.svg";
// import HospitalLight from "../../assets/images/hospitalLight.svg";
import styles from "./CardDetails.module.scss";
import { Separator } from "../Separator";
import { Button } from "../Button";

interface PlanCardProps {
  plan: PlanDetails;
  onSelect: (id: string) => void;
}

export const CardDetails = ({ plan, onSelect }: PlanCardProps) => {
  return (
    <div className={styles.cardDetails}>
      {/* {plan.badge && <div className={styles.badge}>{plan.badge}</div>} */}

      <div className={styles.cardDetails__header}>
        <div>
          <h3>{plan.name}</h3>
          <h4>Costo del plan</h4>
          <span className={styles.cardDetails__priceBefore}>$39 antes</span>
          <span className={styles.cardDetails__price}>
            ${plan.price.toFixed(2)} al mes
          </span>
        </div>
        <img src={HomeLight} alt="Home" />
      </div>

      <Separator size="small" />

      <div className={styles.cardDetails__body}>
        <ul className={styles.cardDetails__description}>
          {plan.description.map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* <button
        type="button"
        className={styles.cardDetails__selectButton}
        onClick={() => onSelect(plan.id)}
      >
        Seleccionar Plan
      </button> */}
      <Button label="Seleccionar Plan" size="large" variant="secondary" />
    </div>
  );
};
