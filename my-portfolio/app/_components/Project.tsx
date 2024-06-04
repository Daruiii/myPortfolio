import { Section } from "./Section";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Code } from "./Code";

interface ProjectData {
  image: string;
  name: string;
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
    name,
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
    <Section
      className={`flex ${alignmentStyles} max-md:flex-col items-start gap-4`}
      {...divProps}
    >
      <div style={{ position: "sticky", top: 60, zIndex: 0 }}>
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="w-full h-auto max-w-sm rounded-sm max-md:w-11/12"
        />
      </div>
      <div className="flex-[2] flex flex-col gap-2">
        <h2 className="font-caption font-bold text-2xl text-primary">{name}</h2>
        <p className="text-xs">{description}</p>
        <p>
          {startDate} - {endDate}
        </p>
        <div className="flex gap-2 items-center bg-gray-200 rounded-md p-2 w-12">
          <svg
            width="20px"
            height="20px"
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
          <p className="text-black">{teamSize}</p>
        </div>
        <ul className="flex gap-2 flex-wrap">
          {technologies.map((tech, index) => (
            <li key={index} className="text-base">
              <Code logo={tech.logo} name={tech.name} />
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <Link href={sourceLink} passHref>
            <button className="text-primary">Let&apos;s try it</button>
          </Link>
          <Link href={githubLink} passHref>
            <button className="text-primary">View on Github</button>
          </Link>
        </div>
      </div>
    </Section>
  );
};
