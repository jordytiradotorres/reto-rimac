import React from "react";
import styles from "./Button.module.scss";
import type { ButtonProps } from "../../types";

export const Button: React.FC<ButtonProps> = ({
  label,
  size = "medium",
  variant = "primary",
  disabled = false,
  onClick,
}) => {
  const buttonClass = `${styles.button} ${styles[size]} ${styles[variant]} ${
    disabled && styles.disabled
  }`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};
