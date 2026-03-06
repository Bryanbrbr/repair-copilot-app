"use client";

import type { WarrantyStatus as WarrantyStatusType } from "@/lib/warranty-calculator";
import { formatDateFR } from "@/lib/warranty-calculator";

interface WarrantyStatusProps {
  status: WarrantyStatusType;
}

export default function WarrantyStatus({ status }: WarrantyStatusProps) {
  const stateClass = status.isUnderWarranty
    ? status.daysRemaining > 30
      ? {
          wrapper: "border-emerald-200 bg-emerald-50",
          title: "text-emerald-900",
          text: "text-emerald-800",
          badge: "bg-emerald-600 text-white",
          label: "Garantie probablement active",
        }
      : {
          wrapper: "border-amber-200 bg-amber-50",
          title: "text-amber-900",
          text: "text-amber-800",
          badge: "bg-amber-600 text-white",
          label: "Garantie Ã  traiter sans attendre",
        }
    : {
        wrapper: "border-rose-200 bg-rose-50",
        title: "text-rose-900",
        text: "text-rose-800",
        badge: "bg-rose-700 text-white",
        label: "Garantie probablement expirÃ©e",
      };

  return (
    <div className={`rounded-[28px] border p-6 ${stateClass.wrapper}`}>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${stateClass.badge}`}>
            {stateClass.label}
          </span>
          <h3 className={`mt-4 text-2xl font-semibold ${stateClass.title}`}>
            Lecture rapide de votre situation
          </h3>
          <p className={`mt-3 max-w-2xl text-sm leading-7 ${stateClass.text}`}>
            {status.message}
          </p>
        </div>

        <div className="grid min-w-[220px] gap-3 rounded-[24px] border border-white/60 bg-white/70 p-4 text-sm text-[var(--color-text)]">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">Date d&apos;achat</p>
            <p className="mt-1 font-semibold">{formatDateFR(status.purchaseDate)}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">Fin estimÃ©e</p>
            <p className="mt-1 font-semibold">{formatDateFR(status.warrantyEndDate)}</p>
          </div>
          {status.isUnderWarranty && (
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">Jours restants</p>
              <p className="mt-1 font-semibold">{status.daysRemaining}</p>
            </div>
          )}
        </div>
      </div>

      <p className="mt-4 text-xs leading-6 text-[var(--color-text-muted)]">
        Estimation indicative basÃ©e sur la date d&apos;achat. La date exacte de dÃ©livrance du bien ou
        certaines circonstances particuliÃ¨res peuvent modifier l&apos;analyse. En cas de doute sÃ©rieux,
        fais vÃ©rifier ton dossier.
      </p>
    </div>
  );
}