import { Section } from "@/app/_components/Section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GithubIcon } from "@/app/_components/icons/GithubIcon";
import { LinkedinIcon } from "@/app/_components/icons/LinkedinIcon";
import { EmailIcon } from "@/app/_components/icons/EmailIcon";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4 backdrop-blur-sm z-10">
      <Section className="flex items-baseline">
        <nav className="flex gap-2 sm:gap-4">
          <a href="#hero" className="text-[10px] sm:text-sm text-primary whitespace-nowrap">
            Accueil
          </a>
          <a href="#projects" className="text-[10px] sm:text-sm text-primary whitespace-nowrap">
            Projets
          </a>
          <a href="#experience" className="text-[10px] sm:text-sm text-primary whitespace-nowrap">
            Expériences
          </a>
          <a href="#skills" className="text-[10px] sm:text-sm text-primary whitespace-nowrap">
            Compétences
          </a>
          <a href="#about-me" className="text-[10px] sm:text-sm text-primary whitespace-nowrap">
            À propos
          </a>
        </nav>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/Daruiii"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GithubIcon size={12} className="text-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/david-meguira/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <LinkedinIcon size={12} className="text-foreground" />
          </Link>
          <Link
            href="mailto:davidmeguira6@gmail.com"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <EmailIcon size={12} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
