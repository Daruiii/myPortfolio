"use client";

import { ComponentPropsWithoutRef, useState, useRef, useEffect } from "react";
import { Section } from "./Section";
import { MotionWrapper } from "./MotionWrapper";
import { Code } from "./Code";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";

interface ExperienceProps {
  company: { name: string; logo: string };
  url?: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: { name: string; logo: JSX.Element }[];
  skillsWorkedOn: string[];
}

export const Experience = (
  props: ComponentPropsWithoutRef<"div"> & ExperienceProps
) => {
  const {
    company,
    url,
    role,
    startDate,
    endDate,
    description,
    technologies,
    skillsWorkedOn,
    ...divProps
  } = props;

  const [showDetails, setShowDetails] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(showDetails ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [showDetails]);

  return (
    <MotionWrapper from="left">
      <div onClick={() => setShowDetails(!showDetails)}>
        <Section
          className="flex flex-col gap-2 max-w-full w-full mx-auto px-2 py-1 bg-card text-card-foreground shadow-lg rounded-md border border-border cursor-pointer"
          {...divProps}
        >
          <div className="flex flex-row gap-2 items-center">
            {company.logo ? (
              url ? (
              <a href={url} target="_blank" rel="noopener noreferrer">
                <Image
                src={company.logo}
                alt={company.name}
                width={26}
                height={26}
                className="rounded-md bg-primary h-max w-max"
                />
              </a>
              ) : (
              <Image
                src={company.logo}
                alt={company.name}
                width={26}
                height={26}
                className="rounded-md bg-primary h-max w-max"
              />
              )
            ) : null}
            <div className="flex flex-col w-full gap-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-bold text-primary">
                    {company.name}
                  </h2>
                  <h3 className="text-xs font-semibold">{role}</h3>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowDetails(!showDetails);
                    }}
                    className="focus:outline-none"
                  >
                    {showDetails ? (
                      <FaChevronUp className="text-primary" />
                    ) : (
                      <FaChevronDown className="text-primary" />
                    )}
                  </button>
                </div>
              </div>
              <p className="text-xs text-ring">
                {startDate} - {endDate}
              </p>
            </div>
          </div>
          <div
            ref={contentRef}
            style={{
              maxHeight: height,
              transition: "max-height 0.3s ease",
              overflow: "hidden",
            }}
          >
            <p
              className="text-xs leading-5 text-foreground"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div className="mt-1">
              <h4 className="text-xs font-semibold mb-1">
                Technologies Utilisées
              </h4>
              <ul className="flex flex-wrap gap-1">
                {technologies.map((tech, index) => (
                  <li key={index} className="flex items-center text-xs">
                    <Code logo={tech.logo} name={tech.name} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-1">
              <h4 className="text-xs font-semibold mb-1">Skills développées</h4>
              <ul className="flex flex-wrap gap-1">
                {skillsWorkedOn.map((skill, index) => (
                  <li
                    key={index}
                    className="bg-popover text-foreground p-1 rounded-md text-xs"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </div>
    </MotionWrapper>
  );
};
