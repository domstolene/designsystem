import { type Meta, type StoryObj } from '@storybook/react-vite';

import {
  commonArgTypes,
  commonResponsivePropsArgTypes,
  responsivePropsArgTypes,
  windowWidthDecorator,
} from '../../storybook';
import { Box, Grid, GridChild, VStack } from '../layout';
import { LocalMessage } from '../LocalMessage';
import { Tag } from '../Tag';
import { Link } from '../Typography';

import {
  FormSummary,
  FormSummaryEditButton,
  FormSummaryEmptyValue,
  FormSummaryError,
  FormSummaryField,
  FormSummaryFields,
  FormSummaryHeader,
  FormSummaryHeading,
  FormSummaryLabel,
  FormSummaryValue,
} from '.';

const {
  width,
  padding,
  paddingBlock,
  paddingInline,
  margin,
  marginBlock,
  marginInline,
} = responsivePropsArgTypes;
export default {
  title: 'dds-components/Components/FormSummary',
  component: FormSummary,
  argTypes: {
    ...commonArgTypes,
    style: commonResponsivePropsArgTypes.style,
    padding,
    paddingBlock,
    paddingInline,
    margin,
    marginBlock,
    marginInline,
    width,
  },
} satisfies Meta<typeof FormSummary>;

type Story = StoryObj<typeof FormSummary>;

export const Preview: Story = {
  render: args => (
    <FormSummary {...args}>
      <FormSummaryHeader>
        <FormSummaryHeading>Overskrift</FormSummaryHeading>
        <FormSummaryEditButton>Endre svar</FormSummaryEditButton>
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
          <FormSummaryLabel>Gruppe 1</FormSummaryLabel>
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
          <FormSummaryLabel>Felt uten verdi</FormSummaryLabel>
          <FormSummaryValue>
            <FormSummaryEmptyValue />
          </FormSummaryValue>
        </FormSummaryField>
      </FormSummaryFields>
    </FormSummary>
  ),
};

export const ExternalDataSource: Story = {
  render: args => (
    <VStack gap="x1">
      <FormSummary {...args}>
        <FormSummaryHeader>
          <FormSummaryHeading>Status for individuelle felt</FormSummaryHeading>
          <Tag>Data hentet fra Et Sted</Tag>
        </FormSummaryHeader>
        <FormSummaryFields>
          <FormSummaryField>
            <FormSummaryLabel>Navn</FormSummaryLabel>
            <FormSummaryValue>Navn Navnesen</FormSummaryValue>
          </FormSummaryField>
          <FormSummaryField>
            <FormSummaryLabel>Felt med innlasting</FormSummaryLabel>
            <FormSummaryValue isLoading></FormSummaryValue>
          </FormSummaryField>
          <FormSummaryField>
            <FormSummaryLabel>Felt med feilmelding</FormSummaryLabel>
            <FormSummaryValue>
              <FormSummaryError>
                Feilmelding om feilet innhenting av verdi.
              </FormSummaryError>
            </FormSummaryValue>
          </FormSummaryField>
        </FormSummaryFields>
      </FormSummary>
      <FormSummary {...args}>
        <FormSummaryHeader>
          <FormSummaryHeading>Feilmelding for hele</FormSummaryHeading>
          <Tag>Data hentet fra Et Sted</Tag>
        </FormSummaryHeader>
        <LocalMessage layout="vertical" purpose="danger">
          Innhenting av data fra Et Sted feilet. Resten av feilmeldingen.
        </LocalMessage>
      </FormSummary>
    </VStack>
  ),
};

export const Groups: Story = {
  render: args => (
    <FormSummary {...args}>
      <FormSummaryHeader>
        <FormSummaryHeading>Overskrift</FormSummaryHeading>
        <FormSummaryEditButton>Endre svar</FormSummaryEditButton>
      </FormSummaryHeader>
      <FormSummaryFields>
        <FormSummaryField>
          <FormSummaryLabel>Gruppe 1</FormSummaryLabel>
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
          <FormSummaryLabel>Gruppe 2</FormSummaryLabel>
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

export const Steps: Story = {
  render: args => (
    <VStack gap="x1">
      <FormSummary {...args}>
        <FormSummaryHeader>
          <FormSummaryHeading>Første steg</FormSummaryHeading>
          <FormSummaryEditButton>Endre svar</FormSummaryEditButton>
        </FormSummaryHeader>
        <FormSummaryFields>
          <FormSummaryField>
            <FormSummaryLabel>Navn</FormSummaryLabel>
            <FormSummaryValue>Navn Navnesen</FormSummaryValue>
          </FormSummaryField>
          <FormSummaryField>
            <FormSummaryLabel>Navn</FormSummaryLabel>
            <FormSummaryValue>Navn Navnesen</FormSummaryValue>
          </FormSummaryField>
        </FormSummaryFields>
      </FormSummary>
      <FormSummary {...args}>
        <FormSummaryHeader>
          <FormSummaryHeading>Andre steg</FormSummaryHeading>
          <FormSummaryEditButton>Endre svar</FormSummaryEditButton>
        </FormSummaryHeader>
        <FormSummaryFields>
          <FormSummaryField>
            <FormSummaryLabel>Navn</FormSummaryLabel>
            <FormSummaryValue>Navn Navnesen</FormSummaryValue>
          </FormSummaryField>
          <FormSummaryField>
            <FormSummaryLabel>Navn</FormSummaryLabel>
            <FormSummaryValue>Navn Navnesen</FormSummaryValue>
          </FormSummaryField>
        </FormSummaryFields>
      </FormSummary>
    </VStack>
  ),
};

const renderFields = (n: number) => {
  const fields = [];
  for (let index = 0; index < n; index++) {
    fields.push(
      <FormSummaryField>
        <FormSummaryLabel>Navn</FormSummaryLabel>
        <FormSummaryValue>Navn Navnesen</FormSummaryValue>
      </FormSummaryField>,
    );
  }
  return <FormSummaryFields>{fields}</FormSummaryFields>;
};

export const WithGrid: Story = {
  decorators: [Story => windowWidthDecorator(<Story />)],
  render: args => (
    <Grid>
      <GridChild
        columnsOccupied={{
          xs: 'all',
          sm: 'all',
          md: 'firstHalf',
          lg: 'firstHalf',
          xl: 'firstHalf',
        }}
      >
        <FormSummary {...args}>
          <FormSummaryHeader>
            <FormSummaryHeading>Første steg</FormSummaryHeading>
            <FormSummaryEditButton>Endre svar</FormSummaryEditButton>
          </FormSummaryHeader>
          {renderFields(3)}
        </FormSummary>
      </GridChild>
      <GridChild
        columnsOccupied={{
          xs: 'all',
          sm: 'all',
          md: 'secondHalf',
          lg: 'secondHalf',
          xl: 'secondHalf',
        }}
      >
        <FormSummary {...args}>
          <FormSummaryHeader>
            <FormSummaryHeading>Andre steg</FormSummaryHeading>
            <FormSummaryEditButton>Endre svar</FormSummaryEditButton>
          </FormSummaryHeader>
          {renderFields(2)}
        </FormSummary>
      </GridChild>
      <GridChild
        columnsOccupied={{
          xs: 'all',
          sm: 'all',
          md: 'firstHalf',
          lg: 'firstHalf',
          xl: 'firstHalf',
        }}
      >
        <FormSummary {...args}>
          <FormSummaryHeader>
            <FormSummaryHeading>Tredje steg</FormSummaryHeading>
            <FormSummaryEditButton>Endre svar</FormSummaryEditButton>
          </FormSummaryHeader>
          {renderFields(5)}
        </FormSummary>
      </GridChild>
      <GridChild
        columnsOccupied={{
          xs: 'all',
          sm: 'all',
          md: 'secondHalf',
          lg: 'secondHalf',
          xl: 'secondHalf',
        }}
      >
        <FormSummary {...args}>
          <FormSummaryHeader>
            <FormSummaryHeading>Fjerde steg</FormSummaryHeading>
            <FormSummaryEditButton>Endre svar</FormSummaryEditButton>
          </FormSummaryHeader>
          {renderFields(4)}
        </FormSummary>
      </GridChild>
    </Grid>
  ),
};

export const WithFlex: Story = {
  decorators: [Story => windowWidthDecorator(<Story />)],
  render: args => (
    <Box
      display="flex"
      flexWrap={{ sm: 'wrap', md: 'wrap', lg: 'wrap', xl: 'wrap' }}
      gap="x1"
      flexDirection={{
        xs: 'column',
        sm: 'row',
        md: 'row',
        lg: 'row',
        xl: 'row',
      }}
      maxWidth={{
        lg: '78rem',
        xl: '92rem',
      }}
    >
      <FormSummary
        {...args}
        minWidth={{
          xs: '100%',
          sm: '22rem',
          md: '22rem',
          lg: '24rem',
          xl: '24rem',
        }}
      >
        <FormSummaryHeader>
          <FormSummaryHeading>Første steg</FormSummaryHeading>
          <FormSummaryEditButton>Endre svar</FormSummaryEditButton>
        </FormSummaryHeader>
        {renderFields(3)}
      </FormSummary>

      <FormSummary
        {...args}
        minWidth={{
          xs: '16rem',
          sm: '22rem',
          md: '22rem',
          lg: '24rem',
          xl: '24rem',
        }}
      >
        <FormSummaryHeader>
          <FormSummaryHeading>Andre steg</FormSummaryHeading>
          <FormSummaryEditButton>Endre svar</FormSummaryEditButton>
        </FormSummaryHeader>
        {renderFields(2)}
      </FormSummary>

      <FormSummary
        {...args}
        minWidth={{
          xs: '16rem',
          sm: '22rem',
          md: '22rem',
          lg: '24rem',
          xl: '24rem',
        }}
      >
        <FormSummaryHeader>
          <FormSummaryHeading>Tredje steg</FormSummaryHeading>
          <FormSummaryEditButton>Endre svar</FormSummaryEditButton>
        </FormSummaryHeader>
        {renderFields(5)}
      </FormSummary>

      <FormSummary
        {...args}
        minWidth={{
          xs: '16rem',
          sm: '22rem',
          md: '22rem',
          lg: '24rem',
          xl: '24rem',
        }}
      >
        <FormSummaryHeader>
          <FormSummaryHeading>Fjerde steg</FormSummaryHeading>
          <FormSummaryEditButton>Endre svar</FormSummaryEditButton>
        </FormSummaryHeader>
        {renderFields(4)}
      </FormSummary>
    </Box>
  ),
};
