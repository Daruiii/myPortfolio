import { Section } from "@/app/_components/Section";
import { GithubIcon } from "@/app/_components/icons/GithubIcon";
import { LinkedinIcon } from "@/app/_components/icons/LinkedinIcon";
import { EmailIcon } from "@/app/_components/icons/EmailIcon";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[var(--background)] text-[var(--foreground)] py-4">
      <Section className="flex flex-col items-center">
        <p className="text-center">Développé par David Meguira</p>
        <p className="text-center">Construit avec Next.js, TypeScript et Tailwind CSS</p>
        <div className="flex gap-2 mt-2">
          <Link
            href="https://github.com/Daruiii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)]"
          >
            <GithubIcon size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/david-meguira/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)]"
          >
            <LinkedinIcon size={24} />
          </Link>
          <Link
            href="mailto:davidmeguira6@gmail.com"
            rel="noopener noreferrer"
            className="text-[var(--primary)]"
          >
            <EmailIcon size={24} />
          </Link>
        </div>
      </Section>
    </footer>
  );
};
