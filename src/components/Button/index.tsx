import { ReactNode } from "react";
import { Container } from "./styles";

export type ButtonProps = {
    children?: ReactNode
}

export function Button({ children }: ButtonProps) {
    return <Container>{children}</Container>
}