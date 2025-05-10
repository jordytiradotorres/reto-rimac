import {
  Button,
  CheckboxWithLabel,
  Input,
  InputDocument,
  Separator,
  Tag,
} from "../../components";
import family from "../../assets/images/family.png";
import styles from "./Form.module.scss";
import { useState } from "react";

export const Form = () => {
  const [documentType, setDocumentType] = useState<"dni" | "ruc">("dni");
  const [documentValue, setDocumentValue] = useState("");

  const [celular, setCelular] = useState("");

  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  return (
    <form className={styles.form}>
      <div className={styles.form__header}>
        <div>
          <Tag text="Seguro Salud Flexible" size="small" />
          <h2 className={styles.form__title}>Creado para ti y tu familia</h2>
        </div>
        <img src={family} alt="Familia" />
      </div>

      <div className={styles.form__separator}>
        <Separator size="small" />
      </div>

      <h4 className={styles.form__subtitle}>
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
        asesoría, 100% online.
      </h4>

      <InputDocument
        initialType={documentType}
        initialValue={documentValue}
        onTypeChange={(type) => setDocumentType(type)}
        onValueChange={(value) => setDocumentValue(value)}
      />

      <Input label="Celular" onChange={(value) => setCelular(value)} />

      <CheckboxWithLabel
        label="Acepto lo Política de Privacidad"
        checked={checked}
        onChange={setChecked}
      />
      <CheckboxWithLabel
        label="Acepto la Política Comunicaciones Comerciales"
        checked={checked2}
        onChange={setChecked2}
      />

      <span className={styles.form__term}>Aplican Términos y Condiciones.</span>

      <Button
        label="Cotiza aquí"
        size="small"
        disabled={!checked || !checked2}
      />
    </form>
  );
};
