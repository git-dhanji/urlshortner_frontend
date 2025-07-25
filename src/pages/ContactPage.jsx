import { useEffect } from "react";
import { ContactSection } from "../components/Index";
import smoothScrollToTop from "../utils/scroll.utils";

export default function ContactPage() {

  useEffect(() => {
    smoothScrollToTop(800);
  }, []);
  return (

    <div>
      <ContactSection />
    </div>
  )
}