import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme.ts";
import { GlobalStyle } from "./theme/globalStyle.ts";
import { AppRoutes } from "./routes/AppRoutes.tsx";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
      <GlobalStyle />
    </ThemeProvider>
  )
}