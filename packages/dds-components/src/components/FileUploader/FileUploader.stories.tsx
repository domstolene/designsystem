import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';

import { FileUploader } from './FileUploader';
import { type FileList } from './FileUploader.types';
import {
  categoryHtml,
  ddsProviderDecorator,
  responsivePropsArgTypes,
  windowWidthDecorator,
} from '../../storybook';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';
import { Heading } from '../Typography';

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
  decorators: [ddsProviderDecorator],
} satisfies Meta<typeof FileUploader>;

type Story = StoryObj<typeof FileUploader>;

const file = new File(['hello'], 'hello.png', { type: 'image/png' });

export const Preview: Story = { args: { label: 'Label' } };

export const States: Story = {
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
          errorMessage="Feilmelding ved valideringsfeil"
          onChange={() => null}
        />
        <FileUploader label="Tip" tip="Hjelpetekst" onChange={() => null} />
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
        <FileUploader
          label="No drop zone"
          withDragAndDrop={false}
          onChange={() => null}
        />
      </StoryVStack>
    </StoryHStack>
  ),
};

export const PdfOnly: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    label: 'Last opp fil',
    tip: 'Kun PDF-filer',
    accept: ['.pdf', 'application/pdf'],
  },
};

export const CustomFileList: Story = {
  args: { label: 'Last opp fil' },
  render: args => {
    const [files, setFiles] = useState<FileList>([file]);
    return (
      <>
        <FileUploader
          {...args}
          hideFileList
          value={files}
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
