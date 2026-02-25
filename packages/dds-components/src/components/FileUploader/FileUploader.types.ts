type FileExtensionAccept = `.${string}`;

type AnyMimeType = '*';

type ImageMimeType =
  | 'png'
  | 'jpeg'
  | 'bmp'
  | 'gif'
  | 'svg+xml'
  | 'tiff'
  | 'webp';

type VideoMimeType =
  | 'x-msvideo'
  | 'mp4'
  | 'mpeg'
  | 'ogg'
  | 'mp2t'
  | 'webm'
  | '3gpp'
  | '3gpp2';
type AudioMimeType =
  | 'aac'
  | 'midi'
  | 'x-midi'
  | 'mpeg'
  | 'ogg'
  | 'opus'
  | 'wav'
  | 'webm'
  | '3gpp'
  | '3gpp2';
type ApplicationMimeType =
  | 'octet-stream'
  | 'msword'
  | 'vnd.openxmlformats-officedocument.wordprocessingml.document'
  | 'epub+zip'
  | 'gzip'
  | 'java-archive'
  | 'json'
  | 'vnd.oasis.opendocument.presentation'
  | 'vnd.oasis.opendocument.spreadsheet'
  | 'vnd.oasis.opendocument.text'
  | 'pdf'
  | 'vnd.ms-powerpoint'
  | 'vnd.openxmlformats-officedocument.presentationml.presentation'
  | 'rtf'
  | 'x-sh'
  | 'x-tar'
  | 'vnd.visio'
  | 'xhtml+xml'
  | 'vnd.ms-excel'
  | 'vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  | 'xml'
  | 'vnd.mozilla.xul+xml'
  | 'zip';

type MimeType =
  | `image/${ImageMimeType | AnyMimeType}`
  | `video/${VideoMimeType | AnyMimeType}`
  | `audio/${AudioMimeType | AnyMimeType}`
  | `application/${ApplicationMimeType}`;

export type FileUploaderAccept = MimeType | FileExtensionAccept;

export interface RemoteFile {
  name: string;
  url: string;
}

export type FileList = Array<File | RemoteFile>;

export type UploadStatus = 'uploading' | 'success' | 'error';

export interface UploadInfo {
  uploadStatus?: UploadStatus;
  errorMessage?: string;
}
export type FileStatusMap = Map<string, UploadInfo>;
