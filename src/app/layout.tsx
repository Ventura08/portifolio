import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

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
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
