export interface CheckboxWithLabelProps {
  label: string;
  checked: boolean;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}
