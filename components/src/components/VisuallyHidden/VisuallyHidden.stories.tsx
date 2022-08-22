import { VisuallyHidden, VisuallyHiddenProps } from '.';
import { StoryTemplate } from '../../storybook';
import { Typography } from '../Typography';
import { SB_DESIGNSYSTEM_PREFIX } from '../../storybook';
import { Table, Cell, Row, Head, Body } from '../Table';
import { Button } from '../Button';

export default {
  title: `${SB_DESIGNSYSTEM_PREFIX}/VisuallyHidden`,
  component: VisuallyHidden,
  argTypes: {
    as: { control: { type: 'text' } },
  },
};

export const Default = (args: VisuallyHiddenProps) => (
  <StoryTemplate title="VisuallyHidden - default">
    <Typography>Teksten under er usynlig.</Typography>
    <VisuallyHidden {...args}>Denne teksten er usynlig.</VisuallyHidden>
  </StoryTemplate>
);

export const Link = () => (
  <StoryTemplate title="VisuallyHidden - link example">
    <Typography>
      I foreldretvister kan du søke fri rettshjelp hvis du har lav inntekt og
      formue. På sivilrett.no finner du{' '}
      <Typography typographyType="a">
        mer informasjon og søknadsskjema{' '}
        <VisuallyHidden as="span">
          i forbindelse med fri rettshjelp
        </VisuallyHidden>
      </Typography>
      .
    </Typography>
  </StoryTemplate>
);

export const TableButtons = () => (
  <StoryTemplate title="VisuallyHidden - table example">
    <Table density="compact">
      <Head>
        <Row type="head">
          <Cell type="head">Navn</Cell>
          <Cell type="head">Rolle</Cell>
          <Cell type="head">
            <VisuallyHidden as="span">Aksjoner</VisuallyHidden>
          </Cell>
        </Row>
      </Head>
      <Body>
        <Row type="body">
          <Cell>Ane Bjerke</Cell>
          <Cell>Administrator</Cell>
          <Cell>
            <Button label="Slett" size="small" purpose="danger" />
          </Cell>
        </Row>
        <Row type="body">
          <Cell>Sandra Lovsetter</Cell>
          <Cell>Bruker</Cell>
          <Cell>
            <Button label="Slett" size="small" purpose="danger" />
          </Cell>
        </Row>
      </Body>
    </Table>
  </StoryTemplate>
);
