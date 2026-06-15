import type { Metadata } from "next";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BadgeCheck,
  Brush,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  HeartPulse,
  MapPin,
  MessageCircle,
  Navigation,
  Quote,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import {
  DemoFooter,
  WhatsAppLinkButton,
} from "@/components/SharedLandingParts";
import { ScrollRevealController } from "@/components/ScrollRevealController";
import { landingPages, type ServiceIcon } from "@/data/landingPages";
import { createWhatsAppLink } from "@/lib/whatsapp";

const page = landingPages.bellaForma;
const whatsappHref = createWhatsAppLink(page.phone, page.whatsappMessage);
const cityStateLabel = [page.city, page.state].filter(Boolean).join(" - ");
const mapEmbedUrl =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(page.address) +
  "&output=embed";

const serviceIcons: Partial<Record<ServiceIcon, LucideIcon>> = {
  activity: Activity,
  brush: Brush,
  calendar: CalendarCheck,
  heartPulse: HeartPulse,
  scissors: Scissors,
  sparkles: Sparkles,
};

const experienceItems = [
  {
    title: "Ambiente preparado",
    text: "Sala clara, maca preparada e detalhes de higiene visíveis para uma experiência tranquila.",
    icon: ShieldCheck,
  },
  {
    title: "Cuidado personalizado",
    text: "A avaliação considera pele, rotina e objetivo para indicar um caminho de cuidado realista.",
    icon: HeartPulse,
  },
  {
    title: "Atendimento com hora marcada",
    text: "A conversa pelo WhatsApp organiza dúvidas, disponibilidade e confirmação do melhor horário.",
    icon: CalendarCheck,
  },
];

const schedulingSteps = [
  {
    title: "Escolha o atendimento",
    text: "Veja os tratamentos e identifique o cuidado que combina com seu momento.",
  },
  {
    title: "Chame no WhatsApp",
    text: "O botão abre a conversa com a mensagem de avaliação já preenchida.",
  },
  {
    title: "Agende sua avaliação",
    text: "A clínica retorna com horários, orientação inicial e próximos passos.",
  },
];

const careSignals = [
  "Protocolos com orientação",
  "Toalhas e maca preparadas",
  "Produtos de skincare à vista",
  "Atendimento reservado",
];

const localTrustPoints = [
  "Endereço fácil de conferir",
  "Rota direta pelo Maps",
  "Contato imediato no WhatsApp",
];

function RatingStars({
  className = "",
  rating = 5,
}: {
  className?: string;
  rating?: number;
}) {
  const roundedRating = Math.max(0, Math.min(5, Math.round(rating)));

  return (
    <span
      aria-label={rating + " de 5 estrelas"}
      className={["inline-flex items-center gap-1", className].join(" ")}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          className={[
            "h-4 w-4",
            index < roundedRating
              ? "fill-[#d9a441] text-[#d9a441]"
              : "fill-transparent text-[#e7d1c0]",
          ].join(" ")}
          aria-hidden="true"
          key={index}
        />
      ))}
    </span>
  );
}

function MapPreview() {
  return (
    <div
      className="overflow-hidden rounded-[40px] border border-white bg-white p-3 shadow-[0_30px_80px_rgba(120,53,15,0.12)]"
      data-reveal="bella"
    >
      <div className="relative min-h-[360px] overflow-hidden rounded-[32px] bg-[#f5e7dc] md:min-h-[470px]">
        <iframe
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={mapEmbedUrl}
          title={"Mapa demonstrativo de " + page.address}
        />
      </div>

      <div className="grid gap-3 p-3 pt-5 sm:grid-cols-[1fr_auto] sm:items-center md:p-5 md:pt-6">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-[#9b6b58]">
            MAPA DEMONSTRATIVO
          </p>
          <p className="mt-2 font-[Georgia,serif] text-2xl leading-tight text-stone-950">
            {page.neighborhood}, {cityStateLabel}
          </p>
          <p className="mt-2 text-sm leading-6 text-stone-600">
            Mapa demonstrativo para mostrar como a visitante encontra a região
            e abre a rota com facilidade.
          </p>
        </div>
        <a
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#dfc4af] bg-[#fffaf6] px-5 text-sm font-semibold text-stone-800 transition hover:border-[#caa184] hover:text-[#8a4b39]"
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

function GoogleProfileCard() {
  return (
    <article
      className="rounded-[36px] border border-[#ead9cb] bg-white p-6 shadow-[0_24px_70px_rgba(120,53,15,0.10)] md:p-7"
      data-reveal="bella"
      style={{ transitionDelay: "120ms" }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#fff1f3] font-[Georgia,serif] text-xl font-bold text-[#9f4f5f]">
            BF
          </span>
          <div>
            <p className="inline-flex rounded-full bg-[#fffaf6] px-3 py-1 text-xs font-bold tracking-[0.16em] text-[#9b6b58]">
              PERFIL LOCAL DEMO
            </p>
            <h3 className="mt-3 font-[Georgia,serif] text-3xl leading-tight text-stone-950">
              {page.businessName}
            </h3>
          </div>
        </div>
        <BadgeCheck className="mt-1 h-6 w-6 shrink-0 text-[#9f4f5f]" aria-hidden="true" />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <span className="flex items-center gap-2 rounded-full border border-[#ead9cb] bg-[#fffaf6] px-4 py-2 text-sm font-semibold text-stone-900">
          <Building2 className="h-4 w-4 text-[#9f4f5f]" aria-hidden="true" />
          {page.category}
        </span>
        <span className="flex items-center gap-2 rounded-full border border-[#ead9cb] bg-[#fffaf6] px-4 py-2 text-sm font-semibold text-stone-900">
          <MapPin className="h-4 w-4 text-[#9f4f5f]" aria-hidden="true" />
          {page.neighborhood} • {cityStateLabel}
        </span>
      </div>

      <div className="mt-6 rounded-[28px] border border-[#f0dfd1] bg-[#fffaf6] p-5">
        <div className="flex flex-wrap items-end gap-3">
          <span className="font-[Georgia,serif] text-5xl leading-none text-stone-950">
            {page.rating}
          </span>
          <div className="pb-1">
            <RatingStars rating={page.rating} />
            <p className="mt-1 text-sm font-semibold text-stone-700">
              {page.reviewCount} no perfil demonstrativo
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-3 text-sm leading-6 text-stone-700">
        <p className="flex gap-3 rounded-[22px] bg-white p-4 shadow-[0_10px_26px_rgba(120,53,15,0.05)]">
          <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-[#9f4f5f]" aria-hidden="true" />
          <span>
            <strong className="block text-stone-950">Atendimento com hora marcada</strong>
            {page.openingHours}
          </span>
        </p>
        <p className="flex gap-3 rounded-[22px] bg-white p-4 shadow-[0_10px_26px_rgba(120,53,15,0.05)]">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#9f4f5f]" aria-hidden="true" />
          <span>
            <strong className="block text-stone-950">Localização destacada</strong>
            {page.address}
          </span>
        </p>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <a
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#dfc4af] bg-white px-5 text-sm font-semibold text-stone-800 transition hover:border-[#caa184] hover:text-[#8a4b39]"
          href={page.googleMapsUrl}
          rel="noreferrer"
          target="_blank"
        >
          <Navigation className="h-5 w-5" aria-hidden="true" />
          Abrir no Google Maps
        </a>
        <WhatsAppLinkButton
          href={whatsappHref}
          className="bg-[#9f4f5f] text-white shadow-[0_14px_34px_rgba(159,79,95,0.18)] hover:bg-[#7f3b4a]"
          showArrow={false}
        >
          Chamar no WhatsApp
        </WhatsAppLinkButton>
      </div>
    </article>
  );
}

function ReviewCards() {
  return (
    <div className="mt-10" id="avaliar-no-google">
      <div
        className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
        data-reveal="bella"
      >
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-[#9b6b58]">
            AVALIAÇÕES
          </p>
          <h3 className="mt-2 font-[Georgia,serif] text-3xl leading-tight text-stone-950 md:text-4xl">
            Prova social apresentada com delicadeza.
          </h3>
        </div>
        <a
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#dfc4af] bg-white px-5 text-sm font-semibold text-stone-800 transition hover:border-[#caa184] hover:text-[#8a4b39]"
          href={page.googleReviewUrl}
        >
          Avaliar no Google
        </a>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {page.reviews.map((review, index) => (
          <article
            className="rounded-[30px] border border-[#ead9cb] bg-white p-6 shadow-[0_18px_52px_rgba(120,53,15,0.08)]"
            data-reveal="bella-soft"
            key={review.name}
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div className="flex items-start justify-between gap-4">
              <RatingStars rating={review.rating} />
              <Quote className="h-6 w-6 text-[#d7b08a]" aria-hidden="true" />
            </div>
            <p className="mt-5 text-sm leading-7 text-stone-700">
              "{review.text}"
            </p>
            <p className="mt-5 font-semibold text-stone-950">{review.name}</p>
          </article>
        ))}
      </div>
      <p className="mt-4 text-xs leading-6 text-stone-500">
        Avaliações demonstrativas para fins de apresentação do modelo.
      </p>
    </div>
  );
}

function LocalPresenceSection() {
  return (
    <section
      className="bg-[linear-gradient(180deg,#fffaf6_0%,#f8efe7_48%,#fff3f5_100%)] px-5 py-24"
      id="localizacao"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div data-reveal="bella">
            <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-[#9b6b58]">
              PRESENÇA LOCAL
            </p>
            <h2 className="font-[Georgia,serif] text-4xl leading-tight text-stone-950 md:text-6xl">
              Uma experiência local, clara e fácil de encontrar.
            </h2>
          </div>
          <div data-reveal="bella" style={{ transitionDelay: "110ms" }}>
            <p className="text-base leading-8 text-stone-700">
              Além da página de captação, a estrutura destaca localização,
              rota, avaliações e contato direto pelo WhatsApp para transmitir
              mais confiança antes do agendamento.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {localTrustPoints.map((item, index) => (
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-[#e3c7ad] bg-white px-4 py-2 text-sm font-semibold text-[#7d4c3f] shadow-[0_10px_24px_rgba(120,53,15,0.06)]"
                  data-reveal="bella-soft"
                  key={item}
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <CheckCircle2 className="h-4 w-4 text-[#9f4f5f]" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.06fr_0.94fr] lg:items-start">
          <MapPreview />
          <GoogleProfileCard />
        </div>

        <ReviewCards />

        <div
          className="mt-10 rounded-[36px] border border-white bg-white p-6 shadow-[0_24px_70px_rgba(120,53,15,0.09)] md:p-8"
          data-reveal="bella"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-[#9b6b58]">
                DO GOOGLE OU INSTAGRAM PARA A CONVERSA
              </p>
              <h3 className="mt-3 font-[Georgia,serif] text-3xl leading-tight text-stone-950 md:text-4xl">
                Localização, reputação e WhatsApp no mesmo caminho.
              </h3>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-600">
                A visitante confirma onde fica a clínica, percebe sinais de
                confiança e encontra um botão claro para iniciar o atendimento.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#dfc4af] bg-[#fffaf6] px-5 text-sm font-semibold text-stone-800 transition hover:border-[#caa184] hover:text-[#8a4b39]"
                href={page.googleMapsUrl}
                rel="noreferrer"
                target="_blank"
              >
                <Navigation className="h-5 w-5" aria-hidden="true" />
                Abrir rota no Google Maps
              </a>
              <WhatsAppLinkButton
                href={whatsappHref}
                className="bg-[#9f4f5f] text-white shadow-[0_18px_46px_rgba(159,79,95,0.20)] hover:bg-[#7f3b4a]"
                showArrow={false}
              >
                Agendar pelo WhatsApp
              </WhatsAppLinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const metadata: Metadata = {
  title: `${page.businessName} | Modelo premium de captação via WhatsApp`,
  description:
    "Landing page fictícia para clínica de estética captar avaliações pelo WhatsApp com presença local elegante.",
};

export default function BellaFormaPage() {
  return (
    <div className="min-h-screen bg-[#fffaf6] text-stone-900">
      <ScrollRevealController />
      <header className="sticky top-0 z-40 border-b border-[#ead9cb] bg-[#fffaf6]/92 px-5 backdrop-blur">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4">
          <a href="#inicio" className="min-w-0">
            <span className="block truncate font-[Georgia,serif] text-xl text-stone-950">
              {page.businessName}
            </span>
            <span className="block text-xs font-medium tracking-[0.18em] text-[#9b6b58]">
              {page.category.toUpperCase()} • {cityStateLabel}
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-stone-600 md:flex">
            <a className="hover:text-rose-800" href="#tratamentos">
              Tratamentos
            </a>
            <a className="hover:text-rose-800" href="#espaco">
              Espaço
            </a>
            <a className="hover:text-rose-800" href="#localizacao">
              Localização
            </a>
          </nav>
          <WhatsAppLinkButton
            href={whatsappHref}
            className="bg-[#9f4f5f] text-white shadow-[0_14px_34px_rgba(159,79,95,0.22)] hover:bg-[#7f3b4a]"
            showArrow={false}
          >
            WhatsApp
          </WhatsAppLinkButton>
        </div>
      </header>

      <main id="inicio">
        <section className="relative overflow-hidden px-5 pb-20 pt-14 md:pb-28 md:pt-20">
          <div className="bella-float absolute inset-x-0 top-0 h-[48rem] bg-[linear-gradient(135deg,#fffaf6_0%,#f8eadf_46%,#fff2f5_100%)]" />
          <div className="absolute inset-x-0 top-[47rem] h-px bg-[#ead9cb]" />
          <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,250,246,0.96),rgba(255,250,246,0))]" />

          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="max-w-2xl" data-reveal="bella">
              <p className="mb-5 inline-flex rounded-full border border-[#e7c7b3] bg-white/80 px-4 py-2 text-sm font-semibold text-[#9b5c4a] shadow-[0_12px_32px_rgba(120,53,15,0.06)]">
                Clínica de estética facial e corporal em Maceió
              </p>
              <h1 className="font-[Georgia,serif] text-5xl leading-[1.03] text-stone-950 md:text-7xl">
                Estética premium para realçar sua beleza com naturalidade.
              </h1>
              <p className="mt-6 text-lg leading-8 text-stone-700">
                A Bella Forma Estética recebe você em um ambiente claro,
                reservado e acolhedor, com avaliação personalizada para pele,
                corpo e bem-estar.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppLinkButton
                  href={whatsappHref}
                  className="bg-[#9f4f5f] text-white shadow-[0_18px_46px_rgba(159,79,95,0.24)] hover:bg-[#7f3b4a]"
                >
                  Agendar avaliação estética
                </WhatsAppLinkButton>
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#dfc4af] bg-white/80 px-5 text-sm font-semibold text-stone-800 transition hover:border-[#caa184] hover:text-[#8a4b39]"
                  href="#tratamentos"
                >
                  Ver tratamentos
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {["Avaliação individual", "Hora marcada", "Sala preparada"].map(
                  (item, index) => (
                    <div
                      className="rounded-[24px] border border-white bg-white/78 px-4 py-4 text-sm font-semibold text-stone-800 shadow-[0_14px_38px_rgba(120,53,15,0.07)]"
                      data-reveal="bella-soft"
                      key={item}
                      style={{ transitionDelay: `${index * 70}ms` }}
                    >
                      <Sparkles className="mb-3 h-5 w-5 text-[#b88a4a]" aria-hidden="true" />
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>

            <div
              className="relative grid gap-5"
              data-reveal="bella"
              style={{ transitionDelay: "140ms" }}
            >
              <div className="rounded-[42px] border border-white bg-white p-3 shadow-[0_34px_90px_rgba(120,53,15,0.16)]">
                <div className="relative min-h-[360px] overflow-hidden rounded-[34px] bg-[#f8efe7] md:min-h-[470px]">
                  <Image
                    alt="Sala premium de clínica estética com maca, toalhas e iluminação suave"
                    className="object-cover"
                    fill
                    priority
                    sizes="(min-width: 1024px) 54vw, 100vw"
                    src="/images/bella-forma/clinic-room.png"
                  />
                </div>
              </div>

              <div className="rounded-[34px] border border-[#e7d1c0] bg-white p-6 shadow-[0_22px_58px_rgba(120,53,15,0.11)] md:p-7">
                <p className="inline-flex rounded-full bg-[#fff1f3] px-3 py-2 text-xs font-bold tracking-[0.2em] text-[#8c4453]">
                  AVALIAÇÃO PERSONALIZADA
                </p>
                <h2 className="mt-4 font-[Georgia,serif] text-3xl leading-tight text-stone-950">
                  Atendimento com hora marcada
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-stone-700">
                  Converse com a clínica, tire dúvidas com calma e receba
                  orientação inicial antes de escolher o melhor horário.
                </p>
                <div className="mt-6 grid gap-3 text-sm font-semibold text-stone-900 sm:grid-cols-2">
                  <span className="flex items-center gap-2 rounded-2xl border border-[#f0dfd1] bg-[#fffaf6] px-4 py-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#9f4f5f]" aria-hidden="true" />
                    Sem espera
                  </span>
                  <span className="flex items-center gap-2 rounded-2xl border border-[#f0dfd1] bg-[#fffaf6] px-4 py-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#9f4f5f]" aria-hidden="true" />
                    Atendimento reservado
                  </span>
                </div>
              </div>

              <div className="absolute -right-2 -top-5 hidden rounded-full border border-[#e4c5a2] bg-[#fff8ec] px-5 py-3 text-sm font-semibold text-[#8a5a2f] shadow-[0_16px_42px_rgba(120,53,15,0.12)] md:block">
                Sala clean • cuidado facial • bem-estar
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20" id="tratamentos">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div data-reveal="bella">
                <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-[#9b6b58]">
                  TRATAMENTOS
                </p>
                <h2 className="font-[Georgia,serif] text-4xl leading-tight text-stone-950 md:text-5xl">
                  Tratamentos para realçar sua beleza.
                </h2>
                <p className="mt-5 text-base leading-8 text-stone-600">
                  Serviços apresentados com clareza e delicadeza para que cada
                  pessoa encontre o cuidado ideal antes de iniciar a conversa.
                </p>
              </div>

              <div
                className="overflow-hidden rounded-[36px] border border-[#ead9cb] bg-white p-3 shadow-[0_22px_60px_rgba(120,53,15,0.10)]"
                data-reveal="bella"
                style={{ transitionDelay: "120ms" }}
              >
                <div className="relative min-h-[250px] overflow-hidden rounded-[28px] bg-[#f8efe7]">
                  <Image
                    alt="Detalhes de skincare com toalhas, séruns e instrumentos de estética"
                    className="object-cover"
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    src="/images/bella-forma/skincare-detail.png"
                  />
                </div>
                <div className="mt-3 rounded-[24px] border border-[#ead9cb] bg-[#fffaf6] p-4 shadow-[0_12px_32px_rgba(120,53,15,0.06)]">
                  <p className="text-xs font-bold tracking-[0.2em] text-[#9b6b58]">
                    ROTINA DE SKINCARE
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-stone-800">
                    Texturas, toalhas e utensílios reforçam cuidado, higiene e
                    estética profissional.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {page.services.map((service, index) => {
                const Icon = serviceIcons[service.icon] ?? Sparkles;

                return (
                  <article
                    className="group rounded-[30px] border border-[#ead9cb] bg-white p-6 shadow-[0_18px_52px_rgba(120,53,15,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(120,53,15,0.12)]"
                    data-reveal="bella-soft"
                    key={service.name}
                    style={{ transitionDelay: `${index * 70}ms` }}
                  >
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff2f3] text-[#9f4f5f]">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <span className="h-px flex-1 bg-[#f0dfd1]" />
                    </div>
                    <h3 className="font-[Georgia,serif] text-2xl text-stone-950">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-stone-600">
                      {service.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#f8efe7] px-5 py-24" id="espaco">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
              <div className="grid gap-5" data-reveal="bella">
                <div className="overflow-hidden rounded-[44px] border border-white bg-white p-3 shadow-[0_34px_90px_rgba(120,53,15,0.15)]">
                  <div className="relative min-h-[420px] overflow-hidden rounded-[36px] bg-[#f8efe7] md:min-h-[540px]">
                    <Image
                      alt="Atendimento facial delicado em clínica estética premium"
                      className="object-cover"
                      fill
                      sizes="(min-width: 1024px) 52vw, 100vw"
                      src="/images/bella-forma/facial-treatment.png"
                    />
                  </div>
                </div>

                <div className="rounded-[34px] border border-[#e7d1c0] bg-white p-6 shadow-[0_22px_58px_rgba(120,53,15,0.11)] md:p-7">
                  <p className="inline-flex rounded-full bg-[#fff1f3] px-3 py-2 text-xs font-bold tracking-[0.2em] text-[#8c4453]">
                    CUIDADO FACIAL
                  </p>
                  <h3 className="mt-4 font-[Georgia,serif] text-3xl leading-tight text-stone-950">
                    Atendimento calmo, reservado e orientado.
                  </h3>
                  <p className="mt-4 text-base leading-7 text-stone-700">
                    Técnica, higiene e acolhimento em um ambiente preparado
                    para que cada etapa do cuidado seja tranquila.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2 text-sm font-semibold text-[#7d4c3f]">
                    {[
                      "Ambiente reservado",
                      "Cuidado individual",
                      "Orientação profissional",
                    ].map((item) => (
                      <span
                        className="rounded-full border border-[#ead9cb] bg-[#fffaf6] px-4 py-2"
                        key={item}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="rounded-[36px] border border-white bg-[#fffaf6] p-6 shadow-[0_24px_70px_rgba(120,53,15,0.08)] md:p-8"
                data-reveal="bella"
                style={{ transitionDelay: "120ms" }}
              >
                <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-[#9b6b58]">
                  UM ESPAÇO PENSADO PARA SEU CUIDADO
                </p>
                <h2 className="font-[Georgia,serif] text-4xl leading-tight text-stone-950 md:text-5xl">
                  Acolhimento, técnica e conforto em cada detalhe.
                </h2>
                <p className="mt-5 text-base leading-8 text-stone-700">
                  A Bella Forma precisa ser percebida como clínica logo no
                  primeiro olhar: maca preparada, produtos de skincare,
                  atendimento reservado e uma jornada simples para agendar.
                </p>

                <div className="mt-8 grid gap-4">
                  {experienceItems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <article
                        className="grid gap-4 rounded-[28px] border border-[#ead9cb] bg-white p-5 shadow-[0_16px_45px_rgba(120,53,15,0.07)] sm:grid-cols-[auto_1fr]"
                        data-reveal="bella-soft"
                        key={item.title}
                        style={{ transitionDelay: `${index * 70}ms` }}
                      >
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff2f3] text-[#9f4f5f]">
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <div>
                          <h3 className="font-[Georgia,serif] text-2xl leading-tight text-stone-950">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-stone-700">
                            {item.text}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {careSignals.map((item, index) => (
                    <span
                      className="rounded-full border border-[#e3c7ad] bg-white px-4 py-2 text-sm font-semibold text-[#8a5a2f] shadow-[0_10px_24px_rgba(120,53,15,0.06)]"
                      data-reveal="bella-soft"
                      key={item}
                      style={{ transitionDelay: `${index * 55}ms` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center" data-reveal="bella">
              <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-[#9b6b58]">
                AGENDAMENTO
              </p>
              <h2 className="font-[Georgia,serif] text-4xl leading-tight text-stone-950 md:text-5xl">
                Como funciona o agendamento.
              </h2>
              <p className="mt-5 text-base leading-8 text-stone-600">
                O caminho é curto e pensado para transformar interesse em uma
                conversa acolhedora no WhatsApp.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {schedulingSteps.map((step, index) => (
                <article
                  className="rounded-[32px] border border-[#ead9cb] bg-white p-7 shadow-[0_18px_52px_rgba(120,53,15,0.08)]"
                  data-reveal="bella-soft"
                  key={step.title}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fff2f3] font-[Georgia,serif] text-2xl text-[#9f4f5f]">
                    {index + 1}
                  </span>
                  <h3 className="mt-6 font-[Georgia,serif] text-2xl text-stone-950">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="mx-auto mb-5 max-w-xl text-sm leading-7 text-stone-600">
                A mensagem já sai pronta para a clínica entender sua intenção e
                responder com orientação e horários disponíveis.
              </p>
              <WhatsAppLinkButton
                href={whatsappHref}
                className="bg-[#9f4f5f] text-white shadow-[0_18px_46px_rgba(159,79,95,0.22)] hover:bg-[#7f3b4a]"
                icon={MessageCircle}
              >
                Agendar pelo WhatsApp
              </WhatsAppLinkButton>
            </div>
          </div>
        </section>

        <LocalPresenceSection />

        <section className="px-5 pb-20">
          <div
            className="mx-auto max-w-6xl overflow-hidden rounded-[44px] bg-stone-950 text-white shadow-[0_28px_90px_rgba(28,25,23,0.18)]"
            data-reveal="bella"
          >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[260px] lg:min-h-full">
                <Image
                  alt="Detalhes elegantes de skincare em clínica estética"
                  className="object-cover"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  src="/images/bella-forma/skincare-detail.png"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,25,23,0.15),rgba(28,25,23,0.78))]" />
              </div>
              <div className="px-7 py-12 md:px-12">
                <Star className="h-8 w-8 text-[#e5c07b]" aria-hidden="true" />
                <h2 className="mt-5 font-[Georgia,serif] text-4xl leading-tight md:text-5xl">
                  Reserve um momento para cuidar de você.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-stone-200">
                  Envie a mensagem pronta e comece seu atendimento com uma
                  avaliação estética personalizada na Bella Forma.
                </p>
                <div className="mt-8">
                  <WhatsAppLinkButton
                    href={whatsappHref}
                    className="bg-[#f3d8c5] text-stone-950 hover:bg-white"
                    icon={MessageCircle}
                  >
                    Quero agendar minha avaliação
                  </WhatsAppLinkButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <DemoFooter className="border-t border-[#ead9cb] bg-[#fffaf6] text-stone-500" />
    </div>
  );
}
