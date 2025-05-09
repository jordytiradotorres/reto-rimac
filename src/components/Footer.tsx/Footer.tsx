import styles from "./Footer.module.scss";
import logoMobile from "../../assets/images/logo-footer-mobile.svg";
import logoDesktop from "../../assets/images/logo-footer-desktop.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <picture>
        <source srcSet={logoDesktop} media="(min-width: 900px)" />
        <img src={logoMobile} alt="Rimac Logo" />
      </picture>
      <div className={styles.footer__seperator}></div>
      <p className={styles.copy}>
        © {new Date().getFullYear()} RIMAC Seguros y Reaseguros.
      </p>
    </footer>
  );
};
