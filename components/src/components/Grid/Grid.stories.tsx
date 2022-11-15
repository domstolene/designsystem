import { Grid, GridChild, GridProps } from '.';
import { ScreenSize, useScreenSize } from '../../hooks';
import { FilterIcon, PlusIcon } from '../../icons/tsx';
import { StoryTemplate } from '../../storybook';
import { Button } from '../Button';
import { InternalHeader } from '../InternalHeader';
import { Pagination } from '../Pagination';
import { Search } from '../Search';
import { Body, Cell, Head, Row, Table } from '../Table';
import { Tag } from '../Tag';
import { TextInput } from '../TextInput';
import { Heading } from '../Typography';

export default {
  title: 'Design system/Grid',
  component: Grid,
};

export const PageExample = (args: GridProps) => {
  const screenSize = useScreenSize();
  const isXSmall = screenSize === ScreenSize.XSmall;
  const smallScreenVersion = isXSmall ? true : undefined;
  return (
    <>
      <InternalHeader
        applicationName="Applikasjon"
        applicationDesc="Beskrivelse"
        navigationElements={[
          { title: 'Advokater', href: '/' },
          { title: 'Saker', href: '/' },
        ]}
        smallScreen={smallScreenVersion}
      />
      <Grid {...args} style={{ marginTop: isXSmall ? '16px' : '32px' }}>
        <GridChild
          columnsOccupied={{
            xs: '1/-1',
            sm: '1/7',
            md: '1/11',
            lg: '1/11',
            xl: '1/9',
          }}
        >
          <Search buttonProps={{ onClick: () => {} }} />
        </GridChild>
        <GridChild
          columnsOccupied={{
            xs: '1/-1',
            sm: '7/9',
            md: '11/13',
            lg: '11/13',
            xl: '9/13',
          }}
        >
          <Button
            icon={FilterIcon}
            label="Filter"
            appearance="borderless"
            purpose="secondary"
          />
        </GridChild>
        <GridChild columnsOccupied="all">
          <Table style={{ width: '100%' }}>
            <Head>
              <Row type="head">
                <Cell type="head">Navn</Cell>
                <Cell type="head">Firma</Cell>
                <Cell type="head">Status</Cell>
              </Row>
            </Head>
            <Body>
              <Row type="body">
                <Cell> Marie Bjerke </Cell>
                <Cell>Advokat Firma </Cell>
                <Cell>
                  <Tag text="Møterett" purpose="success" />
                </Cell>
              </Row>
              <Row type="body">
                <Cell>Sandra-Katrine Ingvaldsen Lovsetter</Cell>
                <Cell>Advokatene AS</Cell>
                <Cell>
                  <Tag text="Ikke møterett" purpose="danger" />
                </Cell>
              </Row>
            </Body>
          </Table>
        </GridChild>
        <GridChild columnsOccupied="all">
          <Pagination
            itemsAmount={20}
            withCounter
            smallScreen={smallScreenVersion}
          />
        </GridChild>
      </Grid>
    </>
  );
};

export const JustRelativeColumns = (args: GridProps) => (
  <StoryTemplate title="Grid - default" display="block">
    <Grid {...args}>
      <GridChild columnsOccupied="all">
        <Heading level={2} withMargins>
          Opplysninger
        </Heading>
      </GridChild>
      <GridChild columnsOccupied="all">
        <TextInput label="Label" width="100%" />
      </GridChild>
      <GridChild columnsOccupied="firstHalf">
        <TextInput label="Label" width="100%" />
      </GridChild>
      <GridChild columnsOccupied="secondHalf">
        <TextInput label="Label" width="100%" />
      </GridChild>
      <GridChild columnsOccupied="all" justifySelf="right">
        <Button label="Legg til" icon={PlusIcon} purpose="secondary" />
      </GridChild>
    </Grid>
  </StoryTemplate>
);
