import { BackButton, Header, Separator, Stepper } from "../../components";
import { steps } from "../../types";
import styles from "./Summary.module.scss";
import { useSummary } from "../../hooks";
import { SummaryUserInfo } from "./SummaryUserInfo";
import { SummaryPlanInfo } from "./SummaryPlanInfo";

export const Summary = () => {
  const { handleBack } = useSummary();

  return (
    <div className={styles.summary}>
      <Header />
      <Stepper steps={steps} currentStep={1} />
      <main className={styles.summary__content}>
        <BackButton onClick={handleBack} />
        <h1 className={styles.summary__title}>Resumen del seguro</h1>

        <div className={styles.summary__details}>
          <h3 className={styles.title}>Precios calculados para:</h3>
          <SummaryUserInfo />
          <Separator size="small" />
          <SummaryPlanInfo />
        </div>
      </main>
    </div>
  );
};
