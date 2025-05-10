import React from "react";
import type { CheckboxWithLabelProps } from "../../types";
import styles from "./CheckboxWithLabel.module.scss";

export const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({
  label = "Acepto la Política",
  checked,
  name = "checkbox",
  disabled = false,
  required = false,
  onChange,
  className = "",
}) => {
  return (
    <div className={`${styles.checkboxContainer} ${className}`}>
      <label className={styles.label}>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          disabled={disabled}
          required={required}
          className={styles.input}
          aria-checked={checked}
          aria-required={required}
        />
        <span className={styles.customCheckbox} aria-hidden="true"></span>
        <span className={styles.labelText}>{label}</span>
      </label>
    </div>
  );
};
