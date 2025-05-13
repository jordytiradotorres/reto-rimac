import { useSummary } from "../../hooks";
import Family from "../../assets/images/gl-family.svg";
import styles from "./Summary.module.scss";

export const SummaryUserInfo = () => {
  const { user } = useSummary();
  return (
    <div className={styles.summary__user}>
      <img src={Family} alt="Familia" />
      <h2>
        {user?.name} {user?.lastName}
      </h2>
    </div>
  );
};
