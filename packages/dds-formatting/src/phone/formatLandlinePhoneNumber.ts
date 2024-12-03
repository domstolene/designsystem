import { formatMobilePhoneNumber } from './formatMobilePhoneNumber';

/**
 * Formaterer fasttelefonnummer i henhold til retningslinjene for fasttelefon og faks i Elsa.
 * Formateringen er best-effort og prøver derfor også å formatere ufullstendige nummer.
 * Hvis nummeret er ugyldig vil funksjonen returnere nummeret uendret.
 * Denne funksjonen kan også anvendes for faks-nummer.
 *
 * @param phone - fasttelefon-/faksnummeret som skal formateres.
 */
export const formatLandlinePhoneNumber = (phone: string): string =>
  formatMobilePhoneNumber(phone);
