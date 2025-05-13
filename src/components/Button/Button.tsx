import React from "react";
import styles from "./Button.module.scss";
import type { ButtonProps } from "../../types";

export const Button: React.FC<ButtonProps> = ({
  label,
  size = "medium",
  variant = "primary",
  disabled = false,
  onClick,
  isLoading = false,
}) => {
  const buttonClass = `${styles.button} ${styles[size]} ${styles[variant]} ${
    disabled ? styles.disabled : ""
  }  ${isLoading ? styles.isLoading : ""}`;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {label}
    </button>
  );
};
