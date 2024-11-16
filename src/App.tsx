import { ThemeProvider } from "styled-components";
import { theme } from "./shared/ui/theme.ts";
import { AuthGate } from "./auth/ui/AuthGate";
import { GlobalStyle } from "./shared/ui/globalStyle.ts";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthGate />
      <GlobalStyle />
    </ThemeProvider>
  )
}