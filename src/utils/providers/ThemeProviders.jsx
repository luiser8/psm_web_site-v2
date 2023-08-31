import { ThemeProvider } from "next-themes";

export function ThemeProviders({ children }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
