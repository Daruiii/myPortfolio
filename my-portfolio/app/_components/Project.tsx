import { Section } from "./Section";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { MotionWrapper } from "./MotionWrapper";
import Link from "next/link";
import Image from "next/image";
import { Code } from "./Code";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "./icons/GithubIcon";
import { Carousel } from "./Carousel";

interface ProjectData {
  image: string;
  images: string[];
  name: string;
  logo: string;
  description: string;
  startDate: string;
  endDate: string;
  technologies: { name: string; logo: JSX.Element }[];
  sourceLink: string;
  githubLink: string;
  teamSize: number;
  align?: "left" | "right";
}

export const Project = (
  props: ComponentPropsWithoutRef<"div"> & ProjectData
) => {
  const {
    image,
    images,
    name,
    logo,
    description,
    startDate,
    endDate,
    technologies,
    sourceLink,
    githubLink,
    teamSize,
    align = "left",
    ...divProps
  } = props;

  const alignmentStyles = align === "left" ? "flex-row" : "flex-row-reverse";

  return (
    <MotionWrapper from={align}>
      <Section
        className={`flex ${alignmentStyles} max-md:flex-col items-start gap-4`}
        {...divProps}
      >
        {image ? (
          <div
            style={{ top: 70, zIndex: 0 }}
            className="sticky-md static md:sticky flex-3 max-md:m-auto mr-auto space-y-4 w-full md:w-2/3"
          >
            <div className="w-full h-64 flex-shrink-0 relative">
              {sourceLink ? (
                <Link href={sourceLink} passHref>
                  <Image
                    src={image}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-auto max-w-lg rounded-sm max-md:w-full"
                    draggable={false}
                  />
                </Link>
              ) : (
                <Image
                  src={image}
                  alt={name}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-auto max-w-lg rounded-sm max-md:w-full"
                  draggable={false}
                />
              )}
            </div>
          </div>
        ) : (
          <div
            style={{ top: 70, zIndex: 0 }}
            className="sticky-md static md:sticky flex-3 max-md:m-auto mr-auto space-y-4 w-full md:w-2/3"
          >
            {sourceLink ? (
              <Link href={sourceLink} passHref>
                <Carousel images={images} />
              </Link>
            ) : (
              <Carousel images={images} />
            )}
          </div>
        )}
        <div className="flex-[2] flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <h2 className="font-bold text-2xl text-primary">{name}</h2>
            {logo && (
              <Image
                src={logo}
                alt={name}
                width={25}
                height={25}
                className="w-6 h-6 rounded-md bg-primary border border-accent"
              />
            )}
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xs p-1 bg-popover text-ring border border-ring rounded-full hover:shadow-lg cursor-default">
              {startDate} - {endDate}
            </p>
            <div className="flex gap-1 items-center justify-center bg-ring rounded-md p-1 w-12 cursor-default border border-accent">
              <p className="text-black font-bold text-xs">{teamSize}</p>
              <svg
                width="16px"
                height="16px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 6C14.3432 6 13 7.34315 13 9C13 10.6569 14.3432 12 16 12C17.6569 12 19 10.6569 19 9C19 7.34315 17.6569 6 16 6ZM11 9C11 6.23858 13.2386 4 16 4C18.7614 4 21 6.23858 21 9C21 10.3193 20.489 11.5193 19.6542 12.4128C21.4951 13.0124 22.9176 14.1993 23.8264 15.5329C24.1374 15.9893 24.0195 16.6114 23.5631 16.9224C23.1068 17.2334 22.4846 17.1155 22.1736 16.6591C21.1979 15.2273 19.4178 14 17 14C13.166 14 11 17.0742 11 19C11 19.5523 10.5523 20 10 20C9.44773 20 9.00001 19.5523 9.00001 19C9.00001 18.308 9.15848 17.57 9.46082 16.8425C9.38379 16.7931 9.3123 16.7323 9.24889 16.6602C8.42804 15.7262 7.15417 15 5.50001 15C3.84585 15 2.57199 15.7262 1.75114 16.6602C1.38655 17.075 0.754692 17.1157 0.339855 16.7511C-0.0749807 16.3865 -0.115709 15.7547 0.248886 15.3398C0.809035 14.7025 1.51784 14.1364 2.35725 13.7207C1.51989 12.9035 1.00001 11.7625 1.00001 10.5C1.00001 8.01472 3.01473 6 5.50001 6C7.98529 6 10 8.01472 10 10.5C10 11.7625 9.48013 12.9035 8.64278 13.7207C9.36518 14.0785 9.99085 14.5476 10.5083 15.0777C11.152 14.2659 11.9886 13.5382 12.9922 12.9945C11.7822 12.0819 11 10.6323 11 9ZM3.00001 10.5C3.00001 9.11929 4.1193 8 5.50001 8C6.88072 8 8.00001 9.11929 8.00001 10.5C8.00001 11.8807 6.88072 13 5.50001 13C4.1193 13 3.00001 11.8807 3.00001 10.5Z"
                    fill="#000000"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
          <p className="text-xs" dangerouslySetInnerHTML={{ __html: description }} />
          <ul className="flex gap-1 flex-wrap">
            {technologies.map((tech, index) => (
              <li key={index} className="text-xs">
                <Code logo={tech.logo} name={tech.name} />
              </li>
            ))}
          </ul>
          <div className="flex gap-2 w-full items-end justify-center h-16">
            {sourceLink && (
              <Link href={sourceLink} passHref>
                <Button variant="default" size="default">
                  Let&apos;s try it
                </Button>
              </Link>
            )}
            {githubLink && (
              <Link href={githubLink} passHref>
                <Button
                  variant="secondary"
                  size="default"
                  className="flex gap-1"
                >
                  <GithubIcon size={20} className="inline" />
                  View on Github
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Section>
    </MotionWrapper>
  );
};
