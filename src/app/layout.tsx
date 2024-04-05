import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavigationMenu from "@/components/Navifation";
import FooterMenu from "@/components/footer";

const inter = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "The official Next.js Course Dashboard, built with App Router.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationMenu />
        {children}
        <FooterMenu />
      </body>
    </html>
  );
}
