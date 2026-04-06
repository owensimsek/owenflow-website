import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-navy">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

          {/* Left: Logo + tagline */}
          <div className="flex flex-col gap-1.5">
            <Link href="/" aria-label="OwenFlow — go to homepage">
              <Logo size="sm" inverted />
            </Link>
            <p className="text-white/30 text-xs pl-[calc(28px+10px)]">
              Personal finance for the intentional.
            </p>
          </div>

          {/* Right: Links + copyright */}
          <div className="flex flex-col sm:items-end gap-2.5">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link
                href="/"
                className="text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                Home
              </Link>
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
              <Link
                href="/contact"
                className="text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                Contact
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
