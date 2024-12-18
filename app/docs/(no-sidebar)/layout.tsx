import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ScrollToTop } from "./ScrollToTop";

export default function DocContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex items-start">
        <Link
          href="/"
          className="flex items-center px-6 py-3 bg-orange-400/10 hover:bg-orange-400/20 transition-colors border border-orange-400 rounded-lg text-orange-700 gap-2 text-sm"
        >
          <ArrowLeft className="inline-block w-5 h-5" />
          <span className="font-medium">กลับไปยังหน้าหลัก</span>
        </Link>
      </div>
      {children}
      <ScrollToTop />
    </>
  );
}
