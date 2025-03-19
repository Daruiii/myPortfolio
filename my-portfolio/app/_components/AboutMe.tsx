"use client";
import { useState } from 'react';
import { Section } from './Section';
import { EducationAndExperiences } from './EducationAndExperiences';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full border-b border-gray-300">
      <button
        onClick={toggleAccordion}
        className="w-full text-center font-caption font-bold text-xl text-primary mt-2 flex justify-between items-center py-2"
      >
        {title}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        {isOpen && <div className="mt-1 text-sm text-left text-foreground p-2">{children}</div>}
      </div>
    </div>
  );
};

export const AboutMe = () => {
  return (
    <Section className="flex flex-col items-start space-y-2">
      <h2 className="font-caption font-bold text-3xl text-primary">About Me</h2>
      <EducationAndExperiences />
      <Accordion title="Qui suis-je ?">
        <p className="text-sm text-foreground">
          Je suis un <strong>développeur full-stack</strong>, actuellement en <strong>Master Ingénierie du Web</strong> à l’ESGI, que je valide en 2027. Ce qui me passionne dans le développement web, c’est la <strong>liberté</strong> et la <strong>créativité</strong> qu’il offre. Chaque projet est une nouvelle occasion d’innover, de résoudre des problématiques de manière intelligente et d’explorer de nouvelles possibilités.
        </p>
      </Accordion>
      <Accordion title="Technos & Intérêts">
        <p className="text-sm text-foreground">
          Je travaille sur tout l’écosystème full-stack et j’aime particulièrement <strong>Laravel</strong>, <strong>React</strong>, <strong>Symfony</strong>, <strong>Next.js</strong> et <strong>Node.js</strong>. Récemment, j’ai commencé à approfondir <strong>WordPress</strong>, car il est omniprésent dans le web, ainsi que le <strong>SEO/SEA</strong> et le <strong>tracking des utilisateurs</strong>, après avoir constaté leur importance lors de mes dernières expériences.
        </p>
      </Accordion>
      <Accordion title="Vision & Objectifs de carrière">
        <p className="text-sm text-foreground">
          En parallèle de mon année d’étude, je recherche une <strong>alternance</strong> pour septembre 2025, où je pourrais développer des solutions innovantes, travailler sur des projets à forte valeur ajoutée et monter en compétences sur des technologies avancées.
        </p>
        <p className="text-sm text-foreground">
          À terme, j’aimerais me lancer en <strong>freelance</strong> et proposer des sites web de haute qualité, des applications innovantes, voire des logiciels, avec une vraie exigence de professionnalisme. Mais si je trouve une entreprise qui partage mes valeurs et où je me sens bien, je pourrais aussi m’y investir. Dans tous les cas, mon objectif reste le même : créer des solutions qui ont un vrai impact.
        </p>
      </Accordion>
      <Accordion title="État d’esprit & Méthodologie">
        <p className="text-sm text-foreground">
          Je suis un développeur <strong>méthodique</strong>, adepte des <strong>bonnes pratiques</strong> (même si parfois, il faut juste que ça fonctionne 😅). Une chose est sûre : je ne lâche jamais un problème tant qu’il n’est pas résolu. Il m’est déjà arrivé de coder jusqu’à 4h du matin sans voir le temps passer, juste pour finir ce que j’avais commencé. C’est ce genre de moments qui m’a fait comprendre que le code, ce n’est pas juste un métier pour moi… c’est une vraie <strong>passion</strong>.
        </p>
      </Accordion>
    </Section>
  );
};