import { useEffect, useState } from "react"
import { Song as SongModel } from "../../models/Song"
import { Song } from "../../components/Song"
import { Container } from "./styles"
import { Spacer } from "../../components/Spacer"
import { Status } from "../../components/Status"
import { SongService } from "../../services/song-service"

const songService = new SongService()

export function Songs() {
  const [status, setStatus] = useState(0)
  const [songs, setSongs] = useState<SongModel[]>([])

  async function fetchSongs() {
    const data = await songService.getSongs()

    setSongs(data)
  }

  useEffect(() => {
    fetchSongs()
  }, [])

  return (
    <Container>
      <h1>Meu Repertório</h1>
      <Spacer direction="vertical" />
      <Status selectedStatus={status} onStatusChanged={setStatus} />
      <Spacer direction="vertical" />
      {songs.map(item => (
        <div key={item.id}>
          <Song song={item} />
          <Spacer direction="vertical" size={12} />
        </div>
      ))}
    </Container>
  )
}