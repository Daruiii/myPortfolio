import Image from "next/image";
import { Header } from "./_components/Header";
import { Spacing } from "./_components/Spacing";
import { Hero } from "./_components/Hero";

export default function Home() {
  return (
    <main>
{/* header */}
    <Header />
    <Spacing size="md" />
    <Hero />
    </main>
  );
}
