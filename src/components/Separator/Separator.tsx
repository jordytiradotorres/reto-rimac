import React from "react";
import styles from "./Separator.module.scss";

interface SeparatorProps {
  size: "small" | "medium" | "large";
  className?: string;
}

export const Separator: React.FC<SeparatorProps> = ({ size, className }) => {
  return (
    <div
      className={`${styles.separator} ${
        styles[`separator--${size}`]
      }  ${className}`}
    ></div>
  );
};
