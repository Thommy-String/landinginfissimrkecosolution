/**
 * landingConfig.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Fonte unica di verità per tutti i testi delle landing page dinamiche.
 * Ogni voce viene letta da DynamicCityLanding in base a (intento + città).
 *
 * Struttura: CONFIG[intento][città]  → oggetto pagina
 * Città speciali: "generica" = nessuna geo, solo intento.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const CITTA = {
  milano: { nome: 'Milano',  provincia: 'MI', zona: 'Milano e hinterland' },
  monza:  { nome: 'Monza',   provincia: 'MB', zona: 'Monza e Brianza' },
  como:   { nome: 'Como',    provincia: 'CO', zona: 'Como e laghi' },
  varese: { nome: 'Varese',  provincia: 'VA', zona: 'Varese e provincia' },
}

// ── Helper per non ripetere testi simili ─────────────────────────────────────
const makeGeo = (c) => ({
  badge:      `📍 Serviamo ${c.zona} (${c.provincia})`,
  badgeColor: 'emerald',
  h1:         `Infissi a ${c.nome} — Prezzi di Fabbrica`,
  h1Gradient: `Senza Intermediari`,
  sottotitolo: `Produciamo e installiamo finestre e porte in ${c.zona}. Niente negozi, niente rivenditori — risparmi reali fino al 40% con garanzia tedesca VEKA.`,
  cta1:       `Preventivo gratuito a ${c.nome}`,
  cta2:       'Chiama ora →',
  focus:      'geo',
  features: [
    `Consegna e installazione a ${c.nome} (${c.provincia})`,
    'Produzione VEKA — qualità tedesca certificata',
    'Prezzi di fabbrica senza ricarichi',
    'Sopralluogo gratuito entro 48h',
  ],
})

const makePosa = (c) => ({
  badge:      `🔧 Posa certificata a ${c.nome} (${c.provincia})`,
  badgeColor: 'blue',
  h1:         `Sostituzione Infissi a ${c.nome}`,
  h1Gradient: 'Chiavi in Mano — Dalla Fabbrica alla Posa',
  sottotitolo: `Montiamo direttamente i nostri infissi in ${c.zona}. Squadre dipendenti (no subappalto), pulizia cantiere inclusa, garanzia su tutto.`,
  cta1:       `Preventivo posa a ${c.nome}`,
  cta2:       'Chiama ora →',
  focus:      'posa',
  features: [
    'Operai dipendenti — zero subappalti',
    'Smontaggio e smaltimento vecchi infissi incluso',
    'Pulizia cantiere garantita a fine lavori',
    `Intervento a ${c.nome} entro 2 settimane`,
  ],
  steps: [
    { icon: '📞', titolo: 'Contatto',    desc: 'Risposta entro 2 ore' },
    { icon: '📐', titolo: 'Sopralluogo', desc: 'Tecnico gratuito entro 48h' },
    { icon: '🏭', titolo: 'Produzione',  desc: 'Su misura in 2–3 settimane' },
    { icon: '🔧', titolo: 'Posa',        desc: 'Squadra certificata, cantiere pulito' },
  ],
})

const makeFabbrica = (c) => ({
  badge:      `🏭 Fabbrica → ${c.nome} (${c.provincia})`,
  badgeColor: 'orange',
  h1:         `Fabbrica Infissi a ${c.nome}`,
  h1Gradient: 'Vendita Diretta — Fino al 40% in Meno',
  sottotitolo: `Acquistiamo direttamente dal nostro stabilimento e consegniamo in ${c.zona}. Nessun negozio, nessun rivenditore. Solo fabbrica → casa tua.`,
  cta1:       `Preventivo fabbrica a ${c.nome}`,
  cta2:       'Chiama la Fabbrica →',
  focus:      'fabbrica',
  features: [
    'Produciamo ogni serramento internamente',
    'Profilati VEKA — standard tedesco',
    `Consegna diretta a ${c.nome} (${c.provincia})`,
    'Personalizzazione totale: colori, misure, vetri',
    'Garanzia 10 anni sul prodotto',
  ],
})

// ── CONFIG principale ─────────────────────────────────────────────────────────
export const CONFIG = {

  // ── Gruppo 3: Fabbrica ───────────────────────────────────────────────────
  fabbrica: {
    milano:   makeFabbrica(CITTA.milano),
    monza:    makeFabbrica(CITTA.monza),
    como:     makeFabbrica(CITTA.como),
    varese:   makeFabbrica(CITTA.varese),
    generica: {
      badge:      '🏭 Vendita diretta dalla Fabbrica',
      badgeColor: 'orange',
      h1:         'Fabbrica Infissi',
      h1Gradient: 'Vendita Diretta — Niente Intermediari',
      sottotitolo: 'Produciamo ogni finestra e porta nel nostro stabilimento in Brianza. Acquisti dalla fabbrica e risparmi fino al 40% rispetto ai negozi.',
      cta1:       'Preventivo fabbrica gratuito',
      cta2:       'Chiama ora →',
      focus:      'fabbrica',
      features: [
        'Stabilimento produttivo a Lentate sul Seveso (MB)',
        'Profilati VEKA certificati (qualità tedesca)',
        'Consegna in tutta la Lombardia',
        'Nessun rivenditore — prezzo di fabbrica reale',
        'Garanzia 10 anni sul prodotto',
      ],
    },
  },

  // ── Gruppo 4: Posa ───────────────────────────────────────────────────────
  posa: {
    milano:   makePosa(CITTA.milano),
    monza:    makePosa(CITTA.monza),
    como:     makePosa(CITTA.como),
    varese:   makePosa(CITTA.varese),
    generica: {
      badge:      '🔧 Posa certificata in Lombardia',
      badgeColor: 'blue',
      h1:         'Sostituzione Infissi',
      h1Gradient: 'Chiavi in Mano — Posa Professionale',
      sottotitolo: 'Produciamo e installiamo in tutta la Lombardia con squadre nostre. Dalla fabbrica al montaggio: un unico fornitore, zero problemi.',
      cta1:       'Preventivo posa gratuito',
      cta2:       'Chiama ora →',
      focus:      'posa',
      features: [
        'Operai dipendenti — zero subappalti',
        'Smontaggio e smaltimento vecchi infissi',
        'Pulizia cantiere a fine lavori',
        'Garanzia 2 anni sulla posa',
      ],
      steps: [
        { icon: '📞', titolo: 'Contatto',    desc: 'Risposta entro 2 ore' },
        { icon: '📐', titolo: 'Sopralluogo', desc: 'Tecnico gratuito entro 48h' },
        { icon: '🏭', titolo: 'Produzione',  desc: 'Su misura in 2–3 settimane' },
        { icon: '🔧', titolo: 'Posa',        desc: 'Squadra certificata, cantiere pulito' },
      ],
    },
  },

  // ── Gruppo 5: Geo-Pura ───────────────────────────────────────────────────
  geo: {
    milano: makeGeo(CITTA.milano),
    monza:  makeGeo(CITTA.monza),
    como:   makeGeo(CITTA.como),
    varese: makeGeo(CITTA.varese),
  },
}

// ── Colori badge per intento ──────────────────────────────────────────────────
export const BADGE_COLORS = {
  emerald: 'bg-emerald-50 border-emerald-200 text-emerald-700',
  blue:    'bg-blue-50    border-blue-200    text-blue-700',
  orange:  'bg-orange-50  border-orange-200  text-orange-700',
  sky:     'bg-sky-50     border-sky-200     text-sky-700',
}
