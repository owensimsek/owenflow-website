import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — OwenFlow",
  description: "How OwenFlow collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-warm min-h-screen pt-[60px]">

        {/* Page header */}
        <div className="border-b border-line bg-white">
          <div className="max-w-2xl mx-auto px-6 py-16">
            <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">
              Legal
            </p>
            <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-slate-400">Last updated: April 6, 2026</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto px-6 py-16">

          {/* Intro */}
          <p className="text-base text-slate-600 leading-relaxed mb-14">
            OwenFlow ("we", "our", or "us") respects your privacy and is committed
            to protecting your personal information. This Privacy Policy explains
            how we collect, use, and safeguard your information when you use the
            OwenFlow mobile application and website.
          </p>

          <div className="space-y-12">

            {/* 1 */}
            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">
                We may collect the following types of information:
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="text-sm font-semibold text-slate-700 mb-2">
                    a. Account Information
                  </h3>
                  <ul className="space-y-1.5 pl-4">
                    {["Email address", "Authentication data (via Supabase or similar providers)"].map((item) => (
                      <li key={item} className="text-sm text-slate-500 leading-relaxed flex gap-2">
                        <span className="text-slate-300 mt-[3px]">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-700 mb-2">
                    b. Financial Data (User-Provided)
                  </h3>
                  <ul className="space-y-1.5 pl-4">
                    {[
                      "Income, expenses, debts, and related financial entries",
                      "Categories and custom financial data entered by you",
                    ].map((item) => (
                      <li key={item} className="text-sm text-slate-500 leading-relaxed flex gap-2">
                        <span className="text-slate-300 mt-[3px]">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-700 mb-2">
                    c. Usage Data
                  </h3>
                  <ul className="space-y-1.5 pl-4">
                    {[
                      "App interactions",
                      "Device information (e.g., device type, OS)",
                    ].map((item) => (
                      <li key={item} className="text-sm text-slate-500 leading-relaxed flex gap-2">
                        <span className="text-slate-300 mt-[3px]">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="space-y-1.5 pl-4">
                {[
                  "Provide and operate the OwenFlow app",
                  "Enable account authentication",
                  "Store and display your financial data",
                  "Improve app performance and user experience",
                  "Communicate important updates",
                ].map((item) => (
                  <li key={item} className="text-sm text-slate-500 leading-relaxed flex gap-2">
                    <span className="text-slate-300 mt-[3px]">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-4">
                3. Data Storage & Security
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Your data is securely stored using third-party infrastructure
                providers such as Supabase. We take reasonable administrative
                and technical measures to protect your data.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed mt-3">
                However, no system is 100% secure.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-4">
                4. Data Sharing
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                We do <span className="font-semibold text-slate-700">not sell your personal data</span>.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed mb-3">
                We may share data with:
              </p>
              <ul className="space-y-1.5 pl-4">
                {[
                  "Service providers (e.g., authentication, hosting)",
                  "Legal authorities if required by law",
                ].map((item) => (
                  <li key={item} className="text-sm text-slate-500 leading-relaxed flex gap-2">
                    <span className="text-slate-300 mt-[3px]">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-4">
                5. Your Rights
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Depending on your location (including under the California Consumer
                Privacy Act), you may have the right to:
              </p>
              <ul className="space-y-1.5 pl-4">
                {[
                  "Access your data",
                  "Request deletion of your data",
                  "Request correction of your data",
                ].map((item) => (
                  <li key={item} className="text-sm text-slate-500 leading-relaxed flex gap-2">
                    <span className="text-slate-300 mt-[3px]">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-4">
                6. Data Deletion
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                You may request deletion of your account and all associated data
                at any time by:
              </p>
              <ul className="space-y-1.5 pl-4">
                <li className="text-sm text-slate-500 leading-relaxed flex gap-2">
                  <span className="text-slate-300 mt-[3px]">—</span>
                  <span>Using the "Delete Account" feature in the app, or</span>
                </li>
                <li className="text-sm text-slate-500 leading-relaxed flex gap-2">
                  <span className="text-slate-300 mt-[3px]">—</span>
                  <span>
                    Contacting us at:{" "}
                    <a
                      href="mailto:support@owenflow.com"
                      className="text-navy hover:underline"
                    >
                      support@owenflow.com
                    </a>
                  </span>
                </li>
              </ul>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-4">
                7. Children&apos;s Privacy
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                OwenFlow is not intended for users under 13 years of age. We do
                not knowingly collect data from children.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-4">
                8. Changes to This Policy
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                We may update this Privacy Policy from time to time. Updates will
                be reflected by the "Last updated" date above.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-4">
                9. Contact Us
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                If you have any questions, contact us at:{" "}
                <a
                  href="mailto:support@owenflow.com"
                  className="text-navy hover:underline"
                >
                  support@owenflow.com
                </a>
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
