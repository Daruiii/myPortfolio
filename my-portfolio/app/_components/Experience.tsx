import { ReactNode } from "react";
import { Code } from "@/app/_components/Code";
import { ExpandableCard } from "@/app/_components/ExpandableCard";

interface ExperienceProps {
  company: { name: string; logo: string };
  url?: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: { name: string; logo: ReactNode }[];
  skillsWorkedOn: string[];
}

export const Experience = ({
  company,
  url,
  role,
  startDate,
  endDate,
  description,
  technologies,
  skillsWorkedOn,
}: ExperienceProps) => (
  <ExpandableCard
    logo={company.logo}
    name={company.name}
    url={url}
    subtitle={role}
    dateRange={`${startDate} - ${endDate}`}
    from="left"
  >
    <p
      className="text-xs leading-5 text-foreground"
      dangerouslySetInnerHTML={{ __html: description }}
    />
    <div className="mt-1">
      <h4 className="text-xs font-semibold mb-1">Technologies Utilisées</h4>
      <ul className="flex flex-wrap gap-1">
        {technologies.map((tech) => (
          <li key={tech.name} className="flex items-center text-xs">
            <Code logo={tech.logo} name={tech.name} />
          </li>
        ))}
      </ul>
    </div>
    <div className="mt-1">
      <h4 className="text-xs font-semibold mb-1">Skills développées</h4>
      <ul className="flex flex-wrap gap-1">
        {skillsWorkedOn.map((skill) => (
          <li key={skill} className="bg-popover text-foreground p-1 rounded-md text-xs">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </ExpandableCard>
);
