import { InteractionState } from "$components";

export type ButtonVariants = "tonal" | "outlined" | "elevated" | "text" | "";

export type ButtonInteractionStates = InteractionState;

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariants;
  state?: ButtonInteractionStates;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className="bg-primary">{children}</button>;
};

export default Button;
