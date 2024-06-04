import { Header } from "./_components/Header";
import { Spacing } from "./_components/Spacing";
import { Hero } from "./_components/Hero";
import { Projects } from "./_components/Projects"; 

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
  </main>
);
}
