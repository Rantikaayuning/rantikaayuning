import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rantika Ayuning | Frontend Developer Portfolio",
  description:
    "Professional frontend developer portfolio showcasing projects and skills",
  keywords: ["frontend", "developer", "react", "next.js", "portfolio"],
  authors: [{ name: "Rantika Ayuning" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-dark text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
