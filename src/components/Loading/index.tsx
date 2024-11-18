import { Container } from "./styles";
import Lottie from "lottie-react";
import loadingAnimation from '../../assets/animations/loading.json'

export function Loading() {
    return (
        <Container>
            <Lottie
                animationData={loadingAnimation}
                loop
            />
        </Container>
    )
}