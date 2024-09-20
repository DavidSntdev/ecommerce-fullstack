import type { Metadata } from "next";
import "./styles/globals.css";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Leide Lingeries",
  description: "Loja de lingeries da leide, moderna e confortaveis",
  creator: "David Santos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/faviconcart.ico" type="image/x-icon" />
      </head>
      <body className="bg-default-900 min-h-screen max-h-full">
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="light">
            {children}
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
