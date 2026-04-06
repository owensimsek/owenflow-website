const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4m8 8V4" />
      </svg>
    ),
    label: "Expenses",
    title: "Log every expense.",
    body: "Capture what you spend as it happens. Add a category, a note, a date — and see exactly where your money goes.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-8-8h16" />
      </svg>
    ),
    label: "Income",
    title: "Track what comes in.",
    body: "Record every source — salary, freelance, or anything else. Know your real total, not just a rough estimate.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    label: "Debt",
    title: "Stay aware of what you owe.",
    body: "Log every obligation — loans, balances, anything you carry. Seeing it clearly is the first step toward managing it.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    label: "OwenFlow Score",
    title: "Your financial clarity score.",
    body: "A single number that measures how well you know your finances. Updated with every entry you make.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-warm py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-lg mb-14">
          <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4">
            Features
          </p>
          <h2 className="text-[2rem] lg:text-[2.4rem] font-semibold text-slate-900 leading-[1.2] tracking-tight">
            Everything you need.
            <br />
            Nothing you don&apos;t.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {features.map((f) => (
            <div
              key={f.label}
              className="bg-white rounded-2xl border border-line p-8 hover:border-navy/20 transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-navy/[0.07] text-navy flex items-center justify-center mb-5">
                {f.icon}
              </div>
              <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-2">
                {f.label}
              </p>
              <h3 className="text-[1.05rem] font-semibold text-slate-900 leading-snug mb-2.5">
                {f.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
