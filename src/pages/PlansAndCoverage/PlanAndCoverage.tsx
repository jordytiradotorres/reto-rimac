import { BackButton, Header, Stepper } from "../../components";
import AddUserLight from "../../assets/images/addUserLight.svg";
import { ChoosePlanSection, PlansSection } from "./";
import { usePlanAndCoverage } from "../../hooks";
import { steps, type Plan } from "../../types";
import ProtectionLight from "../../assets/images/protectionLight.svg";
import styles from "./PlanAndCoverage.module.scss";

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
  const {
    selectedPlan,
    filteredPlans,
    error,
    handleBack,
    handlePlanSelect,
    handleSelectPlan,
  } = usePlanAndCoverage();

  if (error) return <p>{error}</p>;

  return (
    <div className={styles.planAndCoverage}>
      <Header />
      <Stepper steps={steps} currentStep={0} />
      <main className={styles.planAndCoverage__content}>
        <BackButton onClick={handleBack} />
        <ChoosePlanSection
          plans={plansChoose}
          onPlanSelect={handlePlanSelect}
        />
        {selectedPlan && (
          <PlansSection
            plans={filteredPlans || []}
            onSelectPlan={handleSelectPlan}
          />
        )}
      </main>
    </div>
  );
};
