import { Play, Star } from "lucide-react";
import heroBg from "@/assets/hero-final.png";
import heroBgMobile from "@/assets/hero-final-mobile.png";
import heroLightBg from "@/assets/hero-light-ultimate.png";
import heroLightBgMobile from "@/assets/hero-light-ultimate-v2.png";
import { BrandLogo } from "@/components/landing/BrandLogo";
import { CtaButton } from "@/components/ui/cta-button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const reviewers = [
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
];

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-section__toolbar">
        <ThemeToggle />
      </div>

      <div className="hero-section__layout">
        <div className="hero-section__content">
          <div className="hero-section__panel">
            <BrandLogo className="hero-section__logo" />

            <h1 className="hero-section__title site-heading">
              Automatize seus grupos de WhatsApp e links de afiliado{" "}
              <span className="hero-section__title-accent">
                em um só lugar.
              </span>
            </h1>

            <p className="hero-section__lead site-lead">
              A IA Divulgadora encontra as melhores ofertas, gera seus links de afiliado, cria as
              mensagens e envia{" "}
              <span className="hero-section__lead-highlight">automaticamente</span> para seus
              grupos.
            </p>

            <div className="hero-section__actions">
              <CtaButton href="#planos" size="lg">
                Começar gratuitamente
              </CtaButton>
              <CtaButton
                href="https://www.youtube.com/shorts/B4oYfx34xBw"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                icon={Play}
                showArrow={false}
              >
                Ver demonstração
              </CtaButton>
            </div>

            <div className="hero-section__social">
              <div className="hero-section__avatars">
                {reviewers.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="hero-section__avatar"
                    style={{ marginLeft: i === 0 ? 0 : "-0.75rem", zIndex: reviewers.length - i }}
                  />
                ))}
              </div>

              <div className="hero-section__rating">
                <div className="hero-section__rating-row">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="hero-section__star" />
                  ))}
                  <span className="hero-section__rating-value site-heading">4,9/5</span>
                  <span className="site-copy">(2.325 avaliações)</span>
                </div>
                <p className="hero-section__rating-copy site-copy">
                  Mais de 10 mil afiliados já aumentaram suas vendas com a IA Divulgadora.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-section__visual" aria-hidden>
          <img
            src={heroBgMobile}
            alt=""
            className="hero-section__image hero-section__image--dark hero-section__image--mobile"
          />
          <img
            src={heroBg}
            alt=""
            className="hero-section__image hero-section__image--dark hero-section__image--desktop"
          />
          <img
            src={heroLightBgMobile}
            alt=""
            className="hero-section__image hero-section__image--light hero-section__image--mobile"
          />
          <img
            src={heroLightBg}
            alt=""
            className="hero-section__image hero-section__image--light hero-section__image--desktop"
          />
          <div className="hero-section__overlay-a" />
          <div className="hero-section__overlay-b" />
          <div className="hero-section__visual-fade" />
        </div>
      </div>
    </section>
  );
}
