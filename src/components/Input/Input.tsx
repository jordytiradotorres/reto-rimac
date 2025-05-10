import React, { forwardRef } from "react";
import styles from "./Input.module.scss";

interface InputProps {
  label: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, value, onChange }, ref) => {
    return (
      <div className={styles.inputContainer}>
        <label className={styles.inputContainer__label}>{label}</label>
        <input
          type="text"
          value={value}
          onChange={onChange}
          ref={ref}
          className={styles.inputContainer__input}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
