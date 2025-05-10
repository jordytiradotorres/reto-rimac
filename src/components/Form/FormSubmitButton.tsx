import { Button } from "../../components";
import { isDisabled, type FormSubmitButtonProps } from "../../types";

export const FormSubmitButton: React.FC<FormSubmitButtonProps> = ({
  watch,
}) => {
  return (
    <Button label="Cotiza aquí" size="small" disabled={isDisabled(watch)} />
  );
};
