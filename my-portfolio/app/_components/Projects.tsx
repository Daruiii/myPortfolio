import { Project } from "@/app/_components/Project";
import { Section } from "@/app/_components/Section";
import { Code } from "@/app/_components/Code";
import Image from "next/image";
import { LaravelIcon } from "@/app/_components/icons/LaravelIcon";
import { TailwindIcon } from "@/app/_components/icons/TailwindIcon";
import { PandaScoreIcon } from "@/app/_components/icons/PandaScoreIcon";
import { ReactIcon } from "@/app/_components/icons/ReactIcon";
import { MariaDBIcon } from "@/app/_components/icons/MariaDBIcon";
import { TypescriptIcon } from "@/app/_components/icons/TypescriptIcon";
import { PHPIcon } from "@/app/_components/icons/PHPIcon";
import { JavascriptIcon } from "@/app/_components/icons/JavascriptIcon";
import { NodeJSIcon } from "@/app/_components/icons/NodeJSIcon";
import { VercelIcon } from "@/app/_components/icons/VercelIcon";
import { PhaserIcon } from "@/app/_components/icons/PhaserIcon";

const MppBadge = () => (
  <a href="https://mpp.football" target="_blank" rel="noopener noreferrer">
    <Code
      logo={<Image src="https://mpp.football/favicon.ico" alt="MPP" width={12} height={12} style={{ width: 12, height: 12 }} />}
      name="Mon Petit Prono"
    />
  </a>
);

export const Projects = () => {
  return (
    <Section className="flex flex-col items-start space-y-4">
      <h2 className="font-caption font-bold text-5xl text-primary">Projets</h2>
      <div className="space-y-16">
        <Project
          image=""
          images={[
            "/images/projects/MathsManager/MathsManagerV2-ProfHP.png",
            "/images/projects/MathsManager/MathsManagerV2-StudentHP.png",
            "/images/projects/MathsManager/MathsManagerV2-DsBuilder.png",
          ]}
          name="Maths Manager"
          logo="/images/logo/mathsManagerLogo.svg"
          description={<>
            Plateforme pédagogique pour lycéens et étudiants. La <strong>V1</strong> (2024), vendue et utilisée par un professeur particulier, était construite sur <strong>Laravel</strong> avec <strong>Alpine.js</strong> et <strong>Blade</strong>. La <strong>V2</strong> (2025/2026) refond entièrement l&apos;interface en <strong>React/TypeScript</strong> avec <strong>Inertia.js</strong> et fait évoluer la plateforme vers le <strong>multi-professeurs</strong> : chaque enseignant gère ses élèves, ses groupes, ses exercices privés et génère des <strong>devoirs surveillés</strong> et des <strong>quiz</strong> interactifs. Intégration de <strong>KaTeX</strong> pour le rendu LaTeX natif des formules mathématiques.
          </>}
          startDate="Mars 2024"
          endDate="En cours"
          technologies={[
            { name: "Laravel", logo: <LaravelIcon size={12} className="text-foreground" /> },
            { name: "PHP", logo: <PHPIcon size={12} className="text-foreground" /> },
            { name: "React", logo: <ReactIcon size={12} className="text-foreground" /> },
            { name: "TypeScript", logo: <TypescriptIcon size={12} className="text-foreground" /> },
            { name: "Tailwind CSS", logo: <TailwindIcon size={12} className="text-foreground" /> },
            { name: "MariaDB", logo: <MariaDBIcon size={12} className="text-foreground" /> },
          ]}
          sourceLink="https://mathsmanager.fr/home"
          githubLink="https://github.com/Daruiii/maths-manager"
          teamSize={1}
          align="right"
          priority
        />
        <Project
          image=""
          images={[
            "/images/projects/AkaiIto/4.png",
            "/images/projects/AkaiIto/5.png",
            "/images/projects/AkaiIto/6.png",
          ]}
          name="Akai Ito"
          logo="/images/logo/AkaiItoLogo.png"
          description={<>
            <strong>Jeu vidéo</strong> narratif sur mesure, développé comme cadeau d&apos;anniversaire original. Jouable depuis le navigateur et installable sur mobile (<strong>PWA</strong>). Mini-jeux originaux entrecoupés de scènes narratives, <strong>notifications push</strong> et compte à rebours en temps réel via Service Worker.
          </>}
          startDate="Septembre 2025"
          endDate="Novembre 2025"
          technologies={[
            { name: "Phaser.js", logo: <PhaserIcon size={12} className="text-foreground" /> },
            { name: "JavaScript", logo: <JavascriptIcon size={12} className="text-foreground" /> },
            { name: "Node.js", logo: <NodeJSIcon size={12} className="text-foreground" /> },
            { name: "Vercel", logo: <VercelIcon size={12} className="text-foreground" /> },
          ]}
          sourceLink=""
          githubLink=""
          teamSize={1}
          align="left"
        />
        <Project
          image=""
          images={[
            "/images/projects/MatchDayApp/1.png",
            "/images/projects/MatchDayApp/2.png",
            "/images/projects/MatchDayApp/3.png",
          ]}
          name="MatchDay App"
          logo="/images/logo/MatchDayLogo.png"
          description={<>
            Application mobile de suivi esport développée en <strong>React Native</strong>, installée par plus de 100 utilisateurs sur le Play Store.<br />Le projet évolue aujourd&apos;hui vers un <strong>système de pronostics esport entre amis</strong>, dans l&apos;esprit de <MppBadge /> mais centré sur l&apos;esport.
          </>}
          startDate="Octobre 2023"
          endDate="Janvier 2024"
          technologies={[
            { name: "React Native", logo: <ReactIcon size={12} className="text-foreground" /> },
            { name: "PandaScore API", logo: <PandaScoreIcon size={12} className="text-foreground" /> },
          ]}
          sourceLink=""
          githubLink="https://github.com/Daruiii/MatchDay-App"
          teamSize={1}
          align="right"
        />
        <Project
          image=""
          images={["/images/projects/MatchDayExt/MatchDayExt.png"]}
          name="MatchDay Extension"
          logo=""
          description={<>
            Première version de MatchDay sous forme d&apos;extension Chrome. Suivi de 5 équipes françaises, avec les matchs à venir et passés et les détails de chaque rencontre.
          </>}
          startDate="Avril 2023"
          endDate="Mai 2023"
          technologies={[
            { name: "React", logo: <ReactIcon size={12} className="text-foreground" /> },
            { name: "PandaScore API", logo: <PandaScoreIcon size={12} className="text-foreground" /> },
          ]}
          sourceLink="https://chromewebstore.google.com/detail/matchday/hmoljemfdhjcihlpahocmmgcgmjjgall?hl=en"
          githubLink="https://github.com/Daruiii/MatchDay-Ext"
          teamSize={1}
          align="left"
        />
      </div>
    </Section>
  );
};
