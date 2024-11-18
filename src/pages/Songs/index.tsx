import { useEffect, useState } from "react"
import { Song as SongModel } from "../../models/Song"
import { supabase } from "../../supabase"
import { Song } from "../../components/Song"
import { Container } from "./styles"
import { Spacer } from "../../components/Spacer"
import { Status } from "../../components/Status"

export function Songs() {
  const [songs, setSongs] = useState<SongModel[]>([
    {
      artist: 'Oasis',
      coverImageUrl: 'https://i.scdn.co/image/ab67616d0000b27365b227c58f4d337f5d41a963',
      created_at: '',
      id: '',
      name: 'Stand By Me',
      status: 1
    },
    {
      artist: 'Oasis',
      coverImageUrl: 'https://i.scdn.co/image/ab67616d0000b27365b227c58f4d337f5d41a963',
      created_at: '',
      id: '',
      name: 'Stand By Me',
      status: 1
    },
    {
      artist: 'Oasis',
      coverImageUrl: 'https://i.scdn.co/image/ab67616d0000b27365b227c58f4d337f5d41a963',
      created_at: '',
      id: '',
      name: 'Stand By Me',
      status: 1
    },
    {
      artist: 'Oasis',
      coverImageUrl: 'https://i.scdn.co/image/ab67616d0000b27365b227c58f4d337f5d41a963',
      created_at: '',
      id: '',
      name: 'Stand By Me',
      status: 1
    },
  ])

  async function fetchSongs() {
    const { data, error } = await supabase
      .from("songs")
      .select()
  }

  useEffect(() => {
    fetchSongs()
  }, [])

  return (
    <Container>
      <h1>Meu Repertório</h1>
      <Spacer direction="vertical" />
      <Status selectedStatus={0} />
      <Spacer direction="vertical" />
      {songs.map(item => (
        <>
          <Song song={item} />
          <Spacer direction="vertical" size={12} />
        </>
      ))}
    </Container>
  )
}