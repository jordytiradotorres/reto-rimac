import {
  Button,
  CheckboxWithLabel,
  Input,
  InputDocument,
  Separator,
  Tag,
} from "../../components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, type FormValues } from "../../utils";

import family from "../../assets/images/family.png";
import styles from "./Form.module.scss";

export const Form = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      documentType: "dni",
      documentValue: "",
      celular: "",
      privacyPolicy: false,
      commercialPolicy: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
        initialType="dni"
        initialValue=""
        onTypeChange={(type) => setValue("documentType", type)}
        onValueChange={(value) => setValue("documentValue", value)}
        {...register("documentType")}
        {...register("documentValue")}
      />
      {errors.documentType && (
        <span className={styles.form__error}>
          {errors.documentType.message}
        </span>
      )}
      {errors.documentValue && (
        <span className={styles.form__error}>
          {errors.documentValue.message}
        </span>
      )}

      <Input
        label="Celular"
        {...register("celular")}
        onChange={(e) => setValue("celular", e.target.value)}
      />
      {errors.celular && (
        <span className={styles.form__error}>{errors.celular.message}</span>
      )}

      <CheckboxWithLabel
        label="Acepto lo Política de Privacidad"
        checked={watch("privacyPolicy")} // Observa el valor actual
        onChange={(checked) =>
          setValue("privacyPolicy", checked, { shouldValidate: true })
        }
      />
      {errors.privacyPolicy && (
        <span className={styles.form__error}>
          {errors.privacyPolicy.message}
        </span>
      )}

      <CheckboxWithLabel
        label="Acepto la Política Comunicaciones Comerciales"
        checked={watch("commercialPolicy")} // Observa el valor actual
        onChange={(checked) =>
          setValue("commercialPolicy", checked, { shouldValidate: true })
        }
      />
      {errors.commercialPolicy && (
        <span className={styles.form__error}>
          {errors.commercialPolicy.message}
        </span>
      )}

      <span className={styles.form__term}>Aplican Términos y Condiciones.</span>

      <Button
        label="Cotiza aquí"
        size="small"
        disabled={
          !watch("documentValue") ||
          !watch("documentType") ||
          !watch("celular") ||
          !watch("privacyPolicy") ||
          !watch("commercialPolicy")
        }
      />
    </form>
  );
};
