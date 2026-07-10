"use client";

import { useState, type FormEvent } from "react";
import { Check, Lock, Mail, Phone, ShieldCheck, User, Zap } from "lucide-react";
import cadastroDark from "@/assets/cadastro-dark.png";
import cadastroLight from "@/assets/cadastro-light.png";
import cadastroMobileDark from "@/assets/cadastro-mobile-dark.png";
import cadastroMobileLight from "@/assets/cadastro-mobile-light.png";

const benefits = [
  "Acesso imediato à plataforma",
  "Mensagens automáticas",
  "Suporte gratuito",
  "Sem necessidade de cartão",
] as const;

const formPerks = [
  { icon: Zap, title: "Acesso imediato", subtitle: "Comece na hora" },
  { icon: ShieldCheck, title: "100% gratuito", subtitle: "Sem taxas ocultas" },
  { icon: Lock, title: "Seus dados seguros", subtitle: "Privacidade garantida" },
] as const;

function formatWhatsApp(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function FreeSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const phone = "5527997362780";
    const message = [
      "Olá! Quero criar minha conta gratuita na IA Divulgadora.",
      `Nome: ${name.trim()}`,
      `E-mail: ${email.trim()}`,
      `WhatsApp: ${whatsapp.trim()}`,
    ].join("\n");
    window.open(
      `https://api.whatsapp.com/send/?phone=${phone}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section id="cadastro-gratis" className="free-signup-section">
      <div className="free-signup-section__media" aria-hidden>
        <img
          src={cadastroDark}
          alt=""
          className="free-signup-section__bg free-signup-section__bg--desktop free-signup-section__bg--dark"
        />
        <img
          src={cadastroLight}
          alt=""
          className="free-signup-section__bg free-signup-section__bg--desktop free-signup-section__bg--light"
        />
        <div className="free-signup-section__overlay free-signup-section__overlay--desktop" />
      </div>

      <div className="free-signup-section__atmosphere" aria-hidden>
        <span className="free-signup-section__glow free-signup-section__glow--orange" />
        <span className="free-signup-section__glow free-signup-section__glow--blue" />
        <span className="free-signup-section__dots" />
      </div>

      <div className="free-signup-section__page">
        <div className="free-signup-section__layout">
          <div className="free-signup-section__intro">
            <div className="free-signup-section__copy">
              <h2 className="free-signup-section__title">
                Comece a vender mais{" "}
                <span className="free-signup-section__title-accent">hoje mesmo</span>
              </h2>

              <p className="free-signup-section__subtitle">
                <span className="free-signup-section__subtitle-line">
                  Crie sua conta gratuita em menos
                </span>
                <span className="free-signup-section__subtitle-line">
                  de 1 minuto e tenha acesso imediato
                </span>
                <span className="free-signup-section__subtitle-line">
                  a tudo que a <span className="free-signup-section__brand">IA Divulgadora</span>{" "}
                  oferece
                </span>
              </p>

              <ul className="free-signup-section__benefits">
                {benefits.map((label) => (
                  <li key={label} className="free-signup-section__benefit">
                    <span className="free-signup-section__benefit-icon">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="free-signup-section__mobile-visual" aria-hidden>
              <img
                src={cadastroMobileDark}
                alt=""
                className="free-signup-section__mobile-visual-img free-signup-section__mobile-visual-img--dark"
              />
              <img
                src={cadastroMobileLight}
                alt=""
                className="free-signup-section__mobile-visual-img free-signup-section__mobile-visual-img--light"
              />
            </div>
          </div>

          <div className="free-signup-section__form-wrap">
            <form className="free-signup-section__card" onSubmit={handleSubmit}>
              <div className="free-signup-section__card-header">
                <span className="free-signup-section__badge">
                  <Zap className="size-3.5" strokeWidth={2.5} />
                  Crie sua conta grátis
                </span>
                <h3>
                  Acesso imediato,{" "}
                  <span className="free-signup-section__card-accent">sem complicações</span>
                </h3>
                <p>Preencha os dados abaixo e comece agora mesmo</p>
              </div>

              <label className="free-signup-section__field-group">
                <span className="free-signup-section__label">Nome completo</span>
                <span className="free-signup-section__field">
                  <span className="free-signup-section__field-icon" aria-hidden>
                    <User className="size-4" strokeWidth={2} />
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Seu nome completo"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </span>
              </label>

              <label className="free-signup-section__field-group">
                <span className="free-signup-section__label">E-mail</span>
                <span className="free-signup-section__field">
                  <span className="free-signup-section__field-icon" aria-hidden>
                    <Mail className="size-4" strokeWidth={2} />
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </span>
              </label>

              <label className="free-signup-section__field-group">
                <span className="free-signup-section__label">WhatsApp</span>
                <span className="free-signup-section__field">
                  <span
                    className="free-signup-section__field-icon free-signup-section__field-icon--whatsapp"
                    aria-hidden
                  >
                    <Phone className="size-4" strokeWidth={2} />
                  </span>
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="(11) 99999-9999"
                    value={whatsapp}
                    onChange={(event) => setWhatsapp(formatWhatsApp(event.target.value))}
                  />
                </span>
              </label>

              <button type="submit" className="free-signup-section__submit">
                <Zap className="size-4" strokeWidth={2.5} />
                <span>Começar gratuitamente</span>
              </button>

              <p className="free-signup-section__secure">
                <Lock className="size-3.5" strokeWidth={2.25} />
                <span>Não é necessário cartão de crédito</span>
              </p>

              <div className="free-signup-section__divider" aria-hidden />

              <div className="free-signup-section__perks">
                {formPerks.map(({ icon: Icon, title, subtitle }) => (
                  <div key={title} className="free-signup-section__perk">
                    <span className="free-signup-section__perk-icon" aria-hidden>
                      <span className="free-signup-section__perk-icon-circle">
                        <Icon width={16} height={16} strokeWidth={2.25} />
                      </span>
                    </span>
                    <strong>{title}</strong>
                    <span>{subtitle}</span>
                  </div>
                ))}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
