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
    <div className="bg-white rounded-xl border border-[var(--color-border)] shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-[var(--color-primary)] px-6 py-4 no-print">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold text-lg flex items-center gap-2">
            ✉️{" "}
            {mail.type === "reclamation"
              ? "Mail de réclamation"
              : "Mail de relance"}
          </h3>
          <button
            onClick={handleCopyAll}
            className="bg-white/20 hover:bg-white/30 text-white text-sm px-4 py-2 rounded-lg transition-colors font-medium"
          >
            {copied ? "✓ Copié !" : "Tout copier"}
          </button>
        </div>
      </div>

      {/* Objet du mail */}
      <div className="px-6 py-4 border-b border-[var(--color-border)] bg-gray-50">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <span className="text-xs font-semibold text-[var(--color-text-light)] uppercase tracking-wider">
              Objet :
            </span>
            <p className="text-sm text-[var(--color-text)] font-medium mt-1 break-words">
              {mail.subject}
            </p>
          </div>
          <button
            onClick={handleCopySubject}
            className="text-xs text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-medium flex-shrink-0 no-print"
          >
            {copiedSubject ? "✓ Copié" : "Copier l'objet"}
          </button>
        </div>
      </div>

      {/* Corps du mail — style "feuille de papier" */}
      <div className="px-6 py-6 print-letter">
        <div className="bg-white border border-gray-100 rounded-lg shadow-inner p-6 sm:p-8">
          <pre className="whitespace-pre-wrap font-sans text-sm text-[var(--color-text)] leading-relaxed">
            {mail.body}
          </pre>
        </div>
      </div>

      {/* Actions principales */}
      <div className="px-6 py-5 bg-gray-50 border-t border-[var(--color-border)] no-print">
        {/* Bouton principal */}
        <button
          onClick={handleCopyAll}
          className="w-full bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-light)] text-white font-semibold py-4 px-6 rounded-xl transition-all text-center text-lg shadow-lg hover:shadow-xl mb-3"
        >
          {copied ? "✓ Lettre copiée !" : "📋 Copier la lettre"}
        </button>

        {/* Boutons secondaires — grille */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <button
            onClick={handleCopyBody}
            className="bg-white hover:bg-gray-100 text-[var(--color-text)] font-medium py-3 px-3 rounded-lg transition-colors text-center text-xs border border-[var(--color-border)]"
          >
            {copied ? "✓ Copié" : "📄 Corps seul"}
          </button>
          <a
            href={`mailto:?subject=${encodeURIComponent(mail.subject)}&body=${encodeURIComponent(mail.body)}`}
            className="bg-white hover:bg-gray-100 text-[var(--color-text)] font-medium py-3 px-3 rounded-lg transition-colors text-center text-xs border border-[var(--color-border)]"
          >
            📧 Messagerie
          </a>
          <button
            onClick={handleDownloadTxt}
            className="bg-white hover:bg-gray-100 text-[var(--color-text)] font-medium py-3 px-3 rounded-lg transition-colors text-center text-xs border border-[var(--color-border)]"
          >
            📥 Télécharger .txt
          </button>
          <button
            onClick={handlePrint}
            className="bg-white hover:bg-gray-100 text-[var(--color-text)] font-medium py-3 px-3 rounded-lg transition-colors text-center text-xs border border-[var(--color-border)]"
          >
            🖨️ Imprimer / PDF
          </button>
        </div>
      </div>

      {/* Conseil */}
      <div className="px-6 py-4 bg-blue-50 border-t border-blue-100 no-print">
        <p className="text-xs text-blue-700 leading-relaxed">
          <strong>💡 Conseil :</strong> Pour un maximum d&apos;efficacité,
          envoyez ce mail depuis une adresse email professionnelle ou sérieuse.
          Conservez une copie de tous vos échanges. Si vous n&apos;obtenez pas de
          réponse sous 15 jours, utilisez le mail de relance.
        </p>
      </div>
    </div>
  );
}
