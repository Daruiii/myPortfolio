"use client";

import { useState } from "react";
import { Section } from "@/app/_components/Section";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b border-gray-300">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full text-center font-caption font-bold text-xl text-primary mt-2 flex justify-between items-center py-2"
      >
        {title}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      <div
        className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="mt-1 text-sm text-left text-foreground p-2">{children}</div>
      </div>
    </div>
  );
};

export const AboutMe = () => {
  return (
    <Section className="flex flex-col items-start space-y-2">
      <h2 className="font-caption font-bold text-3xl text-primary">À propos</h2>
      <Accordion title="Qui suis-je ?">
        <p className="text-sm text-foreground">
          Développeur full-stack en <strong>Master Ingénierie du Web</strong> à l'ESGI (diplôme
          2027). Je construis autant des apps métier que des projets perso — j'aime autant
          comprendre un besoin que trouver la solution technique qui va avec.
        </p>
      </Accordion>
      <Accordion title="Technos & Intérêts">
        <p className="text-sm text-foreground">
          Je travaille sur tout l'écosystème full-stack et j'aime particulièrement{" "}
          <strong>React</strong>, <strong>TypeScript</strong>, <strong>Next.js</strong>,{" "}
          <strong>Laravel</strong> et <strong>Node.js</strong>. J'attache beaucoup d'importance à la{" "}
          <strong>qualité du code</strong> : architecture propre, revues sérieuses, et une vraie
          réflexion sur ce qu'on construit avant de le construire.
        </p>
      </Accordion>
      <Accordion title="Vision & Objectifs de carrière">
        <p className="text-sm text-foreground">
          Construire des choses bien faites, avec des équipes qui ont de vraies exigences — c'est ce
          qui me motive. Que ce soit sur des produits grand public ou des projets sur mesure,
          l'important c'est l'impact et la qualité de ce qu'on livre.
        </p>
      </Accordion>
      <Accordion title="État d'esprit & Méthodologie">
        <p className="text-sm text-foreground">
          Développeur <strong>méthodique</strong>, adepte des <strong>bonnes pratiques</strong>{" "}
          (même si parfois, il faut juste que ça fonctionne 😅). Je ne lâche jamais un problème tant
          qu'il n'est pas résolu — il m'est arrivé de coder jusqu'à 4h du matin juste pour finir ce
          que j'avais commencé.
        </p>
      </Accordion>
    </Section>
  );
};
