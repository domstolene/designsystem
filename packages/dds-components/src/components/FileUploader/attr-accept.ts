/* Kopiert fra https://github.com/react-dropzone/attr-accept.
 * attr-accept har problemer med ESM output, så vi tar heller bare inn koden direkte.
 * Dette er all kode som ligger i pakken, og den har ikke vært endret på fire år, så
 * det skal nok gå fint å "vedlikeholde" dette selv.
 */

/**
 * Check if the provided file type should be accepted by the input with accept attribute.
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#attr-accept
 *
 * Inspired by https://github.com/enyo/dropzone
 *
 * @param file {File} https://developer.mozilla.org/en-US/docs/Web/API/File
 * @param acceptedFiles {string}
 * @returns {boolean}
 */
export function isAccepted(
  file: File,
  acceptedFiles: Array<string> | string | undefined,
): boolean {
  if (file && acceptedFiles) {
    const acceptedFilesArray = Array.isArray(acceptedFiles)
      ? acceptedFiles
      : acceptedFiles.split(',');
    const fileName = file.name || '';
    const mimeType = (file.type || '').toLowerCase();
    const baseMimeType = mimeType.match(/^([^/]+)/)?.[1] || '';

    return acceptedFilesArray.some(type => {
      const validType = type.trim().toLowerCase();
      if (validType.charAt(0) === '.') {
        return fileName.toLowerCase().endsWith(validType);
      } else if (validType.endsWith('/*')) {
        // This is something like a image/* mime type
        return baseMimeType === validType.slice(0, -2);
      }
      return mimeType === validType;
    });
  }
  return true;
}
