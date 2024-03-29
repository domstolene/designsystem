/**
 * Formatterer tid og dato i henhold til retningslinjene for tid og dato i Elsa.
 * Funksjonen sjekker om det er en gyldig dato. Hvis det er en gyldig dato, blir datoen formattert etter retningslinjene i Elsa.
 * Hvis datoen er ugyldig vil funksjonen returnere datoen uendret.
 *
 * @param date - datoen som skal formateres. Type kan være string, Date eller number
 */

const isValidDate = (date: Date) => {
  return isNaN(date.valueOf()) === false;
};

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

export const formatDateTime = <T extends string | Date | number>(
  date: T,
  options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric' },
): string | T => {
  const myDate = new Date(date);
  if (isValidDate(myDate)) {
    const formattedDate = formatDate(myDate);
    const formattedTime = formatTime(myDate, options);

    if (
      typeof formattedDate === 'string' &&
      typeof formattedTime === 'string'
    ) {
      return formattedDate + ' ' + formattedTime;
    }

    return date;
  }
  return date;
};
