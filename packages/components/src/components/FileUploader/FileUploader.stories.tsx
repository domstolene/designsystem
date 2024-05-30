import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import { FileUploader } from './FileUploader';
import { StoryVStack } from '../Stack/utils';
import { Heading, Paragraph } from '../Typography';

export default {
  title: 'dds-components/FileUploader',
  component: FileUploader,
  argTypes: {
    label: { control: 'text' },
    dropAreaLabel: { control: 'text' },
    btnLabel: { control: 'text' },
    tip: { control: 'text' },
    maxFiles: { control: 'number' },
    withDragAndDrop: { control: 'boolean' },
    errorMessage: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    width: { control: 'text' },
    id: { control: false },
    initialFiles: { control: false },
    accept: { control: false },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
} satisfies Meta<typeof FileUploader>;

type Story = StoryObj<typeof FileUploader>;

export const Default: Story = {
  args: {
    label: 'Last opp fil',
    dropAreaLabel: 'Dra og slipp fil her eller',
    btnLabel: 'Velg fil',
  },
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

const WithErrorMessage = () => {
  const [files, setFiles] = useState<Array<File>>([]);

  return (
    <FileUploader
      label="Last opp fil"
      tip="Maks 2 filer"
      required
      initialFiles={files}
      onChange={files => {
        setFiles(files);
      }}
      errorMessage="Feilmelding"
      maxFiles={2}
    />
  );
};

export const Overview: Story = {
  args: {},
  render: () => (
    <StoryVStack>
      <SingleFileUploader />
      <NoZoneUploader />
      <WithErrorMessage />
    </StoryVStack>
  ),
};
export const NoZone: Story = {
  args: { label: 'Last opp fil' },
  render: args => {
    return <FileUploader {...args} withDragAndDrop={false} />;
  },
};

export const Pdf: Story = {
  args: { label: 'Last opp fil', tip: 'Kun PDF-filer' },
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

export const CustomFileList: Story = {
  args: { label: 'Last opp fil' },
  render: args => {
    const [files, setFiles] = useState<Array<File>>([]);
    return (
      <>
        <Paragraph withMargins>Last opp en fil for å se listen.</Paragraph>
        <FileUploader
          {...args}
          hideFileList
          initialFiles={files}
          onChange={files => {
            setFiles(files);
          }}
        />
        {files.length > 0 && (
          <>
            <Heading withMargins level={4}>
              Filer
            </Heading>
            <ul>
              {files.map(file => (
                <li key={file.name}>{file.name}</li>
              ))}
            </ul>
          </>
        )}
      </>
    );
  },
};
