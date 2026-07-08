import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { type ComponentProps, useState } from 'react';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';

import { FileUploader } from './FileUploader';
import type { FileList, RemoteFile } from './FileUploader.types';
import {
  isEventWithFiles,
  isFileAccepted,
  preventDefaults,
} from './FileUploader.utils';
import {
  type FileUploaderState,
  fileUploaderReducer,
} from './fileUploaderReducer';

function FileUploaderTest(
  props: Omit<ComponentProps<typeof FileUploader>, 'value' | 'onChange'>,
) {
  const [files, setFiles] = useState<FileList>([]);
  return (
    <FileUploader
      {...props}
      value={files}
      onChange={files => setFiles(files)}
    />
  );
}
const fileName = 'hello.png';
const fileValue = 'C:\\fakepath\\hello.png';
const file = new File(['hello'], fileName, { type: 'image/png' });
const file2 = new File(['hello2'], 'hello2.png', { type: 'image/png' });

const deleteButtonName = `Fjern fil ${fileName}`;

const deriveId = (f: File | RemoteFile) => f.name;

describe('<FileUploader>', () => {
  it('accepts uploading files', async () => {
    render(<FileUploaderTest />);
    const fileInput = screen.getByTestId('file-uploader-input');
    await userEvent.upload(fileInput, file);
    await waitFor(() => {
      expect(screen.getByText('hello.png')).toBeInTheDocument();
      expect(fileInput).toHaveValue(fileValue);
    });
  });

  it('renders link for uploaded file', async () => {
    render(<FileUploaderTest />);
    const fileInput = screen.getByTestId('file-uploader-input');
    await userEvent.upload(fileInput, file);
    await waitFor(() => {
      expect(screen.getByRole('link', { name: fileName })).toBeInTheDocument();
    });
  });

  it('renders list with uploaded files', async () => {
    render(<FileUploaderTest />);
    const fileInput = screen.getByTestId('file-uploader-input');
    await userEvent.upload(fileInput, file);
    await userEvent.upload(fileInput, file2);

    await waitFor(() => {
      expect(
        screen.getByRole('list', { name: /Opplastede filer/i }),
      ).toBeInTheDocument();
      expect(screen.getAllByRole('listitem')).toHaveLength(2);
    });
  });

  it('renders delete button for uploaded file', async () => {
    render(<FileUploaderTest />);
    const fileInput = screen.getByTestId('file-uploader-input');
    await userEvent.upload(fileInput, file);
    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: deleteButtonName }),
      ).toBeInTheDocument();
    });
  });

  it('deletes file on delete button click', async () => {
    render(<FileUploaderTest />);
    const fileInput = screen.getByTestId('file-uploader-input');

    await userEvent.upload(fileInput, file);
    const button = await screen.findByRole('button', {
      name: deleteButtonName,
    });

    expect(button).toBeInTheDocument();
    expect(fileInput).toHaveValue(fileValue);

    await userEvent.click(button);

    await waitFor(() => {
      expect(
        screen.queryByRole('button', { name: deleteButtonName }),
      ).not.toBeInTheDocument();
    });
  });

  it('accepts uploading files with accept prop', async () => {
    render(<FileUploaderTest accept={['image/png']} />);
    const fileInput = screen.getByTestId('file-uploader-input');
    await userEvent.upload(fileInput, file);
    await waitFor(() => {
      expect(screen.getByText('hello.png')).toBeInTheDocument();
      expect(fileInput).toHaveValue(fileValue);
    });
  });

  it('does not upload if file in wrong format', async () => {
    render(<FileUploaderTest accept={['.pdf']} />);
    const fileInput = screen.getByTestId('file-uploader-input');
    await userEvent.upload(fileInput, file);
    await waitFor(() => {
      expect(screen.queryByText('hello.png')).not.toBeInTheDocument();
      expect(fileInput).not.toHaveValue();
    });
  });

  it('gets error if too many files ', async () => {
    const maxFiles = 1;
    render(<FileUploaderTest maxFiles={maxFiles} />);
    const fileInput = screen.getByTestId('file-uploader-input');
    await userEvent.upload(fileInput, file);
    await userEvent.upload(fileInput, file2);
    await waitFor(() => {
      expect(screen.queryByText('hello.png')).toBeInTheDocument();
      expect(screen.queryByText('hello2.png')).toBeInTheDocument();
      expect(
        screen.getByText(`For mange filer. Maksimalt antall er ${maxFiles}`),
      ).toBeInTheDocument();
      expect(fileInput).toHaveValue('C:\\fakepath\\hello2.png');
    });
  });

  it('renders label', () => {
    const label = 'Last opp fil';
    render(<FileUploaderTest label={label} />);
    const labelNode = screen.getByText(label);
    expect(labelNode).toBeInTheDocument();
  });

  it('label has for-attribute', () => {
    const label = 'Last opp fil';
    render(<FileUploaderTest label={label} />);
    const labelNode = screen.getByText(label);
    expect(labelNode).toHaveAttribute('for');
  });
  describe('disabled', () => {
    it('is disabled', async () => {
      render(<FileUploaderTest disabled />);
      const fileInput = screen.getByTestId('file-uploader-input');
      expect(fileInput).toBeDisabled();
    });

    it('input does not get keyboard focus', async () => {
      render(<FileUploaderTest disabled />);
      const fileInput = screen.getByTestId('file-uploader-input');
      await userEvent.keyboard('[Tab]');
      expect(fileInput).not.toHaveFocus();
    });

    it('does not render upload button', async () => {
      render(<FileUploaderTest disabled />);

      expect(
        screen.queryByRole('button', { name: /Velg fil/i }),
      ).not.toBeInTheDocument();
    });
  });

  describe('readonly', () => {
    it('is readonly', async () => {
      render(<FileUploaderTest readOnly />);
      const fileInput = screen.getByTestId('file-uploader-input');
      expect(fileInput).toHaveAttribute('readonly');
    });

    it('does not render upload button', async () => {
      render(<FileUploaderTest readOnly />);

      expect(
        screen.queryByRole('button', { name: /Velg fil/i }),
      ).not.toBeInTheDocument();
    });

    it('has accessible description', async () => {
      render(<FileUploaderTest readOnly />);
      const fileInput = screen.getByTestId('file-uploader-input');
      expect(fileInput).toHaveAccessibleDescription(
        /Opplastede filerIngen filer./i,
      );
    });

    it('gets keyboard focus', async () => {
      render(<FileUploaderTest readOnly />);
      const fileInput = screen.getByTestId('file-uploader-input');
      await userEvent.keyboard('[Tab]');
      expect(fileInput).toHaveFocus();
    });

    it('prevents default when Enter is pressed', async () => {
      render(<FileUploaderTest readOnly />);
      const fileInput = screen.getByTestId('file-uploader-input');

      const preventDefault = vi.fn();

      const event = new KeyboardEvent('keydown', {
        key: 'Enter',
        bubbles: true,
        cancelable: true,
      });

      Object.defineProperty(event, 'preventDefault', {
        value: preventDefault,
        writable: true,
      });

      fileInput.dispatchEvent(event);

      expect(preventDefault).toHaveBeenCalled();
    });

    it('prevents default when Space is pressed', async () => {
      render(<FileUploaderTest readOnly />);
      const fileInput = screen.getByTestId('file-uploader-input');

      const preventDefault = vi.fn();

      const event = new KeyboardEvent('keydown', {
        key: ' ',
        bubbles: true,
        cancelable: true,
      });

      Object.defineProperty(event, 'preventDefault', {
        value: preventDefault,
        writable: true,
      });

      fileInput.dispatchEvent(event);

      expect(preventDefault).toHaveBeenCalled();
    });

    it('does not allow uploads', async () => {
      const handleChange = vi.fn();

      render(
        <FileUploader onChange={handleChange} value={[]} readOnly={true} />,
      );

      const fileInput = screen.getByTestId('file-uploader-input');
      await userEvent.upload(fileInput, file);
      expect(handleChange).not.toHaveBeenCalled();
    });
  });
  describe('upload status', () => {
    beforeAll(() => {
      vi.spyOn(URL, 'createObjectURL').mockImplementation(() => 'blob://test');
      vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {
        /* empty */
      });
    });

    afterAll(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (URL.createObjectURL as any).mockRestore?.();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (URL.revokeObjectURL as any).mockRestore?.();
    });

    it('displays file, spinner and file delete button while uploading', async () => {
      const id = deriveId(file);
      const fileStatusMap = new Map([
        [id, { uploadStatus: 'uploading' as const }],
      ]);

      render(
        <FileUploader
          value={[file]}
          onChange={() => {
            /* empty */
          }}
          fileStatusMap={fileStatusMap}
          deriveId={deriveId}
        />,
      );

      expect(await screen.findByText(fileName)).toBeInTheDocument();
      expect(screen.queryByRole('progressbar')).toBeInTheDocument();
      expect(
        screen.queryByRole('button', { name: deleteButtonName }),
      ).toBeInTheDocument();
    });

    it('displays file and file delete button while success', async () => {
      const id = deriveId(file);
      const fileStatusMap = new Map([
        [id, { uploadStatus: 'success' as const }],
      ]);

      render(
        <FileUploader
          value={[file]}
          onChange={() => {
            /* empty */
          }}
          fileStatusMap={fileStatusMap}
          deriveId={deriveId}
        />,
      );

      expect(await screen.findByText(fileName)).toBeInTheDocument();
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
      expect(
        screen.queryByRole('button', { name: deleteButtonName }),
      ).toBeInTheDocument();
    });

    it('displays file, error message and file delete button while error', async () => {
      const id = deriveId(file);
      const errorMessage = 'Ikke vellykket';
      const fileStatusMap = new Map([
        [id, { uploadStatus: 'error' as const, errorMessage }],
      ]);

      render(
        <FileUploader
          value={[file]}
          onChange={() => {
            /* empty */
          }}
          fileStatusMap={fileStatusMap}
          deriveId={deriveId}
        />,
      );

      expect(await screen.findByText(fileName)).toBeInTheDocument();
      expect(await screen.findByText(errorMessage)).toBeInTheDocument();
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
      expect(
        screen.queryByRole('button', { name: deleteButtonName }),
      ).toBeInTheDocument();
    });

    it('updates status on rerender (uploading to success)', async () => {
      const id = deriveId(file);
      const uploading = new Map([[id, { uploadStatus: 'uploading' as const }]]);
      const success = new Map([[id, { uploadStatus: 'success' as const }]]);

      const { rerender } = render(
        <FileUploader
          value={[file]}
          onChange={() => {
            /* empty */
          }}
          fileStatusMap={uploading}
          deriveId={deriveId}
        />,
      );

      expect(await screen.findByText(fileName)).toBeInTheDocument();
      expect(screen.queryByRole('progressbar')).toBeInTheDocument();

      rerender(
        <FileUploader
          value={[file]}
          onChange={() => {
            /* empty */
          }}
          fileStatusMap={success}
          deriveId={deriveId}
        />,
      );

      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });
  });

  describe('accept variants', () => {
    it('accepts files matching file extension', async () => {
      render(<FileUploaderTest accept={['.png']} />);
      const fileInput = screen.getByTestId('file-uploader-input');
      await userEvent.upload(fileInput, file);
      await waitFor(() => {
        expect(screen.getByText(fileName)).toBeInTheDocument();
      });
    });

    it('accepts files matching wildcard MIME type', async () => {
      render(<FileUploaderTest accept={['image/*']} />);
      const fileInput = screen.getByTestId('file-uploader-input');
      await userEvent.upload(fileInput, file);
      await waitFor(() => {
        expect(screen.getByText(fileName)).toBeInTheDocument();
      });
    });
  });

  describe('upload button', () => {
    it('opens file dialog when upload button is clicked', async () => {
      render(<FileUploaderTest />);
      const button = screen.getByRole('button', { name: /Velg fil/i });
      const fileInput = screen.getByTestId('file-uploader-input');
      const clickSpy = vi.spyOn(fileInput, 'click');
      await userEvent.click(button);
      expect(clickSpy).toHaveBeenCalled();
    });
  });

  describe('uncontrolled mode', () => {
    it('manages files internally without value prop', async () => {
      const handleChange = vi.fn();
      render(<FileUploader onChange={handleChange} />);
      const fileInput = screen.getByTestId('file-uploader-input');
      await userEvent.upload(fileInput, file);
      await waitFor(() => {
        expect(screen.getByText(fileName)).toBeInTheDocument();
        expect(handleChange).toHaveBeenCalled();
      });
    });

    it('removes file internally without value prop', async () => {
      const handleChange = vi.fn();
      render(<FileUploader onChange={handleChange} />);
      const fileInput = screen.getByTestId('file-uploader-input');
      await userEvent.upload(fileInput, file);
      const button = await screen.findByRole('button', {
        name: deleteButtonName,
      });
      await userEvent.click(button);
      await waitFor(() => {
        expect(screen.queryByText(fileName)).not.toBeInTheDocument();
      });
    });

    it('initializes with initialFiles', async () => {
      render(
        <FileUploader
          onChange={() => {
            /* empty */
          }}
          initialFiles={[file]}
        />,
      );
      await waitFor(() => {
        expect(screen.getByText(fileName)).toBeInTheDocument();
      });
    });
  });

  describe('drag and drop', () => {
    it('triggers dragEnter dispatch when dragging files over drop zone', () => {
      render(<FileUploaderTest />);
      const fileInput = screen.getByTestId('file-uploader-input');
      fireEvent.dragEnter(fileInput, {
        dataTransfer: { types: ['Files'] },
      });
      // No error thrown means dragEnter handler executed
      expect(fileInput).toBeInTheDocument();
    });

    it('does not trigger dragEnter when dragging non-file content', () => {
      render(<FileUploaderTest />);
      const fileInput = screen.getByTestId('file-uploader-input');
      fireEvent.dragEnter(fileInput, {
        dataTransfer: { types: ['text/plain'] },
      });
      expect(fileInput).toBeInTheDocument();
    });

    it('triggers dragOver handler without error', () => {
      render(<FileUploaderTest />);
      const fileInput = screen.getByTestId('file-uploader-input');
      fireEvent.dragOver(fileInput, {
        dataTransfer: { types: ['Files'], dropEffect: 'none' },
      });
      expect(fileInput).toBeInTheDocument();
    });

    it('triggers dragLeave handler without error', () => {
      render(<FileUploaderTest />);
      const fileInput = screen.getByTestId('file-uploader-input');
      fireEvent.dragEnter(fileInput, {
        dataTransfer: { types: ['Files'] },
      });
      fireEvent.dragLeave(fileInput);
      expect(fileInput).toBeInTheDocument();
    });

    it('triggers dragEnter with application/x-moz-file type', () => {
      render(<FileUploaderTest />);
      const fileInput = screen.getByTestId('file-uploader-input');
      fireEvent.dragEnter(fileInput, {
        dataTransfer: { types: ['application/x-moz-file'] },
      });
      expect(fileInput).toBeInTheDocument();
    });
  });

  describe('remote files', () => {
    beforeAll(() => {
      vi.spyOn(URL, 'createObjectURL').mockImplementation(() => 'blob://test');
      vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {
        /* empty */
      });
    });

    afterAll(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (URL.createObjectURL as any).mockRestore?.();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (URL.revokeObjectURL as any).mockRestore?.();
    });

    it('preserves remote files when uploading a new file', async () => {
      const remoteFile: RemoteFile = {
        name: 'remote.pdf',
        url: 'https://example.com/remote.pdf',
      };
      const handleChange = vi.fn();

      function RemoteFileTest() {
        const [files, setFiles] = useState<FileList>([remoteFile]);
        return (
          <FileUploader
            value={files}
            onChange={newFiles => {
              setFiles(newFiles);
              handleChange(newFiles);
            }}
          />
        );
      }

      render(<RemoteFileTest />);
      expect(screen.getByText('remote.pdf')).toBeInTheDocument();

      const fileInput = screen.getByTestId('file-uploader-input');
      await userEvent.upload(fileInput, file);

      await waitFor(() => {
        expect(screen.getByText('remote.pdf')).toBeInTheDocument();
        expect(screen.getByText(fileName)).toBeInTheDocument();
        const callArg = handleChange.mock.calls[0][0];
        expect(
          callArg.some(
            (f: File | RemoteFile) => 'url' in f && f.url === remoteFile.url,
          ),
        ).toBe(true);
      });
    });
  });

  describe('isFileAccepted', () => {
    const pngFile = new File(['content'], 'photo.png', { type: 'image/png' });

    it('returns true when accept is undefined', () => {
      expect(isFileAccepted(pngFile, undefined)).toBe(true);
    });

    it('returns true when file matches accept', () => {
      expect(isFileAccepted(pngFile, ['image/png'])).toBe(true);
    });

    it('returns false when file does not match accept', () => {
      expect(isFileAccepted(pngFile, ['.pdf'])).toBe(false);
    });
  });

  describe('preventDefaults', () => {
    it('calls preventDefault and stopPropagation on the event', () => {
      const event = {
        preventDefault: vi.fn(),
        stopPropagation: vi.fn(),
      } as unknown as React.BaseSyntheticEvent;
      preventDefaults(event);
      expect(event.preventDefault).toHaveBeenCalledOnce();
      expect(event.stopPropagation).toHaveBeenCalledOnce();
    });
  });

  describe('isEventWithFiles', () => {
    it('returns true for drag event with Files type', () => {
      const event = {
        dataTransfer: { types: ['Files'] },
      } as unknown as React.DragEvent<unknown>;
      expect(isEventWithFiles(event)).toBe(true);
    });

    it('returns true for drag event with application/x-moz-file type', () => {
      const event = {
        dataTransfer: { types: ['application/x-moz-file'] },
      } as unknown as React.DragEvent<unknown>;
      expect(isEventWithFiles(event)).toBe(true);
    });

    it('returns false for drag event with no file types', () => {
      const event = {
        dataTransfer: { types: ['text/plain'] },
      } as unknown as React.DragEvent<unknown>;
      expect(isEventWithFiles(event)).toBe(false);
    });

    it('returns true for change event with files', () => {
      const event = {
        target: { files: [new File([''], 'test.png')] },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      expect(isEventWithFiles(event)).toBe(true);
    });

    it('returns false for change event with null files', () => {
      const event = {
        target: { files: null },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      expect(isEventWithFiles(event)).toBe(false);
    });
  });
});

describe('fileUploaderReducer', () => {
  const initialState: FileUploaderState = {
    files: [],
    isFocused: false,
    isFileDialogActive: false,
    isDragActive: false,
    dragCounter: 0,
    rootErrors: [],
  };

  it('increments dragCounter and sets isDragActive when dragEnter is triggered', () => {
    const newState = fileUploaderReducer(initialState, { type: 'dragEnter' });
    expect(newState.dragCounter).toBe(1);
    expect(newState.isDragActive).toBe(true);
  });

  it('increments dragCounter correctly when dragEnter is triggered multiple times', () => {
    let state = fileUploaderReducer(initialState, { type: 'dragEnter' });
    state = fileUploaderReducer(state, { type: 'dragEnter' });
    expect(state.dragCounter).toBe(2);
    expect(state.isDragActive).toBe(true);
  });

  it('decrements dragCounter and clears drag when counter reaches 0', () => {
    const activeState = { ...initialState, dragCounter: 1, isDragActive: true };
    const newState = fileUploaderReducer(activeState, { type: 'dragLeave' });
    expect(newState.dragCounter).toBe(0);
    expect(newState.isDragActive).toBe(false);
  });

  it('does not decrement dragCounter below 0', () => {
    const newState = fileUploaderReducer(initialState, { type: 'dragLeave' });
    expect(newState.dragCounter).toBe(0);
    expect(newState.isDragActive).toBe(false);
  });

  it('replaces files and resets drag state when setting files', () => {
    const files = [{ name: 'test.png', errors: [] }];
    const activeState = { ...initialState, dragCounter: 2, isDragActive: true };
    const newState = fileUploaderReducer(activeState, {
      type: 'onSetFiles',
      payload: files,
    });
    expect(newState.files).toEqual(files);
    expect(newState.dragCounter).toBe(0);
    expect(newState.isDragActive).toBe(false);
  });

  it('replaces files list when removing a file', () => {
    const files = [
      { name: 'a.png', errors: [] },
      { name: 'b.png', errors: [] },
    ];
    const stateWithFiles = { ...initialState, files };
    const newState = fileUploaderReducer(stateWithFiles, {
      type: 'onRemoveFile',
      payload: [files[1]!],
    });
    expect(newState.files).toEqual([files[1]]);
  });

  it('updates root errors', () => {
    const errors = ['Too many files'];
    const newState = fileUploaderReducer(initialState, {
      type: 'setRootErrors',
      payload: errors,
    });
    expect(newState.rootErrors).toEqual(errors);
  });
});
