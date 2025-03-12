import { Section } from "./Section";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { ESGIicon } from "./icons/ESGIicon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { LaravelIcon } from "./icons/LaravelIcon";
import { NextIcon } from "./icons/NextIcon";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 hover:bg-accent/50 font-mono transition-colors rounded-sm px-1 py-0.5 text-primary ms-1 me-1 cursor-pointer",
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
          Passionate about crafting beautiful and functional websites and
          applications using technologies like
          <Code className="inline-flex items-center gap-1">
            {" "}
            <NextIcon size={12} className="inline" />
            Next.js
          </Code>
          ,
          <Code>
            <LaravelIcon size={12} className="inline" />
            Laravel
          </Code>{" "}
          and <br />
          <Code>
            <TailwindIcon size={12} className="inline" />
            Tailwind CSS
          </Code>
          . Currently pursuing a degree in Web Engineering at
          <a
            href="https://www.esgi.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code>
              <ESGIicon size={24} className="inline" />
            </Code>
          </a>
          . Based in Paris,
          <Code>
            <img
              src="https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FR.svg"
              width="20"
              className="inline"
            />{" "}
            France
          </Code>
          . Actively seeking an alternance starting September 2024.
        </p>
        <ul className="flex items-center gap-2 w-full justify-end">
          <Link href="/CV2025FR.pdf" passHref legacyBehavior>
            <a
              download
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-36 p-3"
              )}
            >
              Download CV
              <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.625 15C5.625 14.5858 5.28921 14.25 4.875 14.25C4.46079 14.25 4.125 14.5858 4.125 15H5.625ZM4.875 16H4.125H4.875ZM19.275 15C19.275 14.5858 18.9392 14.25 18.525 14.25C18.1108 14.25 17.775 14.5858 17.775 15H19.275ZM11.1086 15.5387C10.8539 15.8653 10.9121 16.3366 11.2387 16.5914C11.5653 16.8461 12.0366 16.7879 12.2914 16.4613L11.1086 15.5387ZM16.1914 11.4613C16.4461 11.1347 16.3879 10.6634 16.0613 10.4086C15.7347 10.1539 15.2634 10.2121 15.0086 10.5387L16.1914 11.4613ZM11.1086 16.4613C11.3634 16.7879 11.8347 16.8461 12.1613 16.5914C12.4879 16.3366 12.5461 15.8653 12.2914 15.5387L11.1086 16.4613ZM8.39138 10.5387C8.13662 10.2121 7.66533 10.1539 7.33873 10.4086C7.01212 10.6634 6.95387 11.1347 7.20862 11.4613L8.39138 10.5387ZM10.95 16C10.95 16.4142 11.2858 16.75 11.7 16.75C12.1142 16.75 12.45 16.4142 12.45 16H10.95ZM12.45 5C12.45 4.58579 12.1142 4.25 11.7 4.25C11.2858 4.25 10.95 4.58579 10.95 5H12.45ZM4.125 15V16H5.625V15H4.125ZM4.125 16C4.125 18.0531 5.75257 19.75 7.8 19.75V18.25C6.61657 18.25 5.625 17.2607 5.625 16H4.125ZM7.8 19.75H15.6V18.25H7.8V19.75ZM15.6 19.75C17.6474 19.75 19.275 18.0531 19.275 16H17.775C17.775 17.2607 16.7834 18.25 15.6 18.25V19.75ZM19.275 16V15H17.775V16H19.275ZM12.2914 16.4613L16.1914 11.4613L15.0086 10.5387L11.1086 15.5387L12.2914 16.4613ZM12.2914 15.5387L8.39138 10.5387L7.20862 11.4613L11.1086 16.4613L12.2914 15.5387ZM12.45 16V5H10.95V16H12.45Z" fill="currentColor"></path> </g></svg>
            </a>
          </Link>
          <Link href="/CV2025FR.pdf" passHref legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-32 p-3 gap-1"
              )}
            >
              View CV
              <svg width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </a>
          </Link>
        </ul>
      </div>
      <div className="flex-1 max-md:m-auto ml-auto">
  <img
    src="/images/HeroPics.JPEG"
    alt="Hero Image"
    style={{ width: '200px', height: '200px', objectFit: 'cover' }}
    className="rounded-full"
  />
</div>
    </Section>
  );
};
