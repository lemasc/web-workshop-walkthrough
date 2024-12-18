import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function EndDoc() {
  return (
    <div className="flex items-start">
      <Link
        href={`/`}
        scroll={true}
        className="bg-orange-400/10 group hover:bg-orange-400/20 transition-colors p-4 rounded-lg border-orange-400 border space-y-2"
      >
        <div className="flex flex-row items-center justify-start">
          <ArrowLeft className="h-6 w-6 text-orange-600 group-hover:rotate-45 group-hover:translate-x-1 transition-transform duration-300 mr-2" />
          <b className="text-orange-600 text-xl">Back to home page</b>
        </div>
        <p className="text-base">
          You have reached the end. Explore other topics!
        </p>
      </Link>
    </div>
  );
}
