import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { FavoritosProvider } from "@/context/FavoritosContext";
import "./styles/globals.css";

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
            <FavoritosProvider>{children}</FavoritosProvider>
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
