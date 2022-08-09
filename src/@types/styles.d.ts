import "styled-components";
import { defaultTheme } from "../themes/DefaultTheme/default";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
