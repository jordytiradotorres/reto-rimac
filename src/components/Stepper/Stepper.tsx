import type { StepperProps } from "../../types";
import styles from "./Stepper.module.scss";

export const Stepper = ({ steps, currentStep }: StepperProps) => {
  return (
    <section className={styles.stepper}>
      {steps.map((step, index) => (
        <div key={index} className={styles.stepper__wrapper}>
          <div
            className={`${styles.stepper__circle} ${
              index <= currentStep ? styles.stepper__active : ""
            }`}
          >
            {index + 1}
          </div>
          <span
            className={`${styles.stepper__label} ${
              index <= currentStep ? styles.stepper__activeLabel : ""
            }`}
          >
            {step.label}
          </span>
          {index < steps.length - 1 && <div className={styles.stepper__line} />}
        </div>
      ))}
    </section>
  );
};
