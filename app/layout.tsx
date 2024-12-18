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
          <div className="flex flex-col items-center justify-center px-6 md:px-16 xl:px-20 pt-8 md:pt-16 xl:pt-20 pb-8">
            <div className="flex flex-col w-full max-w-7xl gap-4 text-lg bg-white/70 rounded-lg p-8 py-10 md:p-10">
              {children}
            </div>
          </div>
          <footer className="w-full flex flex-row flex-wrap items-center justify-center p-6 gap-x-2">
            <span>
              Made with ❤️ by <span className="text-orange-700">@lemasc</span>.
            </span>
            <span>
              See{" "}
              <a
                className="text-orange-700 font-medium"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/lemasc/web-workshop-walkthrough"
              >
                Source code on GitHub
              </a>
            </span>
          </footer>
        </div>
      </body>
    </html>
  );
}
