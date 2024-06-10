import { Section } from './Section';
import { EducationAndExperiences } from './EducationAndExperiences';
// import { CareerGoals } from './CareerGoals';

export const AboutMe = () => {
  return (
    <Section className="flex flex-col items-start space-y-8">
      <h2 className="font-caption font-bold text-5xl text-primary">About Me</h2>
      <EducationAndExperiences />
    </Section>
  );
};