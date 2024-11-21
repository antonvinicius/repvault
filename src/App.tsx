import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme.ts";
import { GlobalStyle } from "./theme/globalStyle.ts";
import { AuthContextProvider } from "./contexts/AuthContext.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.tsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "react-lazy-load-image-component/src/effects/opacity.css";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
      <GlobalStyle />
      <ToastContainer pauseOnFocusLoss={false} />
    </ThemeProvider>
  )
}