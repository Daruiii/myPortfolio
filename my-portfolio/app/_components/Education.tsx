"use client";

import { ComponentPropsWithoutRef, useState } from "react";
import { Section } from "./Section";
import { MotionWrapper } from "./MotionWrapper";
import { Code } from "./Code";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";

import { Button } from "@/components/ui/button";

interface EducationProps {
  institution: { name: string; logo: string };
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
}

export const Education = (
  props: ComponentPropsWithoutRef<"div"> & EducationProps
) => {
  const {
    institution,
    degree,
    field,
    startDate,
    endDate,
    description,
    ...divProps
  } = props;
  const [showDetails, setShowDetails] = useState(false);

  return (
    <MotionWrapper from="right">
      <Section
        className="flex flex-col max-w-full w-full mx-auto px-3 py-2 bg-card text-card-foreground shadow-lg rounded-md border border-border"
        {...divProps}
      >
        <div className="flex flex-row gap-2 items-center">
          {institution.logo ? (
            <Image
              src={institution.logo}
              alt={institution.name}
              width={34}
              height={34}
              className="rounded-md bg-primary h-max w-max"
            />
          ) : null}
          <div className="flex flex-col w-full gap-1">
            <div className="flex items-center justify-between  w-full">
              <div className="flex items-center gap-2  w-full">
                <h3 className="text-lg font-semibold text-primary">
                  {institution.name}
                </h3>
                <p className="text-xs p-1 bg-popover text-ring border border-ring rounded-full hover:shadow-lg cursor-default w-max">
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
          <p className="text-xs font-semibold">
            {degree} in {field}
          </p>
          </div>

        </div>
        {showDetails && (
          <p className="mt-2 text-sm text-foreground">{description}</p>
        )}
      </Section>
    </MotionWrapper>
  );
};
