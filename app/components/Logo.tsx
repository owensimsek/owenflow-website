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

  return (
    <div className="flex items-center gap-2.5">
      <svg
        width={dim}
        height={dim}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <rect width="36" height="36" rx="9" fill={inverted ? "#FFFFFF" : "#0B1D3A"} />
        {/* Circular arc — the "O" in Owen */}
        <path
          d="M18 10C13.58 10 10 13.58 10 18C10 22.42 13.58 26 18 26C22.42 26 26 22.42 26 18"
          stroke={inverted ? "#0B1D3A" : "#FFFFFF"}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Arrow pointing right — the flow */}
        <path
          d="M22 14.5L26 18L22 21.5"
          stroke={inverted ? "#0B1D3A" : "#FFFFFF"}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
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
