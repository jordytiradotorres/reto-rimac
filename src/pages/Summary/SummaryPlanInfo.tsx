import { useFormStore, usePlansStore } from "../../store";
import styles from "./Summary.module.scss";

export const SummaryPlanInfo = () => {
  const formData = useFormStore((state) => state.formData);
  const planDetails = usePlansStore((state) => state.planDetails);

  return (
    <>
      <div className={styles.summary__info}>
        <h3 className={styles.title}>Responsable del pago</h3>
        <div>
          <h2 className={styles.name}>DNI:</h2>
          <p className={styles.description}>{formData?.documentValue}</p>
        </div>
        <div>
          <h2 className={styles.name}>Celular:</h2>
          <p className={styles.description}>{formData?.celular}</p>
        </div>
      </div>
      <div className={styles.summary__info}>
        <h3 className={styles.title}>Plan elegido</h3>
        <div>
          <p className={styles.description}>{planDetails?.name}</p>
        </div>
        <div>
          <h2 className={styles.name}>Costo del plan:</h2>
          <p className={styles.description}>${planDetails?.price} al mes</p>
        </div>
      </div>
    </>
  );
};
