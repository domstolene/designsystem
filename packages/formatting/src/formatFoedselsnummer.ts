/**
 * Formaterer fødselsnummer i henhold til retningslinjene for fødselsnummer i Elsa.
 * Funksjonen prøver å formatere fødselsnummeret best-effort og prøver derfor også å formatere ufullstendige fødselsnummer.
 * Hvis fødselsnummeret er ugyldig vil funksjonen returnere fødselsnummeret uendret.
 * Denne funksjonen kan også anvendes for D-nummer.
 *
 * @param foedselsnr - foedselsnummeret som skal formateres.
 */
export const formatFoedselsnummer = (foedselsnr: string) => {
  const noWhitespace = foedselsnr.split(' ').join('');
  const containsOnlyNumbers = /^\d+$/.test(noWhitespace);

  if (containsOnlyNumbers && noWhitespace.length < 12) {
    if (noWhitespace.length <= 6) {
      return noWhitespace;
    }

    return `${noWhitespace.slice(0, 6)} ${noWhitespace.slice(6)}`;
  }

  return foedselsnr;
};
