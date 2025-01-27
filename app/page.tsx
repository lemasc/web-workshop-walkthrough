import Link from "next/link";
import { units } from "./docs";
import Home from "./home.mdx";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Home />
      <h2>Resources</h2>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {units.map((unit) => (
          <Link
            href={`/docs/${unit.path}`}
            key={unit.path}
            className="bg-orange-400/10 group hover:bg-orange-400/20 transition-colors p-4 rounded-lg border-orange-400 border space-y-2"
          >
            <div className="flex flex-row items-center justify-between">
              <b className="text-orange-600 text-xl">{unit.name}</b>
              <ArrowRight className="h-6 w-6 text-orange-600 group-hover:-rotate-45 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
            <span className="text-sm uppercase text-orange-700/60 font-medium">
              {unit.type}
            </span>
            <p className="text-base">{unit.description}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
