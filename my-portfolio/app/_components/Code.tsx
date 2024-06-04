import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type CodeProps = ComponentPropsWithoutRef<"span"> & {
  logo: JSX.Element;
  name: string;
};

export const Code = ({ logo, name, className, ...props }: CodeProps) => {
  return (
    <span
      className={cn(
        "bg-accent/30 hover:bg-accent/50 font-mono transition-colors rounded-sm px-1 py-0.5 text-primary ms-1 me-1 cursor-pointer flex items-center gap-1",
        className
      )}
      {...props}
    >
      {logo}
      {name}
    </span>
  );
};