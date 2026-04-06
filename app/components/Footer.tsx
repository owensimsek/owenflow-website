import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-navy">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

          {/* Left: Logo + tagline */}
          <div className="flex flex-col gap-1.5">
            <Logo size="sm" inverted />
            <p className="text-white/30 text-xs pl-[calc(28px+10px)]">
              Personal finance for the intentional.
            </p>
          </div>

          {/* Right: Links + copyright */}
          <div className="flex flex-col sm:items-end gap-2.5">
            <div className="flex items-center gap-5">
              <Link
                href="/privacy"
                className="text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
            <p className="text-xs text-white/20">
              © {new Date().getFullYear()} OwenFlow. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
