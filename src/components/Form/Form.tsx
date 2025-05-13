import { useFormLogic } from "../../hooks";
import { FormFields, FormHeader, FormSubmitButton } from "./";
import styles from "./Form.module.scss";

export const Form = () => {
  const { formMethods, watch, handleSubmit } = useFormLogic();

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormHeader />
      <FormFields formMethods={formMethods} />
      <FormSubmitButton watch={watch} />
    </form>
  );
};
