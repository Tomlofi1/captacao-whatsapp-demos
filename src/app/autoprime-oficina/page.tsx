import type { Metadata } from "next";
import Image from "next/image";
import {
  AlertTriangle,
  ArrowRight,
  Car,
  CarFront,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Disc3,
  Droplets,
  Gauge,
  MapPin,
  MessageCircle,
  Navigation,
  Quote,
  SearchCheck,
  Settings,
  ShieldCheck,
  Snowflake,
  Star,
  Timer,
  Wrench,
} from "lucide-react";

import {
  DemoFooter,
  WhatsAppLinkButton,
} from "@/components/SharedLandingParts";
import { ScrollRevealController } from "@/components/ScrollRevealController";
import { landingPages } from "@/data/landingPages";
import { createWhatsAppLink } from "@/lib/whatsapp";

const page = landingPages.autoPrime;
const whatsappHref = createWhatsAppLink(page.phone, page.whatsappMessage);
const cityStateLabel = [page.city, page.state].filter(Boolean).join(" - ");
const mapEmbedUrl =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(page.address) +
  "&output=embed";

const quickServices = [
  { name: "Troca de óleo", icon: Droplets },
  { name: "Freios", icon: Disc3 },
  { name: "Suspensão", icon: Wrench },
  { name: "Revisão preventiva", icon: ClipboardCheck },
  { name: "Diagnóstico", icon: Gauge },
  { name: "Ar-condicionado", icon: Snowflake },
];

const problems = [
  {
    title: "Freio baixo ou fazendo barulho",
    text: "Verificação de pastilhas, discos e fluido para corrigir perda de eficiência e ruídos.",
    icon: Disc3,
  },
  {
    title: "Suspensão batendo",
    text: "Análise de buchas, amortecedores e terminais para encontrar a origem do impacto.",
    icon: Wrench,
  },
  {
    title: "Luz acesa no painel",
    text: "Leitura por scanner e diagnóstico para entender o alerta antes de trocar peça.",
    icon: AlertTriangle,
  },
  {
    title: "Carro puxando para um lado",
    text: "Avaliação de alinhamento, pneus, freios e componentes que afetam direção.",
    icon: Navigation,
  },
  {
    title: "Ar-condicionado sem gelar",
    text: "Inspeção do sistema para identificar vazamento, filtro, gás ou falha no conjunto.",
    icon: Snowflake,
  },
  {
    title: "Revisão atrasada",
    text: "Checklist para óleo, filtros, freios, suspensão e itens de segurança.",
    icon: ClipboardCheck,
  },
];

const budgetSteps = [
  {
    title: "Chame no WhatsApp",
    text: "O botão abre a conversa com a mensagem de orçamento já preenchida.",
    icon: MessageCircle,
  },
  {
    title: "Explique o problema ou agende revisão",
    text: "Envie modelo, ano, sintoma e melhor horário para avaliação do veículo.",
    icon: SearchCheck,
  },
  {
    title: "Receba seu orçamento",
    text: "A oficina retorna com orientação, próximos passos e previsão de serviço.",
    icon: ClipboardCheck,
  },
];

const reasons = [
  { title: "Orçamento rápido", icon: Timer },
  { title: "Atendimento direto", icon: MessageCircle },
  { title: "Equipe experiente", icon: ShieldCheck },
  { title: "Diagnóstico claro", icon: Gauge },
  { title: "Peças de qualidade", icon: CheckCircle2 },
  { title: "Localização fácil", icon: MapPin },
];

export const metadata: Metadata = {
  title: `${page.businessName} | Modelo técnico de captação via WhatsApp`,
  description:
    "Landing page fictícia para oficina mecânica captar pedidos de orçamento pelo WhatsApp com presença local objetiva.",
};

function HeroDiagnosticCard() {
  return (
    <div className="rounded-lg border border-amber-400/35 bg-slate-950/88 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur">
      <div className="flex items-start justify-between gap-4 border-b border-slate-700 pb-4">
        <div>
          <p className="text-xs font-black tracking-[0.22em] text-amber-300">
            ENTRADA DE SERVIÇO
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            Diagnóstico claro
          </h2>
        </div>
        <span className="flex h-12 w-12 items-center justify-center rounded-md bg-amber-400 text-slate-950">
          <Gauge className="h-7 w-7" aria-hidden="true" />
        </span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {["Motor", "Freios", "Scanner"].map((item) => (
          <div
            className="rounded-md border border-slate-700 bg-slate-900 p-3 text-center"
            key={item}
          >
            <p className="text-xs font-black text-slate-400">CHECK</p>
            <p className="mt-1 text-sm font-black text-slate-100">{item}</p>
          </div>
        ))}
      </div>

      <p className="mt-5 rounded-md border border-amber-400/30 bg-amber-400/10 p-4 text-sm font-semibold leading-6 text-amber-100">
        “{page.whatsappMessage}”
      </p>
    </div>
  );
}

function AutoRatingStars({ rating = 5 }: { rating?: number }) {
  const roundedRating = Math.max(0, Math.min(5, Math.round(rating)));

  return (
    <span
      aria-label={rating + " de 5 estrelas"}
      className="inline-flex items-center gap-1"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          className={[
            "h-4 w-4",
            index < roundedRating
              ? "fill-amber-300 text-amber-300"
              : "fill-transparent text-slate-600",
          ].join(" ")}
          aria-hidden="true"
          key={index}
        />
      ))}
    </span>
  );
}

function AutoMapPreview() {
  return (
    <div
      className="overflow-hidden rounded-sm border-2 border-slate-700 bg-[#0b1118] shadow-[0_28px_90px_rgba(0,0,0,0.36)]"
      data-reveal="auto-left"
    >
      <div className="flex items-center justify-between border-b border-slate-700 bg-slate-950 px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-slate-400">
        <span className="inline-flex items-center gap-2 text-amber-300">
          <MapPin className="h-4 w-4" aria-hidden="true" />
          Rota da oficina
        </span>
        <span>GPS / Maceió</span>
      </div>
      <div className="relative min-h-[360px] overflow-hidden bg-slate-900 md:min-h-[480px]">
        <iframe
          className="absolute inset-0 h-full w-full border-0 grayscale-[0.35] invert-[0.88] contrast-[0.9] hue-rotate-180"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={mapEmbedUrl}
          title={"Mapa demonstrativo de " + page.address}
        />
        <div className="pointer-events-none absolute inset-0 border-4 border-[#0b1118]" />
        <div className="auto-scanline pointer-events-none absolute inset-y-0 w-28 bg-[linear-gradient(90deg,transparent,rgba(251,191,36,0.22),transparent)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(8,11,15,0.72),transparent)]" />
      </div>

      <div className="grid gap-4 border-t border-slate-700 p-5 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">
            MAPA DEMONSTRATIVO
          </p>
          <h3 className="mt-2 text-2xl font-black text-white">
            {page.neighborhood}, {cityStateLabel}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Rota pública para demonstrar como o cliente encontra a oficina e
            chega com menos atrito.
          </p>
        </div>
        <a
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-amber-400 px-5 text-sm font-black text-slate-950 transition hover:bg-amber-300"
          href={page.googleMapsUrl}
          rel="noreferrer"
          target="_blank"
        >
          <Navigation className="h-5 w-5" aria-hidden="true" />
          Abrir rota
        </a>
      </div>
    </div>
  );
}

function AutoLocalProfileCard() {
  return (
    <article
      className="rounded-sm border-2 border-slate-700 bg-[#101720] shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
      data-reveal="auto-right"
      style={{ transitionDelay: "90ms" }}
    >
      <div className="grid grid-cols-3 border-b border-slate-700 text-[0.65rem] font-black uppercase tracking-[0.18em] text-slate-500">
        {["Ficha local", "Status", "Orçamento"].map((item) => (
          <span
            className="border-r border-slate-700 px-4 py-3 last:border-r-0"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex items-start justify-between gap-5 border-b border-slate-700 p-6 md:p-7">
        <div className="flex min-w-0 gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-amber-400 text-slate-950">
            <CarFront className="h-7 w-7" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="inline-flex rounded bg-slate-950 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-amber-300">
              Perfil local demo
            </p>
            <h3 className="mt-3 text-3xl font-black leading-tight text-white">
              {page.businessName}
            </h3>
          </div>
        </div>
        <ShieldCheck className="h-7 w-7 shrink-0 text-amber-300" aria-hidden="true" />
      </div>

      <div className="flex flex-wrap gap-3 px-6 pt-5 md:px-7">
        <span className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-black text-slate-100">
          <Settings className="h-4 w-4 text-amber-300" aria-hidden="true" />
          {page.category}
        </span>
        <span className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-black text-slate-100">
          <MapPin className="h-4 w-4 text-amber-300" aria-hidden="true" />
          {page.neighborhood} • {cityStateLabel}
        </span>
      </div>

      <div className="mx-6 mt-6 rounded-sm border border-amber-400/25 bg-amber-400/10 p-5 md:mx-7">
        <div className="flex flex-wrap items-end gap-3">
          <span className="text-5xl font-black leading-none text-amber-300">
            {page.rating}
          </span>
          <div className="pb-1">
            <AutoRatingStars rating={page.rating} />
            <p className="mt-1 text-sm font-bold text-slate-200">
              {page.reviewCount} no perfil demonstrativo
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-3 px-6 text-sm leading-6 text-slate-300 md:px-7">
        <p className="flex gap-3 rounded-sm border border-slate-800 bg-slate-950 p-4">
          <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
          <span>
            <strong className="block text-white">Atendimento por agendamento</strong>
            {page.openingHours}
          </span>
        </p>
        <p className="flex gap-3 rounded-sm border border-slate-800 bg-slate-950 p-4">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
          <span>
            <strong className="block text-white">Rota para diagnóstico</strong>
            {page.address}
          </span>
        </p>
      </div>

      <div className="grid gap-3 p-6 sm:grid-cols-2 md:p-7">
        <a
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-slate-700 bg-slate-950 px-5 text-sm font-black text-slate-100 transition hover:border-amber-400 hover:text-amber-300"
          href={page.googleMapsUrl}
          rel="noreferrer"
          target="_blank"
        >
          <Navigation className="h-5 w-5" aria-hidden="true" />
          Abrir rota no Google Maps
        </a>
        <WhatsAppLinkButton
          href={whatsappHref}
          className="!rounded-md bg-amber-400 text-slate-950 shadow-[0_18px_45px_rgba(245,158,11,0.22)] hover:bg-amber-300"
          showArrow={false}
        >
          Solicitar orçamento
        </WhatsAppLinkButton>
      </div>
    </article>
  );
}

function AutoReviewCards() {
  return (
    <div className="mt-10" id="avaliar-no-google">
      <div
        className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
        data-reveal="auto"
      >
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-300">
            Avaliações demonstrativas
          </p>
          <h3 className="mt-2 text-3xl font-black leading-tight text-white md:text-4xl">
            Prova social para revisão, diagnóstico e orçamento.
          </h3>
        </div>
        <a
          className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-700 bg-slate-950 px-5 text-sm font-black text-slate-100 transition hover:border-amber-400 hover:text-amber-300"
          href={page.googleReviewUrl}
        >
          Avaliar no Google
        </a>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {page.reviews.map((review, index) => (
          <article
            className="group relative overflow-hidden rounded-sm border-2 border-slate-700 bg-[#101720] p-6 shadow-[0_18px_55px_rgba(0,0,0,0.22)] transition hover:border-amber-400/70"
            data-reveal="auto"
            key={review.name}
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-amber-400/80" />
            <div className="absolute right-4 top-4 h-8 w-16 border-r border-t border-amber-400/30" />
            <div className="flex items-start justify-between gap-4">
              <AutoRatingStars rating={review.rating} />
              <Quote className="h-6 w-6 text-amber-300/70" aria-hidden="true" />
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              "{review.text}"
            </p>
            <p className="mt-5 font-black text-white">{review.name}</p>
          </article>
        ))}
      </div>
      <p className="mt-4 text-xs leading-6 text-slate-500">
        Avaliações demonstrativas para fins de apresentação do modelo.
      </p>
    </div>
  );
}

function AutoLocalReputationSection() {
  const trustItems = [
    "Rota clara para chegar na oficina",
    "Diagnóstico e orçamento pelo WhatsApp",
    "Sinais de confiança antes da manutenção",
  ];

  return (
    <section
      className="border-y border-slate-800 bg-[#080b0f] px-5 py-24"
      id="maps"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-sm border-2 border-slate-800 bg-[#0d131b] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] md:p-8">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.08)_1px,transparent_1px)] bg-[size:44px_44px] opacity-40" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-amber-400" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-20 border-b-2 border-l-2 border-amber-400/45" />
          <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 border-r-2 border-t-2 border-amber-400/45" />
          <div className="relative">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div data-reveal="auto">
                <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-amber-300">
                  Rota / avaliação / atendimento
                </p>
                <h2 className="text-4xl font-black leading-tight md:text-6xl">
                  Chegue fácil e peça orçamento sem enrolação.
                </h2>
              </div>
              <div data-reveal="auto" style={{ transitionDelay: "90ms" }}>
                <p className="text-base leading-8 text-slate-300">
                  Uma estrutura simples para mostrar localização, rota,
                  avaliações e contato direto pelo WhatsApp, ajudando o cliente
                  a confiar antes de levar o carro.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {trustItems.map((item, index) => (
                    <span
                      className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-black text-slate-100"
                      data-reveal="auto"
                      key={item}
                      style={{ transitionDelay: `${index * 55}ms` }}
                    >
                      <CheckCircle2 className="h-4 w-4 text-amber-300" aria-hidden="true" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.06fr_0.94fr] lg:items-start">
              <AutoMapPreview />
              <AutoLocalProfileCard />
            </div>

            <AutoReviewCards />

            <div
              className="mt-10 rounded-sm border-2 border-amber-400/30 bg-amber-400/10 p-6 md:p-8"
              data-reveal="auto"
            >
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-300">
                    Diagnóstico, manutenção e orçamento
                  </p>
                  <h3 className="mt-3 text-3xl font-black leading-tight text-white md:text-4xl">
                    Do Maps para o box da oficina em poucos cliques.
                  </h3>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
                    O cliente confirma a rota, entende que a oficina é local e
                    inicia a conversa com contexto para revisão, freios,
                    suspensão ou diagnóstico.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <a
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-slate-700 bg-slate-950 px-5 text-sm font-black text-slate-100 transition hover:border-amber-400 hover:text-amber-300"
                    href={page.googleMapsUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Navigation className="h-5 w-5" aria-hidden="true" />
                    Abrir rota no Google Maps
                  </a>
                  <WhatsAppLinkButton
                    href={whatsappHref}
                    className="!rounded-md bg-amber-400 text-slate-950 shadow-[0_18px_45px_rgba(245,158,11,0.22)] hover:bg-amber-300"
                    showArrow={false}
                  >
                    Solicitar orçamento
                  </WhatsAppLinkButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AutoPrimeOficinaPage() {
  return (
    <div className="min-h-screen bg-[#080b0f] text-white">
      <ScrollRevealController />
      <header
        className="sticky top-0 z-40 border-b-2 border-slate-800 bg-[#070a0e]/96 shadow-[0_18px_55px_rgba(0,0,0,0.32)] backdrop-blur"
        data-reveal="fade"
      >
        <div className="border-b border-slate-800 bg-slate-950/88 px-5">
          <div className="mx-auto flex max-w-7xl items-center gap-0 overflow-x-auto text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-400">
            {[
              { icon: CarFront, text: `${page.category} • ${cityStateLabel}` },
              { icon: Clock3, text: page.openingHours },
              { icon: MessageCircle, text: "Orçamento pelo WhatsApp" },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <span
                  className="flex min-h-9 shrink-0 items-center gap-2 border-r border-slate-800 px-4 first:pl-0 last:border-r-0"
                  key={item.text}
                >
                  <Icon className="h-3.5 w-3.5 text-amber-300" aria-hidden="true" />
                  {item.text}
                </span>
              );
            })}
          </div>
        </div>

        <div className="relative overflow-hidden px-5">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.06)_1px,transparent_1px)] bg-[size:34px_34px]" />
          <div className="relative mx-auto flex min-h-20 max-w-7xl flex-col gap-3 py-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between gap-4">
              <a
                className="auto-logo-mark group flex min-w-0 items-stretch border-2 border-slate-700 bg-[#0b1118] shadow-[8px_8px_0_rgba(245,158,11,0.16)] transition hover:border-amber-400/70"
                href="#inicio"
              >
                <span className="flex w-16 shrink-0 items-center justify-center bg-amber-400 text-slate-950">
                  <Wrench className="h-7 w-7" aria-hidden="true" />
                </span>
                <span className="grid min-w-0 content-center px-4 py-2">
                  <span className="truncate text-xl font-black uppercase leading-none tracking-[-0.03em] text-white md:text-2xl">
                    AutoPrime
                  </span>
                  <span className="mt-1 flex items-center gap-2 text-[0.68rem] font-black uppercase tracking-[0.2em] text-amber-300">
                    <Gauge className="h-3.5 w-3.5" aria-hidden="true" />
                    Oficina / Diagnóstico / Revisão
                  </span>
                </span>
              </a>

              <WhatsAppLinkButton
                href={whatsappHref}
                className="!min-h-11 !rounded-sm bg-amber-400 text-slate-950 shadow-[0_14px_34px_rgba(245,158,11,0.22)] hover:bg-amber-300 md:hidden"
                icon={MessageCircle}
                showArrow={false}
              >
                Orçamento
              </WhatsAppLinkButton>
            </div>

            <div className="flex items-center gap-3">
              <nav className="flex max-w-full flex-1 overflow-x-auto border-y border-slate-800 text-xs font-black uppercase tracking-[0.16em] text-slate-300 md:flex-none md:overflow-visible md:border-y-0">
                {[
                  ["Serviços", "#servicos-rapidos"],
                  ["Problemas", "#problemas"],
                  ["Orçamento", "#orcamento"],
                  ["Rota", "#maps"],
                ].map(([label, href]) => (
                  <a
                    className="group relative shrink-0 border-r border-slate-800 px-4 py-3 transition hover:bg-slate-900 hover:text-amber-300 md:border md:border-slate-800 md:first:border-r-0 md:hover:border-amber-400/70"
                    href={href}
                    key={href}
                  >
                    <span className="relative z-10">{label}</span>
                    <span className="absolute inset-x-3 bottom-1 h-0.5 origin-left scale-x-0 bg-amber-400 transition group-hover:scale-x-100" />
                  </a>
                ))}
              </nav>

              <WhatsAppLinkButton
                href={whatsappHref}
                className="hidden !rounded-sm bg-amber-400 text-slate-950 shadow-[0_14px_34px_rgba(245,158,11,0.22)] hover:bg-amber-300 md:inline-flex"
                icon={MessageCircle}
                showArrow={false}
              >
                Solicitar orçamento
              </WhatsAppLinkButton>
            </div>
          </div>
        </div>
      </header>

      <main id="inicio">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[#080b0f]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.10)_1px,transparent_1px)] bg-[size:46px_46px] opacity-50" />

          <div className="relative mx-auto grid max-w-7xl gap-0 px-5 py-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch lg:py-20">
            <div
              className="z-10 flex flex-col justify-center border-y border-l border-slate-800 bg-slate-950/82 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:p-9 lg:rounded-l-sm"
              data-reveal="auto-left"
            >
              <p className="mb-5 inline-flex w-fit rounded-md border border-amber-400/40 bg-amber-400/12 px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-amber-300">
                Oficina mecânica em Maceió
              </p>
              <h1 className="max-w-4xl text-5xl font-black leading-[1.02] md:text-7xl">
                Diagnóstico e orçamento para seu carro sem enrolação.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Revisão, freios, suspensão, motor e ar-condicionado com
                atendimento direto pelo WhatsApp. Explique o problema e receba o
                próximo passo com clareza.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppLinkButton
                  href={whatsappHref}
                  className="!rounded-md bg-amber-400 text-slate-950 shadow-[0_18px_45px_rgba(245,158,11,0.25)] hover:bg-amber-300"
                  icon={MessageCircle}
                >
                  Solicitar orçamento agora
                </WhatsAppLinkButton>
                <a
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-slate-700 bg-slate-900 px-5 text-sm font-black text-slate-100 transition hover:border-amber-400 hover:text-amber-300"
                  href="#problemas"
                >
                  Ver problemas atendidos
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <div className="mt-9 grid grid-cols-3 divide-x divide-slate-700 border-y border-slate-700 py-5">
                {[
                  ["Rápido", "entrada pelo WhatsApp"],
                  ["Claro", "diagnóstico objetivo"],
                  ["Local", "rota em Maceió"],
                ].map(([title, text]) => (
                  <div className="px-3 first:pl-0 last:pr-0" key={title}>
                    <p className="text-2xl font-black text-amber-300 md:text-3xl">
                      {title}
                    </p>
                    <p className="mt-1 text-xs font-bold uppercase leading-5 text-slate-400">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="relative min-h-[430px] overflow-hidden border border-slate-800 bg-slate-900 shadow-[0_24px_90px_rgba(0,0,0,0.35)] lg:min-h-[660px] lg:rounded-r-sm"
              data-reveal="auto-right"
              style={{ transitionDelay: "120ms" }}
            >
              <Image
                alt="Mecânico analisando motor com capô aberto em oficina profissional"
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                src="/images/autoprime/engine-diagnostic.png"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,11,15,0.32),rgba(8,11,15,0.02)_42%,rgba(8,11,15,0.34))]" />
              <div className="auto-scanline pointer-events-none absolute inset-y-0 w-32 bg-[linear-gradient(90deg,transparent,rgba(251,191,36,0.18),transparent)]" />
              <div className="absolute bottom-5 left-5 right-5 md:left-auto md:w-[28rem]">
                <HeroDiagnosticCard />
              </div>
            </div>
          </div>
        </section>

        <section
          className="border-y border-slate-800 bg-[#111820] px-5 py-5"
          id="servicos-rapidos"
        >
          <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {quickServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <a
                  className="group flex min-h-24 items-center gap-3 rounded-sm border border-slate-700 bg-slate-950 px-4 py-3 transition hover:border-amber-400 hover:bg-[#151f2a]"
                  data-reveal="auto"
                  href={whatsappHref}
                  key={service.name}
                  rel="noreferrer"
                  style={{ transitionDelay: `${index * 45}ms` }}
                  target="_blank"
                >
                  <Icon
                    className="h-6 w-6 shrink-0 text-amber-300"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-black uppercase leading-5 text-slate-100 group-hover:text-amber-200">
                    {service.name}
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        <section className="px-5 py-20" id="problemas">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div data-reveal="auto">
                <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-amber-300">
                  Problemas que resolvemos
                </p>
                <h2 className="text-4xl font-black leading-tight md:text-5xl">
                  Sintoma de carro precisa de resposta prática.
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-300">
                  A página fala direto com quem está ouvindo barulho, vendo luz
                  no painel, atrasou revisão ou precisa de orçamento para
                  manutenção.
                </p>

                <div
                  className="relative mt-8 min-h-[280px] overflow-hidden rounded-sm border-2 border-slate-700 bg-slate-900 shadow-[0_22px_70px_rgba(0,0,0,0.28)]"
                  data-reveal="auto"
                  style={{ transitionDelay: "80ms" }}
                >
                  <Image
                    alt="Carro elevado em oficina para revisão de suspensão e freios"
                    className="object-cover"
                    fill
                    sizes="(min-width: 1024px) 32vw, 100vw"
                    src="/images/autoprime/car-lift.png"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {problems.map((problem, index) => {
                  const Icon = problem.icon;

                  return (
                    <article
                      className="group rounded-sm border border-l-4 border-slate-700 border-l-amber-400/50 bg-[#111820] p-5 shadow-[0_16px_50px_rgba(0,0,0,0.22)] transition hover:border-amber-400/70 hover:bg-[#131d27]"
                      data-reveal="auto"
                      key={problem.title}
                      style={{ transitionDelay: `${index * 60}ms` }}
                    >
                      <div className="mb-5 flex items-center justify-between border-b border-slate-700 pb-4">
                        <Icon className="h-7 w-7 text-amber-300" aria-hidden="true" />
                        <span className="rounded bg-slate-950 px-2 py-1 text-xs font-black text-slate-300">
                          CHECK
                        </span>
                      </div>
                      <h3 className="text-xl font-black text-white">
                        {problem.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">
                        {problem.text}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-[#101720] px-5 py-20" id="orcamento">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div data-reveal="auto">
                <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-amber-300">
                  Como funciona o orçamento
                </p>
                <h2 className="text-4xl font-black leading-tight md:text-5xl">
                  Três passos para sair da dúvida e entrar na oficina.
                </h2>

                <div className="mt-10 grid gap-4">
                  {budgetSteps.map((step, index) => {
                    const Icon = step.icon;

                    return (
                      <article
                        className="grid gap-4 rounded-sm border border-slate-700 bg-slate-950 p-5 sm:grid-cols-[auto_1fr] sm:items-start"
                        data-reveal="auto"
                        key={step.title}
                        style={{ transitionDelay: `${index * 75}ms` }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-4xl font-black text-amber-300">
                            0{index + 1}
                          </span>
                          <span className="flex h-11 w-11 items-center justify-center rounded-md bg-amber-400 text-slate-950">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl font-black">{step.title}</h3>
                          <p className="mt-2 text-sm leading-7 text-slate-300">
                            {step.text}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>

              <div
                className="relative min-h-[420px] overflow-hidden rounded-sm border-2 border-slate-700 bg-slate-900 shadow-[0_22px_70px_rgba(0,0,0,0.28)]"
                data-reveal="auto-right"
              >
                <Image
                  alt="Scanner automotivo, ferramentas e disco de freio em bancada de oficina"
                  className="object-cover"
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  src="/images/autoprime/diagnostic-tools.png"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(8,11,15,0.88))] p-6">
                  <p className="max-w-md text-sm font-bold leading-7 text-slate-100">
                    Scanner, ferramentas e revisão orientam o orçamento antes
                    da aprovação do serviço.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <div
              className="flex flex-col justify-between gap-6 border-b border-slate-700 pb-8 md:flex-row md:items-end"
              data-reveal="auto"
            >
              <div className="max-w-2xl">
                <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-amber-300">
                  Por que escolher a AutoPrime
                </p>
                <h2 className="text-4xl font-black leading-tight md:text-5xl">
                  Oficina organizada, atendimento direto e decisão mais rápida.
                </h2>
              </div>
              <Car className="hidden h-16 w-16 text-amber-300 md:block" aria-hidden="true" />
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <article
                    className="group rounded-sm border border-slate-700 bg-[#111820] p-6 transition hover:border-amber-400/70 hover:bg-[#131d27]"
                    data-reveal="auto"
                    key={reason.title}
                    style={{ transitionDelay: `${index * 55}ms` }}
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-amber-400 text-slate-950">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-xl font-black text-white">
                      {reason.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Informação objetiva para o cliente entender o serviço e
                      chamar com mais confiança.
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <AutoLocalReputationSection />

        <section className="px-5 py-20">
          <div
            className="mx-auto max-w-7xl overflow-hidden rounded-sm border-2 border-amber-400/35 bg-[linear-gradient(135deg,#f59e0b_0%,#f97316_100%)] text-slate-950 shadow-[0_22px_80px_rgba(245,158,11,0.16)]"
            data-reveal="auto"
          >
            <div className="grid gap-0 lg:grid-cols-[0.72fr_1.28fr]">
              <div className="relative min-h-[260px] lg:min-h-full">
                <Image
                  alt="Carro no elevador em oficina mecânica organizada"
                  className="object-cover"
                  fill
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  src="/images/autoprime/car-lift.png"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,11,15,0.10),rgba(8,11,15,0.58))]" />
              </div>
              <div className="p-8 md:p-12">
                <p className="text-sm font-black uppercase tracking-[0.18em]">
                  Atendimento via WhatsApp
                </p>
                <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
                  Descreva o veículo e receba seu orçamento.
                </h2>
                <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-slate-900">
                  O botão abre a conversa com o número fictício do modelo e a
                  mensagem de orçamento já preenchida.
                </p>
                <div className="mt-8">
                  <WhatsAppLinkButton
                    href={whatsappHref}
                    className="!rounded-md bg-slate-950 text-white hover:bg-slate-800"
                  >
                    Chamar a AutoPrime
                  </WhatsAppLinkButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <DemoFooter className="border-t border-slate-800 bg-[#080b0f] text-slate-500" />
    </div>
  );
}
