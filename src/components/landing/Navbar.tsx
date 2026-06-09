import { Logo } from "./Logo";
import { CtaButton } from "@/components/ui/cta-button";

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

        <CtaButton href="#planos" size="sm" showArrow={false}>
          Começar gratuitamente
        </CtaButton>
      </div>
    </nav>
  );
}
