import { Logo } from "./Logo";
import { SectionContainer } from "./SectionContainer";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12">
      <SectionContainer>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="mb-3 transition-opacity hover:opacity-90">
              <Logo className="h-7 sm:h-8" />
            </a>
            <p className="text-sm text-zinc-400">
              A inteligência que escala seu faturamento.
            </p>
          </div>

          <div className="flex gap-8">
            <a href="#" className="text-xs text-zinc-500 transition-colors hover:text-orange-400">
              Termos de uso
            </a>
            <a href="#" className="text-xs text-zinc-500 transition-colors hover:text-orange-400">
              Privacidade
            </a>
            <a href="#" className="text-xs text-zinc-500 transition-colors hover:text-orange-400">
              Contato
            </a>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-[10px] uppercase tracking-widest text-zinc-600">
            © 2026 IA Divulgadora Tecnologia Ltda.
          </p>
        </div>
      </SectionContainer>
    </footer>
  );
}
