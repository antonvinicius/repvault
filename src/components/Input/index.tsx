import { forwardRef } from "react";
import { Container } from "./styles";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ ...rest }, ref) => {
    return <Container ref={ref} {...rest} />;
});