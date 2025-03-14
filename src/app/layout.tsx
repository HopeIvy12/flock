import type { Metadata } from "next";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flock",
  description:
    "If you love something, there's someone out there who loves that thing too.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BurgerMenu />
        {children}
      </body>
    </html>
  );
}
