import type { sizes, variants } from "./Globals";

export interface ButtonProps {
  label: string;
  size?: sizes;
  variant?: variants;
  disabled?: boolean;
  onClick?: () => void;
  isLoading?: boolean;
}
