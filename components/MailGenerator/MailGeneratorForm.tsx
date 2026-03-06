"use client";

import { useState } from "react";
import { calculateWarrantyStatus } from "@/lib/warranty-calculator";
import {
  generateReclamationMail,
  generateRelanceMail,
  applianceTypes,
  toneLabels,
  recommendedAttachments,
  type MailFormData,
  type MailTone,
  type GeneratedMail,
} from "@/lib/mail-templates";
import type { WarrantyStatus as WarrantyStatusType } from "@/lib/warranty-calculator";
import WarrantyStatus from "./WarrantyStatus";
import MailPreview from "./MailPreview";
import {
  sanitizeAmountInput,
  sanitizeMultilineInput,
  sanitizeSingleLineInput,
} from "@/lib/input-sanitizer";

type Step = 1 | 2 | 3;

const stepInfo: Record<Step, { title: string; subtitle: string }> = {
  1: {
    title: "Votre dossier",
    subtitle: "Les éléments qui donnent du poids à la demande",
  },
  2: {
    title: "Votre message",
    subtitle: "Formuler la panne et choisir le ton adapté",
  },
  3: {
    title: "Votre courrier",
    subtitle: "Mail prêt à partir avec les prochaines étapes",
  },
};

function getTodayLocalISO() {
  const today = new Date();
  const offset = today.getTimezoneOffset();
  const local = new Date(today.getTime() - offset * 60 * 1000);
  return local.toISOString().split("T")[0];
}

export default function MailGeneratorForm() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState<MailFormData>({
    applianceType: "",
    brand: "",
    purchaseDate: "",
    store: "",
    problemDescription: "",
    hasReceipt: true,
    customerName: "",
    tone: "standard",
    modelNumber: "",
    serialNumber: "",
    purchaseAmount: "",
  });

  const [warrantyStatus, setWarrantyStatus] =
    useState<WarrantyStatusType | null>(null);
  const [generatedMail, setGeneratedMail] = useState<GeneratedMail | null>(null);
  const [relanceMail, setRelanceMail] = useState<GeneratedMail | null>(null);
  const [showRelance, setShowRelance] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [stepKey, setStepKey] = useState(0);

  const validateStep1 = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.applianceType) newErrors.applianceType = "Sélectionnez un type d'appareil.";
    if (!formData.brand.trim()) newErrors.brand = "Indiquez la marque.";
    if (!formData.purchaseDate) {
      newErrors.purchaseDate = "Indiquez la date d'achat.";
    } else if (new Date(formData.purchaseDate) > new Date()) {
      newErrors.purchaseDate = "La date d'achat ne peut pas être dans le futur.";
    }
    if (!formData.store.trim()) newErrors.store = "Indiquez le vendeur ou le site d'achat.";
    if (!formData.customerName.trim()) newErrors.customerName = "Indiquez votre nom complet.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.problemDescription.trim()) {
      newErrors.problemDescription = "Décrivez précisément la panne.";
    } else if (formData.problemDescription.trim().length < 20) {
      newErrors.problemDescription = "Ajoutez un peu de contexte pour que le message soit crédible (20 caractères minimum).";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (currentStep === 1 && validateStep1()) {
      setStepKey((k) => k + 1);
      setCurrentStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (currentStep === 2 && validateStep2()) {
      const warranty = calculateWarrantyStatus(formData.purchaseDate);
      setWarrantyStatus(warranty);
      setGeneratedMail(generateReclamationMail(formData));
      setRelanceMail(generateRelanceMail(formData));
      setShowRelance(false);
      setStepKey((k) => k + 1);
      setCurrentStep(3);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevStep = () => {
    setStepKey((k) => k + 1);
    if (currentStep === 2) setCurrentStep(1);
    else if (currentStep === 3) setCurrentStep(2);
    setErrors({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    const newValue =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : name === "problemDescription"
        ? sanitizeMultilineInput(value, 2000)
        : name === "purchaseAmount"
        ? sanitizeAmountInput(value, 10)
        : sanitizeSingleLineInput(value, 100);

    setFormData((prev) => ({ ...prev, [name]: newValue }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const today = getTodayLocalISO();

  const isStep1Complete =
    formData.applianceType !== "" &&
    formData.brand.trim() !== "" &&
    formData.purchaseDate !== "" &&
    formData.store.trim() !== "" &&
    formData.customerName.trim() !== "";

  const isStep2Complete = formData.problemDescription.trim().length >= 20;

  return (
    <div className="space-y-6">
      <div className="surface-card rounded-[28px] p-5 sm:p-7">
        <div className="flex items-center justify-between gap-3" role="navigation" aria-label="Étapes du formulaire">
          {([1, 2, 3] as Step[]).map((step) => (
            <div key={step} className="flex flex-1 items-center">
              <div className="flex flex-1 flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-semibold transition-all duration-300 ${
                    step < currentStep
                      ? "bg-[var(--color-secondary)] text-white"
                      : step === currentStep
                      ? "bg-[var(--color-primary)] text-white shadow-[0_16px_30px_-18px_rgba(23,59,122,0.75)]"
                      : "bg-[var(--color-bg-alt)] text-[var(--color-text-muted)]"
                  }`}
                >
                  {step < currentStep ? "OK" : step}
                </div>
                <span
                  className={`mt-2 text-center text-[11px] font-medium leading-tight sm:text-xs ${
                    step === currentStep
                      ? "text-[var(--color-primary)]"
                      : step < currentStep
                      ? "text-[var(--color-secondary)]"
                      : "text-[var(--color-text-muted)]"
                  }`}
                >
                  {stepInfo[step].title}
                </span>
              </div>
              {step < 3 && (
                <div
                  className={`mx-2 mt-[-18px] h-px w-full ${
                    step < currentStep ? "bg-[var(--color-secondary)]" : "bg-[var(--color-border)]"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {currentStep === 1 && (
        <div key={`step1-${stepKey}`} className="animate-fade-in surface-card rounded-[30px] p-6 sm:p-8">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-text)]">{stepInfo[1].title}</h2>
            <p className="mt-2 text-sm text-[var(--color-text-soft)]">{stepInfo[1].subtitle}</p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="applianceType" className="mb-2 block text-sm font-medium text-[var(--color-text)]">
                Type d&apos;appareil <span className="text-red-500">*</span>
              </label>
              <select
                id="applianceType"
                name="applianceType"
                value={formData.applianceType}
                onChange={handleChange}
                className={`w-full rounded-2xl border px-4 py-3 text-[var(--color-text)] outline-none transition ${
                  errors.applianceType ? "border-red-300" : "border-[var(--color-border)]"
                } bg-white focus:border-[var(--color-primary)]`}
              >
                <option value="">Sélectionnez un appareil</option>
                {applianceTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.applianceType && <p className="mt-1 text-sm text-red-600">{errors.applianceType}</p>}
            </div>

            <div>
              <label htmlFor="brand" className="mb-2 block text-sm font-medium text-[var(--color-text)]">
                Marque <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                maxLength={100}
                placeholder="Ex : Samsung, Bosch, LG"
                className={`w-full rounded-2xl border px-4 py-3 text-[var(--color-text)] outline-none transition ${
                  errors.brand ? "border-red-300" : "border-[var(--color-border)]"
                } bg-white focus:border-[var(--color-primary)]`}
              />
              {errors.brand && <p className="mt-1 text-sm text-red-600">{errors.brand}</p>}
            </div>

            <div>
              <label htmlFor="purchaseDate" className="mb-2 block text-sm font-medium text-[var(--color-text)]">
                Date d&apos;achat <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="purchaseDate"
                name="purchaseDate"
                value={formData.purchaseDate}
                onChange={handleChange}
                max={today}
                className={`w-full rounded-2xl border px-4 py-3 text-[var(--color-text)] outline-none transition ${
                  errors.purchaseDate ? "border-red-300" : "border-[var(--color-border)]"
                } bg-white focus:border-[var(--color-primary)]`}
              />
              {errors.purchaseDate && <p className="mt-1 text-sm text-red-600">{errors.purchaseDate}</p>}
            </div>

            <div>
              <label htmlFor="store" className="mb-2 block text-sm font-medium text-[var(--color-text)]">
                Vendeur ou site d&apos;achat <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="store"
                name="store"
                value={formData.store}
                onChange={handleChange}
                maxLength={100}
                placeholder="Ex : Darty, Fnac, Amazon"
                className={`w-full rounded-2xl border px-4 py-3 text-[var(--color-text)] outline-none transition ${
                  errors.store ? "border-red-300" : "border-[var(--color-border)]"
                } bg-white focus:border-[var(--color-primary)]`}
              />
              {errors.store && <p className="mt-1 text-sm text-red-600">{errors.store}</p>}
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="customerName" className="mb-2 block text-sm font-medium text-[var(--color-text)]">
              Votre nom complet <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              maxLength={100}
              placeholder="Prénom Nom"
              className={`w-full rounded-2xl border px-4 py-3 text-[var(--color-text)] outline-none transition ${
                errors.customerName ? "border-red-300" : "border-[var(--color-border)]"
              } bg-white focus:border-[var(--color-primary)]`}
            />
            {errors.customerName && <p className="mt-1 text-sm text-red-600">{errors.customerName}</p>}
          </div>

          <div className="mt-6 flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-4 py-4">
            <input
              type="checkbox"
              id="hasReceipt"
              name="hasReceipt"
              checked={formData.hasReceipt}
              onChange={handleChange}
              className="h-5 w-5 rounded border-[var(--color-border)] text-[var(--color-primary)]"
            />
            <label htmlFor="hasReceipt" className="text-sm text-[var(--color-text)]">
              Je dispose de la facture, du ticket de caisse ou d&apos;un justificatif d&apos;achat.
            </label>
          </div>

          <details className="mt-6 rounded-[26px] border border-[var(--color-border)] bg-white p-5">
            <summary className="flex items-center justify-between gap-4 text-sm font-medium text-[var(--color-text)]">
              <span>Informations optionnelles mais utiles</span>
              <span className="faq-chevron text-[var(--color-primary)]">+</span>
            </summary>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <label htmlFor="modelNumber" className="mb-1 block text-sm font-medium text-[var(--color-text)]">
                  Numéro de modèle
                </label>
                <input
                  type="text"
                  id="modelNumber"
                  name="modelNumber"
                  value={formData.modelNumber || ""}
                  onChange={handleChange}
                  maxLength={50}
                  placeholder="Ex : WM14N200FF"
                  className="w-full rounded-2xl border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-primary)]"
                />
              </div>
              <div>
                <label htmlFor="serialNumber" className="mb-1 block text-sm font-medium text-[var(--color-text)]">
                  Numéro de série
                </label>
                <input
                  type="text"
                  id="serialNumber"
                  name="serialNumber"
                  value={formData.serialNumber || ""}
                  onChange={handleChange}
                  maxLength={50}
                  placeholder="Visible sur l&apos;étiquette"
                  className="w-full rounded-2xl border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-primary)]"
                />
              </div>
              <div>
                <label htmlFor="purchaseAmount" className="mb-1 block text-sm font-medium text-[var(--color-text)]">
                  Prix d&apos;achat (€)
                </label>
                <input
                  type="number"
                  id="purchaseAmount"
                  name="purchaseAmount"
                  value={formData.purchaseAmount || ""}
                  onChange={handleChange}
                  min="0"
                  max="99999"
                  step="0.01"
                  placeholder="Ex : 499"
                  className="w-full rounded-2xl border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-primary)]"
                />
              </div>
            </div>
          </details>

          <button
            type="button"
            onClick={handleNextStep}
            disabled={!isStep1Complete}
            className={`mt-8 w-full rounded-2xl px-8 py-4 text-lg font-semibold transition ${
              isStep1Complete
                ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-strong)]"
                : "cursor-not-allowed bg-gray-200 text-gray-400"
            }`}
          >
            Continuer vers la rédaction
          </button>
        </div>
      )}

      {currentStep === 2 && (
        <div key={`step2-${stepKey}`} className="animate-fade-in surface-card rounded-[30px] p-6 sm:p-8">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-text)]">{stepInfo[2].title}</h2>
            <p className="mt-2 text-sm text-[var(--color-text-soft)]">{stepInfo[2].subtitle}</p>
          </div>

          <div className="mt-6 rounded-[24px] border border-[var(--color-border)] bg-[var(--color-bg-alt)] p-4 text-sm text-[var(--color-text-soft)]">
            <span className="font-semibold text-[var(--color-text)]">Récapitulatif :</span>{" "}
            {formData.applianceType} {formData.brand}, acheté chez {formData.store} le {formData.purchaseDate}.
          </div>

          <div className="mt-6">
            <label htmlFor="problemDescription" className="mb-2 block text-sm font-medium text-[var(--color-text)]">
              Description de la panne <span className="text-red-500">*</span>
            </label>
            <textarea
              id="problemDescription"
              name="problemDescription"
              value={formData.problemDescription}
              onChange={handleChange}
              rows={5}
              maxLength={2000}
              placeholder="Décrivez factuellement ce qui ne fonctionne plus. Exemple : mon lave-linge ne s'allume plus depuis mardi, malgré plusieurs essais et une installation normale."
              className={`w-full rounded-[24px] border px-4 py-3 text-[var(--color-text)] outline-none transition ${
                errors.problemDescription ? "border-red-300" : "border-[var(--color-border)]"
              } bg-white focus:border-[var(--color-primary)]`}
            />
            {errors.problemDescription && <p className="mt-1 text-sm text-red-600">{errors.problemDescription}</p>}
          </div>

          <div className="mt-6">
            <label className="mb-3 block text-sm font-medium text-[var(--color-text)]">Ton du mail</label>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {(Object.keys(toneLabels) as MailTone[]).map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, tone }))}
                  className={`rounded-[24px] border-2 p-4 text-left transition ${
                    formData.tone === tone
                      ? "border-[var(--color-primary)] bg-[var(--color-bg-alt)] shadow-[0_16px_32px_-24px_rgba(23,59,122,0.55)]"
                      : "border-[var(--color-border)] bg-white hover:border-[var(--color-border-strong)]"
                  }`}
                >
                  <span className={`text-sm font-semibold ${formData.tone === tone ? "text-[var(--color-primary)]" : "text-[var(--color-text)]"}`}>
                    {toneLabels[tone].label}
                  </span>
                  <p className="mt-2 text-xs leading-6 text-[var(--color-text-soft)]">
                    {toneLabels[tone].description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-[24px] border border-[var(--color-border)] bg-white p-5">
            <p className="text-sm font-semibold text-[var(--color-text)]">Pièces recommandées à joindre</p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--color-text-soft)]">
              {recommendedAttachments
                .filter((attachment) => attachment.always || !formData.hasReceipt)
                .map((attachment) => (
                  <li key={attachment.id}>• {attachment.label}</li>
                ))}
            </ul>
          </div>

          <div className="mt-8 flex gap-4">
            <button
              type="button"
              onClick={handlePrevStep}
              className="flex-1 rounded-2xl border border-[var(--color-border)] bg-white px-8 py-4 text-lg font-medium text-[var(--color-text)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              Retour
            </button>
            <button
              type="button"
              onClick={handleNextStep}
              disabled={!isStep2Complete}
              className={`flex-[1.6] rounded-2xl px-8 py-4 text-lg font-semibold transition ${
                isStep2Complete
                  ? "bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-strong)]"
                  : "cursor-not-allowed bg-gray-200 text-gray-400"
              }`}
            >
              Générer mon courrier
            </button>
          </div>
        </div>
      )}

      {currentStep === 3 && warrantyStatus && generatedMail && (
        <div key={`step3-${stepKey}`} className="animate-slide-up space-y-6">
          <div className="rounded-[28px] border border-emerald-200 bg-emerald-50 px-6 py-6 text-center">
            <h2 className="text-2xl font-semibold text-emerald-900">Votre mail est prêt</h2>
            <p className="mt-2 text-sm leading-6 text-emerald-700">
              Vérifiez le statut estimé de garantie, copiez le texte et joignez les pièces utiles.
            </p>
          </div>

          <WarrantyStatus status={warrantyStatus} />

          <div className="flex justify-center gap-4">
            <button
              onClick={() => setShowRelance(false)}
              className={`rounded-2xl px-6 py-3 text-sm font-semibold transition ${
                !showRelance
                  ? "bg-[var(--color-primary)] text-white"
                  : "border border-[var(--color-border)] bg-white text-[var(--color-text-soft)]"
              }`}
            >
              Réclamation initiale
            </button>
            <button
              onClick={() => setShowRelance(true)}
              className={`rounded-2xl px-6 py-3 text-sm font-semibold transition ${
                showRelance
                  ? "bg-[var(--color-primary)] text-white"
                  : "border border-[var(--color-border)] bg-white text-[var(--color-text-soft)]"
              }`}
            >
              Relance si silence
            </button>
          </div>

          <MailPreview mail={showRelance && relanceMail ? relanceMail : generatedMail} />

          <div className="surface-card rounded-[28px] p-6">
            <h3 className="text-lg font-semibold text-[var(--color-text)]">Checklist d&apos;envoi</h3>
            <ol className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-text-soft)]">
              <li>1. Copiez le mail et envoyez-le au service client de {formData.store}.</li>
              <li>2. Ajoutez les justificatifs utiles : facture, photos, captures d&apos;échange.</li>
              <li>3. Gardez une copie du message envoyé et des pièces jointes.</li>
              <li>4. Si aucune réponse n&apos;arrive, utilisez la version de relance sous 8 à 15 jours.</li>
            </ol>
          </div>

          <button
            type="button"
            onClick={handlePrevStep}
            className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-8 py-4 font-medium text-[var(--color-text)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            Modifier ma réclamation
          </button>
        </div>
      )}
    </div>
  );
}