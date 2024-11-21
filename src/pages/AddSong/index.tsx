import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Container } from "./styles"
import { Status } from "../../components/Status";
import { Button } from "../../components/Button";
import { HeaderSong } from "../../components/HeaderSong";
import { Spacer } from "../../components/Spacer";
import { useState } from "react";
import { SongService } from "../../services/song-service";
import { FadeInComponent } from "../../components/FadeInContainer";
import { Loading } from "../../components/Loading";
import { useAuth } from "../../contexts/AuthContext";

const songService = new SongService()

export function AddSong() {
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(0)
    const location = useLocation();
    const { name, artist, coverImageUrl } = location.state || {};
    const navigate = useNavigate()
    const { user } = useAuth()

    async function onAddSong() {
        setLoading(true)

        await songService.createSong({
            artist: artist as string,
            coverImageUrl: coverImageUrl as string,
            name: name as string,
            created_at: null,
            id: null,
            status,
            userId: user?.id ?? null
        })

        navigate("/")
    }

    if (!name || !artist || !coverImageUrl) {
        return <Navigate to={"/"} replace />
    }

    if (loading) {
        return <Loading />
    }

    return (
        <FadeInComponent>
            <Container>
                <div>
                    <HeaderSong title="Adicionar Música" />
                    <img src={coverImageUrl} />
                    <Spacer direction="vertical" size={22} />
                    <h1>{name}</h1>
                    <h2>{artist}</h2>
                    <Spacer direction="vertical" size={12} />
                    <Status selectedStatus={status} onStatusChanged={setStatus} />
                </div>
                <Button onClick={onAddSong}>Adicionar música</Button>
            </Container>
        </FadeInComponent>
    )
}