"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EndDoc } from "../EndDoc";
import { Doc } from "./default-layout";

export function NextChapter({ docs, series }: { docs: Doc[]; series: string }) {
  const pathname = usePathname();
  const index = docs.findIndex(({ slug }) => pathname.includes(slug));
  const next = docs[index + 1];
  if (!next) return <EndDoc />;
  return (
    <div className="flex items-start">
      <Link
        href={`/docs/${series}/${next.slug}`}
        scroll={true}
        className="bg-orange-400/10 group hover:bg-orange-400/20 transition-colors p-4 rounded-lg border-orange-400 border space-y-2"
      >
        <div className="flex flex-row items-center justify-between">
          <b className="text-orange-600 text-xl">{next.title}</b>
          <ArrowRight className="h-6 w-6 text-orange-600 group-hover:-rotate-45 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
        <span className="text-sm uppercase text-orange-700/60 font-medium">
          Next Chapter
        </span>
        <p className="text-base">{next.description}</p>
      </Link>
    </div>
  );
}
