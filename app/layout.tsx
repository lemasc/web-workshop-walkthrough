import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import bkrnd from "./bkgrnd.jpg";

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
      <body className={`${chakra_petch.variable} h-screen overflow-hidden`}>
        <Image
          src={bkrnd}
          fill
          className="object-cover opacity-40 z-[-1]"
          quality={100}
          alt="background"
          draggable={false}
        />
        <div
          id="scroll"
          className="min-h-screen h-full bg-orange-400/10 overflow-auto"
        >
          <div className="flex flex-col items-center justify-center p-20">
            <div className="flex flex-col w-full max-w-7xl gap-4 text-lg bg-white/70 rounded-lg p-10">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
