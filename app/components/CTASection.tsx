import AppStoreButton from "./AppStoreButton";

export default function CTASection() {
  return (
    <section className="bg-navy py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle radial highlight */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top center, rgba(255,255,255,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold tracking-widest text-white/30 uppercase mb-6">
          Get Started
        </p>

        <h2 className="text-[2.5rem] lg:text-[3rem] font-semibold text-white leading-[1.1] tracking-tight">
          Know where your
          <br />
          money goes.
        </h2>

        <p className="mt-5 text-lg text-white/50 leading-relaxed max-w-md mx-auto">
          Start tracking today. No setup, no bank connections,
          no complexity — just clarity.
        </p>

        <div className="mt-9 flex justify-center">
          <AppStoreButton href="#" size="lg" theme="light" />
        </div>

        <p className="mt-5 text-sm text-white/25">
          Available on iOS · Free to download
        </p>
      </div>
    </section>
  );
}
