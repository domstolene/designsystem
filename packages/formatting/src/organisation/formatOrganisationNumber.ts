import { replaceAll } from '../replaceAll';
import { containsOnlyNumbers } from '../containsOnlyNumbers';

/**
 * Formaterer organisasjonsnummer i henhold til retningslinjene i Elsa.
 * Funksjonen formaterer organisasjonsnummeret best-effort og prøver derfor også å formatere ufullstendige organisasjonsnummer.
 * Hvis nummeret er ugyldig vil funksjonen returnere nummeret uendret.
 *
 * @param organisationNumber - organisasjonsnummeret som skal formateres.
 */
export const formatOrganisationNumber = (organisationNumber: string) => {
  const noWhitespace = replaceAll(organisationNumber, ' ', '');

  if (containsOnlyNumbers(noWhitespace) && noWhitespace.length <= 9) {
    return [
      noWhitespace.slice(0, 3),
      noWhitespace.slice(3, 6),
      noWhitespace.slice(6, 9),
    ]
      .filter(el => el !== '')
      .join(' ');
  }

  return organisationNumber;
};
