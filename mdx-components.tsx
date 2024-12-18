import {
  Info,
  Lightbulb,
  MessageCircleWarning,
  OctagonAlert,
  TriangleAlert,
} from "lucide-react";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import React, { isValidElement } from "react";

type Banner = "NOTE" | "TIP" | "IMPORTANT" | "WARNING" | "CAUTION";

const GH_ALERT_BANNER = /\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]/;

const BlockquoteWithBanner = (props: React.ComponentProps<"blockquote">) => {
  const children = Array.isArray(props.children)
    ? props.children
    : [props.children];
  const firstTextIndex = children.findIndex(
    (child) =>
      isValidElement<{ children: React.ReactNode }>(child) &&
      typeof child.props.children === "string"
  );

  if (firstTextIndex !== -1) {
    const firstTextElement = children[firstTextIndex] as React.ReactElement<{
      children: string;
    }>;
    const match = GH_ALERT_BANNER.exec(firstTextElement.props.children);
    if (match && match[1]) {
      const banner = match[1] as Banner;
      let cn = "";
      let Icon: (props: React.ComponentProps<"svg">) => React.ReactNode = () =>
        null;
      switch (banner) {
        case "NOTE":
          cn = "bg-blue-100 text-blue-900";
          Icon = Info;
          break;
        case "TIP":
          cn = "bg-green-100 text-green-900";
          Icon = Lightbulb;
          break;
        case "IMPORTANT":
          cn = "bg-yellow-100 text-yellow-900";
          Icon = MessageCircleWarning;
          break;
        case "WARNING":
          cn = "bg-red-100 text-red-900";
          Icon = OctagonAlert;
          break;
        case "CAUTION":
          cn = "bg-red-100 text-red-900";
          Icon = TriangleAlert;
          break;
      }

      return (
        <blockquote className={`${cn} p-4 rounded-lg`}>
          <p className="font-bold pb-2">
            <Icon className="inline-block w-6 h-6 mr-2" />
            {banner}
          </p>
          {children.filter((_, i) => i !== firstTextIndex)}
        </blockquote>
      );
    }
  }

  return <blockquote></blockquote>;
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: (props: React.ComponentProps<"a">) => {
      if (props.href && props.href.startsWith("http")) {
        return <a {...props} target="_blank" rel="noopener noreferrer" />;
      }
      const { href, ...rest } = props;
      return href ? <Link href={href} {...rest} /> : <a {...props} />;
    },
    blockquote: BlockquoteWithBanner,
  };
}