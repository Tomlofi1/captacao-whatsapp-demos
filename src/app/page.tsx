import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  AtSign,
  BadgeCheck,
  ExternalLink,
  Globe2,
  LayoutTemplate,
  Link2,
  MessageCircle,
  MousePointerClick,
  PanelsTopLeft,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Store,
  Target,
  Workflow,
} from "lucide-react";

import { ScrollRevealController } from "@/components/ScrollRevealController";
import { createWhatsAppLink } from "@/lib/whatsapp";

const whatsappHref = createWhatsAppLink(
  "5582987544094",
  "Olá, vim pelo Instagram e gostaria de solicitar um orçamento para uma landing page ou site.",
);

const instagramHref = "https://www.instagram.com/";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

const impactItems = [
  {
    title: "Mais confiança",
    text: "A primeira impressão do cliente fica mais profissional.",
    icon: ShieldCheck,
  },
  {
    title: "WhatsApp direto",
    text: "A página guia a visita até a conversa certa.",
    icon: MessageCircle,
  },
  {
    title: "Um link melhor",
    text: "Ideal para bio, anúncios, indicação e cartão digital.",
    icon: Link2,
  },
];

const services = [
  {
    title: "Landing pages",
    text: "Página focada em apresentar uma oferta e gerar contato rápido.",
    icon: PanelsTopLeft,
  },
  {
    title: "Sites institucionais",
    text: "Estrutura simples para mostrar serviços, diferenciais e canais.",
    icon: Globe2,
  },
  {
    title: "Páginas para WhatsApp",
    text: "Texto, botões e mensagem pronta para reduzir atrito no atendimento.",
    icon: MessageCircle,
  },
  {
    title: "Portfólios digitais",
    text: "Vitrine clara para serviços, trabalhos, fotos e provas de confiança.",
    icon: LayoutTemplate,
  },
  {
    title: "Presença digital local",
    text: "Organização do básico para seu negócio parecer mais confiável online.",
    icon: Store,
  },
];

const processSteps = [
  {
    title: "Entendemos seu negócio",
    text: "Organizamos objetivo, público, serviços e caminho de contato.",
    icon: Target,
  },
  {
    title: "Criamos uma página profissional",
    text: "Desenhamos uma experiência objetiva, bonita e fácil de editar.",
    icon: Sparkles,
  },
  {
    title: "O cliente chega até seu WhatsApp",
    text: "A navegação conduz a visita para uma conversa com contexto.",
    icon: PhoneCall,
  },
];

const projects = [
  {
    href: "/bella-forma",
    name: "Bella Forma",
    category: "Estética e negócio local",
    description:
      "Página comercial com foco em apresentação clara, confiança e contato rápido.",
    accent: "from-[#f7d7e4] via-[#fff7fb] to-[#d5f4ef]",
  },
  {
    href: "/autoprime-oficina",
    name: "AutoPrime",
    category: "Automotivo e serviços",
    description:
      "Landing page para negócio automotivo com foco em serviços, credibilidade e WhatsApp.",
    accent: "from-[#d8e6ff] via-[#f7fbff] to-[#f4e1a8]",
  },
];

function OfficialLogo({ priority = false }: { priority?: boolean }) {
  return (
    <Image
      src="/images/logo-fa.png"
      alt="Logo FA Soluções Digitais"
      width={1254}
      height={1254}
      priority={priority}
      className="h-12 w-12 shrink-0 rounded-xl bg-white object-contain p-1 shadow-[0_12px_34px_rgba(0,0,0,0.22)]"
    />
  );
}

function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#8ff2e1]">
      <span className="h-px w-7 bg-[#19b99f]" />
      {children}
    </p>
  );
}

function PrimaryButton({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a
      className="group inline-flex min-h-[3.15rem] items-center justify-center gap-2 rounded-full bg-[#19b99f] px-6 py-3 text-sm font-black text-[#041410] shadow-[0_18px_48px_rgba(25,185,159,0.28)] transition hover:-translate-y-0.5 hover:bg-[#52dcc7] hover:shadow-[0_22px_58px_rgba(25,185,159,0.36)]"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {children}
      <ArrowRight
        className="h-4 w-4 transition group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050d18]/94 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[4.75rem] max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link className="flex min-w-0 items-center gap-3.5" href="/">
          <OfficialLogo priority />
          <span className="min-w-0">
            <span className="block text-[0.95rem] font-black leading-5 text-white sm:text-base">
              FA Soluções Digitais
            </span>
            <span className="mt-0.5 hidden text-xs font-semibold leading-4 text-[#aebdca] sm:block">
              Sites para negócios locais
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 text-sm font-bold text-[#d8e4ec] md:flex"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <a
              className="transition hover:text-[#8ff2e1]"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#6ee7d6]/30 bg-[#19b99f] px-4 text-sm font-black text-[#041410] shadow-[0_14px_36px_rgba(25,185,159,0.28)] transition hover:-translate-y-0.5 hover:bg-[#52dcc7]"
          href={whatsappHref}
          rel="noreferrer"
          target="_blank"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

function BrowserMockup() {
  return (
    <div className="relative">
      <div className="absolute -left-4 top-9 hidden h-[82%] w-10 rounded-l-[2rem] border border-white/10 bg-white/[0.045] md:block" />
      <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#0a1828] shadow-[0_34px_100px_rgba(0,0,0,0.36)]">
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.045] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff7063]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#f4c860]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#19b99f]" />
          </div>
          <span className="rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-bold text-white/70 shadow-sm">
            fa-solucoes.digital
          </span>
        </div>

        <div className="grid min-h-[21rem] gap-0 bg-[linear-gradient(135deg,#0d2034,#081322)] md:grid-cols-[1fr_0.84fr]">
          <div className="p-6 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8ff2e1]">
              Página profissional
            </p>
            <div className="mt-5 h-4 w-9/12 rounded-full bg-white" />
            <div className="mt-3 h-4 w-7/12 rounded-full bg-white/75" />
            <div className="mt-6 space-y-2.5">
              <div className="h-2.5 w-full rounded-full bg-white/20" />
              <div className="h-2.5 w-10/12 rounded-full bg-white/20" />
              <div className="h-2.5 w-8/12 rounded-full bg-white/20" />
            </div>
            <div className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#19b99f] px-5 text-sm font-black text-[#041410]">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Chamar no WhatsApp
            </div>
          </div>

          <div className="relative hidden border-l border-white/10 bg-[#06111f] p-5 text-white md:block">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:26px_26px]" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="rounded-3xl border border-white/20 bg-white/10 p-4">
                <div className="flex items-center gap-3">
                  <AtSign className="h-5 w-5 text-[#19b99f]" aria-hidden="true" />
                  <span className="text-sm font-black">Instagram</span>
                </div>
                <div className="mt-4 h-2 w-8/12 rounded-full bg-white/25" />
              </div>
              <div className="rounded-3xl border border-white/20 bg-white/10 p-4">
                <div className="flex items-center gap-3">
                  <Globe2 className="h-5 w-5 text-[#19b99f]" aria-hidden="true" />
                  <span className="text-sm font-black">Site</span>
                </div>
                <div className="mt-4 h-2 w-10/12 rounded-full bg-white/25" />
              </div>
              <div className="rounded-3xl bg-[#19b99f] p-4 text-[#041410]">
                <div className="flex items-center gap-3">
                  <PhoneCall className="h-5 w-5" aria-hidden="true" />
                  <span className="text-sm font-black">Cliente no WhatsApp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="absolute -bottom-10 right-3 hidden w-[11rem] rotate-3 rounded-[2rem] border border-white/10 bg-[#050d18] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.36)] sm:block lg:right-10">
      <div className="rounded-[1.55rem] bg-[#0d2034] p-3">
        <div className="mx-auto h-1.5 w-12 rounded-full bg-white/25" />
        <div className="mt-5 rounded-2xl bg-[#06111f] p-3 text-white">
          <p className="text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#86eadc]">
            Link da bio
          </p>
          <div className="mt-3 h-2 w-10/12 rounded-full bg-white/70" />
          <div className="mt-2 h-2 w-7/12 rounded-full bg-white/30" />
        </div>
        <div className="mt-3 space-y-2">
          <div className="h-10 rounded-2xl bg-white/10" />
          <div className="h-10 rounded-2xl bg-[#19b99f]" />
          <div className="h-10 rounded-2xl bg-white/10" />
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#06111f] px-4 pb-20 pt-10 text-white sm:pb-28 sm:pt-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(25,185,159,0.18),transparent_34%),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:auto,64px_64px]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div data-reveal="fade">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#8ff2e1] shadow-sm">
              <BadgeCheck className="h-4 w-4" aria-hidden="true" />
              Agência digital boutique
            </p>

            <h1 className="mt-6 max-w-3xl text-[2.35rem] font-black leading-[1.02] tracking-normal text-white sm:text-5xl lg:text-[4rem]">
              Sites e landing pages que transformam visitas em conversas no
              WhatsApp
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#b6c6d2] sm:text-lg">
              A FA Soluções Digitais cria páginas profissionais para negócios
              locais venderem melhor, passarem mais confiança e receberem
              clientes de forma simples.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryButton href={whatsappHref}>Solicitar orçamento</PrimaryButton>
              <a
                className="inline-flex min-h-[3.15rem] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-[#19b99f] hover:bg-white/20"
                href="#projetos"
              >
                Ver projetos
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div
            className="relative pb-12 sm:pb-16"
            data-reveal="fade"
            style={{ transitionDelay: "120ms" }}
          >
            <BrowserMockup />
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  return (
    <section className="bg-[#06111f] px-4 py-10">
      <div className="mx-auto grid max-w-6xl gap-3 md:grid-cols-3">
        {impactItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <article
              className="group rounded-[1.45rem] border border-white/10 bg-white/[0.055] p-5 transition hover:-translate-y-1 hover:border-[#19b99f]/50 hover:bg-white/10 hover:shadow-[0_20px_54px_rgba(0,0,0,0.22)]"
              data-reveal="fade"
              key={item.title}
              style={{ transitionDelay: `${index * 55}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#12304a] text-[#8ff2e1] transition group-hover:bg-[#19b99f] group-hover:text-[#041410]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-xs font-black text-white/30">
                  0{index + 1}
                </span>
              </div>
              <h2 className="mt-5 text-lg font-black text-white">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#9dafbd]">
                {item.text}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="bg-[#071523] px-4 py-16 sm:py-20" id="servicos">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl" data-reveal="fade">
          <SectionKicker>O que a FA cria</SectionKicker>
          <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-5xl">
            Páginas enxutas, bonitas e pensadas para gerar contato
          </h2>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isWide = index === 0 || index === 4;

            return (
              <article
                className={[
                  "group rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-5 transition hover:-translate-y-1 hover:border-[#19b99f]/60 hover:bg-white/10 hover:shadow-[0_22px_60px_rgba(0,0,0,0.22)]",
                  isWide ? "lg:col-span-3" : "lg:col-span-2",
                ].join(" ")}
                data-reveal="fade"
                key={service.title}
                style={{ transitionDelay: `${index * 55}ms` }}
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#0d2034] text-[#8ff2e1] transition group-hover:border-[#19b99f] group-hover:bg-[#19b99f] group-hover:text-[#041410]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#9dafbd]">
                      {service.text}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-[#0a1828] px-4 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-7 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div data-reveal="fade">
            <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#86eadc]">
              <Workflow className="h-4 w-4" aria-hidden="true" />
              Como funciona
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
              Um processo direto para sair do improviso
            </h2>
          </div>
          <p
            className="max-w-2xl text-base leading-8 text-white/60 md:justify-self-end"
            data-reveal="fade"
            style={{ transitionDelay: "70ms" }}
          >
            A ideia é simplificar a presença digital do negócio, sem transformar
            o projeto em algo lento, confuso ou caro de manter.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                className="relative rounded-[1.6rem] border border-white/20 bg-white/[0.055] p-6 transition hover:-translate-y-1 hover:bg-white/10"
                data-reveal="fade"
                key={step.title}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                {index < processSteps.length - 1 ? (
                  <span className="absolute left-1/2 top-8 hidden h-px w-full bg-[linear-gradient(90deg,rgba(25,185,159,0.55),transparent)] md:block" />
                ) : null}
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#19b99f] text-[#041410]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-[#86eadc]">
                  Passo 0{index + 1}
                </p>
                <h3 className="mt-3 text-xl font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">
                  {step.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectMockup({ accent, name }: { accent: string; name: string }) {
  return (
    <div className={["rounded-[1.4rem] bg-gradient-to-br p-3", accent].join(" ")}>
      <div className="overflow-hidden rounded-[1.05rem] border border-white/80 bg-white/90 shadow-[0_18px_44px_rgba(10,24,43,0.10)]">
        <div className="flex items-center gap-1.5 border-b border-[#e2e7e9] px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#071523]" />
          <span className="h-2 w-2 rounded-full bg-[#19b99f]" />
          <span className="h-2 w-2 rounded-full bg-[#cbd6db]" />
        </div>
        <div className="p-4">
          <p className="text-[0.62rem] font-black uppercase tracking-[0.18em] text-[#0f8c78]">
            Projeto
          </p>
          <div className="mt-3 h-3 w-9/12 rounded-full bg-[#071523]" />
          <div className="mt-2 h-3 w-6/12 rounded-full bg-[#071523]" />
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="h-14 rounded-xl bg-[#eef4f3]" />
            <div className="h-14 rounded-xl bg-[#eef4f3]" />
            <div className="h-14 rounded-xl bg-[#19b99f]" />
          </div>
          <p className="mt-4 rounded-full bg-[#071523] px-3 py-2 text-center text-xs font-black text-white">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section className="bg-[#06111f] px-4 py-16 sm:py-20" id="projetos">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl" data-reveal="fade">
          <SectionKicker>Projetos</SectionKicker>
          <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-5xl">
            Exemplos de páginas publicadas como prova de trabalho
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              className="grid gap-6 rounded-[1.8rem] border border-white/10 bg-white/[0.055] p-5 transition hover:-translate-y-1 hover:border-[#19b99f]/60 hover:bg-white/10 hover:shadow-[0_24px_70px_rgba(0,0,0,0.24)] sm:grid-cols-[0.86fr_1fr] sm:items-center"
              data-reveal="fade"
              key={project.href}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <ProjectMockup accent={project.accent} name={project.name} />

              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8ff2e1]">
                  {project.category}
                </p>
                <h3 className="mt-3 text-3xl font-black text-white">
                  {project.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#9dafbd]">
                  {project.description}
                </p>
                <Link
                  className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/20 px-5 text-sm font-black text-white transition hover:border-[#19b99f] hover:bg-[#19b99f] hover:text-[#041410]"
                  href={project.href}
                >
                  Ver projeto
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="bg-[#06111f] px-4 pb-16 pt-4 sm:pb-20" id="contato">
      <div
        className="mx-auto max-w-6xl overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,#0d2034,#071523)] px-5 py-10 text-white shadow-[0_28px_90px_rgba(0,0,0,0.28)] sm:px-9 sm:py-12"
        data-reveal="fade"
      >
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#86eadc]">
              <MousePointerClick className="h-4 w-4" aria-hidden="true" />
              Próximo passo
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
              Seu negócio precisa de uma presença digital melhor?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/60">
              Uma página profissional ajuda seu cliente a entender, confiar e
              chamar você no WhatsApp.
            </p>
          </div>

          <a
            className="inline-flex min-h-[3.15rem] items-center justify-center gap-2 rounded-full bg-[#19b99f] px-6 py-3 text-sm font-black text-[#041410] transition hover:-translate-y-0.5 hover:bg-[#43d5bd]"
            href={whatsappHref}
            rel="noreferrer"
            target="_blank"
          >
            Falar no WhatsApp
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#06111f] px-4 py-9">
      <div className="mx-auto flex max-w-6xl flex-col gap-7 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <OfficialLogo />
          <div>
            <p className="text-sm font-black text-white">
              FA Soluções Digitais
            </p>
            <p className="mt-1 max-w-md text-sm leading-6 text-[#9dafbd]">
              Sites, landing pages e soluções digitais para negócios locais.
            </p>
          </div>
        </div>

        <nav
          className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-bold text-white/60"
          aria-label="Links do rodapé"
        >
          <a
            className="inline-flex items-center gap-2 transition hover:text-[#8ff2e1]"
            href={instagramHref}
            rel="noreferrer"
            target="_blank"
          >
            <AtSign className="h-4 w-4" aria-hidden="true" />
            Instagram
          </a>
          <a
            className="inline-flex items-center gap-2 transition hover:text-[#8ff2e1]"
            href={whatsappHref}
            rel="noreferrer"
            target="_blank"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
          <a className="transition hover:text-[#8ff2e1]" href="#projetos">
            Projetos
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#06111f] text-white">
      <ScrollRevealController />
      <Header />
      <HeroSection />
      <ImpactSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
