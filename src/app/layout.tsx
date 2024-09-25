import type { Metadata } from "next";
import "./globals.css";
import "../styles/style.scss";
import { Montserrat } from 'next/font/google'
import App from "@components/App";

const montserrat = Montserrat({ subsets: ['cyrillic'], style: 'normal' });

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <App>{children}</App>
      </body>
    </html>
  );
}
