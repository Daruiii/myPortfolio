import { Section } from "./Section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">
          david-meguira.vercel.com
        </h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link href="https://github.com/Daruiii" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline" }),"size-6 p-0")}>
              <GithubIcon size={12} className="text-foreground" />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/david-meguira-aa6636222/" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline" }),"size-6 p-0")}>
              <LinkedinIcon size={12} className="text-foreground" />
            </a>
          </Link>
        </ul>
      </Section>
    </header>
  );
};
