"use client";

import { logEvent } from "firebase/analytics";
import { initAnalytics } from "../lib/firebase";

interface AppStoreButtonProps {
  href?: string;
  size?: "sm" | "default" | "lg";
  theme?: "dark" | "light";
  location?: string;
}

export default function AppStoreButton({
  href = "#",
  size = "default",
  theme = "dark",
  location = "unknown",
}: AppStoreButtonProps) {
  const isDark = theme === "dark";

  const padding = { sm: "px-4 py-2.5", default: "px-5 py-3", lg: "px-6 py-3.5" }[size];
  const gap = { sm: "gap-2.5", default: "gap-3", lg: "gap-3.5" }[size];
  const iconSize = { sm: "w-5 h-5", default: "w-5 h-5", lg: "w-6 h-6" }[size];
  const labelSize = { sm: "text-[10px]", default: "text-[10px]", lg: "text-xs" }[size];
  const nameSize = { sm: "text-xs", default: "text-[13px]", lg: "text-sm" }[size];

  async function handleClick() {
    const analytics = await initAnalytics();
    if (analytics) {
      logEvent(analytics, "app_store_click", { location });
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`inline-flex items-center ${padding} ${gap} rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm select-none ${
        isDark
          ? "bg-navy text-white hover:bg-navy-deep"
          : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
      }`}
      aria-label="Download OwenFlow on the App Store"
    >
      {/* Apple logo */}
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={iconSize}
        aria-hidden="true"
      >
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <div>
        <p className={`leading-none opacity-70 ${labelSize}`}>Download on the</p>
        <p className={`font-semibold leading-tight mt-0.5 ${nameSize}`}>App Store</p>
      </div>
    </a>
  );
}
