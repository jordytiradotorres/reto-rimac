import styles from "./Skeleton.module.scss";

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Skeleton = ({
  width = "100%",
  height = "1rem",
  borderRadius = "0.25rem",
  className = "",
  style = {},
}: SkeletonProps) => {
  return (
    <div
      className={`${styles.skeleton} ${className}`}
      style={{ width, height, borderRadius, ...style }}
    ></div>
  );
};
