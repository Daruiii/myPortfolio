import { ComponentPropsWithoutRef } from "react";

interface SkillData {
  name: string;
  logo: JSX.Element;
}

export const Skill = (
  props: ComponentPropsWithoutRef<"div"> & SkillData
) => {
  const { name, logo, ...divProps } = props;

  return (
    <div {...divProps} className="flex row items-center space-x-4 w-auto">
      {logo}
      <span className="font-caption font-bold text-lg text-primary w-auto whitespace-nowrap">
        {name}
      </span>
    </div>
  );
};