import { useForm, type UseFormWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { formSchema, type FormValues } from "../utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormStore } from "../store";

export const useFormLogic = () => {
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

  const isDisabled = (watch: UseFormWatch<FormValues>) =>
    !watch("documentValue") ||
    !watch("documentType") ||
    !watch("celular") ||
    !watch("privacyPolicy") ||
    !watch("commercialPolicy");

  return {
    formMethods,
    handleSubmit: handleSubmit(onSubmit),
    watch,
    isDisabled,
  };
};
