import styles from "./Footer.module.scss";
import LogoMobile from "../../assets/images/logo-footer-mobile.svg";
import LogoDesktop from "../../assets/images/logo-footer-desktop.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <picture>
          <source srcSet={LogoDesktop} media="(min-width: 56.25rem)" />
          <img src={LogoMobile} alt="Rimac Logo" />
        </picture>
        <div className={styles.footer__seperator}></div>
        <p className={styles.copy}>
          © {new Date().getFullYear()} RIMAC Seguros y Reaseguros.
        </p>
      </div>
    </footer>
  );
};
