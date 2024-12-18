import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1>404 Not Found</h1>
      <p>
        The page you{"'"}re looking for doesn{"'"}t exists.
        <Link href="/" className="ml-2 text-orange-700 underline font-bold">
          Back to home page
        </Link>
      </p>
    </div>
  );
}
