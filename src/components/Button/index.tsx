import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: ReactNode,
    color?: string
}

export function Button({ children, color, ...rest }: ButtonProps) {
    return <Container customColor={color} {...rest}>{children}</Container>
}