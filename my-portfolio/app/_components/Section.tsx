import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export const Section = ({ className, children, ...props }: ComponentPropsWithoutRef<"section">) => (
  <section className={cn("max-w-4xl mx-auto px-4", className)} {...props}>
    {children}
  </section>
);
