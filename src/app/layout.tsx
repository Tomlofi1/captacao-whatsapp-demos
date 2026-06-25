import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "FA Soluções Digitais | Sites para negócios locais",
  description:
    "Landing pages, sites simples e presença digital para negócios locais captarem mais clientes pelo WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
