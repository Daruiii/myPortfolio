import { ComponentPropsWithoutRef } from "react";

export const SeoTools = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 48 48"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <rect
        x="4"
        y="8"
        width="40"
        height="32"
        rx="1.63265"
        fill="#2F88FF"
        stroke="#000000"
        strokeWidth={4}
      ></rect>{" "}
      <path
        d="M16 18.948C14 16 10.4978 17.9376 10.7489 20.9688C11 24 15 24 15.2498 27.0312C15.4997 30.0625 12 32 10 29.052"
        stroke="white"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>{" "}
      <path
        d="M26 18H22V31H26"
        stroke="white"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>{" "}
      <path
        d="M22 25H26"
        stroke="white"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>{" "}
      <rect
        x="32"
        y="18"
        width="6"
        height="13"
        rx="3"
        stroke="white"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></rect>
    </svg>
  );
};
