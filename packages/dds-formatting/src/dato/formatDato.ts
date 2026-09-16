const isValidDate = (date: Date) => {
  return isNaN(date.valueOf()) === false;
};

/**
 * Formatterer tid i henhold til retningslinjene for tid i Elsa.
 * Funksjonen sjekker om input er en gyldig dato. Hvis den er gyldig, blir tiden formattert etter retningslinjene.
 * Hvis datoen er ugyldig vil funksjonen returnere input uendret.
 *
 * @param date - datoen som skal formateres. Type kan være string, Date eller number
 */

export const formatTime = <T extends string | Date | number>(
  date: T,
  options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric' },
): string | T => {
  const myDate = new Date(date);
  if (isValidDate(myDate)) {
    return new Intl.DateTimeFormat('no-NO', options).format(myDate);
  }
  return date;
};

/**
 * Formatterer dato i henhold til retningslinjene for dato i Elsa.
 * Funksjonen sjekker om input er en gyldig dato. Hvis den er gyldig, blir datoen formattert etter retningslinjene.
 * Hvis datoen er ugyldig vil funksjonen returnere input uendret.
 *
 * @param date - datoen som skal formateres. Type kan være string, Date eller number
 */

export const formatDate = <T extends string | Date | number>(
  date: T,
): string | T => {
  const myDate = new Date(date);
  if (isValidDate(myDate)) {
    return new Intl.DateTimeFormat('no-NO', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(myDate);
  }
  return date;
};

/**
 * Formatterer tid og dato i henhold til retningslinjene for tid og dato i Elsa.
 * Funksjonen sjekker om input er en gyldig dato. Hvis den er gyldig, blir datoen og tiden formattert etter retningslinjene.
 * Hvis datoen er ugyldig vil funksjonen returnere input uendret.
 *
 * @param date - datoen som skal formateres. Type kan være string, Date eller number
 */

export const formatDateTime = <T extends string | Date | number>(
  date: T,
  options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric' },
): string | T => {
  const myDate = new Date(date);
  if (isValidDate(myDate)) {
    const formattedDate = formatDate(myDate);
    const formattedTime = formatTime(myDate, options);
    return `${formattedDate} ${formattedTime}`;
  }
  return date;
};
