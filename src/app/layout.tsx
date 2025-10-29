import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hggfg | Future-Forward Platform",
  description:
    "Hggfg is a visionary experience for crafting delightful journeys through intelligent design and immersive storytelling."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
