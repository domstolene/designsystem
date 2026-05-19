import { createTexts } from './translation';

export const commonTexts = createTexts({
  clearSelect: {
    no: 'Tøm nedtrekksliste',
    nb: 'Tøm nedtrekksliste',
    nn: 'Tøm nedtrekksliste',
    en: 'Clear selection',
    se: 'Gidde válljemiid',
  },
  close: {
    nb: 'Lukk',
    no: 'Lukk',
    nn: 'Lukk',
    en: 'Close',
    se: 'Gidde',
  },
  closeMessage: {
    nb: 'Lukk melding',
    no: 'Lukk melding',
    nn: 'Lukk melding',
    en: 'Close message',
    se: 'Gidde dieđu',
  },
  loading: {
    nb: 'Innlastning pågår',
    no: 'Innlastning pågår',
    nn: 'Innlastning pågår',
    en: 'Loading',
    se: 'Viežžamin',
  },
  nextPage: {
    nb: 'Neste side',
    no: 'Neste side',
    nn: 'Neste side',
    en: 'Next page',
    se: 'Boahte siidu',
  },
  previousPage: {
    nb: 'Forrige side',
    no: 'Forrige side',
    nn: 'Førre side',
    en: 'Previous page',
    se: 'Ovddit siidu',
  },
  page: page => ({
    nb: `Side ${page}`,
    no: `Side ${page}`,
    nn: `Side ${page}`,
    en: `Page ${page}`,
    se: `Siidu ${page}`,
  }),
  currentPage: page => ({
    nb: `Nåværende side (${page})`,
    no: `Nåværende side (${page})`,
    nn: `Noverande side (${page})`,
    en: `Current page (${page})`,
    se: `Dála siidu (${page})`,
  }),
  pageOf: (current, max) => ({
    nb: `Side ${current} av ${max}`,
    no: `Side ${current} av ${max}`,
    nn: `Side ${current} ${max}`,
    en: `Page ${current} of ${max}`,
    se: `Siidu ${current} ${max}`,
  }),
});
