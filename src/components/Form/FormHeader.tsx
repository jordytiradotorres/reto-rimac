import { Tag, Separator } from "../../components";
import family from "../../assets/images/family.png";
import styles from "./Form.module.scss";

export const FormHeader = () => (
  <>
    <div className={styles.form__header}>
      <div>
        <Tag text="Seguro Salud Flexible" size="small" />
        <h2 className={styles.form__title}>Creado para ti y tu familia</h2>
      </div>
      <img src={family} alt="Familia" />
    </div>
    <div className={styles.form__separator}>
      <Separator size="small" />
    </div>
    <h4 className={styles.form__subtitle}>
      Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
      asesoría, 100% online.
    </h4>
  </>
);
