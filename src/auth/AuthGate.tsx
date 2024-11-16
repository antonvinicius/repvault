import {LoginPage} from "./LoginPage.tsx";
import {SongsListPage} from "../songs/SongsListPage.tsx";

export function AuthGate() {
  const isAuthenticated = false

  return isAuthenticated ? <SongsListPage/> : <LoginPage/>
}