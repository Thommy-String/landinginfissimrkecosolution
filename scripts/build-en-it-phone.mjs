#!/usr/bin/env node
/**
 * Build EN version with ITALIAN phone number.
 *
 * Same as build-en.mjs but keeps Italian phone (+39 334 222 1212)
 * for UK visitors who want to reach the Italian office.
 *
 * Strategy:
 *  1. Copy the entire workspace into a temporary folder (excluding node_modules, dist*, .git)
 *  2. Apply IT→EN string replacements on .jsx, .js, .html, .json source files
 *  3. **SKIP phone number translation** — keep +39 334 222 1212 and wa.me/393342221212
 *  4. Override vite base to '/windowfactory/italia/' and run `vite build` from that temp folder
 *  5. Move the resulting build output into ./dist-eng-numero-italiano at the repo root
 *
 * Usage:  node scripts/build-en-it-phone.mjs
 *         node scripts/build-en-it-phone.mjs --dev
 */

import { execSync } from 'node:child_process'
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, symlinkSync, writeFileSync } from 'node:fs'
import { dirname, extname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import os from 'node:os'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const ROOT = resolve(__dirname, '..')
const TMP = join(os.tmpdir(), `mrk-en-it-phone-build-${Date.now()}`)
const FINAL_OUT = join(ROOT, 'dist-eng-numero-italiano')

console.log('🌍  Building English version (Italian phone) → /windowfactory/italia/')
console.log('   Source :', ROOT)
console.log('   Tmp    :', TMP)
console.log('   Output :', FINAL_OUT)

// ─────────────────────────────────────────────────────────────
// 1) COPY PROJECT TO TMP
// ─────────────────────────────────────────────────────────────
const SKIP = new Set(['node_modules', 'dist', 'dist-en', 'dist-eng-numero-italiano', '.git', '.vscode', 'scripts'])

function copyTree(src, dst) {
  mkdirSync(dst, { recursive: true })
  for (const entry of readdirSync(src)) {
    if (SKIP.has(entry)) continue
    const s = join(src, entry)
    const d = join(dst, entry)
    const st = statSync(s)
    if (st.isDirectory()) copyTree(s, d)
    else cpSync(s, d)
  }
}
copyTree(ROOT, TMP)

// also copy node_modules via symlink-equivalent by reusing root install
// Vite needs node_modules → symlink it.
const tmpNm = join(TMP, 'node_modules')
if (!existsSync(tmpNm)) symlinkSync(join(ROOT, 'node_modules'), tmpNm, 'dir')

// ─────────────────────────────────────────────────────────────
// 2) DICTIONARY (longest-first matching)
// ─────────────────────────────────────────────────────────────
// IMPORTANT: order matters. Longer/more specific phrases first to avoid
// partial replacements (e.g. "Infissi" before "infissi" subwords).
// NOTE: PHONE NUMBERS INTENTIONALLY EXCLUDED — keeping Italian phone (+39 334 222 1212)
const DICTIONARY = [
  // ── HTML / META ──────────────────────────────────────────
  ['Infissi in PVC, Alluminio e Legno Su Misura | Prezzi di Fabbrica — Ecosolution SAS', 'Custom PVC, Aluminium and Wood Windows | Factory Prices — Ecosolution SAS'],
  ['Acquista infissi in PVC, alluminio e legno direttamente dalla fabbrica. Risparmia fino al 40% rispetto ai negozi. Preventivo gratuito online. Ecosolution SAS — Lentate sul Seveso (MB).', 'Buy PVC, aluminium and wood windows directly from the factory. Save up to 40% compared to retailers. Free online quote. Ecosolution SAS — Lentate sul Seveso (MB), Italy.'],
  ['Infissi Su Misura a Prezzi di Fabbrica — Ecosolution SAS', 'Custom Windows at Factory Prices — Ecosolution SAS'],
  ['Finestre, portefinestre e persiane direttamente dalla fabbrica. Risparmia fino al 40% saltando gli intermediari. Preventivo online gratuito.', 'Windows, French doors and shutters directly from the factory. Save up to 40% by skipping the middlemen. Free online quote.'],
  ['Ecosolution SAS — Fabbrica Infissi', 'Ecosolution SAS — Window Factory'],
  ['Finestre e portefinestre in PVC, alluminio e legno. Direttamente dalla fabbrica, risparmi fino al 40%.', 'Windows and French doors in PVC, aluminium and wood. Direct from factory — save up to 40%.'],
  ['Fabbrica di infissi in PVC, alluminio e legno con vendita diretta al pubblico. Prezzi di fabbrica, risparmio fino al 40%.', 'Factory of PVC, aluminium and wood windows with direct-to-public sales. Factory prices, save up to 40%.'],
  ['it_IT', 'en_GB'],
  ['lang="it"', 'lang="en"'],
  ['ecosolutionsas.com/fabbricainfissi/', 'ecosolutionsas.com/windowfactory/italia/'],

  // ── PHONE NUMBER: KEEP ITALIAN (do NOT translate) ──────────
  // +39 334 222 1212 and wa.me/393342221212 are intentionally NOT translated

  // ── NAVBAR / FOOTER ──────────────────────────────────────
  ['Produttori di Serramenti - Lentate sul Seveso MB - Lombardia', 'Window Manufacturer — Lentate sul Seveso (MB), Italy'],
  ['Sede Operativa:', 'Operational Headquarters:'],
  ['Cosa produciamo e installiamo', 'What we produce & install'],
  ['Finestre in PVC', 'PVC Windows'],
  ['Finestre in Alluminio', 'Aluminium Windows'],
  [`Portoncini d\\'ingresso`, 'Entrance Doors'],
  ['Porte finestre', 'French Doors'],
  ['Scorrevoli e alzanti', 'Sliding & Lift-Slide'],
  ['Persiane e scuri', 'Shutters & Blinds'],
  ['Zanzariere', 'Insect Screens'],
  ['Cassonetti coibentati', 'Insulated Roller Shutter Boxes'],
  ['Produciamo e installiamo infissi in PVC, alluminio e legno direttamente dalla nostra fabbrica. Vendita diretta senza rivenditori — risparmi reali per famiglie e professionisti in tutta la Lombardia.', 'We manufacture and install PVC, aluminium and wood windows directly from our factory. Direct sales without retailers — real savings for homeowners and professionals.'],
  ['Chiamaci', 'Call Us'],
  [`Scrivici un\\'Email`, 'Email Us'],
  ['Calcola Gratis Stima', 'Get a Free Estimate'],
  ['P.IVA', 'VAT N.'],

  // ── HERO ─────────────────────────────────────────────────
  ['Scelto da più di', 'Trusted by over'],
  ['316 famiglie e aziende', '316 families & businesses'],
  ['In negozio paghi le finestre il 40% in più.', 'In stores you pay 40% more for windows.'],
  ['Salta gli Intermediari e Acquista direttamente dalla Fabbrica.', 'Skip the Middlemen and Buy Directly from the Factory.'],

  // ── TEAM CARD (App.jsx) ──────────────────────────────────
  ['Miglior prezzo di Fabbrica Garantito', 'Best Factory Price Guaranteed'],
  ['100% Qualità Tedesca Certificata', '100% Certified German Quality'],
  ['Consegna rapida in 2–3 settimane', 'Fast delivery in 2–3 weeks'],
  ['Il team Ecosolution MRK', 'The Ecosolution MRK team'],

  // ── SOCIAL PROOF ─────────────────────────────────────────
  ['Stessa finestra, metà prezzo.', 'Same window, half the price.'],
  ['Taglia i costi dei negozi.', 'Cut out retail markups.'],
  ['"Preventivo quasi metà prezzo rispetto al negozio per stessa marca VEKA che avevo visto in showroom. Consigliato. Tra ordine e consegna arrivete in 3 settimane."', '"Quote was almost half the showroom price for the same VEKA brand. Highly recommended. From order to delivery in 3 weeks."'],
  ['Verificata', 'Verified'],
  ['Monza - 3 settimane fa', 'Monza · 3 weeks ago'],

  // ── TRUST BANNER (delivery) ──────────────────────────────
  ['Consegniamo in tutta Lombardia.', 'We deliver across Italy and Europe.'],
  ['Direttamente dalla nostra fabbrica.', 'Directly from our factory.'],
  ['Magazzino - Lentate sul Seveso · MB', 'Warehouse — Lentate sul Seveso (MB), Italy'],
  [`Pronte in 2-3 settimane dall\\'ordine`, 'Ready in 2-3 weeks from order'],
  ['Oltre 4.000 infissi consegnati ogni anno', 'Over 4,000 windows delivered every year'],
  ['Furgone consegna Ecosolution MRK', 'Ecosolution MRK delivery van'],

  // ── FABBRICA BANNER ──────────────────────────────────────
  ['Produciamo noi, vendiamo noi.', 'We make them, we sell them.'],
  ['Zero intermediari.', 'Zero middlemen.'],
  ['Produzione interna su misura', 'In-house custom production'],
  ['Prezzi impossibili da trovare in negozio', `Prices you won’t find in stores`],
  ['Fabbrica Ecosolution MRK', 'Ecosolution MRK factory'],

  // ── QUALITY VIDEO BANNER ─────────────────────────────────
  ['Ma la qualità è la stessa?', 'But is the quality the same?'],
  ['Sì, i negozi comprano da noi e rivendono.', 'Yes — retailers buy from us and resell.'],
  ['Lavorazione reale — fabbrica MRK', 'Real production — MRK factory'],
  ['Profili Tedeschi certificati VEKA', 'VEKA-certified German profiles'],
  ['Garanzia 10 anni', '10-year warranty'],

  // ── FISCAL BONUS ─────────────────────────────────────────
  ['Recuperi il 50% con le detrazioni fiscali.', 'Looking for energy-efficient windows?'],
  ['Gestiamo noi le pratiche per te.', 'We supply full technical documentation.'],
  ['Ecobonus 50%', 'Energy Efficient'],
  ['Nessun costo nascosto. Nessun pensiero.', 'No hidden costs. No worries.'],
  ['Cambiare le finestre non è mai stato così semplice. Oltre a farti risparmiare fino al 40% sul prezzo di listino acquistando direttamente dalla fabbrica, ti forniamo tutta la', 'Replacing your windows has never been easier. Beyond saving up to 40% off retail by buying directly from the factory, we provide all the'],
  ['Cambiare le finestre non è mai stato così semplice. Oltre a farti risparmiare fino al 40% sul prezzo di listino acquistando direttamente dalla fabbrica, ti aiutiamo con tutta la', 'Replacing your windows has never been easier. Beyond saving up to 40% off retail by buying directly from the factory, we help you with all the'],
  ['documentazione per la detrazione fiscale al 50%', 'documentation for energy-efficiency tax incentives'],
  ['Fattura elettronica a norma per Ecobonus', 'Compliant invoicing for tax credits'],
  ['Certificazioni termiche e marcatura CE', 'Thermal certifications & CE marking'],
  ['Assistenza gratuita pratica ENEA', 'Free technical paperwork assistance'],

  // ── INSTALLATION TRUST BANNER ────────────────────────────
  ['La finestra è perfetta. Ma chi la monta?', 'The window is perfect. But who installs it?'],
  ['Solo posatori interni qualificati.', 'Only qualified in-house installers.'],
  [`Posa a Regola d\\'Arte`, 'Professional Installation'],
  ['Niente muratori a caso. Squadre interne.', 'No random subcontractors. In-house teams.'],
  ['Zero spifferi, zero muffa', 'Zero drafts, zero mould'],
  [`Montaggio garantito quanto l\\'infisso`, 'Installation guaranteed like the window itself'],
  [`Una finestra eccellente posata male diventa una finestra inutile.`, 'An excellent window poorly installed becomes a useless window.'],
  [`Ecco perché`, `That’s why`],
  [`non affidiamo l\\'installazione a ditte esterne o "tuttofare"`, 'we never outsource installation to third parties or "handymen"'],
  [`La posa è eseguita dai nostri tecnici certificati con materiali isolanti di ultima generazione per garantirti un isolamento perfetto.`, 'Installation is performed by our certified technicians using state-of-the-art insulation materials for a perfect seal.'],
  ['Squadra di posatori MRK al lavoro', 'MRK installation team at work'],

  // ── PRODUCTION VIDEO ─────────────────────────────────────
  ['Acquista dalla fonte e', 'Buy from the source and'],
  ['Risparmia almeno il 30%', 'Save at least 30%'],
  [`Quando compri in negozio, paghi tre cose: la finestra, l\\'affitto del negozio e la provvigione del venditore.`, `When you buy in a store, you pay three things: the window, the store rent, and the salesperson’s commission.`],
  ['Da noi paghi solo la finestra.', 'With us, you only pay for the window.'],
  ['Risultato Immediato', 'Immediate Result'],
  ['Nessun Obbligo di Acquisto', 'No Purchase Obligation'],
  ['Il tuo browser non supporta il tag video.', 'Your browser does not support the video tag.'],

  // ── PROFILE QUALITY ──────────────────────────────────────
  ['Profili Tedeschi Certificati.', 'Certified German Profiles.'],
  ['Produciamo Infissi fatti per durare.', 'We build windows that last.'],
  ['I migliori profili europei per durabilità, isolamento termico e resistenza nel tempo. Garanzia decennale.', 'The best European profiles for durability, thermal insulation and long-term resistance. 10-year warranty.'],
  ['Certificazione Europea', 'European Certification'],
  ['Garanzia 10 Anni', '10-Year Warranty'],

  // ── WINDOW MAINTENANCE (lead time) ───────────────────────
  ['2-3 Mesi', '2-3 Months'],
  ['Pronte in 2-3 Settimane.', 'Ready in 2-3 Weeks.'],
  ['Non aspettare mesi.', 'No more waiting months.'],
  ['Gestimo tutto il processo, questo ci permette di produrre e consegnare in soli 14-26 giorni. Tempi record ripetto la concorrenza.', 'We handle the entire process, which lets us produce and deliver in just 14-26 days. Record-breaking lead times.'],
  ['14-26 giorni dalla fabbrica', '14-26 days from factory'],
  ['Consegna in tutta Lombardia', 'Delivery across the region'],

  // ── VALUE PROPOSITION ────────────────────────────────────
  ['10.000€ dal rivenditore?', '£10,000 from the retailer?'],
  ['5.000€ dalla Fabbrica.', '£5,000 from the Factory.'],
  ['I rivenditori tradizionali aggiungono il', 'Traditional retailers add a'],
  ['dal 50-100% di ricarico', '50-100% markup'],
  ['alle tue finestre. Loro vendono quello che comprano da noi a doppio prezzo.', 'on your windows. They sell what they buy from us at double the price.'],
  ['Compra dalla fonte', 'Buy from the source'],
  ['e risparmia, niente intermediari.', 'and save — no middlemen.'],
  ['Produzione Diretta', 'Direct Production'],
  ['Produciamo noi stessi nella nostra fabbrica', 'We manufacture in our own factory'],
  ['Nessun Intermediario', 'No Middlemen'],
  ['Niente rivenditori. Niente costi nascosti. Prezzo trasparente.', 'No resellers. No hidden costs. Transparent pricing.'],
  ['Qualità Garantita', 'Guaranteed Quality'],
  ['Profili Aluplast & Veka certificati, garanzia decennale.', 'Certified Aluplast & Veka profiles, 10-year warranty.'],
  ['Calcola Gratis quanto risparmi', 'Calculate how much you save'],

  // ── LOCATION SHOWCASE ────────────────────────────────────
  ['Consegna e Intallazione in tutta Lombardia', 'Delivery & Installation across the region'],
  ['Il nostro magazzino è a Lentate Sul Seveso - MB', 'Our warehouse is in Lentate Sul Seveso (MB), Italy'],
  ['Produciamo infissi di qualità certificata per famiglie e professionisti. La nostra fabbrica è sinonimo di eccellenza, innovazione e trasparenza totale.', 'We manufacture certified-quality windows for families and professionals. Our factory stands for excellence, innovation and full transparency.'],
  ['Certificato ISO', 'ISO Certified'],
  ['Anche Pacchetto Fornitura + Posa', 'Supply + Installation packages also available'],

  // ── COOKIE CONSENT ───────────────────────────────────────
  ['Gestione dei Cookie', 'Cookie Settings'],
  ['Utilizziamo cookie tecnici per il funzionamento del sito e, con il tuo consenso, cookie di profilazione (anche di terze parti come Google) per misurare l\'efficacia delle nostre campagne pubblicitarie.', 'We use technical cookies to operate the site and, with your consent, profiling cookies (including third-party such as Google) to measure the effectiveness of our advertising campaigns.'],
  ['Accetta solo necessari', 'Accept'],
  ['Rifiuta', 'Reject'],

  // ── FLOATING CTA ─────────────────────────────────────────
  ['Messaggio', 'Message'],
  ['Chiama', 'Call'],
  ['Nessun obbligo di acquisto', 'No purchase obligation'],
  ['Ciao fabbrica MRK-Ecosolution, vorrei ...', 'Hi MRK-Ecosolution, I would like to...'],
  ['Ciao%20MRk-Ecosolution', 'Hi%20MRk-Ecosolution'],

  // ── QUIZ ─────────────────────────────────────────────────
  ['Quiz:', 'Quiz:'],
  ['Scopri quanto Risparmi', 'See how much you Save'],
  ['acquistando dalla Fabbrica', 'buying from the Factory'],
  ['Non chiediamo email / telefono', 'No email / phone required'],
  ['Risultato immediato', 'Immediate result'],
  ['Domanda {currentStep + 1} di {STEPS.length}', 'Question {currentStep + 1} of {STEPS.length}'],
  ['Che tipo di infissi vuoi?', 'What kind of windows do you want?'],
  ['Scegli il materiale — clicca e prosegui automaticamente.', 'Pick the material — click and continue automatically.'],
  ['Il Più Scelto', 'Most Popular'],
  ['Prezzo medio in negozio:', 'Average store price:'],
  ['Nostro prezzo di Fabbrica:', 'Our factory price:'],
  ['Per chi è adatto', 'Best for'],
  ['*Prezzi al mq, IVA esclusa', '*Prices per sqm, VAT excluded'],

  // FASCE
  ['Il Prezzo Più Basso', 'Lowest Price'],
  ['Voglio spendere il meno possibile', 'I want to spend the least possible'],
  [`Doppio vetro standard con camera d\\'aria da 16mm. Già un enorme miglioramento rispetto ai vecchi infissi — conforme a tutte le normative, a un prezzo imbattibile.`, 'Standard double glazing with 16mm air gap. A huge upgrade over old windows — fully compliant, unbeatable price.'],
  ['Perfetto se hai un budget limitato, stai ristrutturando un appartamento in affitto, o vuoi semplicemente sostituire vecchi infissi con qualcosa di moderno e funzionale senza spendere troppo.', 'Perfect if you have a limited budget, are renovating a rental, or just want to replace old windows with something modern and functional without overspending.'],
  ['Doppio vetro 4/16/4', 'Double glazing 4/16/4'],
  ['Vetrocamera', 'Glazing'],
  ['Doppio vetro 4/16/4 mm', 'Double glazing 4/16/4 mm'],
  [`Due lastre di vetro con camera d\\'aria da 16mm. Isolamento base ma già molto meglio di un vecchio infisso singolo vetro.`, 'Two glass panes with a 16mm air gap. Basic insulation, but vastly better than an old single-glazed window.'],
  ['Vetro basso-emissivo (Low-E)', 'Low-E coated glass'],
  ['Non incluso', 'Not included'],
  [`Il coating Low-E riflette il calore verso l\\'interno. In questa fascia non è presente, ma l\\'infisso è comunque a norma.`, 'Low-E coating reflects heat back inside. Not included in this tier, but the window still meets all standards.'],
  ['Antisfondamento', 'Anti-burglary'],
  ['Il vetro stratificato di sicurezza non è incluso. Sufficiente per la maggior parte delle abitazioni standard.', 'Laminated safety glass is not included. Adequate for most standard homes.'],
  ['Gas Argon', 'Argon Gas'],
  ['Aria standard', 'Standard air'],
  [`La camera è riempita con aria normale. L\\'argon migliorerebbe l\\'isolamento del 15%, ma non è necessario per un buon risultato.`, 'The chamber is filled with standard air. Argon would boost insulation by 15%, but is not required for a great result.'],
  ['Isolamento termico (Uw)', 'Thermal insulation (Uw)'],
  ['Valore di trasmittanza termica. Più è basso, meno calore disperdi. Isolamento base ma conforme alle normative vigenti.', 'Thermal transmittance value. Lower is better. Basic insulation that meets current regulations.'],
  ['Qualità / Prezzo', 'Best Value'],
  ['Voglio il miglior rapporto qualità-prezzo', 'I want the best value for money'],
  ['Vetro basso-emissivo (Low-E) che riflette il calore + gas Argon per isolare il 30% in più. La scelta più intelligente: risparmi in bolletta fin da subito.', 'Low-E coated glass + Argon gas for 30% better insulation. The smartest choice — savings on bills from day one.'],
  ['La scelta ideale per la tua casa principale. Ottieni isolamento superiore, risparmio in bolletta e un comfort abitativo che senti subito. È la fascia che consigliamo al 70% dei clienti.', 'Ideal for your main home. Superior insulation, lower bills, and noticeable comfort. The tier we recommend to 70% of our customers.'],
  ['Doppio vetro 4/16/4 basso-emissivo', 'Low-E double glazing 4/16/4'],
  [`Due lastre di vetro con camera d\\'aria da 16mm — stessa struttura base ma con trattamenti superiori.`, 'Two glass panes with 16mm air gap — same base structure with superior treatments.'],
  ['Incluso', 'Included'],
  [`Coating invisibile che riflette il calore verso l\\'interno d\\'inverno e lo respinge d\\'estate. Riduce la dispersione fino al 30%.`, 'Invisible coating that reflects heat inside in winter and blocks it in summer. Cuts heat loss by up to 30%.'],
  ['Vetro stratificato', 'Laminated glass'],
  ['Vetro di sicurezza che protegge dai vetri rotti e aumenta la resistenza agli urti. Perfetto per la sicurezza della famiglia.', 'Safety glass that protects from breakage and improves impact resistance. Perfect for family safety.'],
  [`Gas inerte iniettato nella camera tra i vetri. Isola il 15% in più dell\\'aria e non si disperde nel tempo.`, `Inert gas injected between the panes. Insulates 15% more than air and doesn’t leak over time.`],
  ['Buon isolamento. Significa bollette più basse e una casa che mantiene la temperatura adeguatamente.', 'Good insulation. Means lower bills and a home that holds its temperature properly.'],
  ['Fascia Alta', 'Premium'],
  ['Voglio il massimo delle prestazioni', 'I want maximum performance'],
  ['Triplo vetro con doppio Low-E, gas Argon in entrambe le camere, canalina calda e vetro antieffrazione P2A.', 'Triple glazing with double Low-E, Argon gas in both chambers, warm-edge spacer and P2A anti-burglary glass.'],
  ['Per chi non vuole compromessi. Ideale per villette, zone fredde o rumorose, e per chi vuole il massimo comfort, sicurezza antieffrazione e il miglior isolamento possibile. Investimento che si ripaga in bolletta.', 'For those who want no compromises. Ideal for detached homes, cold or noisy areas, and anyone wanting maximum comfort, security and the best possible insulation. An investment that pays back through bills.'],
  ['Triplo vetro 4/12/4/12/4 basso-emissivo', 'Low-E triple glazing 4/12/4/12/4'],
  ['Triplo vetro 4/12/4/12/4 mm', 'Triple glazing 4/12/4/12/4 mm'],
  ['Tre lastre di vetro con doppia camera. Isolamento termico e acustico ai massimi livelli — senti subito la differenza.', 'Three glass panes with double chamber. Maximum thermal and acoustic insulation — you feel the difference immediately.'],
  ['Doppio coating', 'Double coating'],
  ['Due strati di coating Low-E su lastre diverse. Massima riflessione del calore, efficienza quasi da "casa passiva".', 'Two Low-E coating layers on different panes. Maximum heat reflection, near "passive house" efficiency.'],
  ['Vetro stratificato P2A', 'P2A laminated glass'],
  ['Vetro di sicurezza certificato P2A: resiste a tentativi di effrazione e protegge dai vetri rotti. Sicurezza reale per la tua famiglia.', 'P2A-certified safety glass: resists break-in attempts and protects from broken glass. Real security for your family.'],
  ['Doppia camera', 'Double chamber'],
  ['Gas argon in entrambe le camere per un isolamento termico imbattibile. Nessuna dispersione, massimo comfort.', 'Argon gas in both chambers for unbeatable thermal insulation. Zero leakage, maximum comfort.'],
  ['Canalina calda', 'Warm-edge spacer'],
  ['Inclusa', 'Included'],
  ['Canalina isolante in acciaio inox che minimizza i ponti termici. Riduce ulteriormente le dispersioni ai bordi del vetro.', 'Insulated stainless-steel spacer that minimizes thermal bridges. Further reduces heat loss at the glass edges.'],
  ['Eccellente isolamento. Significa bollette più basse e una casa che mantiene la temperatura in modo efficiente.', 'Excellent insulation. Means lower bills and a home that holds its temperature efficiently.'],

  // MATERIALI
  ['Massimo Isolamento termico', 'Maximum thermal insulation'],
  ['Zero manutenzione', 'Zero maintenance'],
  ['Miglior rapporto qualità/prezzo', 'Best value for money'],
  ['La scelta più diffusa in Italia. Perfetto per chi vuole il miglior rapporto qualità/prezzo senza rinunce: isolamento termico eccellente, zero manutenzione e costi ridotti. Ideale per case in zona fredda e chi vuole subito una spesa contenuta.', 'The most popular choice. Perfect for those who want the best value with no compromises: excellent thermal insulation, zero maintenance and low cost. Ideal for cold-zone homes and anyone who wants immediate value.'],
  ['Alluminio', 'Aluminium'],
  ['Ultra resistente', 'Ultra resistant'],
  ['Design minimal e moderno', 'Minimalist modern design'],
  ['Ideale per grandi vetrate', 'Ideal for large glazed surfaces'],
  ['Meno isolante del PVC', 'Less insulating than PVC'],
  ['Prezzo più alto', 'Higher price'],
  [`Per chi ama il design minimalista e le linee pulite. L\\'alluminio è perfetto per case moderne con grandi vetrate, uffici, e spazi aperti. Scegli questa soluzione se vuoi un\\'estetica contemporanea e prestazioni elevate.`, 'For those who love minimalist design and clean lines. Aluminium is perfect for modern homes with large windows, offices and open spaces. Choose this for contemporary aesthetics and high performance.'],
  ['Legno', 'Wood'],
  ['Caldo ed elegante', 'Warm & elegant'],
  ['Ottimo isolamento naturale', 'Excellent natural insulation'],
  ['Perfetto per case classiche', 'Perfect for classic homes'],
  ['Richiede manutenzione periodica', 'Requires periodic maintenance'],
  ['Prezzo più elevato', 'Higher price'],
  ['La scelta di chi vuole eleganza senza compromessi. Il legno è perfetto per case rustiche, dimore storiche e chi apprezza il calore naturale. Richiede manutenzione periodica (trattamenti ogni 3-5 anni), ma dona personalità unica agli spazi.', 'The choice for those who want uncompromising elegance. Wood is perfect for rustic homes, historic dwellings and anyone who values natural warmth. It requires periodic maintenance (every 3-5 years), but adds unique character to spaces.'],

  // QUIZ STEP 2
  ['Cosa è più importante per te?', 'What matters most to you?'],
  ['Ogni fascia ha vetri e trattamenti diversi. Scegli quella più adatta a te.', 'Each tier has different glazing and treatments. Choose the one that suits you best.'],
  ['★ Consigliato — scelto dal 70% dei clienti', '★ Recommended — chosen by 70% of customers'],
  ['Sicurezza', 'Security'],

  // QUIZ STEP 3
  ['Hai già le misure dei tuoi serramenti?', 'Do you already have the window measurements?'],
  ['Così calcoliamo un preventivo più preciso.', 'So we can give you a more accurate quote.'],
  ['Sì, ho le misure', 'Yes, I have the sizes'],
  ['Inserisci larghezza e altezza di ogni finestra per un calcolo preciso al centimetro.', 'Enter the width and height of each window for a centimetre-accurate calculation.'],
  ['No, stima approssimativa', 'No, give me an estimate'],
  ['Non preoccuparti! Dicci solo quante finestre hai e ti daremo una stima indicativa.', `Don’t worry! Just tell us how many windows you have and we’ll give you an indicative estimate.`],
  ['Finestra', 'Window'],
  ['Portafinestra', 'French Door'],
  ['Larghezza', 'Width'],
  ['Altezza', 'Height'],
  ['es. 120', 'e.g. 120'],
  ['es. 140', 'e.g. 140'],
  ['Aggiungi un altro serramento', 'Add another window'],
  ['Monolocale', 'Studio'],
  ['Studio o monolocale compatto', 'Studio or compact unit'],
  ['Appartamento Medio', 'Mid-size Apartment'],
  ['2–3 stanze, ingresso e cucina', '2–3 rooms, entrance & kitchen'],
  ['Casa', 'House'],
  ['3–4 stanze, doppi servizi', '3–4 rooms, two bathrooms'],
  ['Villa / Palazzina', 'Villa / Detached'],
  ['4+ stanze, con giardino o terrazzi', '4+ rooms, garden or terraces'],
  ['serramenti in media', 'windows on average'],

  // QUIZ STEP 4
  ['Hai bisogno anche della posa in opera?', 'Do you also need installation?'],
  ['I nostri posatori certificati installano in tutta la Lombardia.', 'Our certified installers work across the region.'],
  ['Solo fornitura', 'Supply only'],
  ['Hai già un tuo installatore di fiducia. Ti forniamo solo i serramenti.', 'You already have a trusted installer. We just supply the windows.'],
  ['Fornitura + Posa', 'Supply + Installation'],
  ['Ci occupiamo noi di tutto: serramenti + installazione professionale.', 'We handle everything: windows + professional installation.'],
  ['💰 Prezzo Conveniente', '💰 Best Value'],
  ['Sopralluogo gratuito', 'Free site inspection'],
  ['Rilevamento misure a domicilio', 'On-site measuring'],
  ['Posa professionale certificata', 'Certified professional installation'],
  ['Smaltimento vecchi infissi', 'Disposal of old windows'],
  ['Miglior prezzo grazie alle squadre interne', 'Best price thanks to in-house teams'],

  // QUIZ STEP 5 (RISULTATO)
  ['Preventivo su misura', 'Custom quote'],
  ['Stima indicativa', 'Indicative estimate'],
  ['Ecco il tuo riepilogo completo', `Here’s your full summary`],
  ['Tutto quello che hai scelto, confrontato e spiegato', 'Everything you chose — compared and explained'],
  ['Le tue scelte', 'Your choices'],
  ['Dettaglio costi', 'Cost breakdown'],
  ['Nostro prezzo', 'Our price'],
  ['Prezzo nei negozi', 'Store price'],
  ['Montaggio infissi', 'Window installation'],
  ['Smontaggio esistente', 'Removal of existing'],
  ['Smaltimento vecchi infissi', 'Disposal of old windows'],
  ['Smaltimento vecchio materiale', 'Disposal of old material'],
  ['Costo fisso per smaltire il vecchio', 'Fixed cost to dispose of the old'],
  ['Solo fornitura — posa non inclusa', 'Supply only — installation not included'],
  ['Quanto risparmi', 'How much you save'],
  ['Prezzo di mercato nei negozi', 'Retail market price'],
  ['Serramenti in', 'Windows in'],
  ['Posa in opera', 'Installation'],
  ['Totale', 'Total'],
  ['Nostro prezzo — diretto fabbrica', 'Our price — direct from factory'],
  ['Risparmio totale', 'Total savings'],
  ['sulla stessa identica qualità', 'on the exact same quality'],
  ['Confronto fasce', 'Tier comparison'],
  ['Hai scelto', 'You chose'],
  ['ecco come si confronta con le altre opzioni.', '— here is how it compares to the other options.'],
  ['Caratteristica', 'Feature'],
  ['La tua scelta', 'Your choice'],
  ['Triplo vetro', 'Triple glazing'],
  ['Doppio vetro', 'Double glazing'],
  ['Vetro Low-E', 'Low-E glass'],
  ['2 camere', '2 chambers'],
  ['Sì', 'Yes'],
  ['Doppio', 'Double'],
  ['Antieffrazione', 'Anti-burglary'],
  ['Isolamento (Uw)', 'Insulation (Uw)'],
  ['Prezzo', 'Price'],
  ['Garanzia 10 anni', '10-year warranty'],
  ['Su tutti i prodotti', 'On all products'],
  ['Produzione Certificata', 'Certified Production'],
  ['In tutta la Lombardia', 'Across the region'],
  ['Chiamaci per il preventivo esatto', 'Call us for an exact quote'],
  ['Oppure scrivici su WhatsApp al', 'Or message us on WhatsApp at'],
  ['Indietro', 'Back'],
  ['Vedi il tuo risparmio', 'See your savings'],
  ['Avanti', 'Next'],
  ['Modifica le scelte', 'Edit choices'],

  // ── EURO → POUND symbol & locale formatting ──────────────
  // Replace currency symbol & locale used in Quiz.jsx fmt()
  [`'€ ' + n.toLocaleString('it-IT')`, `'£' + n.toLocaleString('en-GB')`],
  // Plain price tags inside Quiz.jsx (€ followed by number / template)
  ['€{mat.prezzoFabbricaMq}', '£{mat.prezzoFabbricaMq}'],
  ['€{mat.prezzoNegozioMq}', '£{mat.prezzoNegozioMq}'],
  // ValueProposition headline: €10.000 → already replaced above to £10,000

  // ── QUIZ MISSING BITS (template literals & summary) ──────
  // Step 5 result labels still leaking IT
  ['Stima ~${mqTotale.toFixed(1)} mq totali (misura media 120×130 cm)', 'Estimated ~${mqTotale.toFixed(1)} sqm total (avg size 120×130 cm)'],
  ['~${num} serramenti in ${mat.nome}', '~${num} ${mat.nome} windows'],
  ['/pezzo × ${est.numPezzi} pezzi', '/unit × ${est.numPezzi} units'],
  ['/pezzo', '/unit'],
  [' pezzi`', ' units`'],
  [' pezzi', ' units'],
  // Standalone words used elsewhere in templates / summaries
  ['Pezzi', 'Units'],
  ['serramenti', 'windows'], // catch-all (data-prop names like answers.serramenti are fine: only string content is touched in JSX text — but field keys also match. Safe because UI-visible "windows" is the desired noun and we already pluralise contexts.)
  // NOTE: we intentionally keep field names readable; this only matters in user-visible strings
  ['Serramenti in', 'Windows in'],

  // ── INSTALLATION TRUST BANNER ────────────────────────────
  ['Hai bisogno del montaggio?', 'Need installation too?'],
  ['Posiamo noi da soli €80 al pezzo', 'We install from £80 per unit'],
  ['Niente estranei. Squadre interne.', 'No outsiders. In-house teams.'],
  [`Montaggio garantito quanto l\\'infisso`, 'Installation guaranteed like the window itself'],
  ['Una finestra eccellente posata male diventa una finestra scadente.', 'An excellent window poorly installed becomes a poor window.'],
  [`Ecco perché non affidiamo l\\'installazione a ditte esterne o "tuttofare"`, `That’s why we never outsource installation to third parties or "handymen"`],
  ['La posa è eseguita dai nostri tecnici con materiali adatti per garantirti un isolamento perfetto.', 'Installation is performed by our own technicians using the right materials for a perfect seal.'],
  ['Fabbrica MRK-Ecosolution', 'MRK-Ecosolution Factory'],

  // ── REMOVE FISCAL BONUS BANNER IN EN (no Italian Ecobonus in UK) ─
  ['<FiscalBonusBanner />', '{/* FiscalBonusBanner removed: no Italian Ecobonus in UK */}'],
  ['import FiscalBonusBanner from "./components/FiscalBonusBanner";', '// FiscalBonusBanner import removed for EN'],

  // Materials short labels often missed
  ['Best for', 'Best for'], // already EN — placeholder no-op (kept for clarity)
]

// ─────────────────────────────────────────────────────────────
// 3) WALK & REPLACE
// ─────────────────────────────────────────────────────────────
const TARGET_EXT = new Set(['.jsx', '.js', '.html', '.json', '.mjs', '.cjs'])
const SKIP_FILES = new Set(['package-lock.json', 'pnpm-lock.yaml', 'yarn.lock'])

// Sort dictionary by source length DESC so longer phrases match first
// (prevents short tokens from breaking longer ones — e.g. "Richiede manutenzione periodica"
//  partial-replacing inside a longer paragraph that was supposed to be translated whole).
DICTIONARY.sort((a, b) => b[0].length - a[0].length)

let totalReplacements = 0
let filesTouched = 0

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry)
    if (SKIP.has(entry)) continue
    if (entry === 'node_modules') continue
    const st = statSync(p)
    if (st.isDirectory()) { walk(p); continue }
    if (!TARGET_EXT.has(extname(p))) continue
    if (SKIP_FILES.has(entry)) continue

    let content = readFileSync(p, 'utf8')
    let changed = false
    let count = 0
    for (const [from, to] of DICTIONARY) {
      if (!content.includes(from)) continue
      const before = content
      // Replace ALL occurrences (string mode)
      content = content.split(from).join(to)
      if (before !== content) {
        changed = true
        count += (before.length - content.length === 0 ? 1 : 1) // best-effort counter
      }
    }
    if (changed) {
      writeFileSync(p, content, 'utf8')
      filesTouched++
      totalReplacements += count
    }
  }
}
walk(TMP)
console.log(`✅  Translated ${filesTouched} files (${totalReplacements} dictionary hits)`)

// ─────────────────────────────────────────────────────────────
// 4) PATCH vite.config.js → base '/windowfactory/italia/'
// ─────────────────────────────────────────────────────────────
const viteCfg = join(TMP, 'vite.config.js')
let cfg = readFileSync(viteCfg, 'utf8')
cfg = cfg.replace(/base:\s*['"][^'"]+['"]/, `base: '/windowfactory/italia/'`)
writeFileSync(viteCfg, cfg, 'utf8')
console.log(`✅  Patched vite.config.js → base '/windowfactory/italia/'`)

// ─────────────────────────────────────────────────────────────
// 5) RUN VITE — build (default) or dev (--dev flag)
// ─────────────────────────────────────────────────────────────
const isDev = process.argv.includes('--dev')

if (isDev) {
  console.log('🚀  Starting EN (IT phone) dev server (Ctrl+C to stop)…')
  console.log('   → open http://localhost:5173/windowfactory/italia/')
  // Forward stdio so Vite output is visible & Ctrl+C works.
  // --open /windowfactory/italia/  makes the browser jump straight to the right path
  execSync('npx vite --host --open /windowfactory/italia/', { cwd: TMP, stdio: 'inherit' })
  // Cleanup on exit
  try { rmSync(TMP, { recursive: true, force: true }) } catch {}
  process.exit(0)
}

console.log('🏗️   Running vite build…')
execSync('npx vite build', { cwd: TMP, stdio: 'inherit' })

// ─────────────────────────────────────────────────────────────
// 6) MOVE OUTPUT → repo/dist-eng-numero-italiano
// ─────────────────────────────────────────────────────────────
if (existsSync(FINAL_OUT)) rmSync(FINAL_OUT, { recursive: true, force: true })
cpSync(join(TMP, 'dist'), FINAL_OUT, { recursive: true })
console.log(`📦  Output ready: ${FINAL_OUT}`)

// Cleanup tmp
try { rmSync(TMP, { recursive: true, force: true }) } catch {}

console.log('\n✨  Done! Upload the contents of  dist-eng-numero-italiano/  to')
console.log('    https://www.ecosolutionsas.com/windowfactory/italia/')
