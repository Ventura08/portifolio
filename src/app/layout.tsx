import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "$components/exports";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Estevão Boaventura",
  description: "Estevão Boaventura's personal website",
  applicationName: "Estevão Boaventura - Personal Website -",
  authors: [
    {
      name: "Estevão Boaventura",
      url: "https://github.com/Ventura08",
    },
  ],
  keywords: [
    "Estevão",
    "Boaventura",
    "Ventura",
    "Estevão Boaventura",
    "Estevão Ventura",
    "Estevão Boaventura Ventura",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`bg-slate-950 ${montserrat.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
