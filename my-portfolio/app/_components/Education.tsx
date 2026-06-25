import { ExpandableCard } from "@/app/_components/ExpandableCard";

interface EducationProps {
  institution: { name: string; logo: string };
  url?: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
}

export const Education = ({
  institution,
  url,
  degree,
  field,
  startDate,
  endDate,
  description,
}: EducationProps) => (
  <ExpandableCard
    logo={institution.logo}
    name={institution.name}
    url={url}
    subtitle={`${degree} ${field}`}
    dateRange={`${startDate} - ${endDate}`}
    from="right"
  >
    <p
      className="text-xs leading-5 text-foreground"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  </ExpandableCard>
);
