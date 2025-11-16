import type { Metadata } from "next";
import { Anonymous_Pro } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/general.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Background from "@/ui/background";
import { Intro } from "@/ui/intro";
import { Footer } from "@/ui/footer";

const anonymousPro = Anonymous_Pro({
  variable: "--font-anonymous-pro",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://kirtipalve.com"
      : "http://localhost:3000",
  ),
  title: "Kirti Palve",
  description:
    "Kirti Palve's porfolio. View my projects and other works! Love from Pittsburgh <3.",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>k</text></svg>",
      },
    ],
  },
  openGraph: {
    title: "Kirti Palve",
    description:
      "Kirti Palve's porfolio. View my projects and other works! Love from Pittsburgh <3.",
    images: [
      {
        url: "/card-preview.jpeg",
        width: 1200,
        height: 630,
        alt: "Kirti Palve Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kirti Palve",
    description:
      "Kirti Palve's porfolio. View my projects and other works! Love from Pittsburgh <3.",
    images: ["/card-preview.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anonymousPro.variable} antialiased`}>
        <ThemeProvider>
          <Background />
          <Intro />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
