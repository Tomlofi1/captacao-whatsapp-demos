import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Landings WhatsApp para negócios locais",
  description:
    "Modelos fictícios de landing pages para captação de orçamento e agendamento via WhatsApp.",
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
