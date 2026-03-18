import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { type ComponentProps, useState } from 'react';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';

import { FileUploader } from './FileUploader';
import type { FileList, RemoteFile } from './FileUploader.types';

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
      expect(screen.getByRole('link')).toBeInTheDocument();
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
});
