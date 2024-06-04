import React from "react";
import { Project } from "./Project";
import { Section } from "./Section";
import { LaravelIcon } from "./icons/LaravelIcon";
import { TailwindIcon } from "./icons/TailwindIcon";

export const Projects = () => {
  return (
    <Section className="flex flex-col items-center space-y-8">
      <h2 className="text-2xl font-bold text-primary">Projects</h2>
      <Project
        image="/images/MathsManager.png"
        name="Maths Manager"
        description="Maths Manager promet d’être le compagnon indispensable pour les élèves de terminale, 
        en les aidant à maîtriser les mathématiques de manière structurée, engageante et efficace.
        Maths Manager permet de pratiquer et de réviser les mathématiques grâce à des exercices, des devoirs surveillés, 
        des quizz et des résumés organisés par chapitres et sous-chapitres."
        startDate="March 2024"
        endDate="May 2024"
        technologies={[
            { name: 'Laravel', logo: <LaravelIcon size={12} className="text-foreground" /> },
            { name: 'Tailwind CSS', logo: <TailwindIcon size={12} className="text-foreground" /> },
            // { name: 'Alpine.js', logo: <AlpineIcon size={12} className="text-foreground" /> },
            // { name: 'Blade', logo: <BladeIcon size={12} className="text-foreground" /> },
            // { name: 'MariaDB', logo: <MariaDBIcon size={12} className="text-foreground" /> },
            // Add other technologies as needed
          ]}
        sourceLink="https://mathsmanager.fr/home"
        githubLink="https://github.com/Daruiii/maths-manager"
        teamSize={1}
        align="left"
      />
      <Project
        image="/images/MatchDayApp.png"
        name="MatchDay App"
        description="MatchDay, 
        your ultimate esports companion, brings you the thrill of tracking multiple teams effortlessly. With the intuitive PandaScore API integration, 
        add teams seamlessly, 
        customize colors, and stay engaged with upcoming and past events."
        startDate="October 2023"
        endDate="2024-01-20 January 2024"
        technologies={[
            // { name: 'React Native', logo: <ReactNativeIcon size={12} className="text-foreground" /> },
            // { name: 'PandaScore API', logo: <PandaScoreIcon size={12} className="text-foreground" /> },
        ]}
        sourceLink="https://play.google.com/store/apps/details?id=com.darui.matchDay&hl=en-US&ah=s3CppYGsUdt4TlamqdkH5oZEmWI&pli=1"
        githubLink="https://github.com/Daruiii/MatchDay-App"
        teamSize={1}
        align="right"
      />

      <Project
        image="/images/MatchDayExt.png"
        name="MatchDay Extension"
        description="MatchDay Extension,
        the first version of MatchDay, only 5 french teams are available, like in the app, you can see the upcoming and past matches of the teams,
         and get the details of the match or the team."
        startDate="April 2024"
        endDate="May 2024"
        technologies={[
            // { name: 'React', logo: <ReactIcon size={12} className="text-foreground" /> },
            // { name: 'PandaScore API', logo: <PandaScoreIcon size={12} className="text-foreground" /> },
            // { name: 'manifest.json', logo: <ManifestIcon size={12} className="text-foreground" /> },
        ]}
        sourceLink="https://chromewebstore.google.com/detail/matchday/hmoljemfdhjcihlpahocmmgcgmjjgall?hl=en"
        githubLink="https://github.com/Daruiii/MatchDay-Ext"
        teamSize={1}
        align="left"
      />

      <Project
        image="/images/CheckingSystem.png"
        name="Checking System"
        description="Checking System is an advanced attendance platform for companies and schools. 
        Students or employees scan a QR code to sign in, and their presence is recorded in a database. 
        The system includes a website for teachers or employers to track attendance, add courses or meetings to calendars, 
        and send weekly updated schedules via email."
        startDate="September 2022"
        endDate="January 2023"
        technologies={[
            // { name: 'Symfony', logo: <SymfonyIcon size={12} className="text-foreground" /> },
            // { name: 'Bootstrap', logo: <BootstrapIcon size={12} className="text-foreground" /> },
            // { name: 'MariaDB', logo: <MariaDBIcon size={12} className="text-foreground" /> },
            // { name: 'Raspberry Pi', logo: <RaspberryPiIcon size={12} className="text-foreground" /> },
            // { name: 'Python', logo: <PythonIcon size={12} className="text-foreground" /> },
            // { name: 'Twig', logo: <TwigIcon size={12} className="text-foreground" /> },
        ]}
        sourceLink=""
        githubLink="https://github.com/PLI-Cheking-System/ETNA-PLI-Checking-System"
        teamSize={3}
        align="right"
      />
    </Section>
  );
};
