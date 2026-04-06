import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact — OwenFlow",
  description:
    "Get in touch with the OwenFlow team for support, privacy requests, or account-related questions.",
  openGraph: {
    title: "Contact — OwenFlow",
    description:
      "Get in touch with the OwenFlow team for support, privacy requests, or account-related questions.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-warm min-h-screen pt-[60px]">

        {/* Page header */}
        <div className="border-b border-line bg-white">
          <div className="max-w-2xl mx-auto px-6 py-16">
            <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">
              Support
            </p>
            <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">
              Contact
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto px-6 py-16">

          {/* Intro */}
          <p className="text-base text-slate-600 leading-relaxed mb-14">
            If you have questions about OwenFlow, need support, or would like to
            contact us regarding privacy, data, or account-related requests,
            please reach out using the email below.
          </p>

          <div className="space-y-10">

            {/* Email */}
            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-3">
                Support Email
              </h2>
              <a
                href="mailto:support@owenflow.com"
                className="inline-flex items-center gap-2 text-navy font-medium hover:underline underline-offset-4"
              >
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                support@owenflow.com
              </a>
            </section>

            {/* Privacy / data requests */}
            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-3">
                Privacy & Data Requests
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                For privacy-related or account deletion requests, please email{" "}
                <a
                  href="mailto:support@owenflow.com"
                  className="text-navy hover:underline underline-offset-4"
                >
                  support@owenflow.com
                </a>
                . We will process your request in accordance with our{" "}
                <a
                  href="/privacy"
                  className="text-navy hover:underline underline-offset-4"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </section>

          </div>

          {/* Response note */}
          <p className="mt-16 text-xs text-slate-400 border-t border-line pt-8">
            We aim to respond as soon as reasonably possible.
          </p>

        </div>
      </main>
      <Footer />
    </>
  );
}
