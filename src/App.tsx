import { ThemeProvider } from "styled-components";
import { theme } from "./shared/ui/theme.ts";
import { GlobalStyle } from "./shared/ui/globalStyle.ts";
import { AppRoutes } from "./shared/ui/routes/AppRoutes.tsx";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
      <GlobalStyle />
    </ThemeProvider>
  )
}