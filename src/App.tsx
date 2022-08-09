import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globals";
import { defaultTheme } from "./themes/DefaultTheme/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}
