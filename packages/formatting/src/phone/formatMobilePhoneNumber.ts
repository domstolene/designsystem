import { containsOnlyNumbers } from '../containsOnlyNumbers';
import { replaceAll } from '../replaceAll';

/**
 * Formaterer mobilnummer i henhold til retningslinjene for mobilnummer i Elsa.
 * Formateringen er best-effort og prøver derfor også å formatere ufullstendige mobilnummer.
 * Hvis mobilnummeret er ugyldig vil funksjonen returnere mobilnummeret uendret.
 *
 * @param phone - mobilnummeret som skal formateres.
 */
export const formatMobilePhoneNumber = (phone: string): string => {
  const noWhitespace = replaceAll(phone, ' ', '');

  if (containsOnlyNumbers(noWhitespace) && noWhitespace.length <= 8) {
    const groups = [
      noWhitespace.slice(0, 2),
      noWhitespace.slice(2, 4),
      noWhitespace.slice(4, 6),
      noWhitespace.slice(6, 8),
    ].filter(el => el !== '');
    return groups.join(' ');
  }

  return phone;
};
