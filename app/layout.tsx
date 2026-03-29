import type { Metadata } from "next";
import "./globals.css";
import BBHeader from "@/components/BBHeader";
import BBFooter from "@/components/BBFooter";
import BBScrollAnimations from "@/components/BBScrollAnimations";

export const metadata: Metadata = {
  title: "Baked By Blanche | Real Bread. Made by Hand.",
  description:
    "A micro-bakery in Hawera, South Taranaki. Artisan sourdough, specialty breads and sweet bakes — produced by hand, the way it used to be.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <BBHeader />
        <main>{children}</main>
        <BBFooter />
        <BBScrollAnimations />
      </body>
    </html>
  );
}
