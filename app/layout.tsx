import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nova.Dev - Fullstack Portfolio",
  description:
    "A high-performance technical portfolio for a Fullstack Web Developer, featuring modern design and interactive showcases.",
  icons: {
    icon: "/title.jpeg",
  },
  openGraph: {
    title: "Nova-Dev - Fullstack Portfolio",
    description:
      "A high-performance technical portfolio for a Fullstack Web Developer, featuring modern design and interactive showcases.",
    url: "https://nova-dev-brown.vercel.app",
    siteName: "Nova-Dev-Brown",
    images: [
      {
        url: "/title.jpeg",
        width: 1200,
        height: 630,
        alt: "Nova.dev Title Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova-Dev-brown - Fullstack Portfolio",
    description:
      "A high-performance technical portfolio for a Fullstack Web Developer, featuring modern design and interactive showcases.",
    images: ["/title.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
