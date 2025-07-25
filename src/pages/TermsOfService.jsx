import { useEffect } from "react";
import smoothScrollToTop from "../utils/scroll.utils";

export default function TermsOfService() {

  useEffect(() => {

    smoothScrollToTop(800);
  }, []);
  return (
    <div className="min-h-screen bg-slate-950 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
        <p className="text-gray-400 text-center mb-12">Effective Date: July 21, 2025</p>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed mb-6">
            These Terms of Service ("Terms") govern your access to and use of the application, platform, system, APIs, endpoints, and any related services (collectively referred to as "the Service") operated under the entity known as "QuickLink," or any associated ownership.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            By accessing or using the Service in any capacity, you affirm that you have read, understood, and agree to be bound by these Terms. If you do not accept these Terms in full, you are not authorized to use the Service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">1. Access and Eligibility</h2>
          <p className="text-gray-300 leading-relaxed mb-4">The Service is made available to users subject to general eligibility criteria, including but not limited to:</p>
          <ul className="list-disc pl-6 text-gray-300 mb-6">
            <li>The user being of legal age under applicable jurisdictional laws;</li>
            <li>The user not being currently restricted or prohibited from accessing digital services under any applicable legal framework;</li>
            <li>The user not utilizing the Service in any region or context where such use would be considered unlawful or in violation of local rules, regulations, or sanctions.</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-6">
            The Service reserves the right to restrict, revoke, or modify access to any individual or entity without prior notice and without obligation to disclose rationale.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">2. Acceptable Use</h2>
          <p className="text-gray-300 leading-relaxed mb-4">By using the Service, you agree to refrain from engaging in any activities that may include, but are not limited to:</p>
          <ul className="list-disc pl-6 text-gray-300 mb-6">
            <li>Circumventing, probing, or breaching any security measures or access controls;</li>
            <li>Reverse engineering, decompiling, or attempting to extract source code or algorithms;</li>
            <li>Transmitting malicious code, performing denial of service attacks, or overloading infrastructure;</li>
            <li>Using the Service for fraudulent, deceptive, unauthorized, abusive, or otherwise unlawful purposes;</li>
            <li>Generating spam traffic or automated requests that do not represent real users.</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-6">
            The Service reserves the sole discretion to determine what constitutes a violation of acceptable use.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">3. Modifications, Interruptions, and Availability</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The Service may undergo updates, changes, or maintenance, which may cause temporary or permanent disruptions in availability or functionality. No guarantees are made regarding the uptime, performance, or continuity of the Service. The Service is provided "as is" and "as available," and may be modified or discontinued at any time, without notice or liability.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">4. Data Handling and Analytics</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The use of the Service may result in the collection, processing, and analysis of technical metadata for operational, diagnostic, and statistical purposes. This may include, but is not limited to, IP address, browser headers, referrer information, timestamps, and generalized geolocation derived from third-party sources. All data handling practices are further outlined in the associated Privacy Policy, which forms a binding part of these Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">5. Intellectual Property</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            All materials, branding, logos, codebases, user interfaces, designs, documentation, and other content made available through the Service remain the intellectual property of the Service or its licensors, unless otherwise stated. You are granted a limited, non-exclusive, non-transferable, revocable license to use the Service for its intended purpose. No other rights are granted.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">6. Third-Party Links and Integrations</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The Service may contain links, APIs, or references to third-party content or services. These are provided for convenience only, and the Service does not endorse or assume responsibility for any third-party operations, content, or data practices. Engaging with third-party services is at your own risk, and their terms and policies will apply independently.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">7. Termination and Suspension</h2>
          <p className="text-gray-300 leading-relaxed mb-4">The Service reserves the right to suspend or terminate user access at any time and for any reason, including, but not limited to:</p>
          <ul className="list-disc pl-6 text-gray-300 mb-6">
            <li>Suspected violation of these Terms;</li>
            <li>Abuse of resources or infrastructure;</li>
            <li>Legal or regulatory requirements;</li>
            <li>Extended periods of inactivity.</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-6">
            Upon termination, all rights granted to the user under these Terms shall cease immediately.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">8. Disclaimers and Limitation of Liability</h2>
          <p className="text-gray-300 leading-relaxed mb-4">To the fullest extent permissible under applicable law:</p>
          <ul className="list-disc pl-6 text-gray-300 mb-6">
            <li>The Service makes no representations or warranties of any kind, express or implied;</li>
            <li>No guarantees are made regarding availability, reliability, accuracy, or fitness for a particular purpose;</li>
            <li>The Service shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from the use or inability to use the Service.</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-6">
            Users agree to assume full responsibility and liability for their use of the Service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">9. Governing Law and Jurisdiction</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the Service is established, without regard to conflict-of-law principles. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts in such jurisdiction.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">10. Amendments</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            These Terms may be updated, revised, or modified at any time. Continued use of the Service after such modifications constitutes acceptance of the revised Terms. It is the user's responsibility to review the most recent version of these Terms periodically.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">11. Contact</h2>
          <p className="text-gray-300 leading-relaxed mb-4">For any questions, disputes, or correspondence regarding these Terms, you may contact the Service at the following:</p>
          <div className="bg-slate-800 p-4 rounded-lg mb-6">
            <p className="text-gray-300 font-mono">Email: support@quicklink.com</p>
          </div>

          <p className="text-gray-400 text-sm mt-12 italic">
            Use of the Service implies full understanding and unconditional agreement to the above Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
}
