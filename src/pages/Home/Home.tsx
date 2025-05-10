import { Form, Footer, Header } from "../../components";
import styles from "./Home.module.scss";
import family from "../../assets/images/family.png";

export const Home = () => {
  return (
    <div className={styles.home}>
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
