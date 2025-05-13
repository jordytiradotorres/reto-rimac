import type { UseFormReturn } from "react-hook-form";
import type { FormValues } from "../utils";
import { type UseFormWatch } from "react-hook-form";

export interface FormFieldsProps {
  formMethods: UseFormReturn<FormValues>;
}

export interface FormSubmitButtonProps {
  watch: UseFormWatch<FormValues>;
}

export interface FormStore {
  formData: FormValues | null;
  setFormData: (data: FormValues) => void;
}
