import DegradadoIzquierdoCentro from "../../assets/images/degradado-izquierdo-centro.png";
import DegradadoIzquierdoAbajo from "../../assets/images/degradado-izquierdo-abajo.png";
import DegradadoDerechoArriba from "../../assets/images/degradado-derecho-arriba.png";
import DegradadoDerechoCentro from "../../assets/images/degradado-derecho-centro.png";
import styles from "./Gradients.module.scss";

export const Gradients = () => {
  return (
    <div className={styles.gradients}>
      <img
        className={styles["gradients--leftCenter"]}
        src={DegradadoIzquierdoCentro}
        alt="Degradado izquierdo centro"
      />
      <img
        className={styles["gradients--leftBottom"]}
        src={DegradadoIzquierdoAbajo}
        alt="Degradado izquierdo abajo"
      />
      <img
        className={styles["gradients--rightTop"]}
        src={DegradadoDerechoArriba}
        alt="Degradado derecho arriba"
      />
      <img
        className={styles["gradients--rightCenter"]}
        src={DegradadoDerechoCentro}
        alt="Degradado derecho centro"
      />
    </div>
  );
};
