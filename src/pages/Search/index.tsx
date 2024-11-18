import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { Container } from "./styles";
import { useEffect } from "react";
import { debounce } from 'lodash'

type FormData = {
  search: string
}

export function Search() {
  const {
    register,
    watch
  } = useForm<FormData>()

  const searchValue = watch('search')

  async function searchSongs(search: string) {
    if (search) {
      console.log('buscou: ', search)
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
    </Container>
  )
}