import type { Metadata } from "next";
import {Inter} from "next/font/google"
import {ClerkProvider} from '@clerk/nextjs'
import "./globals.css";

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Cine",
  description: "for cinema",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
