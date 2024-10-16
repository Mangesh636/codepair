import type { Metadata } from "next";
import { Roboto } from "next/font/google"
import "./globals.css";

import { cn } from "@/lib/utils";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"]
})

export const metadata: Metadata = {
  title: "CodePair - Collaborative Code Editor for Real-Time Pair Programming",
  description: "CodePair is a collaborative code editor designed for real-time pair programming. Code with your teammates live, share feedback, and improve productivity.",
  keywords: ["code editor", "real-time collaboration", "pair programming", "appwrite", "next.js", "codepair", "live coding"],
  authors: [{ name: "Mangesh Bhardwaj", url: "https://nextjs.org" }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", roboto.className)}
      >
        {children}
      </body>
    </html>
  );
}
