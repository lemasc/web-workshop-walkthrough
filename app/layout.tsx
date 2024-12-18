import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";

const chakra_petch = Chakra_Petch({
  variable: "--font-thai",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "thai"],
});

export const metadata: Metadata = {
  title: "Web Workshop Walkthrough",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chakra_petch.variable} bg-[#f0eee5]`}>
        <div className="flex flex-col min-h-screen h-full items-center justify-center p-20">
          <div className="flex flex-col w-full max-w-7xl gap-4 text-lg bg-white/60 rounded-lg p-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
