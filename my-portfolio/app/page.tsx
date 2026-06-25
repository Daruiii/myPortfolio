import { Header } from "@/app/_components/Header";
import { Footer } from "@/app/_components/Footer";
import { Spacing } from "@/app/_components/Spacing";
import { Hero } from "@/app/_components/Hero";
import { EducationAndExperiences } from "@/app/_components/EducationAndExperiences";
import { Projects } from "@/app/_components/Projects";
import { Skills } from "@/app/_components/Skills";
import { AboutMe } from "@/app/_components/AboutMe";

export default function Home() {
  return (
    <main>
      <Header />
      <div id="hero"></div>
      <Spacing size="sm" />
      <Hero />
      <div id="projects"></div>
      <Spacing size="sm" />
      <Projects />
      <div id="experience"></div>
      <Spacing size="sm" />
      <EducationAndExperiences />
      <div id="skills"></div>
      <Spacing size="sm" />
      <Skills />
      <div id="about-me"></div>
      <Spacing size="sm" />
      <AboutMe />
      <Footer />
    </main>
  );
}
