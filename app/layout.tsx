import { Figtree } from "next/font/google";
import "./globals.css";
import Sidebar from '@/components/Sidebar'

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "TrackTreasure - by BrianStudio",
  description: "A collection of your favourite music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  );
}
