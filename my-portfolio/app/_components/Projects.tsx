import React from "react";
import { Project } from "./Project";
import { Section } from "./Section";
import { LaravelIcon } from "./icons/LaravelIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { AlpineIcon } from "./icons/AlpineIcon";
import { PandaScoreIcon } from "./icons/PandaScoreIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { BladeIcon } from "./icons/BladeIcon";
import { MariaDBIcon } from "./icons/MariaDBIcon";
import { SymfonyIcon } from "./icons/SymfonyIcon";
import { BootstrapIcon } from "./icons/BootstrapIcon";
import { RaspberryIcon } from "./icons/RaspberryIcon";
import { PythonIcon } from "./icons/PythonIcon";
import { TwigIcon } from "./icons/TwigIcon";

export const Projects = () => {
  return (
    <Section className="flex flex-col items-start space-y-8">
      <h2 className="font-caption font-bold text-5xl text-primary">Projects</h2>
      <div className="space-y-16">
        <Project
          image=""
          images={[
            "/images/projects/MathsManager.png",
            "/images/projects/MathsManager2.png",
            "/images/projects/MathsManager3.png",
            "/images/projects/MathsManager4.png",
          ]}
          name="Maths Manager"
          logo=""
          description="Maths Manager is an <strong>innovative</strong> and <strong>indispensable</strong> platform for high school seniors and beyond, helping them master mathematics in a <strong>structured</strong>, <strong>engaging</strong>, and <strong>effective</strong> manner. It allows students to practice and review mathematics through <strong>exercises</strong>, <strong>supervised homework</strong>, <strong>quizzes</strong>, and summaries organized by chapters and sub-chapters. Initially <strong>sold</strong> and <strong>used</strong> by a private tutor, Maths Manager evolves to adapt to multiple teachers with advanced <strong>management</strong> and <strong>pedagogical customization</strong> features. Developed with <strong>Laravel</strong> and <strong>Vite</strong>, this platform also allows teachers to manage their students and offer exercises, supervised homework, and interactive quizzes."
          startDate="March 2024"
          endDate="May 2024"
          technologies={[
            {
              name: "Laravel",
              logo: <LaravelIcon size={12} className="text-foreground" />,
            },
            {
              name: "Tailwind CSS",
              logo: <TailwindIcon size={12} className="text-foreground" />,
            },
            {
              name: "Alpine.js",
              logo: <AlpineIcon size={12} className="text-foreground" />,
            },
            {
              name: "Blade UI",
              logo: <BladeIcon size={12} className="text-foreground" />,
            },
            {
              name: "MariaDB",
              logo: <MariaDBIcon size={12} className="text-foreground" />,
            },
          ]}
          sourceLink="https://mathsmanager.fr/home"
          githubLink="https://github.com/Daruiii/maths-manager"
          teamSize={1}
          align="left"
        />
        <Project
          image=""
          images={[
            "/images/projects/MatchDayApp.png",
            "/images/projects/MatchDayApp2.png",
          ]}
          name="MatchDay App"
          logo="/images/logo/MatchDayLogo.png"
          description="MatchDay est votre <strong>compagnon ultime</strong> pour l'esport, vous permettant de suivre facilement l'actualité de plusieurs équipes. Grâce à l'intégration intuitive de l'<strong>API PandaScore</strong>, ajoutez des équipes sans effort, personnalisez les couleurs et restez informé des événements à venir et passés. Développée en <strong>React Native</strong>, cette application mobile est également disponible en version extension Chrome en React. Installée par <strong>plus de 100 utilisateurs</strong> sur le Google Play Store, MatchDay a été développée en guise de <strong>test technique</strong>."
          startDate="October 2023"
          endDate="January 2024"
          technologies={[
            {
              name: "React Native",
              logo: <ReactIcon size={12} className="text-foreground" />,
            },
            {
              name: "PandaScore API",
              logo: <PandaScoreIcon size={12} className="text-foreground" />,
            },
          ]}
          sourceLink="https://play.google.com/store/apps/details?id=com.darui.matchDay&hl=en-US&ah=s3CppYGsUdt4TlamqdkH5oZEmWI&pli=1"
          githubLink="https://github.com/Daruiii/MatchDay-App"
          teamSize={1}
          align="right"
        />

        <Project
          image="/images/projects/MatchDayExt.png"
          images={[]}
          name="MatchDay Extension"
          logo=""
          description="MatchDay Extension,
        the first version of MatchDay, only 5 french teams are available, like in the app, you can see the upcoming and past matches of the teams,
         and get the details of the match or the team."
          startDate="April 2023"
          endDate="May 2023"
          technologies={[
            {
              name: "React",
              logo: <ReactIcon size={12} className="text-foreground" />,
            },
            {
              name: "PandaScore API",
              logo: <PandaScoreIcon size={12} className="text-foreground" />,
            },
          ]}
          sourceLink="https://chromewebstore.google.com/detail/matchday/hmoljemfdhjcihlpahocmmgcgmjjgall?hl=en"
          githubLink="https://github.com/Daruiii/MatchDay-Ext"
          teamSize={1}
          align="left"
        />

        <Project
          image="/images/projects/CheckingSystem.png"
          images={[]}
          name="Checking System"
          logo="/images/logo/logoCheckingSystem.png"
          description="Checking System is an advanced attendance platform for companies and schools. 
        Students or employees scan a QR code to sign in, and their presence is recorded in a database. 
        The system includes a website for teachers or employers to track attendance, add courses or meetings to calendars, 
        and send weekly updated schedules via email."
          startDate="September 2022"
          endDate="January 2023"
          technologies={[
            {
              name: "Symfony",
              logo: <SymfonyIcon size={12} className="text-foreground" />,
            },
            {
              name: "Bootstrap",
              logo: <BootstrapIcon size={12} className="text-foreground" />,
            },
            {
              name: "MariaDB",
              logo: <MariaDBIcon size={12} className="text-foreground" />,
            },
            {
              name: "Raspberry Pi",
              logo: <RaspberryIcon size={12} className="text-foreground" />,
            },
            {
              name: "Python",
              logo: <PythonIcon size={12} className="text-foreground" />,
            },
            {
              name: "Twig",
              logo: <TwigIcon size={12} className="text-foreground" />,
            },
          ]}
          sourceLink=""
          githubLink="https://github.com/PLI-Cheking-System/ETNA-PLI-Checking-System"
          teamSize={3}
          align="right"
        />
      </div>
    </Section>
  );
};
