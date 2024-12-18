"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveLink(props: React.ComponentProps<typeof Link>) {
  const pathname = usePathname();
  return (
    <Link
      data-isactive={
        typeof props.href === "string" && pathname.includes(props.href)
          ? true
          : false
      }
      className="data-[isactive=true]:text-orange-600 text-orange-800/60 data-[isactive=true]:font-medium hover:underline"
      {...props}
    />
  );
}
