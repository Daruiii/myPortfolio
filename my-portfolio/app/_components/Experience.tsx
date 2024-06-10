"use client";

import { ComponentPropsWithoutRef, useState } from "react";
import { Section } from "./Section";
import { MotionWrapper } from './MotionWrapper';
import { Code } from "./Code";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; 

interface ExperienceProps {
    company: string;
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
      role,
      startDate,
      endDate,
      description,
      technologies,
      skillsWorkedOn,
      ...divProps
    } = props;
  
    const [showDetails, setShowDetails] = useState(false);
    return (
      <MotionWrapper from="left">
        <Section
          className="flex flex-col gap-4 max-w-full w-full mx-auto px-3 py-1 bg-card text-card-foreground shadow-lg rounded-md border border-border"
          {...divProps}
        >
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-primary">{company}</h2>
                <p className="text-xs p-1 border border-muted rounded-full w-max bg-popover">
              {startDate} - {endDate}
            </p>
              </div>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="focus:outline-none"
              >
                {showDetails ? (
                  <FaChevronUp className="text-primary" />
                ) : (
                  <FaChevronDown className="text-primary" />
                )}
              </button>
            </div>
            <h3 className="text-base font-semibold text-border">{role}</h3>
          </div>
  
          {showDetails && (
            <>
              <p className="text-xs leading-6 text-foreground">{description}</p>
              <div className="mt-2">
                <h4 className="text-sm font-semibold mb-1">Technologies Used</h4>
                <ul className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <li key={index} className="flex items-center text-xs">
                      <Code logo={tech.logo} name={tech.name} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-2">
                <h4 className="text-sm font-semibold mb-1">Skills Developed</h4>
                <ul className="flex flex-wrap gap-2">
                  {skillsWorkedOn.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-popover text-popover-foreground p-1 rounded-md text-xs"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </Section>
      </MotionWrapper>
    );
  };