import Link from "next/link";
import { units } from "./docs";
import Home from "./home.mdx";

export default function HomePage() {
  return (
    <>
      <Home />
      <h2>Resources</h2>
      <div className="grid grid-cols-3 gap-4">
        {units.map((unit) => (
          <Link
            href={`/docs/${unit.children[0].slug}`}
            key={unit.children[0].slug}
            className="bg-orange-400/10 hover:bg-orange-400/20 transition-colors p-4 rounded-lg border-orange-400 border space-y-2"
          >
            <b className="text-orange-600 text-xl">{unit.name}</b>
            <p className="text-base">{unit.description}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
