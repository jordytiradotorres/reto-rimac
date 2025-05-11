import Home from "../assets/images/homeLight.svg";
import Hospital from "../assets/images/hospitalLight.svg";

export const getPlanImage = (name: string): string => {
  const images: Record<string, string> = {
    "Plan en Casa": Home,
    "Plan en Casa y Clínica": Hospital,
    "Plan en Casa + Chequeo": Home,
    "Plan en Casa + Fitness": Hospital,
  };

  return images[name] || Home;
};
