type ScreenVariant = "dashboard" | "addExpense" | "score";

interface IPhoneMockupProps {
  variant?: ScreenVariant;
  className?: string;
}

function DashboardScreen() {
  return (
    <div className="w-full h-full bg-[#0B1D3A] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-5 pt-3 pb-3 flex items-center justify-between">
        <div>
          <p className="text-white/40 text-[10px] font-medium tracking-wider uppercase">April 2025</p>
          <h2 className="text-white text-base font-semibold mt-0.5 tracking-tight">My Finances</h2>
        </div>
        <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </div>

      {/* Balance card */}
      <div className="mx-4 bg-white/8 rounded-2xl p-4 border border-white/[0.08]">
        <p className="text-white/40 text-[9px] font-semibold tracking-wider uppercase">Net Balance</p>
        <p className="text-white text-2xl font-semibold mt-1 tracking-tight">$4,240</p>
        <div className="flex gap-5 mt-2.5">
          <div>
            <p className="text-white/40 text-[9px] font-medium tracking-wider uppercase">Income</p>
            <p className="text-emerald-400 text-xs font-semibold mt-0.5">+$6,500</p>
          </div>
          <div>
            <p className="text-white/40 text-[9px] font-medium tracking-wider uppercase">Expenses</p>
            <p className="text-rose-400 text-xs font-semibold mt-0.5">−$2,260</p>
          </div>
        </div>
      </div>

      {/* Transactions */}
      <div className="px-4 mt-3 flex-1 overflow-hidden">
        <p className="text-white/40 text-[9px] font-semibold tracking-wider uppercase mb-2">Recent</p>
        {[
          { name: "Coffee Shop", cat: "Food", amount: "−$6", time: "Today" },
          { name: "Grocery Store", cat: "Food", amount: "−$84", time: "Yesterday" },
          { name: "Salary", cat: "Income", amount: "+$3,250", pos: true, time: "Apr 1" },
          { name: "Monthly Gym", cat: "Health", amount: "−$45", time: "Mar 31" },
          { name: "Freelance", cat: "Income", amount: "+$800", pos: true, time: "Mar 28" },
        ].map((t) => (
          <div
            key={t.name + t.time}
            className="flex items-center justify-between py-2 border-b border-white/[0.06]"
          >
            <div>
              <p className="text-white text-[11px] font-medium">{t.name}</p>
              <p className="text-white/30 text-[9px] mt-0.5">{t.cat} · {t.time}</p>
            </div>
            <p className={`text-[11px] font-semibold ${t.pos ? "text-emerald-400" : "text-white/70"}`}>
              {t.amount}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="flex justify-around items-center px-4 pt-2 pb-3 border-t border-white/[0.06]">
        {[
          { label: "Home", active: true, icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" },
          { label: "Add", icon: "M12 4v16m8-8H4" },
          { label: "Score", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-0.5">
            <svg
              className={`w-4 h-4 ${item.active ? "text-white" : "text-white/30"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
            </svg>
            <span className={`text-[8px] ${item.active ? "text-white" : "text-white/30"}`}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AddExpenseScreen() {
  return (
    <div className="w-full h-full bg-[#0B1D3A] flex flex-col overflow-hidden">
      <div className="px-5 pt-3 pb-4">
        <p className="text-white/40 text-[10px] font-medium tracking-wider uppercase">New Entry</p>
        <h2 className="text-white text-base font-semibold mt-0.5">Add Expense</h2>
      </div>

      {/* Amount */}
      <div className="mx-4 mb-4 text-center py-4 bg-white/[0.05] rounded-2xl border border-white/[0.08]">
        <p className="text-white/30 text-[10px] font-medium tracking-wider uppercase mb-1">Amount</p>
        <p className="text-white text-3xl font-semibold tracking-tight">$0.00</p>
        <p className="text-white/20 text-[10px] mt-1">tap to enter</p>
      </div>

      {/* Fields */}
      <div className="px-4 space-y-2.5">
        {[
          { label: "Category", value: "Food & Drinks" },
          { label: "Note", value: "Coffee Shop" },
          { label: "Date", value: "Today, Apr 6" },
        ].map((f) => (
          <div key={f.label} className="flex items-center justify-between py-2.5 px-3.5 bg-white/[0.05] rounded-xl border border-white/[0.06]">
            <span className="text-white/40 text-[11px]">{f.label}</span>
            <span className="text-white text-[11px] font-medium">{f.value}</span>
          </div>
        ))}
      </div>

      {/* Categories */}
      <div className="px-4 mt-4">
        <p className="text-white/30 text-[9px] font-semibold tracking-wider uppercase mb-2">Quick Categories</p>
        <div className="flex flex-wrap gap-1.5">
          {["Food", "Transport", "Health", "Shopping", "Bills", "Other"].map((c) => (
            <span
              key={c}
              className={`px-2.5 py-1 rounded-full text-[10px] font-medium ${
                c === "Food" ? "bg-white/20 text-white" : "bg-white/[0.06] text-white/40"
              }`}
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-4 mt-auto mb-4">
        <div className="w-full py-3 bg-white rounded-xl text-center">
          <span className="text-navy text-xs font-semibold">Save Entry</span>
        </div>
      </div>
    </div>
  );
}

function ScoreScreen() {
  return (
    <div className="w-full h-full bg-[#0B1D3A] flex flex-col overflow-hidden">
      <div className="px-5 pt-3 pb-3">
        <p className="text-white/40 text-[10px] font-medium tracking-wider uppercase">Insights</p>
        <h2 className="text-white text-base font-semibold mt-0.5">OwenFlow Score</h2>
      </div>

      {/* Score circle */}
      <div className="flex flex-col items-center mt-2 mb-4">
        <div className="relative w-28 h-28">
          <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
            <circle
              cx="50" cy="50" r="40"
              fill="none"
              stroke="#ffffff"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 40 * 0.78} ${2 * Math.PI * 40}`}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-white text-2xl font-bold tracking-tight">78</span>
            <span className="text-white/40 text-[9px] font-medium">/ 100</span>
          </div>
        </div>
        <p className="text-white/60 text-xs mt-2 font-medium">Good Awareness</p>
      </div>

      {/* Breakdown */}
      <div className="px-4 space-y-2">
        {[
          { label: "Expense Tracking", score: 90, color: "bg-emerald-400" },
          { label: "Income Logging", score: 75, color: "bg-blue-400" },
          { label: "Debt Awareness", score: 60, color: "bg-amber-400" },
          { label: "Monthly Consistency", score: 85, color: "bg-emerald-400" },
        ].map((item) => (
          <div key={item.label}>
            <div className="flex justify-between mb-1">
              <span className="text-white/50 text-[10px]">{item.label}</span>
              <span className="text-white/70 text-[10px] font-medium">{item.score}</span>
            </div>
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className={`h-full ${item.color} rounded-full`}
                style={{ width: `${item.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mx-4 mt-4 p-3 bg-white/[0.05] rounded-xl border border-white/[0.06]">
        <p className="text-white/60 text-[10px] leading-relaxed">
          Log your debt entries to improve your Debt Awareness score.
        </p>
      </div>
    </div>
  );
}

export default function IPhoneMockup({ variant = "dashboard", className = "" }: IPhoneMockupProps) {
  const screens: Record<ScreenVariant, React.ReactNode> = {
    dashboard: <DashboardScreen />,
    addExpense: <AddExpenseScreen />,
    score: <ScoreScreen />,
  };

  return (
    <div className={`relative w-[260px] h-[540px] flex-shrink-0 ${className}`}>
      {/* Outer frame */}
      <div className="absolute inset-0 rounded-[44px] bg-[#1C1C1E] shadow-[0_32px_64px_rgba(0,0,0,0.30),0_0_0_1px_rgba(255,255,255,0.08)]" />
      {/* Side buttons */}
      <div className="absolute left-[-3px] top-[90px] w-[3px] h-7 bg-[#2C2C2E] rounded-l-sm" />
      <div className="absolute left-[-3px] top-[128px] w-[3px] h-10 bg-[#2C2C2E] rounded-l-sm" />
      <div className="absolute left-[-3px] top-[178px] w-[3px] h-10 bg-[#2C2C2E] rounded-l-sm" />
      <div className="absolute right-[-3px] top-[120px] w-[3px] h-14 bg-[#2C2C2E] rounded-r-sm" />
      {/* Screen bezel */}
      <div className="absolute inset-[3px] rounded-[41px] bg-[#0B1D3A] overflow-hidden">
        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pt-3 pb-1">
          <span className="text-white text-[11px] font-semibold">9:41</span>
          <div className="flex items-center gap-1.5">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1.5 8.5C5.7 4.3 11.85 3.8 16.65 7.1L15.2 8.6c-3.85-2.7-9.05-2.4-12.55 0.95L1.5 8.5zm3 3.1c2.65-2.4 6.5-3 9.65-1.45L12.6 11.7c-2.4-1.05-5.2-.65-7.2 1.05L4.5 11.6zm3.1 3L9 16c1.15-.85 2.75-1.05 4.1-.55l-1.6 1.6c-.65-.05-1.35.05-1.9.55l-1.5-1.5z" />
            </svg>
            <svg className="w-4 h-2.5 text-white" viewBox="0 0 24 12" fill="currentColor">
              <rect x="0" y="1" width="21" height="10" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
              <rect x="22" y="4" width="2" height="4" rx="1" fill="currentColor" opacity="0.4"/>
              <rect x="1.5" y="2.5" width="16" height="7" rx="2" fill="currentColor"/>
            </svg>
          </div>
        </div>
        {/* Dynamic Island */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-full z-10" />
        {/* App content */}
        <div className="w-full h-[calc(100%-36px)] mt-[4px] overflow-hidden">
          {screens[variant]}
        </div>
      </div>
    </div>
  );
}
