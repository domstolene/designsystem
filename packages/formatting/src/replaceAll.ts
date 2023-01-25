/**
 * @param source - source string
 * @param find - string to find
 * @param replace - string to replace with
 * @returns source string with all occurrences of find replaced with replace
 */
export const replaceAll = (
  source: string,
  find: string,
  replace: string
): string => {
  return source.split(find).join(replace);
};
