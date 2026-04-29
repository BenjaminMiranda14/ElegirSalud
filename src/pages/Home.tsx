import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CoverageSection } from "@/components/CoverageSection";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-black overflow-x-hidden">
      <Navbar />
      <main className="flex flex-col">
        {/* El Hero ahora es estático y firme */}
        <Hero />
        
        <div className="relative z-0 -mt-2">
          <CoverageSection />
        </div>
        
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}