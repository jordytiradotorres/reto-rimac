export interface Step {
  label: string;
}

export interface StepperProps {
  steps: Step[];
  currentStep: number;
}

export const steps = [{ label: "Planes y coberturas" }, { label: "Resumen" }];
