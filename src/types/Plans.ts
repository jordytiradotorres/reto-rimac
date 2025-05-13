export interface Plan {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PlanSelectorProps {
  plans: Plan[];
  onPlanSelect: (selectedId: string) => void;
}

export interface PlanCardProps {
  plan: Plan;
  selected: boolean;
  onSelect: (id: string) => void;
  name: string;
}

export interface PlanDetails {
  name: string;
  price: number;
  description: string[];
  age: number;
  image: string;
}

export interface PlanList {
  list: PlanDetails[];
}

export const myAge = 32;

export interface CardDetailsProps {
  plan: PlanDetails;
  onSelect: (plan: PlanDetails) => void;
}

export interface PlansSectionProps {
  plans: PlanDetails[];
  onSelectPlan: (plan: PlanDetails) => void;
}
