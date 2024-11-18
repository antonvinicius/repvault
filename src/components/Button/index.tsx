import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: ReactNode
}

export function Button({ children, ...rest }: ButtonProps) {
    return <Container {...rest}>{children}</Container>
}