import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, MessageCircle } from "lucide-react";

const qrCells = [
  1, 1, 1, 0, 1, 0, 1, 1, 1,
  1, 0, 1, 0, 0, 1, 1, 0, 1,
  1, 1, 1, 0, 1, 1, 1, 1, 1,
  0, 0, 0, 1, 0, 1, 0, 0, 1,
  1, 1, 0, 1, 1, 0, 1, 0, 0,
  0, 1, 1, 0, 1, 1, 0, 1, 1,
  1, 0, 1, 1, 0, 1, 1, 1, 0,
  1, 1, 0, 0, 1, 0, 0, 1, 1,
  0, 1, 1, 1, 0, 1, 1, 0, 1,
];

export function WhatsAppLinkButton({
  href,
  children,
  className,
  icon: Icon = MessageCircle,
  showArrow = true,
}: {
  href: string;
  children: ReactNode;
  className: string;
  icon?: LucideIcon;
  showArrow?: boolean;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      className={`landing-cta inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition ${className}`}
      href={href}
      rel={isExternal ? "noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span>{children}</span>
      {showArrow ? <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" /> : null}
    </a>
  );
}

export function QrPlaceholder({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      aria-label="Placeholder visual de QR Code"
      className={`grid grid-cols-9 gap-1 p-3 ${className}`}
    >
      {qrCells.map((cell, index) => (
        <span
          className={`aspect-square rounded-[2px] ${
            cell
              ? dark
                ? "bg-amber-300"
                : "bg-stone-900"
              : dark
                ? "bg-slate-700"
                : "bg-rose-100"
          }`}
          key={`${cell}-${index}`}
        />
      ))}
    </div>
  );
}

export function DemoFooter({ className = "" }: { className?: string }) {
  return (
    <footer className={`px-5 py-8 text-sm leading-6 ${className}`}>
      <div className="mx-auto max-w-7xl">
        Modelo demonstrativo fictício criado para apresentar uma estrutura de
        captação via WhatsApp.
      </div>
    </footer>
  );
}

export function formatPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  const country = digits.slice(0, 2);
  const area = digits.slice(2, 4);
  const first = digits.slice(4, 9);
  const second = digits.slice(9);

  return `+${country} (${area}) ${first}-${second}`;
}

export function mapsLink(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address,
  )}`;
}
