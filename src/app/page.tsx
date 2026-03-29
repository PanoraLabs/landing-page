import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Pilar } from "@/components/sections/Pilar";
import { Flow } from "@/components/sections/Flow";
import { Persona } from "@/components/sections/Persona";
import { Tech } from "@/components/sections/Tech";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Pilar />
        <Flow />
        <Persona />
        <Tech />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
