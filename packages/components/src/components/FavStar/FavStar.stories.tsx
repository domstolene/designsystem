import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type Meta } from '@storybook/react';
import { useRef, useState } from 'react';

import { FavStar, type FavStarProps } from './FavStar';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { AttachmentIcon } from '../Icon/icons';
import { Checkbox } from '../SelectionControl/Checkbox';
import { Table } from '../Table';
import { Tooltip } from '../Tooltip';
import { Heading, Link } from '../Typography';

const meta: Meta<typeof FavStar> = {
  title: 'dds-components/FavStar',
  component: FavStar,
  argTypes: {},
};

export default meta;

export const Default = (args: Partial<FavStarProps>) => {
  return (
    <StoryTemplate title="FavStar - default">
      <FavStar {...args} />
    </StoryTemplate>
  );
};

export const Controlled = (args: Partial<FavStarProps>) => {
  const [checked, setChecked] = useState(false);
  return (
    <StoryTemplate title="FavStar - controlled">
      <FavStar {...args} checked={checked} onChange={setChecked} />
      <Checkbox
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
        label="Er favoritt?"
      />
    </StoryTemplate>
  );
};

export const UsingRef = (args: Partial<FavStarProps>) => {
  const favstarRef = useRef<HTMLInputElement>(null);
  return (
    <StoryTemplate title="FavStar - using ref">
      <FavStar {...args} ref={favstarRef} />
      <Button onClick={() => favstarRef.current?.focus()}>Focus</Button>
    </StoryTemplate>
  );
};

export const RealWorld = (args: Partial<FavStarProps>) => {
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
  const [favoriteDocuments, setFavoriteDocuments] = useState(new Set<number>());
  console.log(favoriteDocuments);
  return (
    <StoryTemplate title="FavStar - real world example">
      <Heading level={2}>Saksdokumenter</Heading>
      <Table.Wrapper>
        <Table>
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
                          backgroundColor: 'var(--dds-color-interactive-light)',
                          border: '1px solid var(--dds-color-interactive-base)',
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
    </StoryTemplate>
  );
};
