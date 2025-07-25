import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const Poppin = Poppins({
  variable: "--font-poppins--sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Inaiways Client Context Information",
  description: "This is a form to get client context information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Poppin.className} text-slate-900 w-full bg-slate-200`}>
        {children}
      </body>
    </html>
  );
}
