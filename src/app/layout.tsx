import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextzonegames.co.ke"),

  title: {
    default: "NextZone Games",
    template: "%s | NextZone Games",
  },

  description:
    "NextZone Games creates games, interactive experiences, and worlds built beyond the expected.",

  keywords: [
    "NextZone Games",
    "NextZone",
    "game studio",
    "indie games",
    "mobile games",
    "Street Football",
  ],

  authors: [
    {
      name: "NextZone Games",
    },
  ],

  creator: "NextZone Games",

  openGraph: {
    type: "website",
    siteName: "NextZone Games",
    title: "NextZone Games",
    description:
      "We build worlds. Discover games and experiences from NextZone Games.",
    url: "https://nextzonegames.co.ke",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NextZone Games",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NextZone Games",
    description:
      "We build worlds. Discover games and experiences from NextZone Games.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}