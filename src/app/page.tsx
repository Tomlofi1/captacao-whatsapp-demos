import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

const pages = [
  {
    href: "/bella-forma",
    name: "Bella Forma Estética",
    niche: "Estética em Maceió - AL",
    text: "Modelo de agendamento de avaliação estética pelo WhatsApp.",
  },
  {
    href: "/autoprime-oficina",
    name: "AutoPrime Oficina",
    niche: "Oficina mecânica em Maceió - AL",
    text: "Modelo de solicitação de orçamento automotivo pelo WhatsApp.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <section className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-5xl flex-col justify-center">
        <div className="mb-10 max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm font-semibold text-white">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Modelos demonstrativos
          </div>
          <h1 className="text-4xl font-bold md:text-6xl">
            Landing pages de captação via WhatsApp para negócios locais.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Escolha uma rota para visualizar o modelo fictício com serviços,
            diferenciais, presença no Google, QR Code e CTA final.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {pages.map((page) => (
            <Link
              className="rounded-lg border border-white/10 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:bg-white/[0.1]"
              href={page.href}
              key={page.href}
            >
              <p className="text-sm font-semibold text-cyan-200">
                {page.niche}
              </p>
              <h2 className="mt-3 text-2xl font-bold">{page.name}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {page.text}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                Abrir página
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
