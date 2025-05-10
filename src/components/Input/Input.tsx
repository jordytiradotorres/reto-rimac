import React, { useState } from "react";
import styles from "./Input.module.scss";

interface InputProps {
  label: string;
  initialValue?: string;
  onChange?: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  label,
  initialValue = "",
  onChange,
}) => {
  const [value, setValue] = useState<string>(initialValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputContainer__label}>{label}</label>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        className={styles.inputContainer__input}
      />
    </div>
  );
};
