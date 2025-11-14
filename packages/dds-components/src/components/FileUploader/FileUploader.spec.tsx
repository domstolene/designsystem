import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { type ComponentProps, useState } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { FileUploader } from './FileUploader';
import type { FileList } from './FileUploader.types';

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
});
