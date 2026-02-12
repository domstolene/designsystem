import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';

import { FAVSTAR_SIZES, FavStar } from './FavStar';
import {
  StoryLabel,
  categoryHtml,
  commonArgTypes,
  ddsProviderDecorator,
  htmlEventArgType,
  labelText,
} from '../../storybook';
import { focusable } from '../helpers/styling/focus.module.css';
import { Icon } from '../Icon';
import { AttachmentIcon } from '../Icon/icons';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';
import { Table } from '../Table';
import { Tooltip } from '../Tooltip';
import { Caption, Link } from '../Typography';

const meta: Meta<typeof FavStar> = {
  title: 'dds-components/Components/FavStar',
  component: FavStar,
  argTypes: {
    checked: { control: false, table: categoryHtml },
    defaultChecked: { table: categoryHtml },
    ...commonArgTypes,
    onChange: htmlEventArgType,
  },
  args: { onChange: fn() },
  decorators: [ddsProviderDecorator],
};

export default meta;

type Story = StoryObj<typeof FavStar>;

export const Preview: Story = {};

export const Sizes: Story = {
  render: args => (
    <StoryHStack>
      {FAVSTAR_SIZES.map(size => (
        <StoryVStack key={size}>
          <StoryLabel>{labelText(size)}</StoryLabel>
          <FavStar {...args} size={size} />
        </StoryVStack>
      ))}
    </StoryHStack>
  ),
};

export const RealWorld: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: args => {
    const documents = [
      {
        id: 1,
        name: 'Krav om sak inkl. 1 vedlegg.pdf',
        from: 'Ola Nordmann',
        to: 'Trøndelag tingrett',
        timestamp: '28.08.2023',
        read: true,
        numAttachments: 1,
      },
      {
        id: 2,
        name: 'Bekreftelse og inngangsgebyr - Selvprosederende',
        from: 'Trøndelag tingrett',
        to: 'Ola Nordmann',
        timestamp: '31.08.2023',
        read: false,
        numAttachments: 2,
      },
      {
        id: 3,
        name: 'Forkynning av sak - med spørsmål om meddommere',
        from: 'Trøndelag tingrett',
        to: 'Ikke oppgitt',
        timestamp: '04.09.2023',
        read: false,
        numAttachments: 0,
      },
      {
        id: 4,
        name: 'Oversendelse av dokument',
        from: 'Trøndelag tingrett',
        to: 'Ola Nordmann',
        timestamp: '04.09.2023',
        read: false,
        numAttachments: 1,
      },
    ];
    const [favoriteDocuments, setFavoriteDocuments] = useState(
      new Set<number>(),
    );

    return (
      <Table.Wrapper>
        <Table>
          <Caption>Saksdokumenter</Caption>
          <Table.Head>
            <Table.Row>
              <Table.Cell></Table.Cell>
              <Table.Cell>Nr.</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>Dokument</Table.Cell>
              <Table.Cell>Avsender</Table.Cell>
              <Table.Cell>Mottakere</Table.Cell>
              <Table.Cell>Sendt</Table.Cell>
              <Table.Cell>Vedlegg</Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {documents.map(document => (
              <Table.Row key={document.id}>
                <Table.Cell>
                  <FavStar
                    {...args}
                    checked={favoriteDocuments.has(document.id)}
                    onChange={newChecked =>
                      setFavoriteDocuments(prev => {
                        const newSet = new Set(prev);
                        console.log(newChecked);

                        if (newChecked) {
                          newSet.add(document.id);
                        } else {
                          newSet.delete(document.id);
                        }

                        return newSet;
                      })
                    }
                  />
                </Table.Cell>
                <Table.Cell>{document.id}</Table.Cell>
                <Table.Cell>
                  {!document.read && (
                    <Tooltip text="Ulest">
                      <div
                        tabIndex={0}
                        className={focusable}
                        style={{
                          backgroundColor:
                            'var(--dds-color-icon-action-resting)',
                          width: '10px',
                          height: '10px',
                          borderRadius: '10px',
                        }}
                      />
                    </Tooltip>
                  )}
                </Table.Cell>
                <Table.Cell>
                  <Link
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    external
                  >
                    {document.name}
                  </Link>
                </Table.Cell>
                <Table.Cell>{document.from}</Table.Cell>
                <Table.Cell>{document.to}</Table.Cell>
                <Table.Cell>{document.timestamp}</Table.Cell>
                <Table.Cell>
                  <Icon icon={AttachmentIcon} />
                  {document.numAttachments}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Table.Wrapper>
    );
  },
};
