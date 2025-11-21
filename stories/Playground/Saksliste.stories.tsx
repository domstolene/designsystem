import {
  ArrowRightIcon,
  Button,
  Divider,
  Grid,
  GridChild,
  Heading,
  Link,
  MoreVerticalIcon,
  OverflowMenu,
  OverflowMenuGroup,
  Table,
  Tag,
} from '../../packages/dds-components/src/index';
import { ddsProviderDecorator } from '../../packages/dds-components/src/storybook';

export default {
  title: 'Playground/Saksliste',
  decorators: [ddsProviderDecorator],
};

const dødsfallItems = [
  {
    innkommet: '01.01.2000',
    saksnummer: '12-34567/TRD',
    status: 'Påbegynt',
    saksbehandler: 'Ola Olavsen',
    avdød: 'Gunnar Gunnarsen',
    fødselsdato: '01.01.1950',
    dødsdato: '01.01.1999',
  },
  {
    innkommet: '02.02.2000',
    saksnummer: '12-98765/TRD',
    status: 'Ikke påbegynt',
    saksbehandler: 'Kari Nordmann',
    avdød: 'Johanne Johansen',
    fødselsdato: '01.01.1950',
    dødsdato: '01.01.1999',
  },
  {
    innkommet: '10.10.1990',
    saksnummer: '12-24680/TRD',
    status: 'Ikke påbegynt',
    saksbehandler: 'Ola Olavsen',
    avdød: 'Pernille Pernillesen',
    fødselsdato: '01.01.1950',
    dødsdato: '01.01.1999',
  },
];

const fengslingItems = [
  {
    innkommet: '01.01.2000',
    saksnummer: '12-34567/TRD',
    status: 'Påbegynt',
    saksbehandler: 'Ola Olavsen',
    siktede: 'Gunnar Gunnarsen',
    utløpsfrist: '01.01.1950',
    aktivitet: 'Registrer parter',
    dokumenter: 3,
  },
  {
    innkommet: '02.02.2000',
    saksnummer: '12-98765/TRD',
    status: 'Ikke påbegynt',
    saksbehandler: 'Kari Nordmann',
    siktede: 'Johanne Johansen',
    utløpsfrist: '01.01.1950',
    aktivitet: 'Til registrering',
    dokumenter: 1,
  },
  {
    innkommet: '10.10.1990',
    saksnummer: '12-24680/TRD',
    status: 'Ikke påbegynt',
    saksbehandler: 'Ola Olavsen',
    siktede: 'Pernille Pernillesen',
    utløpsfrist: '01.01.1950',
    aktivitet: 'Til registrering',
    dokumenter: 1,
  },
];

const overflowItems = [
  {
    title: 'Vis sak',
  },
  {
    title: 'Tildel sak til meg',
  },
  {
    title: 'Avslutt sak',
  },
];

const wrapperStyle = {
  width: '100%',
};

export const Saksliste = () => {
  return (
    <Grid as="div">
      <GridChild columnsOccupied="all">
        <Heading level={3}>Saksliste - Dødsfall</Heading>
      </GridChild>
      <GridChild columnsOccupied="all">
        <Table.Wrapper>
          <Table style={wrapperStyle}>
            <Table.Head>
              <Table.Row type="head">
                <Table.SortCell onClick={() => {}}>Innkommet</Table.SortCell>
                <Table.SortCell onClick={() => {}}>Saksnummer</Table.SortCell>
                <Table.SortCell onClick={() => {}}>Status</Table.SortCell>
                <Table.SortCell onClick={() => {}}>
                  Saksbehandler
                </Table.SortCell>
                <Table.SortCell onClick={() => {}}>Avdød</Table.SortCell>
                <Table.SortCell onClick={() => {}}>Fødselsdato</Table.SortCell>
                <Table.SortCell onClick={() => {}}>Dødsdato</Table.SortCell>
                <Table.Cell type="head">Vis mer</Table.Cell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {dødsfallItems.map((item, index: number) => (
                <Table.Row key={index}>
                  <Table.Cell>{item.innkommet}</Table.Cell>
                  <Table.Cell>{item.saksnummer}</Table.Cell>
                  <Table.Cell>
                    <Tag
                      text={item.status}
                      purpose={index === 0 ? 'info' : 'warning'}
                    ></Tag>
                  </Table.Cell>
                  <Table.Cell>{item.saksbehandler}</Table.Cell>
                  <Table.Cell>{item.avdød}</Table.Cell>
                  <Table.Cell>{item.fødselsdato}</Table.Cell>
                  <Table.Cell>{item.dødsdato}</Table.Cell>
                  <Table.Cell>
                    <Button icon={ArrowRightIcon} purpose="tertiary" />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Table.Wrapper>
      </GridChild>
      <Divider />
      <GridChild columnsOccupied="all">
        <Heading level={3}>Saksliste - Fengsling</Heading>
      </GridChild>
      <GridChild columnsOccupied="all">
        <Table.Wrapper>
          <Table style={wrapperStyle}>
            <Table.Head>
              <Table.Row type="head">
                <Table.SortCell onClick={() => {}}>Innkommet</Table.SortCell>
                <Table.SortCell onClick={() => {}}>Saksnummer</Table.SortCell>
                <Table.SortCell onClick={() => {}}>Status</Table.SortCell>
                <Table.SortCell onClick={() => {}}>
                  Saksbehandler
                </Table.SortCell>
                <Table.SortCell onClick={() => {}}>Siktede</Table.SortCell>
                <Table.SortCell onClick={() => {}}>Utløpsfrist</Table.SortCell>
                <Table.SortCell onClick={() => {}}>Aktivitet</Table.SortCell>
                <Table.SortCell onClick={() => {}}>Dokumenter</Table.SortCell>
                <Table.Cell type="head">Valg</Table.Cell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {fengslingItems.map((item, index: number) => (
                <Table.Row key={index}>
                  <Table.Cell>{item.innkommet}</Table.Cell>
                  <Table.Cell>{item.saksnummer}</Table.Cell>
                  <Table.Cell>
                    <Tag
                      text={item.status}
                      purpose={index === 0 ? 'info' : 'warning'}
                    ></Tag>
                  </Table.Cell>
                  <Table.Cell>{item.saksbehandler}</Table.Cell>
                  <Table.Cell>{item.siktede}</Table.Cell>
                  <Table.Cell>{item.utløpsfrist}</Table.Cell>
                  <Table.Cell>{item.aktivitet}</Table.Cell>
                  <Table.Cell>
                    <Link href="/">
                      {'Vis dokumenter(' + item.dokumenter + ')'}
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <OverflowMenuGroup>
                      <Button icon={MoreVerticalIcon} purpose="tertiary" />
                      <OverflowMenu
                        items={overflowItems}
                        onClose={function noRefCheck() {}}
                        onToggle={function noRefCheck() {}}
                      />
                    </OverflowMenuGroup>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Table.Wrapper>
      </GridChild>
    </Grid>
  );
};
