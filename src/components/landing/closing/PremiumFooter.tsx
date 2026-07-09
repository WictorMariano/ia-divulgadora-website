import { Instagram, Mail, MessageCircle, Phone, Youtube } from "lucide-react";
import { BrandLogo } from "@/components/landing/BrandLogo";
import { SectionFullInner, SectionPanel } from "../SectionPanel";
const resourceLinks = [
  { label: "Como Funciona", href: "#modos" },
  { label: "Funcionalidades", href: "#todos-os-recursos" },
  { label: "Planos e Preços", href: "#planos" },
  { label: "Começar Grátis", href: "#planos" },
];

const marketplaceLinks = [
  { label: "Shopee Afiliados", href: "https://affiliate.shopee.com.br/" },
  { label: "Amazon Afiliados Brasil", href: "https://associados.amazon.com.br/" },
  { label: "Parceiro Magalu", href: "https://www.magalu.com.br/parceiro/" },
  { label: "Mercado Livre Afiliados", href: "https://www.mercadolivre.com.br/l/afiliados" },
  { label: "Natura Consultoria", href: "https://www.natura.com.br/consultoria" },
];

const legalLinks = [
  { label: "Política de Privacidade", href: "#" },
  { label: "Termos de Uso", href: "#" },
  { label: "Canal de Privacidade", href: "#" },
];

const socialLinks = {
  instagram: "https://www.instagram.com/iadivulgadora",
  youtube: "https://www.youtube.com/@IADivulgadora/shorts",
  whatsapp:
    "https://api.whatsapp.com/send/?phone=5527997362780&text&type=phone_number&app_absent=0",
};

const socialLinkClass =
  "flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-orange-500/30 hover:text-orange-400";

export function PremiumFooter() {
  return (
    <SectionPanel variant="footer" fullWidth>
      <SectionFullInner className="py-12 md:pt-14 md:pb-10">
        <footer>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div>
              <a href="#" className="inline-block transition-opacity hover:opacity-90">
                <BrandLogo className="h-10 max-w-[min(100%,280px)] sm:h-11" />
              </a>
              <p className="closing-copy-muted mt-4 max-w-xs text-sm leading-relaxed">
                Plataforma brasileira líder em automação de marketing para afiliados com
                inteligência artificial.
              </p>
              <div className="mt-5 flex gap-3">
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className={socialLinkClass}
                >
                  <Instagram className="size-4" />
                </a>
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className={socialLinkClass}
                >
                  <Youtube className="size-4" />
                </a>
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className={socialLinkClass}
                >
                  <MessageCircle className="size-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Recursos</h4>
              <ul className="mt-4 space-y-2.5">
                {resourceLinks.map((link) => (
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
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Marketplaces Integrados
              </h4>
              <ul className="mt-4 space-y-2.5">
                {marketplaceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="closing-copy-muted text-sm transition-colors hover:text-orange-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contato</h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="closing-copy-muted inline-flex items-center gap-2 text-sm transition-colors hover:text-orange-400"
                  >
                    <Phone className="size-4 shrink-0 text-emerald-400" />
                    (27) 99736-2780
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
                <li className="closing-copy-muted text-sm leading-relaxed">Seg-Sex, 9h-18h</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-8 text-center">
            <p className="closing-copy-muted text-xs leading-relaxed sm:text-sm">
              © 2023–2026 IA Divulgadora - Automação de Afiliados com Inteligência Artificial.
              Todos os direitos reservados.
            </p>
            <p className="closing-copy-muted mt-2 text-xs sm:text-sm">
              CNPJ: 60.994.329/0001-47 | IA Divulgadora Tecnologia Ltda
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-white/40 transition-colors hover:text-orange-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </SectionFullInner>
    </SectionPanel>
  );
}
