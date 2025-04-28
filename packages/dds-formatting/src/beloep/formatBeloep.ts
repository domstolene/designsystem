/**
 * Formaterer number beløp i henhold til retningslinjene for beløp i Elsa.
 *
 * @param beloep - beløpet som skal formateres.
 */
export const formatBeloep = (beloep: number): string => {
  return new Intl.NumberFormat('nb-NO', {
    style: 'currency',
    currency: 'NOK',
    maximumFractionDigits: 2,
  }).format(beloep);
};
