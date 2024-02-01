import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

import { FileUploader } from './FileUploader';
import { VStack } from '../Stack';

export default {
  title: 'dds-components/FileUploader',
  component: FileUploader,
  argTypes: {
    color: { control: { type: 'text' } },
    size: { control: { type: 'text' } },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
};

type Story = StoryObj<typeof FileUploader>;

export const Default: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate title="FileUploader - default">
      <Story />
    </StoryTemplate>
  ),
};

const SingleFileUploader = () => {
  const [files, setFiles] = useState<Array<File>>([]);

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
  const [files, setFiles] = useState<Array<File>>([]);

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
  const [files, setFiles] = useState<Array<File>>([]);
  const [deferredErrorMessage, setDeferredErrorMessage] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setDeferredErrorMessage('Feilmelding som kommer etter 3 sek.');
    }, 3000);
  }, []);

  return (
    <FileUploader
      label="Last opp"
      tip="Maks 2"
      required
      initialFiles={files}
      onChange={files => {
        setFiles(files);
      }}
      errorMessage={deferredErrorMessage}
      maxFiles={2}
    />
  );
};

export const Overview: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate title="FileUploader - default">
      <Story />
    </StoryTemplate>
  ),
  render: () => (
    <VStack>
      <SingleFileUploader />
      <PdfUploader />
      <WithErrorMessage />
    </VStack>
  ),
};
