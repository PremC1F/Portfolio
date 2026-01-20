import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Prem Babu Kanaparthi | AI/ML Engineer",
  description:
    "AI/ML Engineer specializing in LLMs, RAG Systems, and MLOps. Currently pursuing MS in Artificial Intelligence at RIT.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "ML Engineer",
    "LLMs",
    "RAG Systems",
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
      "AI/ML Engineer specializing in LLMs, RAG Systems, and MLOps",
    type: "website",
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
