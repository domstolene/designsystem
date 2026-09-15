const NUMBER_WITH_TWO_DECIMALS = /^[0-9]*([.][0-9]{0,2})?$/;

/**
 * Formaterer string beløp (f.eks. i inputfelt) i henhold til retningslinjene for beløp i Elsa.
 * Hvis beløpet er ugyldig vil funksjonen returnere tom string.
 * @param beloep - beløpet som skal formateres.
 * @param withTrailingDecimals - om desimaltall skal vises hvis beløpet ikke inkluderer desimaltall.
 */

export function formatInputBeloep(
  beloep: string,
  withTrailingDecimals?: boolean,
): string {
  let value = beloep;

  if (value.includes(',')) {
    value = value.replace(',', '.');
  }

  if (!NUMBER_WITH_TWO_DECIMALS.test(value)) {
    return '';
  }

  const numberValue = parseFloat(value);
  if (isNaN(numberValue)) return '';

  return new Intl.NumberFormat('nb-NO', {
    style: 'decimal',
    minimumFractionDigits: withTrailingDecimals ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(numberValue);
}
