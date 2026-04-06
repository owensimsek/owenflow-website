import IPhoneMockup from "./IPhoneMockup";

export default function PreviewSection() {
  return (
    <section className="bg-white border-y border-line py-24 lg:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4">
            The App
          </p>
          <h2 className="text-[2rem] lg:text-[2.4rem] font-semibold text-slate-900 leading-[1.2] tracking-tight">
            Designed to be used.
            <br />
            Every single day.
          </h2>
          <p className="mt-4 text-base text-slate-500 leading-relaxed max-w-md mx-auto">
            Clean, focused, and distraction-free. OwenFlow stays out of your way
            and lets you do the one thing that matters: stay aware of your money.
          </p>
        </div>

        {/* Three phones */}
        <div className="flex items-end justify-center gap-6 lg:gap-10">

          {/* Left phone — slightly lower, slightly smaller */}
          <div className="hidden md:block opacity-70 translate-y-8 scale-[0.90] origin-bottom">
            <IPhoneMockup variant="addExpense" />
          </div>

          {/* Center phone — prominent */}
          <div className="relative z-10">
            {/* Glow */}
            <div
              className="absolute inset-[-40px] pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(11,29,58,0.10) 0%, transparent 65%)",
              }}
            />
            <IPhoneMockup variant="dashboard" />
          </div>

          {/* Right phone — slightly lower, slightly smaller */}
          <div className="hidden md:block opacity-70 translate-y-8 scale-[0.90] origin-bottom">
            <IPhoneMockup variant="score" />
          </div>

        </div>

        {/* Labels below phones */}
        <div className="hidden md:flex items-center justify-center gap-10 mt-8">
          {[
            { label: "Add Expense", desc: "Log in seconds" },
            { label: "Dashboard", desc: "Full picture at a glance" },
            { label: "OwenFlow Score", desc: "Track your clarity" },
          ].map((item) => (
            <div key={item.label} className="text-center w-[260px]">
              <p className="text-xs font-semibold text-slate-700">{item.label}</p>
              <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
