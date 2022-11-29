import {
  Table,
  Typography,
  Heading,
  Grid,
  GridChild,
  Tag,
  Divider,
  Button,
  OverflowMenu,
  OverflowMenuGroup,
  MoreVerticalIcon,
  ArrowRightIcon,
} from '../..';
import {
  FormGenerator,
  FormGeneratorField,
  FormGeneratorRow,
} from '../../components/FormGenerator';
import { ScreenSize } from '../../hooks/useScreenSize';

export default {
  title: 'Examples/Standardisering',
};

const partsAdministrering: (FormGeneratorField | FormGeneratorRow)[] = [
  {
    component: 'Heading',
    props: {
      level: 2,
    },
    innerHTML: 'Administrere part',
  },
  {
    component: 'Heading',
    props: {
      level: 5,
    },
    innerHTML: 'Personalia',
  },
  {
    rowType: 'standard',
    breakpoint: ScreenSize.Small,
    fields: [
      {
        component: 'TextInput',
        props: {
          label: 'Fornavn',
          type: 'text',
          name: 'firstName',
        },
      },
      {
        component: 'TextInput',
        props: {
          label: 'Etternavn',
          type: 'text',
          name: 'lastName',
        },
      },
    ],
  },
  {
    component: 'TextInput',
    props: {
      label: 'Fødselsnummer (11 siffer)',
      type: 'text',
      name: 'nin',
    },
  },
  {
    component: 'Datepicker',
    props: {
      label: 'Fødselsdato',
      name: 'dateofbirth',
      width: '320px',
    },
  },
  {
    component: 'TextInput',
    props: {
      label: 'Statsborgerskap',
      type: 'text',
      name: 'nationality',
    },
  },
  {
    component: 'Heading',
    props: {
      level: 5,
    },
    innerHTML: 'Kontaktinformasjon',
  },
  {
    rowType: 'standard',
    breakpoint: ScreenSize.Small,
    fields: [
      {
        component: 'TextInput',
        props: {
          label: 'Telefon',
          type: 'text',
          name: 'phone',
        },
      },
      {
        component: 'TextInput',
        props: {
          label: 'E-post',
          type: 'text',
          name: 'email',
        },
      },
    ],
  },
  {
    component: 'Heading',
    props: {
      level: 5,
    },
    innerHTML: 'Adresse',
  },
  {
    component: 'TextInput',
    props: {
      label: 'Adresse',
      type: 'text',
      name: 'address',
    },
  },
  {
    rowType: 'standard',
    fields: [
      {
        component: 'TextInput',
        props: {
          label: 'Postnummer',
          type: 'number',
          width: '90px',
        },
      },
      {
        component: 'TextInput',
        props: {
          label: 'Poststed',
          type: 'text',
        },
      },
    ],
  },
  {
    component: 'TextInput',
    props: {
      label: 'Land',
      type: 'text',
      name: 'country',
    },
  },
  {
    component: 'Heading',
    props: {
      level: 5,
    },
    innerHTML: 'Annet',
  },
  {
    component: 'TextInput',
    props: {
      label: 'Rolle/Relasjon',
      type: 'text',
      name: 'role',
    },
  },
  {
    component: 'Select',
    name: 'test',
    props: {
      label: 'Formuesfullmakt',
      name: 'test',
      options: [
        {
          label: 'Formuesfullmakt (Altinn Dødsbo)',
          value: 'altinn',
        },
        {
          label: 'Ingen',
          value: 'none',
        },
      ],
    },
  },
  {
    component: 'TextInput',
    props: {
      label: 'Signering',
      name: 'signature',
    },
  },
  {
    rowType: 'button',
    fields: [
      {
        component: 'Button',
        props: {
          label: 'Lagre',
          type: 'submit',
        },
      },
      {
        component: 'Button',
        props: {
          label: 'Avbryt',
          purpose: 'secondary',
        },
      },
    ],
  },
];

export const PartsAdministrering = () => {
  return (
    <FormGenerator
      fields={partsAdministrering}
      stateOnChange={newState => console.log(newState)}
    />
  );
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

const linkStyle = {
  cursor: 'pointer',
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
                    <Button
                      icon={ArrowRightIcon}
                      purpose="primary"
                      appearance="borderless"
                    />
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
                    <Typography style={linkStyle} typographyType="a">
                      {'Vis dokumenter(' + item.dokumenter + ')'}
                    </Typography>
                  </Table.Cell>
                  <Table.Cell>
                    <OverflowMenuGroup>
                      <Button
                        icon={MoreVerticalIcon}
                        purpose="secondary"
                        appearance="borderless"
                      />
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
