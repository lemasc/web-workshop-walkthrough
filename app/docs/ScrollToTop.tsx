"use client";

import { ArrowUpIcon } from "lucide-react";
import { useSyncExternalStore } from "react";

const getScrollElement = () => {
  return document.getElementById("scroll");
};

const subscribe = (callback: () => void) => {
  const element = getScrollElement();
  if (!element) return () => {};
  element.addEventListener("scroll", callback);
  return () => element.removeEventListener("scroll", callback);
};

const getSnapshot = () => {
  const element = getScrollElement();
  if (!element) return true;
  return element.scrollTop < 100;
};

const getServerSnapshot = () => true;

export function ScrollToTop() {
  const isTop = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return (
    <div
      data-top={isTop}
      className="data-[top=true]:opacity-0 transition-opacity fixed right-10 bottom-10"
    >
      <button
        title="Go to top"
        onClick={() => {
          getScrollElement()?.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="p-3 bg-amber-600 hover:bg-amber-700 group transition-transform text-white rounded-lg shadow-sm"
      >
        <ArrowUpIcon />
      </button>
    </div>
  );
}
