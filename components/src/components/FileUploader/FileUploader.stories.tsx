import { useState } from 'react';
import { StoryTemplate } from '../../storybook';
import { FileUploader } from './FileUploader';

export default {
  title: 'Design system/FileUploader BETA',
  component: FileUploader,
  argTypes: {
    color: { control: { type: 'text' } },
    size: { control: { type: 'text' } },
  },
};

const SingleFileUploader = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <FileUploader
      label="Last opp fil"
      tip="Maks 1"
      required
      initialFiles={files}
      onChange={files => {
        setFiles(files);
      }}
      maxFiles={1}
    />
  );
};

const PdfUploader = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <FileUploader
      label="Last opp PDF"
      tip="Kun pdf-filer. Maks 2"
      required
      initialFiles={files}
      onChange={files => {
        setFiles(files);
      }}
      accept={['.pdf', 'application/pdf']}
      maxFiles={2}
    />
  );
};

const WithErrorMessage = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <FileUploader
      label="Last opp"
      tip="Maks 2"
      required
      initialFiles={files}
      onChange={files => {
        setFiles(files);
      }}
      errorMessage="Feilmelding."
      maxFiles={2}
    />
  );
};

export const Overview = () => {
  return (
    <StoryTemplate title="FileUploader - overview">
      <SingleFileUploader />
      <PdfUploader />
      <WithErrorMessage />
    </StoryTemplate>
  );
};
