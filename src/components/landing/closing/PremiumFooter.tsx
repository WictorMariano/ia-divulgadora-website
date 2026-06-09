import { Instagram, Mail, MessageCircle, Youtube } from "lucide-react";
import { Logo } from "../Logo";
import { SectionFullInner, SectionPanel } from "../SectionPanel";

const credibility = [
  { emoji: "👥", label: "+1.500 afiliados" },
  { emoji: "📨", label: "Milhões de mensagens" },
  { emoji: "🚀", label: "Milhares de ofertas processadas" },
  { emoji: "⭐", label: "Avaliação média 4.9" },
];

const productLinks = [
  { label: "Como Funciona", href: "#modos" },
  { label: "Recursos", href: "#todos-os-recursos" },
  { label: "Planos", href: "#planos" },
  { label: "Integrações", href: "#integracoes" },
];

const marketplaceLinks = ["Shopee", "Amazon", "Mercado Livre", "Magalu", "Natura"];

export function PremiumFooter() {
  return (
    <SectionPanel variant="footer" fullWidth>
      <SectionFullInner className="py-12 md:pt-14 md:pb-10">
        <footer>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div>
              <a href="#" className="inline-block transition-opacity hover:opacity-90">
                <Logo className="h-8" />
              </a>
              <p className="closing-copy-muted mt-4 max-w-xs text-sm leading-relaxed">
                A inteligência artificial que automatiza suas divulgações de afiliado e escala seu
                faturamento.
              </p>
              <div className="mt-5 flex gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-orange-500/30 hover:text-orange-400"
                >
                  <Instagram className="size-4" />
                </a>
                <a
                  href="https://www.youtube.com/shorts/B4oYfx34xBw"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-orange-500/30 hover:text-orange-400"
                >
                  <Youtube className="size-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Produto</h4>
              <ul className="mt-4 space-y-2.5">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="closing-copy-muted text-sm transition-colors hover:text-orange-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Marketplaces</h4>
              <ul className="mt-4 space-y-2.5">
                {marketplaceLinks.map((name) => (
                  <li key={name}>
                    <span className="closing-copy-muted text-sm">{name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contato</h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="closing-copy-muted inline-flex items-center gap-2 text-sm transition-colors hover:text-orange-400"
                  >
                    <MessageCircle className="size-4 shrink-0 text-emerald-400" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contato@iadivulgadora.com.br"
                    className="closing-copy-muted inline-flex items-center gap-2 text-sm transition-colors hover:text-orange-400"
                  >
                    <Mail className="size-4 shrink-0 text-sky-400" />
                    contato@iadivulgadora.com.br
                  </a>
                </li>
                <li className="closing-copy-muted text-sm leading-relaxed">
                  Seg a Sex, 9h às 18h
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 border-t border-white/10 pt-8 sm:gap-x-6">
            {credibility.map((item) => (
              <span
                key={item.label}
                className="closing-copy inline-flex items-center gap-2 text-xs font-medium sm:text-sm"
              >
                <span aria-hidden>{item.emoji}</span>
                {item.label}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
            <p className="text-[10px] uppercase tracking-widest text-white/40">
              © 2026 IA Divulgadora Tecnologia Ltda.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-white/40 transition-colors hover:text-orange-400">
                Termos de uso
              </a>
              <a href="#" className="text-xs text-white/40 transition-colors hover:text-orange-400">
                Privacidade
              </a>
            </div>
          </div>
        </footer>
      </SectionFullInner>
    </SectionPanel>
  );
}
