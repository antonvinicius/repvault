import { useState } from "react";
import { Song as SongModel } from "../../models/Song";
import { Spacer } from "../Spacer";
import { Container, ImageWrapper, Placeholder, StyledImage } from "./styles";
import { FadeInComponent } from "../FadeInContainer";

type SongProps = {
    song: SongModel,
    onClick?: (song: SongModel) => void
}

export function Song({ song, onClick }: SongProps) {
    const [loaded, setLoaded] = useState(false)

    return (
        <FadeInComponent>
            <Container onClick={() => { onClick && onClick(song) }}>
                <ImageWrapper>
                    {!loaded && <Placeholder />}

                    <StyledImage
                        onLoad={() => setLoaded(true)}
                        loaded={loaded}
                        src={song.coverImageUrl!}
                    />
                </ImageWrapper>
                <Spacer direction="horizontal" size={18} />
                <div>
                    <p>{song.name}</p>
                    <span>{song.artist}</span>
                </div>
            </Container>
        </FadeInComponent>
    )
}