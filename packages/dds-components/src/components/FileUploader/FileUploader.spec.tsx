import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { type ComponentProps, useState } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { FileUploader } from './FileUploader';
import type { FileList } from './types';

function FileUploaderTest(
  props: Omit<ComponentProps<typeof FileUploader>, 'value' | 'onChange'>,
) {
  const [files, setFiles] = useState<FileList>([]);
  return <FileUploader {...props} value={files} onChange={setFiles} />;
}
const fileName = 'hello.png';
const fileValue = 'C:\\fakepath\\hello.png';
const file = new File(['hello'], fileName, { type: 'image/png' });
const file2 = new File(['hello2'], 'hello2.png', { type: 'image/png' });

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

  it('should render delete button for uploaded file', async () => {
    render(<FileUploaderTest />);
    const fileInput = screen.getByTestId('file-uploader-input');
    await userEvent.upload(fileInput, file);
    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: `Fjern fil ${fileName}` }),
      ).toBeInTheDocument();
    });
  });

  it('should delete file on delete button click', async () => {
    render(<FileUploaderTest />);
    const fileInput = screen.getByTestId('file-uploader-input');
    const name = `Fjern fil ${fileName}`;

    await userEvent.upload(fileInput, file);
    const button = await screen.findByRole('button', { name });

    expect(button).toBeInTheDocument();
    expect(fileInput).toHaveValue(fileValue);

    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.queryByRole('button', { name })).not.toBeInTheDocument();
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

  it('should not upload if file in wrong format', async () => {
    render(<FileUploaderTest accept={['.pdf']} />);
    const fileInput = screen.getByTestId('file-uploader-input');
    await userEvent.upload(fileInput, file);
    await waitFor(() => {
      expect(screen.queryByText('hello.png')).not.toBeInTheDocument();
      expect(fileInput).not.toHaveValue();
    });
  });

  it('should get error if too many files ', async () => {
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

  it('should render label', () => {
    const label = 'Last opp fil';
    render(<FileUploaderTest label={label} />);
    const labelNode = screen.getByText(label);
    expect(labelNode).toBeInTheDocument();
  });

  it('label should have for-attribute', () => {
    const label = 'Last opp fil';
    render(<FileUploaderTest label={label} />);
    const labelNode = screen.getByText(label);
    expect(labelNode).toHaveAttribute('for');
  });
  describe('disabled', () => {
    it('should be disabled', async () => {
      render(<FileUploaderTest disabled />);
      const fileInput = screen.getByTestId('file-uploader-input');
      expect(fileInput).toBeDisabled();
    });

    it('input should not get keyboard focus', async () => {
      render(<FileUploaderTest disabled />);
      const fileInput = screen.getByTestId('file-uploader-input');
      await userEvent.keyboard('[Tab]');
      expect(fileInput).not.toHaveFocus();
    });

    it('should not render upload button', async () => {
      render(<FileUploaderTest disabled />);

      expect(
        screen.queryByRole('button', { name: /Velg fil/i }),
      ).not.toBeInTheDocument();
    });
  });

  describe('readonly', () => {
    it('should be readonly', async () => {
      render(<FileUploaderTest readOnly />);
      const fileInput = screen.getByTestId('file-uploader-input');
      expect(fileInput).toHaveAttribute('readonly');
    });

    it('should not render upload button', async () => {
      render(<FileUploaderTest readOnly />);

      expect(
        screen.queryByRole('button', { name: /Velg fil/i }),
      ).not.toBeInTheDocument();
    });

    it('should have accessible description', async () => {
      render(<FileUploaderTest readOnly />);
      const fileInput = screen.getByTestId('file-uploader-input');
      expect(fileInput).toHaveAccessibleDescription(
        /Opplastede filer Ingen filer./i,
      );
    });

    it('should get keyboard focus', async () => {
      render(<FileUploaderTest readOnly />);
      const fileInput = screen.getByTestId('file-uploader-input');
      await userEvent.keyboard('[Tab]');
      expect(fileInput).toHaveFocus();
    });

    it('should prevent default when Enter is pressed', async () => {
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

    it('should prevent default when Space is pressed', async () => {
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

    it('should not allow uploads', async () => {
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
