"use client";

import { useState } from "react";
import type { GeneratedMail } from "@/lib/mail-templates";

interface MailPreviewProps {
  mail: GeneratedMail;
}

export default function MailPreview({ mail }: MailPreviewProps) {
  const [copied, setCopied] = useState(false);
  const [copiedSubject, setCopiedSubject] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
  };

  const handleCopyBody = async () => {
    await copyToClipboard(mail.body);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopySubject = async () => {
    await copyToClipboard(mail.subject);
    setCopiedSubject(true);
    setTimeout(() => setCopiedSubject(false), 2000);
  };

  const handleCopyAll = async () => {
    const fullText = `Objet : ${mail.subject}\n\n${mail.body}`;
    await copyToClipboard(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadTxt = () => {
    const fullText = `Objet : ${mail.subject}\n\n${mail.body}`;
    const blob = new Blob([fullText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${mail.type}-${new Date().toISOString().split("T")[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="overflow-hidden rounded-[30px] border border-[var(--color-border)] bg-white shadow-[0_24px_50px_-38px_rgba(15,23,42,0.42)]">
      <div className="panel-dark px-6 py-5 no-print">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-highlight)]">
              {mail.type === "reclamation" ? "Réclamation initiale" : "Relance"}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              Message prêt à envoyer
            </h3>
          </div>
          <button
            onClick={handleCopyAll}
            className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-[var(--color-ink)] transition hover:bg-[var(--color-highlight)]"
          >
            {copied ? "Copié" : "Tout copier"}
          </button>
        </div>
      </div>

      <div className="border-b border-[var(--color-border)] bg-[var(--color-bg-alt)] px-6 py-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              Objet
            </p>
            <p className="mt-2 text-sm font-semibold text-[var(--color-text)]">{mail.subject}</p>
          </div>
          <button
            onClick={handleCopySubject}
            className="text-xs font-semibold text-[var(--color-primary)] transition hover:text-[var(--color-primary-strong)]"
          >
            {copiedSubject ? "Copié" : "Copier l'objet"}
          </button>
        </div>
      </div>

      <div className="px-6 py-6 print-letter">
        <div className="rounded-[24px] border border-[var(--color-border)] bg-white p-6 shadow-inner sm:p-8">
          <pre className="whitespace-pre-wrap text-sm leading-7 text-[var(--color-text)]">
            {mail.body}
          </pre>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)] px-6 py-5 no-print">
        <button
          onClick={handleCopyAll}
          className="mb-3 w-full rounded-2xl bg-[var(--color-secondary)] px-6 py-4 text-lg font-semibold text-white transition hover:bg-[var(--color-secondary-strong)]"
        >
          {copied ? "Lettre copiée" : "Copier la lettre complète"}
        </button>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <button
            onClick={handleCopyBody}
            className="rounded-2xl border border-[var(--color-border)] bg-white px-3 py-3 text-xs font-medium text-[var(--color-text)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            Copier le corps
          </button>
          <a
            href={`mailto:?subject=${encodeURIComponent(mail.subject)}&body=${encodeURIComponent(mail.body)}`}
            className="rounded-2xl border border-[var(--color-border)] bg-white px-3 py-3 text-center text-xs font-medium text-[var(--color-text)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            Ouvrir la messagerie
          </a>
          <button
            onClick={handleDownloadTxt}
            className="rounded-2xl border border-[var(--color-border)] bg-white px-3 py-3 text-xs font-medium text-[var(--color-text)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            Télécharger en .txt
          </button>
          <button
            onClick={handlePrint}
            className="rounded-2xl border border-[var(--color-border)] bg-white px-3 py-3 text-xs font-medium text-[var(--color-text)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            Imprimer / PDF
          </button>
        </div>
      </div>
    </div>
  );
}