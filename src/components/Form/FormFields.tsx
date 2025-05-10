import { Input, InputDocument, CheckboxWithLabel } from "../../components";
import type { FormFieldsProps } from "../../types";
import styles from "./Form.module.scss";

export const FormFields: React.FC<FormFieldsProps> = ({ formMethods }) => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = formMethods;

  return (
    <div className={styles.form__fields}>
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
        checked={watch("privacyPolicy")}
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
        checked={watch("commercialPolicy")}
        onChange={(checked) =>
          setValue("commercialPolicy", checked, { shouldValidate: true })
        }
      />
      {errors.commercialPolicy && (
        <span className={styles.form__error}>
          {errors.commercialPolicy.message}
        </span>
      )}
    </div>
  );
};
