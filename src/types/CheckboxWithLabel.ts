export interface CheckboxWithLabelProps {
  label: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}
