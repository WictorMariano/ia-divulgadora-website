import { Logo } from "./Logo";

const links = [
  { href: "#modos", label: "Recursos" },
  { href: "#planos", label: "Preços" },
  { href: "#demonstracao", label: "Como funciona" },
  { href: "#resultados", label: "Depoimentos" },
  { href: "#planos", label: "FAQ" },
];

export function Navbar() {
  return (
    <nav className="glass-nav fixed top-0 z-50 w-full">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex shrink-0 items-center transition-opacity hover:opacity-90">
          <Logo />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-zinc-300/90 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#planos"
          className="inline-flex h-9 items-center justify-center rounded-lg bg-gradient-to-r from-cta to-orange-600 px-4 text-sm font-semibold text-white shadow-[0_0_24px_-6px] shadow-cta/60 transition-all hover:brightness-110"
        >
          Começar gratuitamente
        </a>
      </div>
    </nav>
  );
}
