import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { HeaderSong } from "../../components/HeaderSong";
import { Spacer } from "../../components/Spacer";
import { ButtonGroup, Container } from "./styles";
import { useEffect, useState } from "react";
import { SongService } from "../../services/song-service";
import { Song } from "../../models/Song";
import { Status } from "../../components/Status";
import { useTheme } from "styled-components";

const songService = new SongService()

export function EditSong() {
    const theme = useTheme()
    const [status, setStatus] = useState(0)
    const [song, setSong] = useState<Song | null>(null)
    const { id } = useParams();
    const navigate = useNavigate()

    async function onEditSong() {
        await songService.updateSongStatus(id as string, status)
        navigate('/')
    }

    async function fetchSong() {
        const song = await songService.getSong(id as string)
        if (song) {
            setSong(song as Song)
            setStatus(song.status!)
        }
    }

    async function onDeleteSong() {
        await songService.deleteSong(id as string)
        navigate('/')
    }

    useEffect(() => {
        fetchSong()
    }, [])

    if (!id) {
        return <Navigate to={"/"} replace />
    }

    if (!song) {
        return <h1>Loading...</h1>
    }

    return (
        <Container>
            <div>
                <HeaderSong title="Editar Música" />
                <img src={song.coverImageUrl!} />
                <Spacer direction="vertical" size={22} />
                <h1>{song.name}</h1>
                <h2>{song.artist}</h2>
                <Spacer direction="vertical" size={12} />
                <h1>Status</h1>
                <Status selectedStatus={status} onStatusChanged={setStatus} />
            </div>
            <ButtonGroup>
                <Button onClick={onEditSong}>Editar música</Button>
                <Spacer direction="horizontal" size={24} />
                <Spacer direction="vertical" size={24} />
                <Button onClick={onDeleteSong} color={theme.error}>Excluir</Button>
            </ButtonGroup>
        </Container>
    )
}