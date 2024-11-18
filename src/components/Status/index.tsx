import { fromStatus, toStatus } from "../../helpers/statusConverter";
import { Container, Label } from "./styles";
import { Status as StatusEnum } from "../../helpers/statusConverter";

type StatusProps = {
    selectedStatus: number
    onStatusChanged: (selected: number) => void
}

export function Status({ selectedStatus, onStatusChanged }: StatusProps) {
    const status = toStatus(selectedStatus)
    return (
        <Container>
            <Label selected={status == StatusEnum.LEARNING}
                onClick={() => {
                    onStatusChanged(fromStatus(StatusEnum.LEARNING))
                }}
            >
                Aprendendo
            </Label>
            <Label selected={status == StatusEnum.WISH_TO_LEARN}
                onClick={() => {
                    onStatusChanged(fromStatus(StatusEnum.WISH_TO_LEARN))
                }}
            >
                Quero aprender
            </Label>
            <Label selected={status == StatusEnum.REPERTORY}
                onClick={() => {
                    onStatusChanged(fromStatus(StatusEnum.REPERTORY))
                }}
            >
                Já sei tocar
            </Label>
        </Container>
    )
}