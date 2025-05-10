import { useNavigate } from "react-router-dom";
import { BackButton, Header, SelectorPlan, Stepper } from "../../components";
import { useUser } from "../../hooks";
import { useFormStore } from "../../store";
import { steps, type Plan } from "../../types";
import styles from "./PlanAndCoverage.module.scss";

import ProtectionLight from "../../assets/images/protectionLight.svg";
import AddUserLight from "../../assets/images/addUserLight.svg";

export const PlanAndCoverage = () => {
  const navigate = useNavigate();
  const { user, loading, error } = useUser();
  const formData = useFormStore((state) => state.formData);

  const plans: Plan[] = [
    {
      id: "me",
      title: "Para mí",
      description:
        "Cotiza tu seguro de salud y agrega familiares si así lo deseas.",
      icon: <img src={ProtectionLight} alt="Para mí" width={40} height={40} />,
    },
    {
      id: "others",
      title: "Para alguien más",
      description:
        "Realiza una cotización para uno de tus familiares o cualquier persona.",
      icon: (
        <img src={AddUserLight} alt="Para alguien más" width={40} height={40} />
      ),
    },
  ];

  const handlePlanSelect = (selectedId: string) => {
    console.log("Plan seleccionado:", selectedId);
  };

  if (loading) return <h2>Loading...</h2>;
  if (error) return <p>{error}</p>;
  if (!user) return <p>No user data</p>;

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.planAndCoverage}>
      <Header />
      <Stepper steps={steps} currentStep={0} />
      <main className={styles.planAndCoverage__content}>
        <BackButton onClick={handleBack} />

        <section className={styles.planAndCoverage__choosePlan}>
          <h2>Rocío ¿Para quién deseas cotizar?</h2>
          <p>Selecciona la opción que se ajuste más a tus necesidades.</p>

          <SelectorPlan plans={plans} onPlanSelect={handlePlanSelect} />
        </section>
        <section className={styles.planAndCoverage__plans}>planes</section>
      </main>
    </div>
  );
};
