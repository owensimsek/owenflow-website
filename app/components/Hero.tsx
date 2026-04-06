import AppStoreButton from "./AppStoreButton";
import IPhoneMockup from "./IPhoneMockup";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-[60px]">
      {/* Subtle background layers */}
      <div className="absolute inset-0 bg-warm pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(11,29,58,0.07) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(11,29,58,0.04) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

          {/* Left: Text */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-navy/5 px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-navy block" />
              <span className="text-navy text-xs font-medium tracking-wide">Personal Finance · iOS App</span>
            </div>

            {/* Headline */}
            <h1 className="text-[3.25rem] lg:text-[3.75rem] font-semibold text-slate-900 leading-[1.08] tracking-tight">
              Know where your
              <br />
              <span className="text-navy">money goes.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-md">
              Track income, expenses, and debt in one simple, intentional flow.
            </p>

            {/* CTA */}
            <div className="mt-9 flex items-center gap-5">
              <AppStoreButton href="#" size="lg" />
            </div>

            {/* Trust note */}
            <p className="mt-5 text-sm text-slate-400">
              No bank connections. No automatic syncing.
              <br className="hidden sm:block" /> Just you and your numbers.
            </p>
          </div>

          {/* Right: iPhone */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow behind phone */}
              <div
                className="absolute inset-[-24px] rounded-[60px] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(11,29,58,0.12) 0%, transparent 70%)",
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
