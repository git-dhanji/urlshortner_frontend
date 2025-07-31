

import { useSelector } from "react-redux";
import { FeaturesSection, HeroSection, HowItsWorksSection, ContactSection } from "../components/Index";
import TestimonialSection from "../components/sections/TestimonialSection";



import UserHome from "./UserHome";
import PricingSection from "../components/sections/PricingSection";


function HomePage() {
   
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <div id="home" className="min-h-screen bg-slate-950 overflow-hidden pt-10">
      {
        isAuthenticated ? (<>
          <UserHome />
          <PricingSection />
        </>) : (
          <>
            <HeroSection />
            <div>
              <HowItsWorksSection />
            </div>
          </>

        )
      }

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <FeaturesSection
          isPriceSectionInclude={!isAuthenticated}
        />
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