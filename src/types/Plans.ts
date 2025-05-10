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
