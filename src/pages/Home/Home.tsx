import { Form, Footer, Header } from "../../components";
import styles from "./Home.module.scss";
import family from "../../assets/images/family.png";
import DegradadoIzquierdoCentro from "../../assets/images/degradado-izquierdo-centro.png";
import DegradadoIzquierdoAbajo from "../../assets/images/degradado-izquierdo-abajo.png";
import DegradadoDerechoArriba from "../../assets/images/degradado-derecho-arriba.png";
import DegradadoDerechoCentro from "../../assets/images/degradado-derecho-centro.png";

export const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__gradients}>
        <img
          className={styles["home__gradients--leftCenter"]}
          src={DegradadoIzquierdoCentro}
          alt="Degradado izquiedo centro"
        />
        <img
          className={styles["home__gradients--leftBottom"]}
          src={DegradadoIzquierdoAbajo}
          alt="Degradado izquiedo abajo"
        />
        <img
          className={styles["home__gradients--rightTop"]}
          src={DegradadoDerechoArriba}
          alt="Degradado derecho arriba"
        />
        <img
          className={styles["home__gradients--rightCenter"]}
          src={DegradadoDerechoCentro}
          alt="Degradado derecho centro"
        />
      </div>
      <Header />
      <main className={styles.home__main}>
        <section className={styles.home__image}>
          <img src={family} alt="Familia" />
        </section>
        <section className={styles.home__form}>
          <Form />
        </section>
      </main>
      <Footer />
    </div>
  );
};
