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
        const { data, error } = await supabase
            .from('songs')
            .select()

        return data as Song[]
    }
}