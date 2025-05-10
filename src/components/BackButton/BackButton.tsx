import styles from "./BackButton.module.scss";

interface BackButtonProps {
  label?: string;
  onClick?: () => void;
}

export const BackButton: React.FC<BackButtonProps> = ({
  label = "Volver",
  onClick,
}) => {
  return (
    <button className={styles.backButton} onClick={onClick}>
      <span className={styles.backButton__icon}>{"<"}</span>
      <span className={styles.backButton__label}>{label}</span>
    </button>
  );
};
