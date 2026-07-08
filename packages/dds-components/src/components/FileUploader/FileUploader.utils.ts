import { isAccepted } from './attr-accept';

export const preventDefaults = (event: React.BaseSyntheticEvent) => {
  event.preventDefault();
  event.stopPropagation();
};

export const isDragEvent = (
  event: unknown,
): event is React.DragEvent<unknown> => {
  const asDragEvent = event as React.DragEvent<unknown>;

  return asDragEvent.dataTransfer !== undefined;
};

export const isEventWithFiles = (
  event: React.DragEvent<unknown> | React.ChangeEvent<HTMLInputElement>,
): boolean => {
  if (!isDragEvent(event)) {
    return event.target.files !== null && event.target.files !== undefined;
  }

  return (
    event.dataTransfer.types.includes('Files') ||
    event.dataTransfer.types.includes('application/x-moz-file')
  );
};

export const isFileAccepted = (
  file: File,
  accept: Array<string> | undefined,
): boolean => {
  return accept !== undefined ? isAccepted(file, accept) : true;
};

// export const isFileSizeAccepted = (
//   file: File,
//   minSize: number | undefined,
//   maxSize: number | undefined
// ): boolean => {};
