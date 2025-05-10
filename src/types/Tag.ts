import type { sizes, variants } from "./Globals";

export interface TagProps {
  text: string;
  variant?: variants;
  size?: sizes;
  icon?: React.ReactNode;
  className?: string;
}
