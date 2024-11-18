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
import { FadeInComponent } from "../../components/FadeInContainer";
import { Loading } from "../../components/Loading";

const songService = new SongService()

export function EditSong() {
    const [loading, setLoading] = useState(true)
    const theme = useTheme()
    const [status, setStatus] = useState(0)
    const [song, setSong] = useState<Song | null>(null)
    const { id } = useParams();
    const navigate = useNavigate()

    async function onEditSong() {
        setLoading(true)
        await songService.updateSongStatus(id as string, status)
        navigate('/')
    }

    async function fetchSong() {
        setTimeout(async () => {
            const song = await songService.getSong(id as string)
            if (song) {
                setSong(song as Song)
                setStatus(song.status!)
            }
            setLoading(false)
        }, 2000)
    }

    async function onDeleteSong() {
        setLoading(true)
        await songService.deleteSong(id as string)
        navigate('/')
    }

    useEffect(() => {
        fetchSong()
    }, [])

    if (!id) {
        return <Navigate to={"/"} replace />
    }

    if (loading) {
        return <Loading />
    }

    return (
        <FadeInComponent>
            <Container>
                <div>
                    <HeaderSong title="Editar Música" />
                    <img src={song!.coverImageUrl!} />
                    <Spacer direction="vertical" size={22} />
                    <h1>{song!.name}</h1>
                    <h2>{song!.artist}</h2>
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
        </FadeInComponent>
    )
}