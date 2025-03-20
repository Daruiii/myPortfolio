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
import { GA4Icon } from "./icons/GA4Icon";
import { WordPressIcon } from "./icons/WordPressIcon";
import { SeoTools } from "./icons/SeoTools";

export const EducationAndExperiences = () => {
  const experiences = [
    {
      key: '1',
      company: { name: "Officéo", logo: "/images/logo/officeoLogo.png" },
      url: "https://www.officeopro.com/",
      role: "Ingénieur Growth",
      startDate: "Septembre 2024",
      endDate: "Septembre 2025",
      description:
      "Chez Officéo à Paris (75009), j&#39ai géré des <strong>projets techniques</strong> depuis l&#39<strong>expression des besoins</strong> jusqu&#39au <strong>suivi du développement</strong> avec l&#39équipe IT, les <strong>tests</strong> et le <strong>déploiement</strong>. J&#39ai optimisé le <strong>SEO technique</strong> (redirections, sitemap, robots.txt, Core Web Vitals) et automatisé le suivi des <strong>positions</strong> et des <strong>leads</strong> via des scripts. J&#39ai également amélioré <strong>WordPress</strong> (réactivité, métadonnées) et réalisé des <strong>analyses de performance</strong> et des <strong>rapports</strong> en utilisant <strong>GSC</strong>, <strong>Ahrefs</strong>, <strong>Seolyzer</strong> et <strong>GA4</strong>.",
      technologies: [
        {
          name: "WordPress",
          logo: <WordPressIcon size={14} className="text-foreground" />,
        },
        {
          name: "Google Analytics",
          logo: <GA4Icon size={12} className="text-foreground" />,
        },
        {
          name: "Outils SEO",
          logo: <SeoTools size={12} className="text-foreground" />,
        }
      ],
      skillsWorkedOn: [
        "Gestion de projet technique",
        "Collecte des besoins",
        "Suivi du développement",
        "Tests",
      ], 
    },
    {
      key: '2',
      company: { name: "Tessi", logo: "/images/logo/tessiLogo.png" },
      url: "https://www.tessi.eu/",
      role: "Développeur Fullstack",
      startDate: "Mars 2022",
      endDate: "Octobre 2023",
      description:
        "Chez Tessi, j&#39ai travaillé sur le développement d&#39<strong>outils innovants</strong> et de <strong>services</strong> visant à améliorer la <strong>gestion des documents</strong> et les <strong>processus d&#39analyse de données</strong>. Mes projets clés incluaient la création d&#39une <strong>interface de génération de graphiques personnalisable</strong>, l&#39intégration de plusieurs <strong>micro-services</strong> et le développement d&#39un <strong>convertisseur XML-JSON</strong> polyvalent.",
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
        "Développement Backend",
        "Développement Frontend",
        "Intégration de micro-services",
        "Transformation de données",
        "Automatisation des tâches",
        "Composants réutilisables",
        "Revue de code",
        "Communication",
        "Résolution de problèmes",
        "Prise de décision",
        "Travail d&#39équipe",
        "Adaptabilité",
        "Attention aux détails",
        "Organisation",
        "Autonomie",
        "Autodiscipline",
      ],
    },
  ];

  const educations = [
    {
      key: '1',
      institution: { name: "ESGI", logo: "/images/logo/esgiLogo.png"},
      url: "https://www.esgi.fr/",
      degree: "RNCP Niveau 6",
      field: "Développement Web",
      startDate: "Septembre 2024",
      endDate: "Juillet 2025",
      description:
        "Étudié le développement web, l&#39architecture logicielle et la gestion de projet. Développé une variété d&#39applications et de services web en utilisant des technologies et des méthodologies modernes.",
    },
    {
      key: '2',
      institution: { name: "Etna", logo: "/images/logo/etnaLogo.png"},
      url: "https://etna.io/",
      degree: "RNCP Niveau 5",
      field: "Développement Web",
      startDate: "Septembre 2021",
      endDate: "Janvier 2023",
      description:
        "Étudié le développement web, l&#39architecture logicielle et la gestion de projet. Développé une variété d&#39applications et de services web en utilisant des technologies et des méthodologies modernes.",
    },
    {
      key: '3',
      institution: { name: "René Cassin", logo: ""},
      url: "",
      degree: "Baccalauréat",
      field: "STI2D",
      startDate: "Septembre 2020",
      endDate: "Juin 2021",
      description:
        "Étudié les sciences, la technologie et le développement durable.",
    },
  ];

  return (
    <Section className="max-w-4xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Expérience</h2>
          {experiences.map(({ key, ...exp }) => (
            <div key={key} className="mb-6">
              <Experience {...exp} />
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Parcours Scolaire</h2>
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
