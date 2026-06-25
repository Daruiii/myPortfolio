import { Section } from "@/app/_components/Section";
import { Experience } from "@/app/_components/Experience";
import { Education } from "@/app/_components/Education";
import { JavascriptIcon } from "@/app/_components/icons/JavascriptIcon";
import { ApacheCamelIcon } from "@/app/_components/icons/ApacheCamelIcon";
import { JavaIcon } from "@/app/_components/icons/JavaIcon";
import { JiraIcon } from "@/app/_components/icons/JiraIcon";
import { NodeJSIcon } from "@/app/_components/icons/NodeJSIcon";
import { LitElementIcon } from "@/app/_components/icons/LitElementIcon";
import { XMLIcon } from "@/app/_components/icons/XMLIcon";
import { ThreeJSIcon } from "@/app/_components/icons/ThreeJSIcon";
import { JsonIcon } from "@/app/_components/icons/JsonIcon";
import { GA4Icon } from "@/app/_components/icons/GA4Icon";
import { WordPressIcon } from "@/app/_components/icons/WordPressIcon";
import { SeoTools } from "@/app/_components/icons/SeoTools";
import { ReactIcon } from "@/app/_components/icons/ReactIcon";
import { TypescriptIcon } from "@/app/_components/icons/TypescriptIcon";
import { TailwindIcon } from "@/app/_components/icons/TailwindIcon";

export const EducationAndExperiences = () => {
  const experiences = [
    {
      company: { name: "Lydia Solutions", logo: "/images/logo/lydiaXsumeria.png" },
      url: "https://www.lydia.me",
      role: "Développeur Frontend",
      startDate: "Novembre 2025",
      endDate: "Aujourd'hui",
      description:
        "Développeur Frontend en alternance chez <strong>Lydia Solutions</strong>, éditeur des applications <strong>Lydia</strong> (paiement mobile) et <strong>Sumeria</strong> (banque en ligne). Développement sur <strong>Sumeria Web</strong>, les <strong>Cagnottes Lydia</strong> et le <strong>backoffice agents internes</strong> — fonctionnalités métier, migration d'architecture React et parcours web client. Travail en équipe agile : <strong>revues de code</strong>, rédaction de <strong>TDD front</strong>, CI/CD strict (TypeScript, Vitest, lint 0 warning).",
      technologies: [
        { name: "React", logo: <ReactIcon size={12} className="text-foreground" /> },
        { name: "TypeScript", logo: <TypescriptIcon size={12} className="text-foreground" /> },
        { name: "Chakra UI", logo: <TailwindIcon size={12} className="text-foreground" /> },
      ],
      skillsWorkedOn: [
        "Migration d'architecture frontend",
        "React Query / TanStack",
        "Design System interne",
        "Code Review",
        "Méthodes Agile",
        "Conformité PCI-DSS",
      ],
    },
    {
      company: { name: "Officéo", logo: "/images/logo/officeoLogo.png" },
      url: "https://www.officeopro.com/",
      role: "Ingénieur Growth",
      startDate: "Septembre 2024",
      endDate: "Septembre 2025",
      description:
        "Chez Officéo à Paris (75009), j'ai géré des <strong>projets techniques</strong> depuis l'<strong>expression des besoins</strong> jusqu'au <strong>suivi du développement</strong> avec l'équipe IT, les <strong>tests</strong> et le <strong>déploiement</strong>. J'ai optimisé le <strong>SEO technique</strong> (redirections, sitemap, robots.txt, Core Web Vitals) et automatisé le suivi des <strong>positions</strong> et des <strong>leads</strong> via des scripts. J'ai également amélioré <strong>WordPress</strong> (réactivité, métadonnées) et réalisé des <strong>analyses de performance</strong> et des <strong>rapports</strong> en utilisant <strong>GSC</strong>, <strong>Ahrefs</strong>, <strong>Seolyzer</strong> et <strong>GA4</strong>.",
      technologies: [
        { name: "WordPress", logo: <WordPressIcon size={14} className="text-foreground" /> },
        { name: "Google Analytics", logo: <GA4Icon size={12} className="text-foreground" /> },
        { name: "Outils SEO", logo: <SeoTools size={12} className="text-foreground" /> },
      ],
      skillsWorkedOn: [
        "Gestion de projet technique",
        "Collecte des besoins",
        "Suivi du développement",
        "Tests",
      ],
    },
    {
      company: { name: "Tessi", logo: "/images/logo/tessiLogo.png" },
      url: "https://www.tessi.eu/",
      role: "Développeur Fullstack",
      startDate: "Mars 2022",
      endDate: "Octobre 2023",
      description:
        "Chez Tessi, développement d'<strong>outils internes</strong> autour de la <strong>gestion documentaire</strong> et de l'<strong>analyse de données</strong> : interface de génération de graphiques personnalisable, intégration de <strong>micro-services</strong> Java/Node.js, et <strong>convertisseur XML→JSON</strong> polyvalent.",
      technologies: [
        { name: "JavaScript", logo: <JavascriptIcon size={12} className="text-foreground" /> },
        { name: "Java", logo: <JavaIcon size={12} className="text-foreground" /> },
        { name: "NodeJS", logo: <NodeJSIcon size={12} className="text-foreground" /> },
        { name: "Jira", logo: <JiraIcon size={12} className="text-foreground" /> },
        { name: "XML", logo: <XMLIcon size={12} className="text-foreground" /> },
        { name: "JSON", logo: <JsonIcon size={12} className="text-foreground" /> },
        { name: "Apache Camel", logo: <ApacheCamelIcon size={12} className="text-foreground" /> },
        { name: "LitElement", logo: <LitElementIcon size={12} className="text-foreground" /> },
        { name: "ThreeJS", logo: <ThreeJSIcon size={12} className="text-foreground" /> },
      ],
      skillsWorkedOn: [
        "Développement Fullstack",
        "Intégration de micro-services",
        "Transformation de données (XML/JSON)",
        "Revue de code",
      ],
    },
  ];

  const educations = [
    {
      institution: { name: "ESGI", logo: "/images/logo/esgiLogo.png" },
      url: "https://www.esgi.fr/",
      degree: "Master 1",
      field: "Ingénierie Web",
      startDate: "Septembre 2025",
      endDate: "En cours",
      description:
        "Master en Ingénierie Web en alternance chez Lydia Solutions. Approfondissement de l'architecture logicielle, des pratiques DevOps et du développement d'applications web modernes.",
    },
    {
      institution: { name: "ESGI", logo: "/images/logo/esgiLogo.png" },
      url: "https://www.esgi.fr/",
      degree: "RNCP Niveau 6",
      field: "Développement Web",
      startDate: "Septembre 2024",
      endDate: "Juillet 2025",
      description:
        "Bachelor en Développement Web. Étudié l'architecture logicielle, la gestion de projet et développé une variété d'applications et de services web en utilisant des technologies modernes.",
    },
    {
      institution: { name: "Etna", logo: "/images/logo/etnaLogo.png" },
      url: "https://etna.io/",
      degree: "RNCP Niveau 5",
      field: "Développement Web",
      startDate: "Septembre 2021",
      endDate: "Janvier 2023",
      description:
        "Étudié le développement web, l'architecture logicielle et la gestion de projet. Développé une variété d'applications et de services web en utilisant des technologies et des méthodologies modernes.",
    },
    {
      institution: { name: "René Cassin", logo: "" },
      url: "",
      degree: "Baccalauréat",
      field: "STI2D",
      startDate: "Septembre 2020",
      endDate: "Juin 2021",
      description: "Étudié les sciences, la technologie et le développement durable.",
    },
  ];

  return (
    <Section className="max-w-4xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Expérience</h2>
          {experiences.map((exp) => (
            <div key={exp.company.name} className="mb-6">
              <Experience {...exp} />
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Parcours Scolaire</h2>
          {educations.map((edu) => (
            <div key={`${edu.institution.name}-${edu.degree}`} className="mb-6">
              <Education {...edu} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
