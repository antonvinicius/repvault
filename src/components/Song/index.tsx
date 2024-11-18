import { Song as SongModel } from "../../models/Song";
import { Spacer } from "../Spacer";
import { Container } from "./styles";

type SongProps = {
    song: SongModel,
    onClick?: (song: SongModel) => void
}

export function Song({ song, onClick }: SongProps) {
    return (
        <Container onClick={() => { onClick && onClick(song) }}>
            <img src={song.coverImageUrl!} />
            <Spacer direction="horizontal" size={18} />
            <div>
                <h2>{song.name}</h2>
                <h1>{song.artist}</h1>
            </div>
        </Container>
    )
}