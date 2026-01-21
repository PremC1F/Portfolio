import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { PortfolioModeProvider } from "@/components/providers/portfolio-mode-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://premxai.com"),
  title: "Prem Babu Kanaparthi | AI/ML Engineer",
  description:
    "AI/ML Engineer specializing in Large Language Models, Retrieval-Augmented Generation (RAG), and production-grade MLOps systems. Focused on building scalable, reliable AI solutions.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "ML Engineer",
    "LLMs",
    "Large Language Models",
    "RAG Systems",
    "Retrieval-Augmented Generation",
    "MLOps",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "Rochester Institute of Technology",
  ],
  authors: [{ name: "Prem Babu Kanaparthi" }],
  openGraph: {
    title: "Prem Babu Kanaparthi | AI/ML Engineer",
    description:
      "AI/ML Engineer specializing in Large Language Models, Retrieval-Augmented Generation (RAG), and production-grade MLOps systems. Focused on building scalable, reliable AI solutions.",
    type: "article",
    url: "https://premxai.com",
    siteName: "Prem Babu Kanaparthi Portfolio",
    images: [
      {
        url: "https://premxai.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prem Babu Kanaparthi - AI/ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prem Babu Kanaparthi | AI/ML Engineer",
    description:
      "AI/ML Engineer specializing in Large Language Models, Retrieval-Augmented Generation (RAG), and production-grade MLOps systems. Focused on building scalable, reliable AI solutions.",
    images: ["https://premxai.com/og-image.png"],
  },
  alternates: {
    canonical: "https://premxai.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PortfolioModeProvider>
            {children}
          </PortfolioModeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
