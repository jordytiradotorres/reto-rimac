import { Button } from "../../components";
import { useFormLogic } from "../../hooks";
import { type FormSubmitButtonProps } from "../../types";

export const FormSubmitButton: React.FC<FormSubmitButtonProps> = ({
  watch,
}) => {
  const { isDisabled } = useFormLogic();
  return (
    <Button label="Cotiza aquí" size="small" disabled={isDisabled(watch)} />
  );
};
