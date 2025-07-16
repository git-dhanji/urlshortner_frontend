// FooterSection.jsx
import { Link } from "@tanstack/react-router";
import { BoxForm, Logo } from "../Index";
import GradientBox from "./GradientBox";
import SocialLinks from "./SocialLinks";

const links = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Contact", url: "/contact" },
  { label: "Custom Urls", url: "/custom" }
]
const legal = [
  { label: "Privacy Policy", url: "/privacy" },
  { label: "Terms of Service", url: "/terms" }
]

export default function FooterSection() {
  const currentYear = new Date().getFullYear();
  return (
    <GradientBox>
      <footer className="mt-auto relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <Logo />
              <p className="mt-4 text-indigo-100 max-w-md">
                QuickLink makes it easy to shorten, share, and track your URLs.
                Create custom short links and get detailed analytics on your link performance.
              </p>
              <SocialLinks />
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {links.map((item, index) => (
                  <li key={index}>
                    <Link to={item.url} className="text-[#F9FAFB] hover:text-[#818CF8] transition-colors duration-200">{item.label}</Link>
                  </li>
                ))}

              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {legal.map((item, index) => (
                  <li key={index}>
                    <Link to={item.url} className="text-[#F9FAFB] hover:text-[#818CF8] transition-colors duration-200">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-[#D1D5DB] mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-[#F9FAFB] text-sm">© {currentYear} QuickLink. All rights reserved.</p>
            <p className="text-[#F9FAFB] text-sm mt-2 sm:mt-0">Made with ❤️ for better link management</p>
          </div>
        </div>
      </footer>
    </GradientBox>

  );
}
