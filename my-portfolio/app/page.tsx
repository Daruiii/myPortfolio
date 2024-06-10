import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { Spacing } from "./_components/Spacing";
import { Hero } from "./_components/Hero";
import { Projects } from "./_components/Projects"; 
import { Skills } from "./_components/Skills";
import { AboutMe } from "./_components/AboutMe";

export default function Home() {

return (
  <main>
    <Header />
    <div id="hero"></div>
    <Spacing size="md" />
    <Hero />
    <div id="projects"></div>
    <Spacing size="sm" />
    <Projects />
    <div id="skills"></div>
    <Spacing size="md" />
    <Skills />
    <div id="about-me"></div>
    <Spacing size="md" />
    <AboutMe />
    <Footer />
  </main>
);
}
