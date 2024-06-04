import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { EmailIcon } from "./icons/EmailIcon";
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-[var(--background)] text-[var(--foreground)] py-4">
      <Section className="flex flex-col items-center">
        <p className="text-center">
          Developed by David Meguira
        </p>
        <p className="text-center">
          Built with Next.js, TypeScript, and Tailwind CSS
        </p>
        <div className="flex gap-2 mt-2">
          <Link href="https://github.com/Daruiii" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="text-[var(--primary)]">
              <GithubIcon size={24} />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/david-meguira-aa6636222/" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="text-[var(--primary)]">
              <LinkedinIcon size={24} />
            </a>
          </Link>
          <Link href="mailto:davidmeguira6@gmail.com" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="text-[var(--primary)]">
              <EmailIcon size={24} />
            </a>
          </Link>
        </div>
      </Section>
    </footer>
  );
};