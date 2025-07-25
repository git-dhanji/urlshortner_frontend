import { useEffect } from "react";
import smoothScrollToTop from "../utils/scroll.utils";

export default function infoPolicy() {

  useEffect(() => {
    smoothScrollToTop(800);
  }, []);


  return (
    <div className="min-h-screen bg-slate-950 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        <p className="text-gray-400 text-center mb-12">Effective Date: July 21, 2025</p>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed mb-6">
            This Privacy Policy ("Policy") outlines the general principles and practices with respect to the collection, use, processing, storage, and disclosure of data that may or may not be considered personal, anonymous, or technical in nature, obtained through user interaction with or via our platform, interfaces, APIs, or associated technologies. The scope of this Policy includes all digital access points under the purview of the service herein referred to as "the Platform."
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">1. Information Collection and Passive Data Accumulation</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Upon access or utilization of the Platform, certain data points may be automatically generated, acquired, observed, or inferred, either directly or through third-party service frameworks, in accordance with common technological and network standards.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">This data may include, but is not limited to:</p>
          <ul className="list-disc pl-6 text-gray-300 mb-6">
            <li>Network routing identifiers (such as Internet Protocol addresses)</li>
            <li>HTTP header-derived metadata</li>
            <li>Preferred locale and regional settings</li>
            <li>User-Agent details including browser engine specifications and operating system indicators</li>
            <li>Referrer chain artifacts</li>
            <li>Timestamp data relative to request initiation</li>
            <li>Generalized geolocation approximated through publicly accessible IP databases</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-6">
            No overtly identifying information such as names, contact credentials, or precise geospatial coordinates are collected without explicit user action.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">2. Purpose and Utilization</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Data, whether directly obtained or indirectly inferred, may be employed for various purposes including, but not limited to:
          </p>
          <ul className="list-disc pl-6 text-gray-300 mb-6">
            <li>Enabling service functionality</li>
            <li>Ensuring operational integrity</li>
            <li>Mitigating fraudulent, abusive, or unauthorized behaviors</li>
            <li>Facilitating performance optimizations</li>
            <li>Conducting aggregated usage analysis and statistical modeling</li>
            <li>Logging and diagnostic tracing</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-6">
            Such activities may occur without user notification unless otherwise mandated by applicable jurisdictional regulation.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">3. Retention, Archiving, and Data Minimization</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The Platform may retain collected data for a duration consistent with the intended operational, security, or legal objectives, unless and until such data is deemed no longer materially relevant or is subject to deletion or obfuscation through internal or third-party processes. Data may be compressed, pseudo-anonymized, or aggregated for archival or analytical purposes, wherein such transformations may render the original data non-attributable to any particular entity or session.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">4. Disclosure to External Entities</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The Platform does not engage in the active sale, barter, or commercial transaction of user-level metadata to external commercial actors.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">However, disclosures may occur under the following circumstances:</p>
          <ul className="list-disc pl-6 text-gray-300 mb-6">
            <li>Compliance with governmental, judicial, or regulatory obligations</li>
            <li>Prevention of imminent harm or fraud</li>
            <li>Facilitation of service by trusted infrastructure providers operating under confidentiality constraints</li>
            <li>Institutional transfers such as mergers, acquisitions, or insolvency proceedings</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">5. Use of Tracking Technologies and Non-Intrusive Identifiers</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The Platform may utilize non-persistent or session-based mechanisms for request correlation or security hardening. This may include, but is not limited to, cookies, cache keys, ETags, and similar browser-resident tokens, implemented without user notification where permitted. Persistent tracking, behavior profiling, or commercial retargeting are not undertaken unless consent is established through affirmative opt-in mechanisms, if and when such features are present.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">6. International Data Transfer and Compliance Alignment</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The Platform, its servers, or its supporting services may be located in jurisdictions other than the one from which access is initiated. As such, user interactions may result in cross-border transmission of metadata under local, national, and international compliance frameworks including but not limited to GDPR, CCPA, DPDP Act (India), and others as applicable. Users implicitly consent to such transfers through continued usage unless jurisdictionally prohibited.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">7. User Rights and Procedural Recourse</h2>
          <p className="text-gray-300 leading-relaxed mb-4">Subject to regional laws, users may possess rights including but not limited to:</p>
          <ul className="list-disc pl-6 text-gray-300 mb-6">
            <li>The right to access observational data pertaining to them</li>
            <li>The right to rectification or erasure</li>
            <li>The right to object to automated processing or profiling</li>
            <li>The right to data portability in standardized formats</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-6">
            Requests must be submitted through designated channels and may require verification steps. The Platform reserves the right to decline requests that are manifestly unfounded or excessive in nature.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">8. Amendments and Modifications</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The contents of this Policy are subject to unilateral amendment, revision, or extension without prior individualized notice. Users are encouraged to periodically review the Policy for updates. Continued usage post-modification constitutes implicit acceptance of revised terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">9. Contact and Escalation</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            General inquiries, rights assertions, or compliance concerns may be directed to the designated communications channel, which may include email, postal mail, or a web-based submission form. For unresolved disputes, users may have recourse through data protection authorities applicable in their jurisdiction.
          </p>

          <p className="text-gray-400 text-sm mt-12 italic">
            This document is for informational purposes and does not constitute a contractual or legal obligation unless otherwise enforced by applicable laws.
          </p>
        </div>
      </div>
    </div>
  );
}
