"use client";

import { ComponentPropsWithoutRef, ReactNode, useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";
import { MotionWrapper } from "@/app/_components/MotionWrapper";
import { Section } from "@/app/_components/Section";

interface ExpandableCardProps extends ComponentPropsWithoutRef<"div"> {
  logo?: string;
  name: string;
  url?: string;
  subtitle: string;
  dateRange: string;
  from?: "left" | "right";
  children: ReactNode;
}

export const ExpandableCard = ({
  logo,
  name,
  url,
  subtitle,
  dateRange,
  from = "left",
  children,
  ...divProps
}: ExpandableCardProps) => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(open ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [open]);

  const logoImg = logo ? (
    <Image
      src={logo}
      alt={name}
      width={26}
      height={26}
      className="rounded-md bg-primary h-max w-max"
    />
  ) : null;

  return (
    <MotionWrapper from={from}>
      <div onClick={() => setOpen((prev) => !prev)}>
        <Section
          className="flex flex-col gap-2 max-w-full w-full mx-auto px-2 py-1 bg-card text-card-foreground shadow-lg rounded-md border border-border cursor-pointer"
          {...divProps}
        >
          <div className="flex flex-row gap-2 items-center">
            {logoImg &&
              (url ? (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {logoImg}
                </a>
              ) : (
                logoImg
              ))}
            <div className="flex flex-col w-full gap-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-bold text-primary">{name}</h2>
                  <h3 className="text-xs font-semibold">{subtitle}</h3>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen((prev) => !prev);
                  }}
                  className="focus:outline-none"
                >
                  {open ? (
                    <FaChevronUp className="text-primary" />
                  ) : (
                    <FaChevronDown className="text-primary" />
                  )}
                </button>
              </div>
              <p className="text-xs text-ring">{dateRange}</p>
            </div>
          </div>
          <div
            ref={contentRef}
            style={{ maxHeight: height, transition: "max-height 0.3s ease", overflow: "hidden" }}
          >
            {children}
          </div>
        </Section>
      </div>
    </MotionWrapper>
  );
};
