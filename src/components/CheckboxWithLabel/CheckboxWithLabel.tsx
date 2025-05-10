import React, { useState } from "react";
import type { CheckboxWithLabelProps } from "../../types";
import styles from "./CheckboxWithLabel.module.scss";

export const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({
  label = "Acepto la Política",
  name = "checkbox",
  checked: controlledChecked,
  disabled = false,
  required = false,
  onChange,
  className = "",
}) => {
  const [internalChecked, setInternalChecked] = useState(false);
  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    if (!isControlled) {
      setInternalChecked(newChecked);
    }
    onChange?.(newChecked);
  };

  return (
    <div className={`${styles.checkboxContainer} ${className}`}>
      <label className={styles.label}>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={handleChange}
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
