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

type Step = 1 | 2 | 3;

const stepInfo: Record<Step, { title: string; subtitle: string }> = {
  1: {
    title: "Votre appareil",
    subtitle: "Décrivez l'appareil en panne",
  },
  2: {
    title: "Votre réclamation",
    subtitle: "Décrivez le problème et choisissez le ton",
  },
  3: {
    title: "Résultat",
    subtitle: "Votre mail est prêt",
  },
};

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
  const [stepKey, setStepKey] = useState(0); // Force re-render for animation

  const validateStep1 = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.applianceType) newErrors.applianceType = "Veuillez sélectionner un type d'appareil.";
    if (!formData.brand.trim()) newErrors.brand = "Veuillez indiquer la marque.";
    if (!formData.purchaseDate) {
      newErrors.purchaseDate = "Veuillez indiquer la date d'achat.";
    } else if (new Date(formData.purchaseDate) > new Date()) {
      newErrors.purchaseDate = "La date ne peut pas être dans le futur.";
    }
    if (!formData.store.trim()) newErrors.store = "Veuillez indiquer le magasin.";
    if (!formData.customerName.trim()) newErrors.customerName = "Veuillez indiquer votre nom.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.problemDescription.trim()) {
      newErrors.problemDescription = "Veuillez décrire le problème.";
    } else if (formData.problemDescription.trim().length < 20) {
      newErrors.problemDescription = "Description trop courte (minimum 20 caractères).";
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
      // Générer les résultats
      const warranty = calculateWarrantyStatus(formData.purchaseDate);
      setWarrantyStatus(warranty);
      const reclamation = generateReclamationMail(formData);
      const relance = generateRelanceMail(formData);
      setGeneratedMail(reclamation);
      setRelanceMail(relance);
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
    const newValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: newValue }));
    if (errors[name]) {
      setErrors((prev) => { const n = { ...prev }; delete n[name]; return n; });
    }
  };

  const today = new Date().toISOString().split("T")[0];

  const isStep1Complete =
    formData.applianceType !== "" &&
    formData.brand.trim() !== "" &&
    formData.purchaseDate !== "" &&
    formData.store.trim() !== "" &&
    formData.customerName.trim() !== "";

  const isStep2Complete = formData.problemDescription.trim().length >= 20;

  return (
    <div className="space-y-6">
      {/* Step Indicator */}
      <div className="flex items-center justify-between mb-8" role="navigation" aria-label="Étapes du formulaire">
        {([1, 2, 3] as Step[]).map((step) => (
          <div key={step} className="flex-1 flex items-center">
            <div className="flex flex-col items-center flex-1">
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  step < currentStep
                    ? "bg-[var(--color-secondary)] text-white scale-100"
                    : step === currentStep
                    ? "bg-[var(--color-primary)] text-white shadow-lg scale-110"
                    : "bg-gray-200 text-gray-500 scale-100"
                }`}
              >
                {step < currentStep ? "✓" : step}
              </div>
              <span
                className={`text-[10px] sm:text-xs mt-1.5 sm:mt-2 text-center font-medium leading-tight ${
                  step === currentStep
                    ? "text-[var(--color-primary)]"
                    : step < currentStep
                    ? "text-[var(--color-secondary)]"
                    : "text-gray-400"
                }`}
              >
                {stepInfo[step].title}
              </span>
            </div>
            {step < 3 && (
              <div
                className={`h-0.5 w-full mx-1 sm:mx-2 mt-[-16px] ${
                  step < currentStep ? "bg-[var(--color-secondary)]" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 1 — Informations sur l'appareil */}
      {currentStep === 1 && (
        <div key={`step1-${stepKey}`} className="animate-fade-in bg-white rounded-xl border border-[var(--color-border)] shadow-sm p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-1">
              {stepInfo[1].title}
            </h2>
            <p className="text-sm text-[var(--color-text-light)]">
              {stepInfo[1].subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Type d'appareil */}
            <div>
              <label htmlFor="applianceType" className="block text-sm font-medium text-[var(--color-text)] mb-2">
                Type d&apos;appareil <span className="text-red-500">*</span>
              </label>
              <select
                id="applianceType" name="applianceType"
                value={formData.applianceType} onChange={handleChange}
                className={`w-full rounded-lg border ${errors.applianceType ? "border-red-300" : "border-[var(--color-border)]"} px-4 py-3 text-[var(--color-text)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)]`}
              >
                <option value="">Sélectionnez un appareil</option>
                {applianceTypes.map((t) => (<option key={t} value={t}>{t}</option>))}
              </select>
              {errors.applianceType && <p className="mt-1 text-sm text-red-600">{errors.applianceType}</p>}
            </div>

            {/* Marque */}
            <div>
              <label htmlFor="brand" className="block text-sm font-medium text-[var(--color-text)] mb-2">
                Marque <span className="text-red-500">*</span>
              </label>
              <input
                type="text" id="brand" name="brand"
                value={formData.brand} onChange={handleChange}
                maxLength={100}
                placeholder="Ex : Samsung, Bosch, LG..."
                className={`w-full rounded-lg border ${errors.brand ? "border-red-300" : "border-[var(--color-border)]"} px-4 py-3 text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)]`}
              />
              {errors.brand && <p className="mt-1 text-sm text-red-600">{errors.brand}</p>}
            </div>

            {/* Date d'achat */}
            <div>
              <label htmlFor="purchaseDate" className="block text-sm font-medium text-[var(--color-text)] mb-2">
                Date d&apos;achat <span className="text-red-500">*</span>
              </label>
              <input
                type="date" id="purchaseDate" name="purchaseDate"
                value={formData.purchaseDate} onChange={handleChange} max={today}
                className={`w-full rounded-lg border ${errors.purchaseDate ? "border-red-300" : "border-[var(--color-border)]"} px-4 py-3 text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)]`}
              />
              {errors.purchaseDate && <p className="mt-1 text-sm text-red-600">{errors.purchaseDate}</p>}
            </div>

            {/* Magasin */}
            <div>
              <label htmlFor="store" className="block text-sm font-medium text-[var(--color-text)] mb-2">
                Magasin / Site d&apos;achat <span className="text-red-500">*</span>
              </label>
              <input
                type="text" id="store" name="store"
                value={formData.store} onChange={handleChange}
                maxLength={100}
                placeholder="Ex : Darty, Amazon, Boulanger..."
                className={`w-full rounded-lg border ${errors.store ? "border-red-300" : "border-[var(--color-border)]"} px-4 py-3 text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)]`}
              />
              {errors.store && <p className="mt-1 text-sm text-red-600">{errors.store}</p>}
            </div>
          </div>

          {/* Nom */}
          <div>
            <label htmlFor="customerName" className="block text-sm font-medium text-[var(--color-text)] mb-2">
              Votre nom complet <span className="text-red-500">*</span>
            </label>
            <input
              type="text" id="customerName" name="customerName"
              value={formData.customerName} onChange={handleChange}
              maxLength={100}
              placeholder="Prénom Nom"
              className={`w-full rounded-lg border ${errors.customerName ? "border-red-300" : "border-[var(--color-border)]"} px-4 py-3 text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)]`}
            />
            {errors.customerName && <p className="mt-1 text-sm text-red-600">{errors.customerName}</p>}
          </div>

          {/* Facture */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox" id="hasReceipt" name="hasReceipt"
              checked={formData.hasReceipt} onChange={handleChange}
              className="w-5 h-5 rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-primary-light)]"
            />
            <label htmlFor="hasReceipt" className="text-sm text-[var(--color-text)]">
              Je dispose de la facture ou du ticket de caisse
            </label>
          </div>

          {/* Informations optionnelles */}
          <details className="bg-[var(--color-bg)] rounded-xl border border-[var(--color-border)] p-4 group">
            <summary className="font-medium text-sm text-[var(--color-text)] cursor-pointer list-none flex items-center justify-between">
              <span>📋 Informations optionnelles (recommandé)</span>
              <span className="text-[var(--color-primary)] faq-chevron flex-shrink-0 text-xs">▼</span>
            </summary>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="modelNumber" className="block text-sm font-medium text-[var(--color-text)] mb-1">
                  Numéro de modèle
                </label>
                <input
                  type="text" id="modelNumber" name="modelNumber"
                  value={formData.modelNumber || ""} onChange={handleChange}
                  maxLength={50}
                  placeholder="Ex : WM14N200FF"
                  className="w-full rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)]"
                />
              </div>
              <div>
                <label htmlFor="serialNumber" className="block text-sm font-medium text-[var(--color-text)] mb-1">
                  Numéro de série
                </label>
                <input
                  type="text" id="serialNumber" name="serialNumber"
                  value={formData.serialNumber || ""} onChange={handleChange}
                  maxLength={50}
                  placeholder="Visible sur l'étiquette"
                  className="w-full rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)]"
                />
              </div>
              <div>
                <label htmlFor="purchaseAmount" className="block text-sm font-medium text-[var(--color-text)] mb-1">
                  Prix d&apos;achat (€)
                </label>
                <input
                  type="number" id="purchaseAmount" name="purchaseAmount"
                  value={formData.purchaseAmount || ""} onChange={handleChange}
                  min="0" max="99999" step="0.01"
                  placeholder="Ex : 499"
                  className="w-full rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)]"
                />
              </div>
            </div>
            <p className="text-xs text-[var(--color-text-light)] mt-3">
              Ces informations renforcent votre réclamation et facilitent le traitement par le vendeur.
            </p>
          </details>

          <button
            type="button" onClick={handleNextStep}
            disabled={!isStep1Complete}
            className={`w-full text-lg font-semibold py-4 px-8 rounded-xl transition-colors ${
              isStep1Complete
                ? "bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Continuer — Étape 2 →
          </button>
        </div>
      )}

      {/* Step 2 — Description du problème + ton */}
      {currentStep === 2 && (
        <div key={`step2-${stepKey}`} className="animate-fade-in bg-white rounded-xl border border-[var(--color-border)] shadow-sm p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-1">
              {stepInfo[2].title}
            </h2>
            <p className="text-sm text-[var(--color-text-light)]">
              {stepInfo[2].subtitle}
            </p>
          </div>

          {/* Résumé étape 1 */}
          <div className="bg-gray-50 rounded-lg p-4 text-sm text-[var(--color-text-light)]">
            <span className="font-medium text-[var(--color-text)]">Résumé :</span>{" "}
            {formData.applianceType} {formData.brand}, acheté chez {formData.store}
          </div>

          {/* Description du problème */}
          <div>
            <label htmlFor="problemDescription" className="block text-sm font-medium text-[var(--color-text)] mb-2">
              Description du problème <span className="text-red-500">*</span>
            </label>
            <textarea
              id="problemDescription" name="problemDescription"
              value={formData.problemDescription} onChange={handleChange}
              rows={4} maxLength={2000}
              placeholder="Décrivez le plus précisément possible le dysfonctionnement. Ex : Mon lave-linge ne s'allume plus depuis hier. Le voyant d'alimentation est éteint et l'appareil ne réagit à aucun bouton."
              className={`w-full rounded-lg border ${errors.problemDescription ? "border-red-300" : "border-[var(--color-border)]"} px-4 py-3 text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] resize-vertical`}
            />
            {errors.problemDescription && <p className="mt-1 text-sm text-red-600">{errors.problemDescription}</p>}
          </div>

          {/* Sélection du ton */}
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-3">
              Ton du mail
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(Object.keys(toneLabels) as MailTone[]).map((tone) => (
                <button
                  key={tone} type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, tone }))}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    formData.tone === tone
                      ? "border-[var(--color-primary)] bg-blue-50 shadow-sm"
                      : "border-[var(--color-border)] hover:border-gray-300"
                  }`}
                >
                  <span className={`text-sm font-semibold ${formData.tone === tone ? "text-[var(--color-primary)]" : "text-[var(--color-text)]"}`}>
                    {tone === "poli" && "🤝 "}{tone === "standard" && "📝 "}{tone === "ferme" && "⚡ "}
                    {toneLabels[tone].label}
                  </span>
                  <p className="text-xs text-[var(--color-text-light)] mt-1">
                    {toneLabels[tone].description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Pièces à joindre */}
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-3">
              📎 Pièces recommandées à joindre au mail
            </label>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <ul className="space-y-2">
                {recommendedAttachments
                  .filter((a) => a.always || !formData.hasReceipt)
                  .map((attachment) => (
                    <li key={attachment.id} className="flex items-center gap-2 text-sm text-amber-800">
                      <span className="text-amber-600">•</span>
                      <span>{attachment.label}</span>
                      {attachment.always && (
                        <span className="text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full font-medium">
                          Recommandé
                        </span>
                      )}
                    </li>
                  ))}
              </ul>
              <p className="text-xs text-amber-700 mt-3 italic">
                Joindre ces documents à votre mail renforce considérablement votre demande.
              </p>
            </div>
          </div>

          {/* Boutons navigation */}
          <div className="flex gap-4">
            <button
              type="button" onClick={handlePrevStep}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-[var(--color-text)] text-lg font-medium py-4 px-8 rounded-xl transition-colors"
            >
              ← Retour
            </button>
            <button
              type="button" onClick={handleNextStep}
              disabled={!isStep2Complete}
              className={`flex-[2] text-lg font-semibold py-4 px-8 rounded-xl transition-colors ${
                isStep2Complete
                  ? "bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-light)] text-white shadow-lg hover:shadow-xl"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              🔧 Générer mon mail
            </button>
          </div>
        </div>
      )}

      {/* Step 3 — Résultat */}
      {currentStep === 3 && warrantyStatus && generatedMail && (
        <div key={`step3-${stepKey}`} className="animate-slide-up space-y-6">
          {/* Header succès */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 text-center animate-scale-in">
            <div className="text-4xl mb-2">✅</div>
            <h2 className="text-xl font-bold text-green-900 mb-1">
              Votre mail est prêt !
            </h2>
            <p className="text-sm text-green-700">
              Copiez-le, téléchargez-le ou ouvrez-le directement dans votre messagerie.
            </p>
          </div>

          {/* Statut de garantie */}
          <WarrantyStatus status={warrantyStatus} />

          {/* Mail généré */}
          <MailPreview mail={showRelance && relanceMail ? relanceMail : generatedMail} />

          {/* Toggle réclamation / relance */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setShowRelance(false)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                !showRelance
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-gray-100 text-[var(--color-text-light)] hover:bg-gray-200"
              }`}
            >
              ✉️ Réclamation
            </button>
            <button
              onClick={() => setShowRelance(true)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                showRelance
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-gray-100 text-[var(--color-text-light)] hover:bg-gray-200"
              }`}
            >
              🔄 Relance (si pas de réponse)
            </button>
          </div>

          {/* Pièces à joindre - rappel */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="font-semibold text-amber-900 mb-3">📎 N&apos;oubliez pas de joindre :</h3>
            <ul className="space-y-1">
              {recommendedAttachments
                .filter((a) => a.always || !formData.hasReceipt)
                .map((a) => (
                  <li key={a.id} className="text-sm text-amber-800 flex items-center gap-2">
                    <span>☐</span> {a.label}
                  </li>
                ))}
            </ul>
          </div>

          {/* Prochaines étapes */}
          <div className="bg-blue-50 rounded-xl border border-blue-100 p-6">
            <h3 className="font-semibold text-blue-900 text-lg mb-4">
              📋 Prochaines étapes
            </h3>
            <ol className="space-y-3 text-sm text-blue-800">
              <li className="flex gap-3">
                <span className="font-bold flex-shrink-0">1.</span>
                <span><strong>Copiez le mail</strong> et envoyez-le au service client de {formData.store}.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold flex-shrink-0">2.</span>
                <span><strong>Joignez les pièces</strong> recommandées ci-dessus.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold flex-shrink-0">3.</span>
                <span><strong>Conservez une copie</strong> de tous vos échanges.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold flex-shrink-0">4.</span>
                <span><strong>Si pas de réponse sous 15 jours</strong>, envoyez le mail de relance.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold flex-shrink-0">5.</span>
                <span>
                  <strong>En dernier recours</strong>, saisissez le médiateur ou contactez{" "}
                  <a href="https://www.quechoisir.org/" target="_blank" rel="noopener noreferrer" className="underline">UFC-Que Choisir</a>.
                </span>
              </li>
            </ol>
          </div>

          {/* Bouton modifier */}
          <button
            type="button" onClick={handlePrevStep}
            className="w-full bg-gray-100 hover:bg-gray-200 text-[var(--color-text)] font-medium py-3 px-8 rounded-xl transition-colors"
          >
            ← Modifier ma réclamation
          </button>
        </div>
      )}
    </div>
  );
}
