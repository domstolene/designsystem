import { type Meta, type StoryObj } from '@storybook/react';
import { useRef, useState } from 'react';

import { FavStar } from './FavStar';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { AttachmentIcon } from '../Icon/icons';
import { Checkbox } from '../SelectionControl/Checkbox';
import { StoryHStack, StoryVStack } from '../Stack/utils';
import { Table } from '../Table';
import { Tooltip } from '../Tooltip';
import { Caption, Link, Typography } from '../Typography';

const meta: Meta<typeof FavStar> = {
  title: 'dds-components/FavStar',
  component: FavStar,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
  argTypes: {
    checked: { control: { type: 'boolean' } },
    defaultChecked: { control: false },
    htmlProps: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof FavStar>;

export const Default: Story = {};

export const OverviewSizes: Story = {
  render: args => (
    <StoryHStack>
      <StoryVStack>
        <Typography as="span" typographyType="labelMedium">
          Medium
        </Typography>
        <FavStar {...args} size="medium" />
      </StoryVStack>
      <StoryVStack>
        <Typography as="span" typographyType="labelMedium">
          Large
        </Typography>
        <FavStar {...args} size="large" />
      </StoryVStack>
    </StoryHStack>
  ),
};

export const Controlled: Story = {
  render: args => {
    const [checked, setChecked] = useState(false);
    return (
      <>
        <FavStar {...args} checked={checked} onChange={setChecked} />
        <Checkbox
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
          label="Er favoritt?"
        />
      </>
    );
  },
};

export const UsingRef: Story = {
  render: args => {
    const favstarRef = useRef<HTMLInputElement>(null);
    return (
      <>
        <FavStar {...args} ref={favstarRef} />
        <Button onClick={() => favstarRef.current?.focus()}>Focus</Button>
      </>
    );
  },
};

export const RealWorld: Story = {
  render: args => {
    const documents = [
      {
        id: 1,
        name: 'Krav om sak inkl. 1 vedlegg fra Petter Sæther Moen.pdf',
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
              <Table.Cell>Dokumentnavn</Table.Cell>
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
