import { ComponentPropsWithoutRef, ReactNode } from "react";

interface SkillData {
  name: string;
  logo: ReactNode;
}

export const Skill = ({ name, logo, ...divProps }: ComponentPropsWithoutRef<"div"> & SkillData) => (
  <div {...divProps} className="flex row items-center space-x-4 w-auto">
    {logo}
    <span className="font-caption font-bold text-lg text-primary w-auto whitespace-nowrap">
      {name}
    </span>
  </div>
);
