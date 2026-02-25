"use client";

import type { WarrantyStatus as WarrantyStatusType } from "@/lib/warranty-calculator";
import { formatDateFR } from "@/lib/warranty-calculator";

interface WarrantyStatusProps {
  status: WarrantyStatusType;
}

export default function WarrantyStatus({ status }: WarrantyStatusProps) {
  return (
    <div
      className={`rounded-xl border-2 p-6 ${
        status.isUnderWarranty
          ? status.daysRemaining > 30
            ? "border-green-200 bg-green-50"
            : "border-amber-200 bg-amber-50"
          : "border-red-200 bg-red-50"
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">
          {status.isUnderWarranty
            ? status.daysRemaining > 30
              ? "✅"
              : "⚠️"
            : "❌"}
        </span>
        <div>
          <h3
            className={`font-semibold text-lg ${
              status.isUnderWarranty
                ? status.daysRemaining > 30
                  ? "text-green-800"
                  : "text-amber-800"
                : "text-red-800"
            }`}
          >
            {status.isUnderWarranty
              ? status.daysRemaining > 30
                ? "Garantie légale probablement active"
                : "Garantie légale bientôt expirée"
              : "Garantie légale probablement expirée"}
          </h3>
          <p
            className={`mt-2 text-sm leading-relaxed ${
              status.isUnderWarranty
                ? status.daysRemaining > 30
                  ? "text-green-700"
                  : "text-amber-700"
                : "text-red-700"
            }`}
          >
            {status.message}
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-xs">
            <span
              className={`${
                status.isUnderWarranty ? "text-green-600" : "text-red-600"
              }`}
            >
              <strong>Date d&apos;achat :</strong>{" "}
              {formatDateFR(status.purchaseDate)}
            </span>
            <span
              className={`${
                status.isUnderWarranty ? "text-green-600" : "text-red-600"
              }`}
            >
              <strong>Fin de garantie :</strong>{" "}
              {formatDateFR(status.warrantyEndDate)}
            </span>
            {status.isUnderWarranty && (
              <span className="text-green-600">
                <strong>Jours restants :</strong> {status.daysRemaining}
              </span>
            )}
          </div>
          <p className="mt-3 text-xs text-gray-500 italic">
            Ce calcul est indicatif, basé sur la date d&apos;achat que vous avez
            renseignée. La date de délivrance effective du bien peut varier.
          </p>
        </div>
      </div>
    </div>
  );
}
