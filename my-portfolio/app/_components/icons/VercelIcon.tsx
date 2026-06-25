import { ComponentPropsWithoutRef } from "react";

export const VercelIcon = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 256 222"
      fill="currentColor"
      {...props}
    >
      <polygon points="128 0 256 221.705 0 221.705" />
    </svg>
  );
};
