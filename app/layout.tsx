import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin-ext"],
});

import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Paradox Shop",
  description: "Pehle istemal kro fir vishwaash kro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ModeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
