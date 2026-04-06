export default function PhilosophySection() {
  return (
    <section className="bg-white border-y border-line py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-12 text-center">
          Why OwenFlow
        </p>

        {/* Pull quote */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-[2rem] lg:text-[2.5rem] font-semibold text-slate-900 leading-[1.2] tracking-tight">
            Awareness is the
            <br />
            first step.
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            Most people don&apos;t have a clear picture of their finances — not because they
            don&apos;t care, but because they&apos;ve never had to slow down and look.
            OwenFlow changes that.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-px bg-line rounded-2xl overflow-hidden border border-line">
          {[
            {
              number: "01",
              title: "Manual entry creates clarity.",
              body:
                "Every time you enter a number, you create a moment of attention. That moment adds up. You start to notice patterns you never saw before.",
            },
            {
              number: "02",
              title: "No connections. No surprises.",
              body:
                "OwenFlow doesn't connect to your bank. You are in full control of what goes in — which means you are fully aware of what comes out.",
            },
            {
              number: "03",
              title: "Simple enough to actually use.",
              body:
                "Most finance apps fail because they're too complex. OwenFlow gives you exactly what you need and nothing more. Just clarity.",
            },
          ].map((pillar) => (
            <div key={pillar.number} className="bg-white p-8 lg:p-10">
              <span className="text-xs font-semibold text-slate-300 tracking-widest">{pillar.number}</span>
              <h3 className="mt-4 text-base font-semibold text-slate-900 leading-snug">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">{pillar.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
