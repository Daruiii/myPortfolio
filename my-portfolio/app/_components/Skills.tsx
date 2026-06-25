import { Skill } from "@/app/_components/Skill";
import { Section } from "@/app/_components/Section";
import { InfiniteScroll } from "@/app/_components/InfiniteScroll";
import { JavascriptIcon } from "@/app/_components/icons/JavascriptIcon";
import { TypescriptIcon } from "@/app/_components/icons/TypescriptIcon";
import { HTMLIcon } from "@/app/_components/icons/HTMLIcon";
import { CSSIcon } from "@/app/_components/icons/CSSIcon";
import { PHPIcon } from "@/app/_components/icons/PHPIcon";
import { PythonIcon } from "@/app/_components/icons/PythonIcon";
import { LaravelIcon } from "@/app/_components/icons/LaravelIcon";
import { ReactIcon } from "@/app/_components/icons/ReactIcon";
import { SymfonyIcon } from "@/app/_components/icons/SymfonyIcon";
import { NextIcon } from "@/app/_components/icons/NextIcon";
import { TailwindIcon } from "@/app/_components/icons/TailwindIcon";
import { AlpineIcon } from "@/app/_components/icons/AlpineIcon";
import { BootstrapIcon } from "@/app/_components/icons/BootstrapIcon";
import { BladeIcon } from "@/app/_components/icons/BladeIcon";
import { TwigIcon } from "@/app/_components/icons/TwigIcon";
import { MariaDBIcon } from "@/app/_components/icons/MariaDBIcon";
import { RaspberryIcon } from "@/app/_components/icons/RaspberryIcon";

const skillsRow1 = [
  { name: "Javascript", logo: <JavascriptIcon size={24} /> },
  { name: "Typescript", logo: <TypescriptIcon size={24} /> },
  { name: "HTML", logo: <HTMLIcon size={24} /> },
  { name: "CSS", logo: <CSSIcon size={24} /> },
  { name: "PHP", logo: <PHPIcon size={24} /> },
  { name: "Python", logo: <PythonIcon size={24} /> },
  { name: "Laravel", logo: <LaravelIcon size={24} /> },
  { name: "React", logo: <ReactIcon size={24} /> },
  { name: "Symfony", logo: <SymfonyIcon size={24} /> },
  { name: "Next.js", logo: <NextIcon size={24} /> },
  { name: "MariaDB", logo: <MariaDBIcon size={24} /> },
  { name: "Raspberry Pi", logo: <RaspberryIcon size={24} /> },
];

const skillsRow2 = [
  { name: "Tailwind CSS", logo: <TailwindIcon size={24} /> },
  { name: "Alpine.js", logo: <AlpineIcon size={24} /> },
  { name: "Bootstrap", logo: <BootstrapIcon size={24} /> },
  { name: "Blade UI", logo: <BladeIcon size={24} /> },
  { name: "Twig", logo: <TwigIcon size={24} /> },
];

export const Skills = () => (
  <Section className="flex flex-col items-start space-y-8">
    <h2 className="font-caption font-bold text-5xl text-primary">Compétences</h2>
    <div className="overflow-hidden flex flex-row items-center justify-center bg-popover p-4 rounded-lg max-w-full h-16">
      <InfiniteScroll speed={20} direction="left">
        {skillsRow1.map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </InfiniteScroll>
    </div>
    <div className="overflow-hidden flex flex-row items-center justify-center bg-popover p-4 rounded-lg max-w-full h-16">
      <InfiniteScroll speed={20} direction="right">
        {skillsRow2.map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </InfiniteScroll>
    </div>
  </Section>
);
