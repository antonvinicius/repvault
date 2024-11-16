import { SongsListPage } from "../../../songs/ui/SongsListPage";
import { LoginPage } from "../LoginPage";

export function AuthGate() {
  const isAuthenticated = false

  return isAuthenticated ? <SongsListPage /> : <LoginPage />
}