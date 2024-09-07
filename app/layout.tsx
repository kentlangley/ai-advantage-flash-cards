import "./globals.css";
import { Inter } from "next/font/google";
import ClientProvider from "./ClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Advantage Flash Cards",
  description: "Create and study AI-related flash cards with an interactive UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
