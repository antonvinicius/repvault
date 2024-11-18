/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SUPABASE_URL: string;
    readonly VITE_ANON_KEY: string;
    readonly VITE_SPOTIFY_CLIENT_ID: string;
    readonly VITE_SPOTIFY_CLIENT_SECRET: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}