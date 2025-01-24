import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { type ComponentProps, useState } from 'react';
import { describe, expect, it } from 'vitest';

import { FileUploader } from './FileUploader';
import type { FileList } from './types';

function FileUploaderTest(
  props: Omit<ComponentProps<typeof FileUploader>, 'value' | 'onChange'>,
) {
  const [files, setFiles] = useState<FileList>([]);
  return <FileUploader {...props} value={files} onChange={setFiles} />;
}

const file = new File(['hello'], 'hello.png', { type: 'image/png' });

describe('<FileUploader>', () => {
  it('accepts uploading files', async () => {
    render(<FileUploaderTest />);
    const fileInput = screen.getByTestId('file-uploader-input');
    await userEvent.upload(fileInput, file);
    expect(screen.getByText('hello.png', {})).toBeInTheDocument();
  });

  it('accepts uploading files with accept prop', async () => {
    render(<FileUploaderTest accept={['image/png']} />);
    const fileInput = screen.getByTestId('file-uploader-input');
    await userEvent.upload(fileInput, file);
    expect(screen.getByText('hello.png', {})).toBeInTheDocument();
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
});
