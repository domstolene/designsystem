import preview from '#.storybook/preview';
import { useState } from 'react';
import { fn } from 'storybook/test';

import { VisuallyHidden } from '../..';
import {
  StoryLabel,
  categoryHtml,
  commonArgTypes,
  ddsProviderDecorator,
  htmlEventArgType,
  labelText,
} from '../../storybook';
import { StoryHStack, StoryVStack } from '../layout/Stack/storybook-utils';
import { Table } from '../Table';
import { Caption, Link } from '../Typography';
import { FAVSTAR_SIZES, FavStar } from './FavStar';

const meta = preview.meta({
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
});

export default meta;

export const Preview = meta.story();

export const Sizes = meta.story({
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
});

export const InTable = meta.story({
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: args => {
    const documents = [
      {
        id: 1,
        name: 'Krav om sak inkl. 1 vedlegg.pdf',
        from: 'Navn Navnesen',
        to: 'Tilfeldig tingrett',
        timestamp: '28.08.2023',
        read: true,
        numAttachments: 1,
      },
      {
        id: 2,
        name: 'Dokumentnavn.pdf',
        from: 'Tilfeldig tingrett',
        to: 'Navn Navnesen',
        timestamp: '31.08.2023',
        read: false,
        numAttachments: 2,
      },
      {
        id: 3,
        name: 'Dokumentnavn2.pdf',
        from: 'Tilfeldig tingrett',
        to: 'Ikke oppgitt',
        timestamp: '04.09.2023',
        read: false,
        numAttachments: 0,
      },
      {
        id: 4,
        name: 'Dokumentnavn3.pdf',
        from: 'Tilfeldig tingrett',
        to: 'Navn Navnesen',
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
              <Table.Cell>
                <VisuallyHidden>Favoritt</VisuallyHidden>
              </Table.Cell>
              <Table.Cell>Nr.</Table.Cell>
              <Table.Cell>Dokument</Table.Cell>
              <Table.Cell>Avsender</Table.Cell>
              <Table.Cell>Mottakere</Table.Cell>
              <Table.Cell>Sendt</Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {documents.map(document => (
              <Table.Row key={document.id}>
                <Table.Cell>
                  <FavStar
                    {...args}
                    aria-label={`Stjernemarker ${document.name}`}
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
                  <Link href="domstol.no">{document.name}</Link>
                </Table.Cell>
                <Table.Cell>{document.from}</Table.Cell>
                <Table.Cell>{document.to}</Table.Cell>
                <Table.Cell>{document.timestamp}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Table.Wrapper>
    );
  },
});
