import { Geist, Geist_Mono } from "next/font/google";
import "../styles/Globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Samuel Pouard · Développeur Web Freelance",
  description:
    "Découvrez le portfolio de Samuel Pouard, développeur web freelance spécialisé en sites vitrines, e-commerce et interfaces sur mesure. Basé en France, disponible à distance.",
  keywords: [
    "Samuel Pouard",
    "développeur web freelance",
    "freelance web",
    "portfolio développeur web",
    "développeur Next.js",
    "intégrateur web",
    "création site web freelance",
    "développement Shopify",
    "freelance React",
    "Samuel Pouard portfolio"
  ],
  authors: [{ name: "Samuel Pouard" }],
  creator: "Samuel Pouard",
  icons: {
    icon: "/favicon.svg",
  },
  metadataBase: new URL("https://samuelpouard.fr"), // Remplace par ton vrai domaine si tu l'as
  openGraph: {
    title: "Samuel Pouard · Développeur Web Freelance",
    description:
      "Portfolio de Samuel Pouard, développeur web freelance spécialisé Next.js, Shopify et WordPress. Création de sites rapides, modernes et sur mesure.",
    url: "https://samuelpouard.fr", // Remplace ici aussi
    siteName: "Samuel Pouard",
    locale: "fr_FR",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang='fr' suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className='main-container'>{children}</div>
      </body>
    </html>
  );
}
