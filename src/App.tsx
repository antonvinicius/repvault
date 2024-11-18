import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme.ts";
import { GlobalStyle } from "./theme/globalStyle.ts";
import { AuthContextProvider } from "./contexts/AuthContext.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.tsx";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}