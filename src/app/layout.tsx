import type { Metadata } from "next";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

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
      <body className="bg-black min-h-screen max-h-full">
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
