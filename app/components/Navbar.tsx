import Logo from "./Logo";
import AppStoreButton from "./AppStoreButton";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm/90 backdrop-blur-md border-b border-line">
      <div className="max-w-6xl mx-auto px-6 h-[60px] flex items-center justify-between">
        <Logo size="sm" />
        <AppStoreButton size="sm" />
      </div>
    </header>
  );
}
