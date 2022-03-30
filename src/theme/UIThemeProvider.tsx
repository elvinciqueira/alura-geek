import { ThemeProvider } from 'styled-components';
import { token } from './token';

type UIThemeProviderProps = {
  children: React.ReactNode;
};

export default function UIThemeProvider({ children }: UIThemeProviderProps) {
  return <ThemeProvider theme={token}>{children}</ThemeProvider>;
}
