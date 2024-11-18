import { useNavigate } from "react-router-dom";
import { Container, Wrapper } from "./styles";
import { IoChevronBack } from "react-icons/io5";

type HeaderSongProps = {
    title: string
}

export function HeaderSong({ title }: HeaderSongProps) {
    const navigate = useNavigate()
    return (
        <Wrapper>
            <Container>
                <IoChevronBack style={{ cursor: 'pointer' }} onClick={() => {
                    navigate(-1)
                }} size={24} />
                <h1>{title}</h1>
            </Container>
        </Wrapper>
    )
}