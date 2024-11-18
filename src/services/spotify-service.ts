import { Song } from "../models/Song";
import { SpotifySearchDto } from "../models/SpotifySearchDto";
import { v4 as uuidv4 } from 'uuid';

export class SpotifyService {
    private apiUrl = "https://api.spotify.com/v1/search"
    private authUrl = 'https://accounts.spotify.com/api/token'
    private clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID
    private clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET


    async getAccessToken(): Promise<string> {
        const response = await fetch(this.authUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                grant_type: "client_credentials",
                client_id: this.clientId,
                client_secret: this.clientSecret
            })
        });

        const result = await response.json();
        return result.access_token;
    }

    async searchSongs(search: string): Promise<Song[]> {
        const accessToken = await this.getAccessToken()

        const response = await fetch(`${this.apiUrl}?q=${search}&type=track`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })

        const result = await response.json() as SpotifySearchDto

        const songs = result.tracks.items.map(item => ({
            name: item.name,
            artist: item.artists[0].name,
            coverImageUrl: item.album.images[0].url,
            id: uuidv4()
        } as Song))

        return songs
    }
}