"use client";

import { useState } from "react";
import { calculateWarrantyStatus } from "@/lib/warranty-calculator";
import {
  generateReclamationMail,
  generateRelanceMail,
  applianceTypes,
  type MailFormData,
  type GeneratedMail,
} from "@/lib/mail-templates";
import type { WarrantyStatus as WarrantyStatusType } from "@/lib/warranty-calculator";
import WarrantyStatus from "./WarrantyStatus";
import MailPreview from "./MailPreview";

export default function MailGeneratorForm() {
  const [formData, setFormData] = useState<MailFormData>({
    applianceType: "",
    brand: "",
    purchaseDate: "",
    store: "",
    problemDescription: "",
    hasReceipt: true,
    customerName: "",
  });

  const [warrantyStatus, setWarrantyStatus] =
    useState<WarrantyStatusType | null>(null);
  const [generatedMail, setGeneratedMail] = useState<GeneratedMail | null>(
    null
  );
  const [relanceMail, setRelanceMail] = useState<GeneratedMail | null>(null);
  const [showRelance, setShowRelance] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.applianceType) {
      newErrors.applianceType = "Veuillez sélectionner un type d'appareil.";
    }
    if (!formData.brand.trim()) {
      newErrors.brand = "Veuillez indiquer la marque de l'appareil.";
    }
    if (!formData.purchaseDate) {
      newErrors.purchaseDate = "Veuillez indiquer la date d'achat.";
    } else {
      const purchaseDate = new Date(formData.purchaseDate);
      const today = new Date();
      if (purchaseDate > today) {
        newErrors.purchaseDate =
          "La date d'achat ne peut pas être dans le futur.";
      }
    }
    if (!formData.store.trim()) {
      newErrors.store = "Veuillez indiquer le magasin ou site d'achat.";
    }
    if (!formData.problemDescription.trim()) {
      newErrors.problemDescription =
        "Veuillez décrire le problème rencontré.";
    } else if (formData.problemDescription.trim().length < 20) {
      newErrors.problemDescription =
        "Veuillez fournir une description plus détaillée (minimum 20 caractères).";
    }
    if (!formData.customerName.trim()) {
      newErrors.customerName = "Veuillez indiquer votre nom.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Calculer le statut de garantie
    const warranty = calculateWarrantyStatus(formData.purchaseDate);
    setWarrantyStatus(warranty);

    // Générer les mails
    const reclamation = generateReclamationMail(formData);
    const relance = generateRelanceMail(formData);
    setGeneratedMail(reclamation);
    setRelanceMail(relance);
    setShowRelance(false);

    // Scroll vers le résultat
    setTimeout(() => {
      document
        .getElementById("result-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({ ...prev, [name]: newValue }));

    // Effacer l'erreur du champ modifié
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Calculer la date max (aujourd'hui) pour le date picker
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="space-y-8">
      {/* Formulaire */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl border border-[var(--color-border)] shadow-sm p-6 sm:p-8 space-y-6"
        noValidate
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Type d'appareil */}
          <div>
            <label
              htmlFor="applianceType"
              className="block text-sm font-medium text-[var(--color-text)] mb-2"
            >
              Type d&apos;appareil <span className="text-red-500">*</span>
            </label>
            <select
              id="applianceType"
              name="applianceType"
              value={formData.applianceType}
              onChange={handleChange}
              className={`w-full rounded-lg border ${
                errors.applianceType
                  ? "border-red-300 focus:ring-red-500"
                  : "border-[var(--color-border)] focus:ring-[var(--color-primary-light)]"
              } px-4 py-3 text-[var(--color-text)] bg-white focus:outline-none focus:ring-2`}
            >
              <option value="">Sélectionnez un appareil</option>
              {applianceTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.applianceType && (
              <p className="mt-1 text-sm text-red-600">
                {errors.applianceType}
              </p>
            )}
          </div>

          {/* Marque */}
          <div>
            <label
              htmlFor="brand"
              className="block text-sm font-medium text-[var(--color-text)] mb-2"
            >
              Marque <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              placeholder="Ex : Samsung, Bosch, LG..."
              className={`w-full rounded-lg border ${
                errors.brand
                  ? "border-red-300 focus:ring-red-500"
                  : "border-[var(--color-border)] focus:ring-[var(--color-primary-light)]"
              } px-4 py-3 text-[var(--color-text)] focus:outline-none focus:ring-2`}
            />
            {errors.brand && (
              <p className="mt-1 text-sm text-red-600">{errors.brand}</p>
            )}
          </div>

          {/* Date d'achat */}
          <div>
            <label
              htmlFor="purchaseDate"
              className="block text-sm font-medium text-[var(--color-text)] mb-2"
            >
              Date d&apos;achat (approximative){" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="purchaseDate"
              name="purchaseDate"
              value={formData.purchaseDate}
              onChange={handleChange}
              max={today}
              className={`w-full rounded-lg border ${
                errors.purchaseDate
                  ? "border-red-300 focus:ring-red-500"
                  : "border-[var(--color-border)] focus:ring-[var(--color-primary-light)]"
              } px-4 py-3 text-[var(--color-text)] focus:outline-none focus:ring-2`}
            />
            {errors.purchaseDate && (
              <p className="mt-1 text-sm text-red-600">
                {errors.purchaseDate}
              </p>
            )}
          </div>

          {/* Magasin */}
          <div>
            <label
              htmlFor="store"
              className="block text-sm font-medium text-[var(--color-text)] mb-2"
            >
              Magasin / Site d&apos;achat{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="store"
              name="store"
              value={formData.store}
              onChange={handleChange}
              placeholder="Ex : Darty, Amazon, Boulanger..."
              className={`w-full rounded-lg border ${
                errors.store
                  ? "border-red-300 focus:ring-red-500"
                  : "border-[var(--color-border)] focus:ring-[var(--color-primary-light)]"
              } px-4 py-3 text-[var(--color-text)] focus:outline-none focus:ring-2`}
            />
            {errors.store && (
              <p className="mt-1 text-sm text-red-600">{errors.store}</p>
            )}
          </div>
        </div>

        {/* Nom du client */}
        <div>
          <label
            htmlFor="customerName"
            className="block text-sm font-medium text-[var(--color-text)] mb-2"
          >
            Votre nom complet <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            placeholder="Prénom Nom"
            className={`w-full rounded-lg border ${
              errors.customerName
                ? "border-red-300 focus:ring-red-500"
                : "border-[var(--color-border)] focus:ring-[var(--color-primary-light)]"
            } px-4 py-3 text-[var(--color-text)] focus:outline-none focus:ring-2`}
          />
          {errors.customerName && (
            <p className="mt-1 text-sm text-red-600">
              {errors.customerName}
            </p>
          )}
        </div>

        {/* Description du problème */}
        <div>
          <label
            htmlFor="problemDescription"
            className="block text-sm font-medium text-[var(--color-text)] mb-2"
          >
            Description du problème <span className="text-red-500">*</span>
          </label>
          <textarea
            id="problemDescription"
            name="problemDescription"
            value={formData.problemDescription}
            onChange={handleChange}
            rows={4}
            placeholder="Décrivez le plus précisément possible le dysfonctionnement de votre appareil. Ex : Mon lave-linge ne s'allume plus depuis hier matin. Le voyant d'alimentation est éteint et l'appareil ne réagit à aucun bouton."
            className={`w-full rounded-lg border ${
              errors.problemDescription
                ? "border-red-300 focus:ring-red-500"
                : "border-[var(--color-border)] focus:ring-[var(--color-primary-light)]"
            } px-4 py-3 text-[var(--color-text)] focus:outline-none focus:ring-2 resize-vertical`}
          />
          {errors.problemDescription && (
            <p className="mt-1 text-sm text-red-600">
              {errors.problemDescription}
            </p>
          )}
        </div>

        {/* Facture */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="hasReceipt"
            name="hasReceipt"
            checked={formData.hasReceipt}
            onChange={handleChange}
            className="w-5 h-5 rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-primary-light)]"
          />
          <label
            htmlFor="hasReceipt"
            className="text-sm text-[var(--color-text)]"
          >
            Je dispose de la facture ou du ticket de caisse
          </label>
        </div>

        {/* Bouton submit */}
        <button
          type="submit"
          className="w-full bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-light)] text-white text-lg font-semibold py-4 px-8 rounded-xl transition-colors shadow-lg hover:shadow-xl"
        >
          🔧 Générer mon mail de réclamation
        </button>
      </form>

      {/* Résultat */}
      {warrantyStatus && generatedMail && (
        <div id="result-section" className="space-y-6">
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
              ✉️ Mail de réclamation
            </button>
            <button
              onClick={() => setShowRelance(true)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                showRelance
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-gray-100 text-[var(--color-text-light)] hover:bg-gray-200"
              }`}
            >
              🔄 Mail de relance
            </button>
          </div>

          {/* Prochaines étapes */}
          <div className="bg-blue-50 rounded-xl border border-blue-100 p-6">
            <h3 className="font-semibold text-blue-900 text-lg mb-4">
              📋 Prochaines étapes
            </h3>
            <ol className="space-y-3 text-sm text-blue-800">
              <li className="flex gap-3">
                <span className="font-bold flex-shrink-0">1.</span>
                <span>
                  <strong>Copiez le mail</strong> et envoyez-le au service
                  client du vendeur ({formData.store}).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold flex-shrink-0">2.</span>
                <span>
                  <strong>Conservez une copie</strong> de tous vos échanges
                  (mails envoyés, réponses reçues).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold flex-shrink-0">3.</span>
                <span>
                  <strong>
                    Si pas de réponse sous 15 jours
                  </strong>
                  , envoyez le mail de relance (bouton ci-dessus).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold flex-shrink-0">4.</span>
                <span>
                  <strong>En dernier recours</strong>, saisissez le médiateur de
                  la consommation ou contactez{" "}
                  <a
                    href="https://www.quechoisir.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-600"
                  >
                    UFC-Que Choisir
                  </a>
                  .
                </span>
              </li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}
