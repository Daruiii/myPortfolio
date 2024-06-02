import { Section } from "./Section";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./icons/GithubIcon";
import Link from "next/link";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 hover:bg-accent/50 font-mono transition-colors rounded-sm px-1 py-0.5 text-primary ms-1 me-1",
        className
      )}
      {...props}
    />
  );
};

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[2] flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl text-primary">
          David Meguira
        </h2>
        <h3 className="text-3xl font-caption">Full Stack Developer</h3>
        <p className="text-base">
          I love creating beautiful and functional websites and applications
          with technologies like
          <Code className="inline-flex items-center gap-1">
            {" "}
            <GithubIcon size={12} className="inline" />
            Next.js
          </Code>
          ,<Code>Laravel</Code>,<Code>Tailwind CSS</Code> and some more.
          Currently studying Web Ingeneering at
          <a href="https://www.esgi.fr/" target="_blank" rel="noopener noreferrer">
            <Code>ESGI</Code>
          </a>.
          Living in Paris, France.
        </p>
      </div>
      <div className="flex-1 max-md:m-auto ml-auto">
        <img
          src="https://media.licdn.com/dms/image/C4E03AQFLsbWIytHeyg/profile-displayphoto-shrink_800_800/0/1644877482010?e=1723075200&v=beta&t=EjqtNqVFoSdh6bHVGIgUg4DTtu_AO4O8U1NwJEvwX4U"
          alt="Hero Image"
          className="w-full h-auto max-w-xs rounded-full max-md:w-56"
        />
      </div>
    </Section>
  );
};