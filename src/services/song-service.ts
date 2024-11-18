import { Song } from "../models/Song";
import { supabase } from "../supabase";

export class SongService {
    async createSong(song: Song) {
        await supabase
            .from('songs')
            .insert({
                artist: song.artist,
                coverImageUrl: song.coverImageUrl,
                name: song.name,
                status: song.status
            })
    }

    async getSongs() {
        const { data } = await supabase
            .from('songs')
            .select()

        return data as Song[]
    }

    async getSong(id: string) {
        const { data } = await supabase
            .from('songs')
            .select()
            .eq('id', id)
            .single()

        return data
    }

    async updateSongStatus(id: string, status: number) {
        await supabase
            .from('songs')
            .update({ status })
            .eq('id', id)
    }

    async deleteSong(id: string) {
        await supabase
            .from('songs')
            .delete()
            .eq('id', id)
    }
}