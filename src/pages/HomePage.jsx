
import { FeaturesSection, HeroSection, HowItsWorksSection } from "../components/Index";
import ContactSection from "../components/sections/ContactSection";
import TestimonialSection from "../components/sections/TestimonialSection";

function HomePage() {


  return (
    <div id="home" className="min-h-screen bg-slate-950 overflow-hidden pt-10">
      {/* Hero Section */}
      <HeroSection />

      {/* How It Works Section */}
      <div>
        <HowItsWorksSection />
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <FeaturesSection />
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 bg-slate-900/30">
        <TestimonialSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}

export default HomePage;