import { Link, LinkProps } from '.';
import { Paragraph } from '../Paragraph';
import { StoryTemplate } from '../../../storybook';
import { LocalMessage } from '../../LocalMessage';
import { Table } from '../../Table';

type StoryTProps = {
  text: string;
} & LinkProps;

export default {
  title: 'Design system/Typography/Link',
  component: Link,
  argTypes: {
    typographyType: { control: { type: 'select' } },
    withMargins: { control: { type: 'boolean' } },
    text: { control: { type: 'text' } },
    href: { control: { type: 'text' } },
  },
};

export const Overview = (args: StoryTProps) => {
  const { text, href, ...rest } = args;
  return (
    <StoryTemplate title="Link - default">
      <Link {...rest} href={href || 'https://www.domstol.no'}>
        {text || 'Link'}
      </Link>
      <Link {...rest} external href={href || 'https://www.domstol.no'}>
        {text || 'Link'}
      </Link>
    </StoryTemplate>
  );
};

export const Default = (args: StoryTProps) => {
  const { text, href, ...rest } = args;
  return (
    <StoryTemplate title="Link - default">
      <Link {...rest} href={href || 'https://www.domstol.no'}>
        {text || 'Link'}
      </Link>
    </StoryTemplate>
  );
};

const header = 'tekst';

const link = (
  <Link
    href="http://localhost:6006/?path=/story/design-system-typography-link--overview"
    external
  >
    sivile saker sivile sakersivile saker sivile saker sivile saker sivile saker
    sivile saker sivile saker sivile saker sivile saker sivile saker sivile
    saker sivile saker sivile saker sivile saker
  </Link>
);

function headers() {
  const list = [];
  for (let index = 0; index < 5; index++) {
    list.push(
      <Table.Cell type="head" style={{ minWidth: '150px' }}>
        {header}
      </Table.Cell>
    );
  }
  return list;
}

function cells() {
  const list = [];
  for (let index = 0; index < 5; index++) {
    list.push(<Table.Cell> {link}</Table.Cell>);
  }
  return list;
}

export const Examples = () => {
  return (
    <StoryTemplate title="Link - examples" display="block">
      <Paragraph withMargins>
        Rettsmekling går ut på at partene selv finner en løsning på konflikten
        ved å bruke en mekler (vanligvis en dommer i domstolen som behandler
        saken). Avtalen man kommer fram til, blir rettskraftig på lik linje med
        en dom. Rettsmekling kan bare brukes i{' '}
        <Link href="http://localhost:6006/?path=/story/design-system-typography-link--overview">
          sivile saker
        </Link>
        , ikke i straffesaker. Hvis konflikten ikke løses ved mekling, avgjøres
        saken ved hovedforhandling (rettssak). Rettsmekling er regulert i{' '}
        <Link
          href="https://lovdata.no/dokument/NL/lov/2005-06-17-90/KAPITTEL_2-4-2#%C2%A78-3"
          external
        >
          tvisteloven §§ 8-3
        </Link>
        . Litt mer tekst.{' '}
        <Link
          href="http://localhost:6006/?path=/story/design-system-typography-link--overview"
          external
        >
          sivile saker sivile sakersivile saker sivile saker sivile saker sivile
          saker sivile saker sivile saker sivile saker sivile saker sivile saker
          sivile saker sivile saker sivile saker sivile saker sivile saker
          sivile sakersivile saker sivile saker sivile saker sivile saker sivile
          sakersivile saker sivile saker sivile saker sivile saker sivile saker
          sivile saker sivile saker sivile saker sivile saker sivile saker
          sivile saker
        </Link>
        .
      </Paragraph>
      <Paragraph typographyType="bodySans04" withMargins>
        Rettsmekling går ut på at partene selv finner en løsning på konflikten
        ved å bruke en mekler (vanligvis en dommer i domstolen som behandler
        saken). Avtalen man kommer fram til, blir rettskraftig på lik linje med
        en dom. Rettsmekling kan bare brukes i{' '}
        <Link href="http://localhost:6006/?path=/story/design-system-typography-link--overview">
          sivile saker
        </Link>
        , ikke i straffesaker. Hvis konflikten ikke løses ved mekling, avgjøres
        saken ved hovedforhandling (rettssak). Rettsmekling er regulert i{' '}
        <Link
          href="https://lovdata.no/dokument/NL/lov/2005-06-17-90/KAPITTEL_2-4-2#%C2%A78-3"
          external
        >
          tvisteloven §§ 8-3
        </Link>
        . Litt mer tekst.{' '}
        <Link
          href="http://localhost:6006/?path=/story/design-system-typography-link--overview"
          external
        >
          sivile saker sivile sakersivile saker sivile saker sivile saker sivile
          saker sivile saker sivile saker sivile saker sivile saker sivile saker
          sivile saker sivile saker sivile saker sivile saker sivile saker
          sivile sakersivile saker sivile saker sivile saker sivile saker sivile
          sakersivile saker sivile saker sivile saker sivile saker sivile saker
          sivile saker sivile saker sivile saker sivile saker sivile saker
          sivile saker
        </Link>
        .
      </Paragraph>
      <LocalMessage>
        <Paragraph>
          Dette er tekst med{' '}
          <Link href="http://localhost:6006/?path=/story/design-system-typography-link--overview">
            lenke
          </Link>
          .
        </Paragraph>
      </LocalMessage>
      <LocalMessage purpose="danger">
        <Paragraph>
          Dette er tekst med{' '}
          <Link href="http://localhost:6006/?path=/story/design-system-typography-link--overview">
            lenke
          </Link>
          .
        </Paragraph>
      </LocalMessage>
      <LocalMessage purpose="success">
        <Paragraph>
          Dette er tekst med{' '}
          <Link href="http://localhost:6006/?path=/story/design-system-typography-link--overview">
            lenke
          </Link>
          .
        </Paragraph>
      </LocalMessage>
      <LocalMessage purpose="tips">
        <Paragraph>
          Dette er tekst med{' '}
          <Link href="http://localhost:6006/?path=/story/design-system-typography-link--overview">
            lenke
          </Link>
          .
        </Paragraph>
      </LocalMessage>
      <LocalMessage purpose="warning">
        <Paragraph>
          Dette er tekst med{' '}
          <Link href="http://localhost:6006/?path=/story/design-system-typography-link--overview">
            lenke
          </Link>
          .
        </Paragraph>
      </LocalMessage>
      <Table.Wrapper>
        <Table>
          <Table.Head>
            <Table.Row type="head">{headers()}</Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row> {cells()} </Table.Row>
          </Table.Body>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>
  );
};