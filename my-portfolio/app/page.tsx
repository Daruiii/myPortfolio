import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { Spacing } from "./_components/Spacing";
import { Hero } from "./_components/Hero";
import { Projects } from "./_components/Projects"; 
import { Skills } from "./_components/Skills";

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
    <Spacing size="md" />
    <div id="skills"></div>
    <Skills />
    <Spacing size="md" />
    <Footer />
  </main>
);
}
