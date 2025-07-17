
import { FeaturesSection, CTASection, HeroSection, HowItsWorksSection } from "../components/Index";
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
    </div>
  );
}

export default HomePage;