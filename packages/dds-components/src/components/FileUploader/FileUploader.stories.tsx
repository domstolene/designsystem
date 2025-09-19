import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';

import { FileUploader } from './FileUploader';
import {
  categoryHtml,
  responsivePropsArgTypes,
  windowWidthDecorator,
} from '../../storybook/helpers';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';
import { Heading, Paragraph } from '../Typography';

export default {
  title: 'dds-components/Components/FileUploader',
  component: FileUploader,
  argTypes: {
    width: responsivePropsArgTypes.width,
    id: { control: 'text', table: categoryHtml },
    disabled: { control: 'boolean', table: categoryHtml },
    initialFiles: { control: false },
    accept: { control: false },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof FileUploader>;

type Story = StoryObj<typeof FileUploader>;

const file = new File(['hello'], 'hello.png', { type: 'image/png' });

export const Preview: Story = { args: { label: 'Label' } };

export const Overview: Story = {
  render: () => (
    <StoryHStack>
      <StoryVStack>
        <FileUploader
          label="Med fil"
          initialFiles={[file]}
          onChange={() => null}
        />
        <FileUploader label="Required" required onChange={() => null} />
        <FileUploader
          label="Error"
          errorMessage="Feilmelding"
          onChange={() => null}
        />
      </StoryVStack>
      <StoryVStack>
        <FileUploader label="Disabled" disabled onChange={() => null} />
        <FileUploader label="ReadOnly" readOnly onChange={() => null} />
        <FileUploader
          label="Disabled med fil"
          disabled
          onChange={() => null}
          initialFiles={[file]}
        />
        <FileUploader
          label="ReadOnly med fil"
          readOnly
          onChange={() => null}
          initialFiles={[file]}
        />
      </StoryVStack>
    </StoryHStack>
  ),
};

export const Controlled: Story = {
  args: { label: 'Last opp fil', tip: 'Maks 1 fil', maxFiles: 1 },
  render: args => {
    const [files, setFiles] = useState<Array<File>>([]);

    return (
      <FileUploader
        {...args}
        value={files}
        onChange={files => {
          setFiles(files);
        }}
      />
    );
  },
};

export const NoZone: Story = {
  args: { label: 'Last opp fil', withDragAndDrop: false },
};

export const PdfOnly: Story = {
  args: {
    label: 'Last opp fil',
    tip: 'Kun PDF-filer',
    accept: ['.pdf', 'application/pdf'],
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

export const ResponsiveWidth: Story = {
  decorators: [Story => windowWidthDecorator(<Story />)],
  args: {
    width: {
      xs: '100%',
      sm: '100%',
      md: '30%',
      lg: 'var(--dds-input-default-width)',
      xl: 'var(--dds-input-default-width)',
    },
  },
};

export const MaxOneFile: Story = {
  args: { label: 'Label', maxFiles: 1, tip: 'Maks 1 fil' },
};
