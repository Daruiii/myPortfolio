"use client";

import { ComponentPropsWithoutRef, useState } from "react";
import { Section } from "./Section";
import { MotionWrapper } from "./MotionWrapper";
import { Code } from "./Code";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { Button } from "@/components/ui/button";

interface EducationProps {
  institution: string;
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
        className="flex flex-col max-w-full w-full mx-auto px-3 py-1 bg-card text-card-foreground shadow-lg rounded-md border border-border"
        {...divProps}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-primary">
              {institution}
            </h3>
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
        <p className="text-secondary text-md">
          {degree} in {field}
        </p>
        {showDetails && (
          <p className="mt-2 text-sm text-foreground">{description}</p>
        )}
      </Section>
    </MotionWrapper>
  );
};
