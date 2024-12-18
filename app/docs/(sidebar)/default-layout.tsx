import Link from "next/link";
import ActiveLink from "./ActiveLink";
import { NextChapter } from "./NextChapter";
import { ScrollToTop } from "../ScrollToTop";

type Doc = {
  slug: string;
  title: string;
  description: string;
};

export function createLayout({
  docs,
  series,
}: {
  docs: Doc[];
  series: Pick<Doc, "title" | "slug">;
}) {
  return function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex flex-row">
        <div className="flex flex-col gap-4">
          <div className="flex items-start text-base mb-2">
            <div className="bg-orange-400/10 p-4 rounded-lg border border-orange-600 space-y-1 w-full max-w-[500px]">
              <div className="text-orange-700 flex flex-col space-y-1">
                <p>
                  <i>
                    You are on series: <b>{series.title}</b>
                  </i>
                  <Link href="/" className="ml-2 font-bold hover:underline">
                    (Go back)
                  </Link>
                </p>
                <b className="text-lg">Chapters</b>
              </div>
              <ul className="list-disc list-inside">
                {docs.map(({ slug, title }, i) => (
                  <li key={slug}>
                    <ActiveLink href={`/docs/${series.slug}/${slug}`}>
                      {i.toString().padStart(2, "0")} - {title}
                    </ActiveLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {children}
          <NextChapter docs={docs} series={series.slug} />
          <ScrollToTop />
        </div>
      </div>
    );
  };
}
