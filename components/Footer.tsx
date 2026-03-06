import Link from "next/link";

const legalLinks = [
  {
    href: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069565/LEGISCTA000032221271/",
    label: "Code de la consommation sur LÃ©gifrance",
  },
  {
    href: "https://www.economie.gouv.fr/dgccrf/les-garanties-legales",
    label: "DGCCRF â€” Les garanties lÃ©gales",
  },
  {
    href: "https://www.quechoisir.org/",
    label: "UFC-Que Choisir",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-[var(--color-border)] bg-[rgba(255,250,240,0.72)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[28px] border border-[var(--color-border)] bg-white p-8 shadow-[0_24px_50px_-40px_rgba(15,23,42,0.5)] md:grid-cols-[1.1fr_0.9fr_1fr]">
          <div>
            <p className="eyebrow">Positionnement</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-text)]">
              Un outil simple pour dÃ©fendre un droit prÃ©cis
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--color-text-soft)]">
              Repair Copilot aide Ã  formuler une rÃ©clamation fondÃ©e sur la garantie lÃ©gale de
              conformitÃ©. Le site ne remplace pas un avocat, mais il Ã©vite d&apos;envoyer un mail flou,
              incomplet ou juridiquement faible.
            </p>
          </div>

          <div>
            <p className="eyebrow">Navigation</p>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-text-soft)]">
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/generateur">GÃ©nÃ©rateur de mail</Link></li>
              <li><Link href="/guide">Guides par appareil</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/mentions-legales">Mentions lÃ©gales</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Sources</p>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-text-soft)]">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-[var(--color-primary)]"
                  >
                    {link.label} â†—
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 grid gap-4 text-xs leading-6 text-[var(--color-text-muted)] md:grid-cols-[1.2fr_0.8fr]">
          <p>
            <strong>Avertissement :</strong> Les informations fournies par Repair Copilot sont
            donnÃ©es Ã  titre indicatif, sur la base du Code de la consommation franÃ§ais en vigueur.
            Elles ne constituent pas un conseil juridique personnalisÃ©. En cas de litige complexe,
            consultez un professionnel du droit ou une association de consommateurs.
          </p>
          <p className="md:text-right">Â© {currentYear} Repair Copilot. Tous droits rÃ©servÃ©s.</p>
        </div>
      </div>
    </footer>
  );
}