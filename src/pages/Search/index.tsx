import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { Container } from "./styles";
import { useEffect, useMemo, useState } from "react";
import { debounce } from 'lodash'
import { SpotifyService } from "../../services/spotify-service";
import { Song as SongModel } from "../../models/Song";
import { Song } from "../../components/Song";
import { Spacer } from "../../components/Spacer";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate()
  const searchValue = watch('search')
  const debouncedSearch = useMemo(() => debounce(searchSongs, 500), [])

  async function searchSongs(search: string) {
    if (search) {
      const songs = await spotifyService.searchSongs(search)
      setSongs(songs)
    }
  }

  async function onSongClick(song: SongModel) {
    navigate('/song/add', {
      state: {
        name: song.name,
        artist: song.artist,
        coverImageUrl: song.coverImageUrl
      }
    })
  }

  useEffect(() => {
    debouncedSearch(searchValue)

    return () => debouncedSearch.cancel()
  }, [searchValue, debouncedSearch])

  return (
    <Container>
      <Input placeholder="Qual música deseja aprender hoje?" {...register('search')} />
      {songs.map(song => (
        <div key={song.id}>
          <Song song={song} onClick={onSongClick} />
          <Spacer direction="vertical" size={12} />
        </div>
      ))}
    </Container>
  )
}