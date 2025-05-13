import Logo from "../../assets/images/logo.svg";
import TelephoneSolid from "../../assets/images/telephone-solid.svg";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo Rimac" />
      <div className={styles.header__contact}>
        <span className={styles.header__tagline}>¡Compra por este medio!</span>
        <div className={styles.header__phone}>
          <img src={TelephoneSolid} alt="Teléfono" />
          <p>(01) 411 6001</p>
        </div>
      </div>
    </header>
  );
};
