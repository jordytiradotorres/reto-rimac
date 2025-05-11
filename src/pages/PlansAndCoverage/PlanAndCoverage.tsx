import { useNavigate } from "react-router-dom";
import {
  BackButton,
  CardDetails,
  Header,
  SelectorPlan,
  Stepper,
} from "../../components";
import { usePlans, useUser } from "../../hooks";
import { useFormStore, usePlansStore } from "../../store";
import { steps, type Plan } from "../../types";

import ProtectionLight from "../../assets/images/protectionLight.svg";
import AddUserLight from "../../assets/images/addUserLight.svg";
import styles from "./PlanAndCoverage.module.scss";

export const PlanAndCoverage = () => {
  const navigate = useNavigate();
  const { user, loading, error } = useUser();
  const { plans } = usePlans();

  const formData = useFormStore((state) => state.formData);
  const selectedPlan = usePlansStore((state) => state.selectedPlan);
  const setSelectedPlan = usePlansStore((state) => state.setSelectedPlan);

  const plansChoose: Plan[] = [
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
    setSelectedPlan(selectedId);
  };

  if (loading) return <h2>Loading...</h2>;
  if (error) return <p>{error}</p>;
  if (!user) return <p>No user data</p>;

  const handleBack = () => {
    navigate(-1);
  };

  const handleSelectPlan = (id: string) => {
    console.log("Plan seleccionado:", id);
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

          <SelectorPlan plans={plansChoose} onPlanSelect={handlePlanSelect} />
        </section>
        <section className={styles.planAndCoverage__plans}>
          {plans?.list.map((plan) => (
            <CardDetails
              key={plan.id}
              plan={plan}
              onSelect={handleSelectPlan}
            />
          ))}
        </section>
      </main>
    </div>
  );
};
