import { useNavigate } from "react-router-dom";
import { BackButton, Header, Separator, Stepper } from "../../components";
import { steps } from "../../types";
import styles from "./Summary.module.scss";
import Family from "../../assets/images/gl-family.svg";
import { useFormStore, usePlansStore, useUserStore } from "../../store";

export const Summary = () => {
  const navigate = useNavigate();

  const formData = useFormStore((state) => state.formData);
  const userName = useUserStore((state) => state.user);
  const userLastName = useUserStore((state) => state.lastName);
  const planDetails = usePlansStore((state) => state.planDetails);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.summary}>
      <Header />
      <Stepper steps={steps} currentStep={1} />
      <main className={styles.summary__content}>
        <BackButton onClick={handleBack} />

        <h1 className={styles.summary__title}>Resumen del seguro</h1>

        <div className={styles.summary__details}>
          <h3 className={styles.title}>Precios calculados para:</h3>

          <div className={styles.summary__user}>
            <img src={Family} alt="Familia" />
            <h2>
              {userName} {userLastName}
            </h2>
          </div>

          <Separator size="small" />

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
        </div>
      </main>
    </div>
  );
};
