import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

import { FileUploader } from './FileUploader';
import { VStack } from '../Stack';

export default {
  title: 'dds-components/FileUploader',
  component: FileUploader,
  argTypes: {
    label: { control: { type: 'text' } },
    tip: { control: { type: 'text' } },
    maxFiles: { control: { type: 'number' } },
    withDragAndDrop: { control: { type: 'boolean' } },
    errorMessage: { control: { type: 'text' } },
    required: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    width: { control: { type: 'text' } },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
};

type Story = StoryObj<typeof FileUploader>;

export const Default: Story = {
  args: { label: 'Last opp fil' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

const SingleFileUploader = () => {
  const [files, setFiles] = useState<Array<File>>([]);

  return (
    <FileUploader
      label="Last opp fil"
      tip="Maks 1 fil"
      required
      initialFiles={files}
      onChange={files => {
        setFiles(files);
      }}
      maxFiles={1}
    />
  );
};

const NoZoneUploader = () => {
  const [files, setFiles] = useState<Array<File>>([]);

  return (
    <FileUploader
      label="Last opp fil"
      tip="Maks 1 fil"
      withDragAndDrop={false}
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
      tip="Kun PDF-filer. Maks 2 filer"
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
      label="Last opp fil"
      tip="Maks 2 filer"
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
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: () => (
    <VStack gap="x1">
      <SingleFileUploader />
      <PdfUploader />
      <NoZoneUploader />
      <WithErrorMessage />
    </VStack>
  ),
};
export const NoZone: Story = {
  args: { label: 'Last opp fil' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => {
    return <FileUploader {...args} withDragAndDrop={false} />;
  },
};

export const Pdf: Story = {
  args: { label: 'Last opp fil', tip: 'Kun PDF-filer' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => {
    const [files, setFiles] = useState<Array<File>>([]);
    return (
      <FileUploader
        {...args}
        initialFiles={files}
        onChange={files => {
          setFiles(files);
        }}
        accept={['.pdf', 'application/pdf']}
      />
    );
  },
};
