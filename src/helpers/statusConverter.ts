export enum Status {
    LEARNING,
    REPERTORY,
    WISH_TO_LEARN
}

export function toStatus(value: number) {
    switch (value) {
        case 0:
            return Status.LEARNING
        case 1:
            return Status.REPERTORY
        default:
            return Status.WISH_TO_LEARN
    }
}

export function fromStatus(value: Status) {
    switch (value) {
        case Status.LEARNING:
            return 0
        case Status.REPERTORY:
            return 1
        default:
            return 2
    }
}