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
    <Section className="flex flex-col items-start space-y-4">
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
          description="Maths Manager est une plateforme <strong>innovante</strong> et <strong>indispensable</strong> pour les lycéens et au-delà, les aidant à maîtriser les mathématiques de manière <strong>structurée</strong>, <strong>engageante</strong> et <strong>efficace</strong>. Elle permet aux étudiants de pratiquer et de réviser les mathématiques à travers des <strong>exercices</strong>, des <strong>devoirs surveillés</strong>, des <strong>quiz</strong> et des résumés organisés par chapitres et sous-chapitres. Initialement <strong>vendue</strong> et <strong>utilisée</strong> par un professeur particulier, Maths Manager évolue pour s'adapter à plusieurs enseignants avec des fonctionnalités avancées de <strong>gestion</strong> et de <strong>personnalisation pédagogique</strong>. Développée avec <strong>Laravel</strong> et <strong>Vite</strong>, cette plateforme permet également aux enseignants de gérer leurs étudiants et de proposer des exercices, des devoirs surveillés et des quiz interactifs."
          startDate="Mars 2024"
          endDate="Mai 2024"
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
          align="right"
        />
        <Project
          image=""
          images={[
            "/images/projects/MatchDayApp.png",
            "/images/projects/MatchDayApp2.png",
          ]}
          name="MatchDay App"
          logo="/images/logo/MatchDayLogo.png"
          description="MatchDay est votre <strong>compagnon ultime</strong> pour l'esport, vous permettant de suivre facilement les actualités de plusieurs équipes. Avec l'intégration intuitive de l'<strong>API PandaScore</strong>, vous pouvez ajouter des équipes sans effort, personnaliser les couleurs et rester informé des événements à venir et passés. Développée en <strong>React Native</strong>, cette application mobile est également disponible en tant qu'extension Chrome en React. Installée par <strong>plus de 100 utilisateurs</strong> sur le Google Play Store, MatchDay a été développée comme un <strong>test technique</strong> et n'est plus disponible. Une version améliorée est <strong>en cours de développement</strong>."
          startDate="Octobre 2023"
          endDate="Janvier 2024"
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
          sourceLink=""
          githubLink="https://github.com/Daruiii/MatchDay-App"
          teamSize={1}
          align="left"
        />

        <Project
          image="/images/projects/MatchDayExt.png"
          images={[]}
          name="MatchDay Extension"
          logo=""
          description="MatchDay Extension, la première version de MatchDay, seules 5 équipes françaises sont disponibles, comme dans l'application, vous pouvez voir les matchs à venir et passés des équipes, et obtenir les détails du match ou de l'équipe."
          startDate="Avril 2023"
          endDate="Mai 2023"
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
          align="right"
        />

        <Project
          image="/images/projects/CheckingSystem.png"
          images={[]}
          name="Checking System"
          logo="/images/logo/logoCheckingSystem.png"
          description="Checking System est une plateforme avancée de gestion de présence pour les entreprises et les écoles. Les étudiants ou les employés scannent un QR code pour s'enregistrer, et leur présence est enregistrée dans une base de données. Le système comprend un site web pour que les enseignants ou les employeurs puissent suivre les présences, ajouter des cours ou des réunions aux calendriers, et envoyer des horaires mis à jour chaque semaine par email."
          startDate="Septembre 2022"
          endDate="Janvier 2023"
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
          align="left"
        />
      </div>
    </Section>
  );
};
