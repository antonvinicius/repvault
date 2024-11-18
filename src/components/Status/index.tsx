import { toStatus } from "../../helpers/statusConverter";
import { Container, Label } from "./styles";
import { Status as StatusEnum } from "../../helpers/statusConverter";

type StatusProps = {
    selectedStatus: number
}

export function Status({ selectedStatus }: StatusProps) {
    const status = toStatus(selectedStatus)
    return (
        <Container>
            <Label isSelected={status == StatusEnum.LEARNING}>Aprendendo</Label>
            <Label isSelected={status == StatusEnum.WISH_TO_LEARN}>Quero aprender</Label>
            <Label isSelected={status == StatusEnum.REPERTORY}>Já sei tocar</Label>
        </Container>
    )
}