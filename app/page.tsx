import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PhilosophySection from "./components/PhilosophySection";
import FeaturesSection from "./components/FeaturesSection";
import PreviewSection from "./components/PreviewSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PhilosophySection />
        <FeaturesSection />
        <PreviewSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
