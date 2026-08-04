"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

/**
 * Fades content up the first time it enters the viewport. Uses an
 * IntersectionObserver so it costs nothing on scroll, and does nothing at all
 * when the visitor has asked for reduced motion (handled in globals.css).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  /** Stagger in milliseconds */
  delay?: number;
  as?: "div" | "li" | "article" | "section";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as React.ElementType;

  return (
    <Component
      ref={(node: HTMLElement | null) => {
        ref.current = node;
      }}
      data-visible={visible}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Component>
  );
}
