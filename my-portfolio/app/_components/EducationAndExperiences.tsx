import { Section } from "./Section";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { JavascriptIcon } from "./icons/JavascriptIcon";
import { ApacheCamelIcon } from "./icons/ApacheCamelIcon";
import { JavaIcon } from "./icons/JavaIcon";
import { JiraIcon } from "./icons/JiraIcon";
import { NodeJSIcon } from "./icons/NodeJSIcon";
import { LitElementIcon } from "./icons/LitElementIcon";
import { XMLIcon } from "./icons/XMLIcon";
import { ThreeJSIcon } from "./icons/ThreeJSIcon";
import { JsonIcon } from "./icons/JsonIcon";

export const EducationAndExperiences = () => {
  const experiences = [
    {
      key: '1', // Utilisez une chaîne de caractères pour la clé
      company: { name: "Officéo", logo: "/images/logo/tessiLogo.png" },
      role: "Growth Engineer",
      startDate: "September 2024",
      endDate: "September 2025",
      description:
        "During my internship at Tessi, I worked on the development of a web application for managing and analyzing data. I was responsible for creating a customizable graph generation interface, integrating multiple micro-services, and developing a versatile XML-JSON converter.",
      technologies: [
        {
          name: "JavaScript",
          logo: <JavascriptIcon size={12} className="text-foreground" />,
        },
        {
          name: "Java",
          logo: <JavaIcon size={12} className="text-foreground" />,
        },
      ],
      skillsWorkedOn: [
        "Backend Development",
        "Frontend Development",
      ], 
    },
    {
      key: '2', // Utilisez une chaîne de caractères pour la clé
      company: { name: "Tessi", logo: "/images/logo/tessiLogo.png" },
      role: "Fullstack Developer",
      startDate: "March 2022",
      endDate: "October 2023",
      description:
        "At Tessi, I worked on the development of innovative tools and services aimed at improving document management and data analysis processes. My key projects included creating a customizable graph generation interface, integrating multiple micro-services, and developing a versatile XML-JSON converter.",
      technologies: [
        {
          name: "JavaScript",
          logo: <JavascriptIcon size={12} className="text-foreground" />,
        },
        {
          name: "Java",
          logo: <JavaIcon size={12} className="text-foreground" />,
        },
        {
          name: "NodeJS",
          logo: <NodeJSIcon size={12} className="text-foreground" />,
        },
        {
          name: "Jira",
          logo: <JiraIcon size={12} className="text-foreground" />,
        },
        {
          name: "XML",
          logo: <XMLIcon size={12} className="text-foreground" />,
        },
        {
          name: "JSON",
          logo: <JsonIcon size={12} className="text-foreground" />,
        },
        {
          name: "Apache Camel",
          logo: <ApacheCamelIcon size={12} className="text-foreground" />,
        },
        {
          name: "LitElement",
          logo: <LitElementIcon size={12} className="text-foreground" />,
        },
        {
          name: "ThreeJS",
          logo: <ThreeJSIcon size={12} className="text-foreground" />,
        },
      ],
      skillsWorkedOn: [
        "Backend Development",
        "Frontend Development",
        "Micro-services Integration",
        "Data Transformation",
        "Tasks Automation",
        "Reusable Components",
        "Code Review",
        "Communication",
        "Problem Solving",
        "Decision Making",
        "Teamwork",
        "Adaptability",
        "Attention to Detail",
        "Organization",
        "Autonomy",
        "Self-discipline",
      ],
    },
  ];

  const educations = [
    {
      key: '1', // Utilisez une chaîne de caractères pour la clé
      institution: { name: "ESGI", logo: "/images/logo/etnaLogo.png"},
      degree: "RNCP Level 6",
      field: "Web Development",
      startDate: "September 2024",
      endDate: "July 2025",
      description:
        "Studied web development, software architecture, and project management. Developed a variety of web applications and services using modern technologies and methodologies.",
    },
    {
      key: '2', // Utilisez une chaîne de caractères pour la clé
      institution: { name: "Etna", logo: "/images/logo/etnaLogo.png"},
      degree: "RNCP Level 5",
      field: "Web Development",
      startDate: "September 2021",
      endDate: "January 2023",
      description:
        "Studied web development, software architecture, and project management. Developed a variety of web applications and services using modern technologies and methodologies.",
    },
    {
      key: '3', // Utilisez une chaîne de caractères pour la clé
      institution: { name: "René Cassin", logo: ""},
      degree: "High School Diploma",
      field: "STI2D",
      startDate: "September 2020",
      endDate: "June 2021",
      description:
        "Studied science, technology, and sustainable development.",
    },
  ];

  return (
    <Section className="max-w-4xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          {experiences.map(({ key, ...exp }) => (
            <div key={key} className="mb-6">
              <Experience {...exp} />
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          {educations.map(({ key, ...edu }) => (
            <div key={key} className="mb-6">
              <Education {...edu} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
