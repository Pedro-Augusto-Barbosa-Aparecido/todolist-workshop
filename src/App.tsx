import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/globals";
import { defaultTheme } from "./themes/DefaultTheme/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}
