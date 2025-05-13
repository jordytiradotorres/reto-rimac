import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, type FormValues } from "../../utils";
import { FormHeader, FormFields, FormSubmitButton } from "./";
import styles from "./Form.module.scss";
import { useFormStore } from "../../store";

export const Form = () => {
  const navigate = useNavigate();
  const formMethods = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      documentType: "dni",
      documentValue: "",
      celular: "",
      privacyPolicy: false,
      commercialPolicy: false,
    },
  });

  const { handleSubmit, watch } = formMethods;
  const setFormData = useFormStore((state) => state.setFormData);

  const onSubmit = (data: FormValues) => {
    setFormData(data);
    setTimeout(() => {
      navigate("/plans");
    }, 0);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <FormHeader />
      <FormFields formMethods={formMethods} />
      <FormSubmitButton watch={watch} />
    </form>
  );
};
