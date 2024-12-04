import { containsOnlyNumbers } from '../containsOnlyNumbers';
import { replaceAll } from '../replaceAll';

/**
 * Formaterer bankkontonummer i henhold til retningslinjene for bankkontonummer i Elsa.
 * Formateringen er best-effort og prøver derfor også å formatere ufullstendige kontonummer.
 * Hvis kontonummeret er ugyldig vil funksjonen returnere kontonummeret uendret.
 *
 * @param bankAccountNr - kontonummeret som skal formateres.
 */
export const formatBankAccountNumber = (bankAccountNr: string): string => {
  const noWhitespace = replaceAll(bankAccountNr, ' ', '');

  if (containsOnlyNumbers(noWhitespace) && noWhitespace.length <= 11) {
    const groups = [
      noWhitespace.slice(0, 4),
      noWhitespace.slice(4, 6),
      noWhitespace.slice(6, 11),
    ].filter(el => el !== '');
    return groups.join(' ');
  }

  return bankAccountNr;
};
