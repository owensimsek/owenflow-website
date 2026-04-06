import AppStoreButton from "./AppStoreButton";
import IPhoneMockup from "./IPhoneMockup";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-[60px]">
      {/* Background */}
      <div className="absolute inset-0 bg-warm pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(11,29,58,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <div className="max-w-lg">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-navy/5 px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-navy block" />
              <span className="text-navy text-xs font-medium tracking-wide">
                Personal Finance · iOS App
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[3rem] lg:text-[3.5rem] font-semibold text-slate-900 leading-[1.08] tracking-tight">
              Know where your
              <br />
              <span className="text-navy">money goes.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              Manual tracking for income, expenses, and debt.
              No bank connections — just a clear picture of where you stand.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <AppStoreButton href="#" size="lg" />
            </div>

          </div>

          {/* Right: iPhone */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div
                className="absolute inset-[-32px] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(11,29,58,0.10) 0%, transparent 65%)",
                }}
              />
              <IPhoneMockup variant="dashboard" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
