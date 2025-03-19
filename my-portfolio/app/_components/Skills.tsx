import { Skill } from "./Skill";
import { Section } from "./Section";
import { InfiniteScroll } from './InfiniteScroll';

// Langages
import { JavascriptIcon } from "./icons/JavascriptIcon";
import { TypescriptIcon } from "./icons/TypescriptIcon";
import { HTMLIcon } from "./icons/HTMLIcon";
import { CSSIcon } from "./icons/CSSIcon";
import { PHPIcon } from "./icons/PHPIcon";
import { PythonIcon } from "./icons/PythonIcon";

// Frameworks
import { LaravelIcon } from "./icons/LaravelIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { SymfonyIcon } from "./icons/SymfonyIcon";
import { NextIcon } from "./icons/NextIcon";

// Libraries
import { TailwindIcon } from "./icons/TailwindIcon";
import { AlpineIcon } from "./icons/AlpineIcon";
import { BootstrapIcon } from "./icons/BootstrapIcon";

// Templating
import { BladeIcon } from "./icons/BladeIcon";
import { TwigIcon } from "./icons/TwigIcon";

// Databases
import { MariaDBIcon } from "./icons/MariaDBIcon";

// Hardware
import { RaspberryIcon } from "./icons/RaspberryIcon";

const skillsLanguages = [
  { name: "Javascript", logo: <JavascriptIcon size={24} /> },
  { name: "Typescript", logo: <TypescriptIcon size={24} /> },
  { name: "HTML", logo: <HTMLIcon size={24} /> },
  { name: "CSS", logo: <CSSIcon size={24} /> },
  { name: "PHP", logo: <PHPIcon size={24} /> },
  { name: "Python", logo: <PythonIcon size={24} /> },
];

const skillsFrameworks = [
  { name: "Laravel", logo: <LaravelIcon size={24} /> },
  { name: "React", logo: <ReactIcon size={24} /> },
  { name: "Symfony", logo: <SymfonyIcon size={24} /> },
  { name: "Next.js", logo: <NextIcon size={24} /> },
];

const skillsLibraries = [
  { name: "Tailwind CSS", logo: <TailwindIcon size={24} /> },
  { name: "Alpine.js", logo: <AlpineIcon size={24} /> },
  { name: "Bootstrap", logo: <BootstrapIcon size={24} /> },
];

const skillsTemplating = [
  { name: "Blade UI", logo: <BladeIcon size={24} /> },
  { name: "Twig", logo: <TwigIcon size={24} /> },
];

const skillsDatabases = [{ name: "MariaDB", logo: <MariaDBIcon size={24} /> }];

const skillsHardware = [
  { name: "Raspberry Pi", logo: <RaspberryIcon size={24} /> },
];

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start space-y-8">
      <h2 className="font-caption font-bold text-5xl text-primary">
        Skills
      </h2>
      <div className="overflow-hidden flex flex-row items-center justify-center bg-popover p-4 rounded-lg max-w-full h-16">
        <InfiniteScroll speed={20} direction="left">
          {skillsLanguages.map((skill, index) => (
            <Skill key={index} {...skill} />
          ))}
          {skillsFrameworks.map((skill, index) => (
            <Skill key={index} {...skill} />
          ))}
          {skillsDatabases.map((skill, index) => (
            <Skill key={index} {...skill} />
          ))}
          {skillsHardware.map((skill, index) => (
            <Skill key={index} {...skill} />
          ))}
        </InfiniteScroll>
      </div>
      <div className="overflow-hidden flex flex-row items-center justify-center bg-popover p-4 rounded-lg max-w-full h-16">
        <InfiniteScroll speed={20} direction="right">
          {skillsLibraries.map((skill, index) => (
            <Skill key={index} {...skill} />
          ))}
          {skillsTemplating.map((skill, index) => (
            <Skill key={index} {...skill} />
          ))}
        </InfiniteScroll>
      </div>
    </Section>
  );
};
