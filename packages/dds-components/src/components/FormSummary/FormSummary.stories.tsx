import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Button } from '../Button';
import { EditIcon } from '../Icon/icons';
import { Tag } from '../Tag';
import { Link } from '../Typography';

import {
  FormSummary,
  FormSummaryError,
  FormSummaryField,
  FormSummaryFields,
  FormSummaryHeader,
  FormSummaryHeading,
  FormSummaryLabel,
  FormSummaryValue,
} from '.';

export default {
  title: 'dds-components/Components/FormSummary',
  component: FormSummary,
  argTypes: {
    // ...commonArgTypes,
  },
} satisfies Meta<typeof FormSummary>;

type Story = StoryObj<typeof FormSummary>;

export const Preview: Story = {
  render: args => (
    <FormSummary {...args}>
      <FormSummaryHeader>
        <FormSummaryHeading>Skjemanavn</FormSummaryHeading>
        <Button icon={EditIcon} purpose="secondary" size="xsmall">
          Endre svar
        </Button>
      </FormSummaryHeader>
      <FormSummaryFields>
        <FormSummaryField>
          <FormSummaryLabel>Navn</FormSummaryLabel>
          <FormSummaryValue>Navn Navnesen</FormSummaryValue>
        </FormSummaryField>
        <FormSummaryField>
          <FormSummaryLabel>Adresse</FormSummaryLabel>
          <FormSummaryValue>Gateveien 21, 1000 Oslo</FormSummaryValue>
        </FormSummaryField>
        <FormSummaryField>
          <FormSummaryLabel>Møte 1</FormSummaryLabel>
          <FormSummaryValue>
            <FormSummaryFields>
              <FormSummaryField>
                <FormSummaryLabel>Dato</FormSummaryLabel>
                <FormSummaryValue>12.12.2012</FormSummaryValue>
              </FormSummaryField>
              <FormSummaryField>
                <FormSummaryLabel>Start</FormSummaryLabel>
                <FormSummaryValue>12:00</FormSummaryValue>
              </FormSummaryField>
              <FormSummaryField>
                <FormSummaryLabel>Slutt</FormSummaryLabel>
                <FormSummaryValue>
                  10:00
                  <FormSummaryError>
                    <Link href="/linkTilFelt">
                      Tidspunkt for slutt må være etter start
                    </Link>
                  </FormSummaryError>
                </FormSummaryValue>
              </FormSummaryField>
              <FormSummaryField>
                <FormSummaryLabel>Deltakere</FormSummaryLabel>
                <FormSummaryValue>
                  <FormSummaryError>
                    <Link href="/linkTilFelt">Deltakere er påkrevd</Link>
                  </FormSummaryError>
                </FormSummaryValue>
              </FormSummaryField>
            </FormSummaryFields>
          </FormSummaryValue>
        </FormSummaryField>
        <FormSummaryField>
          <FormSummaryLabel>Ledetekst</FormSummaryLabel>
          <FormSummaryValue>-</FormSummaryValue>
        </FormSummaryField>
      </FormSummaryFields>
    </FormSummary>
  ),
};

export const ExternalDataSource: Story = {
  render: args => (
    <FormSummary {...args}>
      <FormSummaryHeader>
        <FormSummaryHeading>Skjemanavn</FormSummaryHeading>
        <Tag>Data hentet fra Skatteetaten</Tag>
      </FormSummaryHeader>
      <FormSummaryFields>
        <FormSummaryField>
          <FormSummaryLabel>Navn</FormSummaryLabel>
          <FormSummaryValue>Navn Navnesen</FormSummaryValue>
        </FormSummaryField>
        <FormSummaryField>
          <FormSummaryLabel>Navn</FormSummaryLabel>
          <FormSummaryValue>
            <FormSummaryError>
              Innhenting av data fra Skatteetaten feilet. Prøv igjen senere.
            </FormSummaryError>
          </FormSummaryValue>
        </FormSummaryField>
      </FormSummaryFields>
    </FormSummary>
  ),
};

export const Loading: Story = {
  render: args => (
    <FormSummary {...args}>
      <FormSummaryHeader>
        <FormSummaryHeading>Skjemanavn</FormSummaryHeading>
        <Tag>Data hentet fra Skatteetaten</Tag>
      </FormSummaryHeader>
      <FormSummaryFields>
        <FormSummaryField isLoading>
          <FormSummaryLabel>Navn</FormSummaryLabel>
          <FormSummaryValue>Navn Navnesen</FormSummaryValue>
        </FormSummaryField>
        <FormSummaryField>
          <FormSummaryLabel>Navn</FormSummaryLabel>
          <FormSummaryValue>
            <FormSummaryError>
              Innhenting av data fra Skatteetaten feilet. Prøv igjen senere.
            </FormSummaryError>
          </FormSummaryValue>
        </FormSummaryField>
      </FormSummaryFields>
    </FormSummary>
  ),
};

export const Groups: Story = {
  render: args => (
    <FormSummary {...args}>
      <FormSummaryHeader>
        <FormSummaryHeading>Skjemanavn</FormSummaryHeading>
        <Button icon={EditIcon} purpose="secondary" size="xsmall">
          Endre svar
        </Button>
      </FormSummaryHeader>
      <FormSummaryFields>
        <FormSummaryField>
          <FormSummaryLabel>Møte 1</FormSummaryLabel>
          <FormSummaryValue>
            <FormSummaryFields>
              <FormSummaryField>
                <FormSummaryLabel>Dato</FormSummaryLabel>
                <FormSummaryValue>12.12.2012</FormSummaryValue>
              </FormSummaryField>
              <FormSummaryField>
                <FormSummaryLabel>Start</FormSummaryLabel>
                <FormSummaryValue>12:00</FormSummaryValue>
              </FormSummaryField>
              <FormSummaryField>
                <FormSummaryLabel>Slutt</FormSummaryLabel>
                <FormSummaryValue>
                  10:00
                  <FormSummaryError>
                    <Link href="/linkTilFelt">
                      Tidspunkt for slutt må være etter start
                    </Link>
                  </FormSummaryError>
                </FormSummaryValue>
              </FormSummaryField>
              <FormSummaryField>
                <FormSummaryLabel>Deltakere</FormSummaryLabel>
                <FormSummaryValue>
                  <FormSummaryError>
                    <Link href="/linkTilFelt">Deltakere er påkrevd</Link>
                  </FormSummaryError>
                </FormSummaryValue>
              </FormSummaryField>
            </FormSummaryFields>
          </FormSummaryValue>
        </FormSummaryField>
        <FormSummaryField>
          <FormSummaryLabel>Møte 2</FormSummaryLabel>
          <FormSummaryValue>
            <FormSummaryFields>
              <FormSummaryField>
                <FormSummaryLabel>Dato</FormSummaryLabel>
                <FormSummaryValue>13.12.2013</FormSummaryValue>
              </FormSummaryField>
              <FormSummaryField>
                <FormSummaryLabel>Start</FormSummaryLabel>
                <FormSummaryValue>12:30</FormSummaryValue>
              </FormSummaryField>
              <FormSummaryField>
                <FormSummaryLabel>Slutt</FormSummaryLabel>
                <FormSummaryValue>
                  <FormSummaryError>
                    <Link href="/linkTilFelt">
                      Tidspunkt for slutt er påkrevd
                    </Link>
                  </FormSummaryError>
                </FormSummaryValue>
              </FormSummaryField>
              <FormSummaryField>
                <FormSummaryLabel>Deltakere</FormSummaryLabel>
                <FormSummaryValue>Navn Navnesen</FormSummaryValue>
                <FormSummaryValue>Test Testesen</FormSummaryValue>
              </FormSummaryField>
            </FormSummaryFields>
          </FormSummaryValue>
        </FormSummaryField>
      </FormSummaryFields>
    </FormSummary>
  ),
};
