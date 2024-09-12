import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import NavBar from "./pages/navbar";
import Footer from "./pages/footer";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/logo/favicon.ico" type="image/x-icon" ></link>
      <body className={inter.className}>
        <NavBar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
