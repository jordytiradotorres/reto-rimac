import React, { useState } from "react";
import styles from "./InputDocument.module.scss";

interface DocumentInputProps {
  initialType?: "dni" | "ruc";
  initialValue?: string;
  onTypeChange?: (type: "dni" | "ruc") => void;
  onValueChange?: (value: string) => void;
}

export const InputDocument: React.FC<DocumentInputProps> = ({
  initialType = "dni",
  initialValue = "",
  onTypeChange,
  onValueChange,
}) => {
  const [type, setType] = useState<"dni" | "ruc">(initialType);
  const [value, setValue] = useState<string>(initialValue);

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = event.target.value as "dni" | "ruc";
    setType(newType);
    if (onTypeChange) {
      onTypeChange(newType);
    }
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <div className={styles.inputDocument}>
      <select
        value={type}
        onChange={handleTypeChange}
        className={styles.inputDocument__selector}
      >
        <option value="dni">DNI</option>
        <option value="ruc">RUC</option>
      </select>
      <div className={styles.inputDocument__inputContainer}>
        <label className={styles.inputDocument__placeholder}>
          Nro. de documento
        </label>
        <input
          type="text"
          value={value}
          onChange={handleValueChange}
          className={styles.inputDocument__input}
        />
      </div>
    </div>
  );
};
