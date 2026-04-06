interface LogoProps {
  size?: "sm" | "default" | "lg";
  inverted?: boolean;
}

export default function Logo({ size = "default", inverted = false }: LogoProps) {
  const dim = { sm: 28, default: 34, lg: 44 }[size];
  const textClass = {
    sm: "text-base",
    default: "text-[1.1rem]",
    lg: "text-2xl",
  }[size];

  // Unique gradient ID per variant to avoid conflicts when both appear on the page
  const gradId = inverted ? "owenflow-logo-grad-inv" : "owenflow-logo-grad";

  return (
    <div className="flex items-center gap-2.5">
      <svg
        width={dim}
        height={dim}
        viewBox="0 0 1024 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 rounded-[21%]"
        aria-label="OwenFlow logo"
      >
        <defs>
          {inverted ? (
            <radialGradient id={gradId} cx="38%" cy="32%" r="68%">
              <stop offset="0%" stopColor="#2A4570" />
              <stop offset="100%" stopColor="#0B1D3A" />
            </radialGradient>
          ) : (
            <radialGradient id={gradId} cx="38%" cy="32%" r="68%">
              <stop offset="0%" stopColor="#223759" />
              <stop offset="100%" stopColor="#181F2C" />
            </radialGradient>
          )}
        </defs>

        {/* Background */}
        <rect width="1024" height="1024" fill={`url(#${gradId})`} />

        {/* OwenFlow mark — three flowing paths */}
        <path
          d="M 238 634 A 300 300 0 0 1 755 336"
          stroke="white"
          strokeWidth="86"
          strokeLinecap="round"
        />
        <path
          d="M 786 390 A 300 300 0 0 1 269 688"
          stroke="white"
          strokeWidth="86"
          strokeLinecap="round"
        />
        <path
          d="M 221 680 C 568 694 412 318 803 342"
          stroke="white"
          strokeWidth="58"
          strokeLinecap="round"
        />
      </svg>

      <span
        className={`font-semibold tracking-tight ${textClass} ${
          inverted ? "text-white" : "text-navy"
        }`}
      >
        OwenFlow
      </span>
    </div>
  );
}
