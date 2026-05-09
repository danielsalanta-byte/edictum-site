import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Școala Clasică Creștină Edictum — Cluj-Napoca",
  description:
    "Educație clasică creștină pentru formarea minții, caracterului și sufletului. Grădiniță și clasa pregătitoare în Cluj-Napoca.",
  openGraph: {
    title: "Școala Clasică Creștină Edictum",
    description:
      "O educație creștină și clasică pentru formarea minții, caracterului și sufletului.",
    type: "website",
    locale: "ro_RO",
    siteName: "Edictum Classical Christian School",
    images: [
      { url: "/opengraph-image.png", width: 1200, height: 630, alt: "Edictum Classical Christian School" },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon-64.png", sizes: "64x64", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
