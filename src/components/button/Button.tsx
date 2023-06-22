import { ButtonWrapper } from "./button.styled";

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <ButtonWrapper {...props} />;
}
