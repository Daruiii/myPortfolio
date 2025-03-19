"use client";

import { ComponentPropsWithoutRef, useState, useRef, useEffect } from "react";
import { Section } from "./Section";
import { MotionWrapper } from "./MotionWrapper";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";

interface EducationProps {
  institution: { name: string; logo: string };
  url?: string;
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
    url,
    degree,
    field,
    startDate,
    endDate,
    description,
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
    <MotionWrapper from="right">
      <div onClick={() => setShowDetails(!showDetails)}>
        <Section
          className="flex flex-col gap-2 max-w-full w-full mx-auto px-2 py-1 bg-card text-card-foreground shadow-lg rounded-md border border-border cursor-pointer"
          {...divProps}
        >
          <div className="flex flex-row gap-2 items-center">
            {institution.logo ? (
              url ? (
              <a href={url} target="_blank" rel="noopener noreferrer">
                <Image
                src={institution.logo}
                alt={institution.name}
                width={26}
                height={26}
                className="rounded-md bg-primary h-max w-max"
                />
              </a>
              ) : (
              <Image
                src={institution.logo}
                alt={institution.name}
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
                    {institution.name}
                  </h2>
                  <h3 className="text-xs font-semibold">{degree} {field}</h3>
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
          </div>
        </Section>
      </div>
    </MotionWrapper>
  );
};