import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StyleProvider } from "@/providers/ChakraProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Starnavi tech task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyleProvider>{children}</StyleProvider>
      </body>
    </html>
  );
}
