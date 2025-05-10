import React from "react";
import styles from "./Tag.module.scss";
import type { TagProps } from "../../types/Tag";

export const Tag: React.FC<TagProps> = ({
  text = "Seguro Salud Flexible",
  variant = "primary",
  size = "medium",
  icon,
  className = "",
}) => {
  return (
    <div
      className={`${styles.tag} ${styles[`tag--${variant}`]} ${
        styles[`tag--${size}`]
      } ${className}`}
    >
      {icon && <span className={styles.tag__icon}>{icon}</span>}
      <span className={styles.tag__text}>{text}</span>
    </div>
  );
};
