import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/[0.06] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">

        <Logo size="sm" inverted />

        <div className="flex items-center gap-6 text-sm text-white/30">
          <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
          <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
          <span>© {new Date().getFullYear()} OwenFlow</span>
        </div>

      </div>
    </footer>
  );
}
