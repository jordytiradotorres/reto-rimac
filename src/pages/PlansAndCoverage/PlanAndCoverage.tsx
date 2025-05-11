import { useNavigate } from "react-router-dom";
import { BackButton, Header, Stepper } from "../../components";
import { usePlans, useUser } from "../../hooks";
import { usePlansStore } from "../../store";
import { myAge, steps, type Plan, type PlanDetails } from "../../types";

import ProtectionLight from "../../assets/images/protectionLight.svg";
import AddUserLight from "../../assets/images/addUserLight.svg";
import styles from "./PlanAndCoverage.module.scss";
import { ChoosePlanSection, PlansSection } from "./";

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

export const PlanAndCoverage = () => {
  const navigate = useNavigate();
  const { user, loading, error } = useUser();
  const { plans } = usePlans();

  const setSelectedPlan = usePlansStore((state) => state.setSelectedPlan);
  const setPlanDetails = usePlansStore((state) => state.setPlanDetails);

  const filteredPlans = plans?.list.filter((plan) => plan.age >= myAge);

  const handlePlanSelect = (selectedId: string) => {
    setSelectedPlan(selectedId);
  };

  if (loading) return <h2>Loading...</h2>;
  if (error) return <p>{error}</p>;
  if (!user) return <p>No user data</p>;

  const handleBack = () => {
    navigate(-1);
  };

  const handleSelectPlan = (plan: PlanDetails) => {
    setPlanDetails(plan);
    navigate("/summary");
  };

  return (
    <div className={styles.planAndCoverage}>
      <Header />
      <Stepper steps={steps} currentStep={0} />
      <main className={styles.planAndCoverage__content}>
        <BackButton onClick={handleBack} />
        <ChoosePlanSection
          userName={user.name}
          plans={plansChoose}
          onPlanSelect={handlePlanSelect}
        />
        <PlansSection
          plans={filteredPlans || []}
          onSelectPlan={handleSelectPlan}
        />
      </main>
    </div>
  );
};
