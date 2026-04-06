import Navbar from "./Navbar";
import Footer from "./Footer";

interface Section {
  title: string;
  body: string;
}

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: Section[];
}

export default function LegalLayout({
  title,
  lastUpdated,
  intro,
  sections,
}: LegalLayoutProps) {
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
              {title}
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto px-6 py-16">
          {/* Intro */}
          <p className="text-base text-slate-600 leading-relaxed mb-12">
            {intro}
          </p>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-base font-semibold text-slate-900 mb-3">
                  {section.title}
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          {/* Contact note */}
          <div className="mt-16 pt-8 border-t border-line">
            <p className="text-sm text-slate-400">
              Questions? Reach us at{" "}
              <a
                href="mailto:hello@owenflow.com"
                className="text-navy hover:underline"
              >
                hello@owenflow.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
