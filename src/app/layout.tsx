import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/organismo/header";
import Footer from "@/components/organismo/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My portifólio",
  description: "O meu portifólio pessoal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
