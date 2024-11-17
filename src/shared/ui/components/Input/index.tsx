import { Container } from "./styles";

export type InputProps = {
    hint: string;
}

export function Input({ hint }: InputProps) {
    return <Container placeholder={hint}></Container>
}