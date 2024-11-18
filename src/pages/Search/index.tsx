import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { Container } from "./styles";
import { useEffect, useState } from "react";
import { debounce } from 'lodash'
import { SpotifyService } from "../../services/spotify-service";
import { Song as SongModel } from "../../models/Song";
import { Song } from "../../components/Song";
import { Spacer } from "../../components/Spacer";

type FormData = {
  search: string
}
const spotifyService = new SpotifyService()

export function Search() {
  const [songs, setSongs] = useState<SongModel[]>([])

  const {
    register,
    watch
  } = useForm<FormData>()

  const searchValue = watch('search')

  async function searchSongs(search: string) {
    if (search) {
      console.log('buscou: ', search)
      const songs = await spotifyService.searchSongs(search)
      setSongs(songs)
    }
  }

  const debouncedSearch = debounce(searchSongs, 500)

  useEffect(() => {
    debouncedSearch(searchValue)

    return () => debouncedSearch.cancel()
  }, [searchValue, debouncedSearch])

  return (
    <Container>
      <Input placeholder="Qual música deseja aprender hoje?" {...register('search')} />
      {songs.map(song => (
        <div key={song.id}>
          <Song song={song} />
          <Spacer direction="vertical" size={12} />
        </div>
      ))}
    </Container>
  )
}