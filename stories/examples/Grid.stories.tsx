import styled, { css } from 'styled-components';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import {
  Typography,
  TextInput,
  LocalMessage,
  Button,
  PlusIcon,
  useScreenSize,
  ScreenSize,
  Card,
} from '@norges-domstoler/dds-components';

export default {
  title: 'Examples/Grid',
};

const { breakpoints, grid, spacing } = ddsBaseTokens;

const ArticlePageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${grid.DdsGridLg12801919Count}, minmax(0, 1fr));
  column-gap: ${grid.DdsGridLg12801919GutterSize};
  row-gap: ${spacing.SizesDdsSpacingX1};
`;

const GridHeader = styled.div`
  grid-column: 1 / 13;
  grid-row: 1;

  border: 1px solid black;
  padding: 8px;
`;

const Article = styled.div`
  grid-column: 4 / 13;
  grid-row: 2;

  border: 1px solid black;
`;
const Aside = styled.div`
  grid-column: 1 / 4;
  grid-row: 2;

  border: 1px solid black;
`;
const GridFooter = styled.div`
  grid-column: 1 / 13;
  grid-row: 3;

  border: 1px solid black;
  padding: 8px;
`;

export const ArticlePage = () => {
  return (
    <ArticlePageGrid>
      <GridHeader>GridHeader</GridHeader>
      <Article>
        <h1>My article</h1>
        <p>
          Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras
          porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed
          auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
          orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac
          ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
          volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin
          eros pharetra congue. Duis ornare egestas augue ut luctus. Proin
          blandit quam nec lacus varius commodo et a urna. Ut id ornare felis,
          eget fermentum sapien.
        </p>

        <p>
          Nam vulputate diam nec tempor bibendum. Donec luctus augue eget
          malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut,
          facilisis sed est. Nam id risus quis ante semper consectetur eget
          aliquam lorem. Vivamus tristique elit dolor, sed pretium metus
          suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu
          urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt
          eget purus in interdum. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </p>
      </Article>
      <Aside>
        <h2>Other things</h2>
        <p>
          Nam vulputate diam nec tempor bibendum. Donec luctus augue eget
          malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut,
          facilisis sed est.
        </p>
      </Aside>
      <GridFooter>GridFooter</GridFooter>
    </ArticlePageGrid>
  );
};

const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${grid.DdsGridLg12801919Count}, minmax(0, 1fr));
  column-gap: ${grid.DdsGridLg12801919GutterSize};
  margin: ${spacing.SizesDdsSpacingX1} ${spacing.SizesDdsSpacingX3};
`;

const Header = styled.div`
  border: 1px solid black;
  padding: 8px;
`;

const Footer = styled.div`
  border: 1px solid black;
  padding: 8px;
`;

export const ArticleOnlySimpleGrid = () => {
  return (
    <>
      <Header>Header</Header>
      <ArticleGrid>
        <Article>
          <h1>My article</h1>
          <p>
            Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras
            porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed
            auctor cursus massa at porta. Integer ligula ipsum, tristique sit
            amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
            neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam
            erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus
            sollicitudin eros pharetra congue. Duis ornare egestas augue ut
            luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id
            ornare felis, eget fermentum sapien.
          </p>

          <p>
            Nam vulputate diam nec tempor bibendum. Donec luctus augue eget
            malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus
            ut, facilisis sed est. Nam id risus quis ante semper consectetur
            eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus
            suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus
            eu urna eget velit cursus viverra quis vestibulum sem. Aliquam
            tincidunt eget purus in interdum. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </Article>
        <Aside>
          <h2>Other things</h2>
          <p>
            Nam vulputate diam nec tempor bibendum. Donec luctus augue eget
            malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus
            ut, facilisis sed est.
          </p>
        </Aside>
      </ArticleGrid>
      <Footer>Footer</Footer>
    </>
  );
};

const BottomButtons = styled.div`
  margin-top: 64px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const MediaFormGrid = styled.div`
  display: grid;
  @media only screen and (min-width: ${breakpoints.DdsBreakpointXs}) {
    grid-template-columns: repeat(${grid.DdsGridXs0599Count}, minmax(0, 1fr));
    gap: ${grid.DdsGridXs0599GutterSize};
  }
  @media only screen and (min-width: ${breakpoints.DdsBreakpointSm}) {
    grid-template-columns: repeat(${grid.DdsGridSm600959Count}, minmax(0, 1fr));
    gap: ${grid.DdsGridSm600959GutterSize};
  }
  @media only screen and (min-width: ${breakpoints.DdsBreakpointMd}) {
    grid-template-columns: repeat(
      ${grid.DdsGridMd9601279Count},
      minmax(0, 1fr)
    );
    gap: ${grid.DdsGridMd9601279GutterSize};
  }
  @media only screen and (min-width: ${breakpoints.DdsBreakpointLg}) {
    grid-template-columns: repeat(
      ${grid.DdsGridLg12801919Count},
      minmax(0, 1fr)
    );
    gap: ${grid.DdsGridLg12801919GutterSize};
  }
  @media only screen and (min-width: ${breakpoints.DdsBreakpointXl}) {
    grid-template-columns: repeat(${grid.DdsGridXl1920Count}, minmax(0, 1fr));
    gap: ${grid.DdsGridXl1920GutterSize};
  }
  margin-left: 48px;
  margin-right: 48px;
`;

const MediaFullWidth = styled.div`
  @media only screen and (min-width: ${breakpoints.DdsBreakpointXs}) {
    grid-column: 1 / ${grid.DdsGridXs0599Count + 1};
  }
  @media only screen and (min-width: ${breakpoints.DdsBreakpointSm}) {
    grid-column: 1 / ${grid.DdsGridSm600959Count + 1};
  }
  @media only screen and (min-width: ${breakpoints.DdsBreakpointMd}) {
    grid-column: 1 / ${grid.DdsGridMd9601279Count + 1};
  }
  @media only screen and (min-width: ${breakpoints.DdsBreakpointLg}) {
    grid-column: 1 / ${grid.DdsGridLg12801919Count + 1};
  }
  @media only screen and (min-width: ${breakpoints.DdsBreakpointXl}) {
    grid-column: 1 / ${grid.DdsGridXl1920Count + 1};
  }
`;

const MediaFirstHalf = styled.div`
  @media only screen and (min-width: ${breakpoints.DdsBreakpointXs}) {
    grid-column: 1 / ${grid.DdsGridXs0599Count + 1};
  }
  @media only screen and (min-width: ${breakpoints.DdsBreakpointSm}) {
    grid-column: 1 / ${grid.DdsGridSm600959Count / 2 + 1};
  }
  @media only screen and (min-width: ${breakpoints.DdsBreakpointMd}) {
    grid-column: 1 / ${grid.DdsGridMd9601279Count / 2 + 1};
  }
  @media only screen and (min-width: ${breakpoints.DdsBreakpointLg}) {
    grid-column: 1 / ${grid.DdsGridLg12801919Count / 2 + 1};
  }
  @media only screen and (min-width: ${breakpoints.DdsBreakpointXl}) {
    grid-column: 1 / ${grid.DdsGridXl1920Count / 2 + 1};
  }
`;

const MediaSecondHalf = styled.div`
  @media only screen and (min-width: ${breakpoints.DdsBreakpointXs}) {
    grid-column: 1 / ${grid.DdsGridXs0599Count + 1};
  }
  @media only screen and (min-width: ${breakpoints.DdsBreakpointSm}) {
    grid-column: ${grid.DdsGridSm600959Count / 2 + 1} /
      ${grid.DdsGridSm600959Count + 1};
  }
  @media only screen and (min-width: ${breakpoints.DdsBreakpointMd}) {
    grid-column: ${grid.DdsGridMd9601279Count / 2 + 1} /
      ${grid.DdsGridMd9601279Count + 1};
  }
  @media only screen and (min-width: ${breakpoints.DdsBreakpointLg}) {
    grid-column: ${grid.DdsGridLg12801919Count / 2 + 1} /
      ${grid.DdsGridLg12801919Count + 1};
  }
  @media only screen and (min-width: ${breakpoints.DdsBreakpointXl}) {
    grid-column: ${grid.DdsGridXl1920Count / 2 + 1} /
      ${grid.DdsGridXl1920Count + 1};
  }
`;

const ToRight = styled(MediaFullWidth)`
  justify-self: end;
`;

const MediaPostContainer = styled.div`
  display: grid;

  @media only screen and (min-width: ${breakpoints.DdsBreakpointXs}) {
    grid-auto-flow: row;
    row-gap: 16px;
  }

  @media only screen and (min-width: ${breakpoints.DdsBreakpointSm}) {
    grid-auto-flow: column;
    grid-template-columns: min-content auto;
    column-gap: 16px;
  }
`;

export const FormWithMedia = () => {
  return (
    <>
      <MediaFormGrid>
        <MediaFullWidth>
          <Typography typographyType="headingSans04" withMargins>
            Partopplysninger
          </Typography>
        </MediaFullWidth>
        <MediaFullWidth>
          <LocalMessage
            message="Hva som må gjøres i dette skjemaet."
            width="100%"
          />
        </MediaFullWidth>
        <MediaFullWidth>
          <Typography typographyType="headingSans03" withMargins>
            Siktede
          </Typography>
        </MediaFullWidth>
        <MediaFirstHalf>
          <TextInput label="Fornavn" width="100%" />
        </MediaFirstHalf>
        <MediaSecondHalf>
          <TextInput label="Etternavn" width="100%" />
        </MediaSecondHalf>
        <MediaFullWidth>
          <TextInput label="Adresse" value="Kriminellveien 3" width="100%" />
        </MediaFullWidth>
        <MediaFullWidth>
          <MediaPostContainer>
            <TextInput label="Postnr" width="89px" />
            <TextInput label="Poststed" width="100%" />
          </MediaPostContainer>
        </MediaFullWidth>
        <MediaFullWidth>
          <Typography typographyType="headingSans03" withMargins>
            Forsvarer
          </Typography>
        </MediaFullWidth>
        <MediaFirstHalf>
          <TextInput label="Fornavn" width="100%" />
        </MediaFirstHalf>
        <MediaSecondHalf>
          <TextInput label="Etternavn" width="100%" />
        </MediaSecondHalf>
        <ToRight>
          <Button label="Legg til flere" purpose="secondary" icon={PlusIcon} />
        </ToRight>
        <MediaFullWidth>
          <BottomButtons>
            <Button label="Gå til partsopplysninger" purpose="primary" />
            <Button label="Send til godkjenning" purpose="secondary" />
            <Button label="Avbryt" purpose="secondary" />
          </BottomButtons>
        </MediaFullWidth>
      </MediaFormGrid>
    </>
  );
};

const gridTokens = {
  [ScreenSize.XSmall]: {
    grid: {
      columns: grid.DdsGridXs0599Count,
      gap: grid.DdsGridXs0599GutterSize,
      marginLeft: spacing.SizesDdsSpacingX1,
      marginRight: spacing.SizesDdsSpacingX1,
    },
    all: {
      gridColumn: '1 / -1',
    },
    firstHalf: {
      gridColumn: '1 / -1',
    },
    secondHalf: {
      gridColumn: '1 / -1',
    },
  },
  [ScreenSize.Small]: {
    grid: {
      columns: grid.DdsGridSm600959Count,
      gap: grid.DdsGridSm600959GutterSize,
      marginLeft: spacing.SizesDdsSpacingX1,
      marginRight: spacing.SizesDdsSpacingX1,
    },
    firstHalf: {
      gridColumn: `1 / ${grid.DdsGridSm600959Count / 2 + 1}`,
    },
    secondHalf: {
      gridColumn: `${grid.DdsGridSm600959Count / 2 + 1} / ${
        grid.DdsGridSm600959Count + 1
      }`,
    },
  },
  [ScreenSize.Medium]: {
    grid: {
      columns: grid.DdsGridMd9601279Count,
      gap: grid.DdsGridMd9601279GutterSize,
      marginLeft: spacing.SizesDdsSpacingX1,
      marginRight: spacing.SizesDdsSpacingX1,
    },
    firstHalf: {
      gridColumn: `1 / ${grid.DdsGridMd9601279Count / 2 + 1}`,
    },
    secondHalf: {
      gridColumn: `${grid.DdsGridMd9601279Count / 2 + 1} / ${
        grid.DdsGridMd9601279Count + 1
      }`,
    },
  },
  [ScreenSize.Large]: {
    grid: {
      columns: grid.DdsGridLg12801919Count,
      gap: grid.DdsGridLg12801919GutterSize,
      marginLeft: spacing.SizesDdsSpacingX1,
      marginRight: spacing.SizesDdsSpacingX1,
    },
    firstHalf: {
      gridColumn: `1 / ${grid.DdsGridLg12801919Count / 2 + 1}`,
    },
    secondHalf: {
      gridColumn: `${grid.DdsGridLg12801919Count / 2 + 1} / ${
        grid.DdsGridLg12801919Count + 1
      }`,
    },
  },
  [ScreenSize.XLarge]: {
    grid: {
      columns: grid.DdsGridXl1920Count,
      gap: grid.DdsGridXl1920GutterSize,
      marginLeft: spacing.SizesDdsSpacingX1,
      marginRight: spacing.SizesDdsSpacingX1,
    },
    firstHalf: {
      gridColumn: `1 / ${grid.DdsGridXs0599Count / 2 + 1}`,
    },
    secondHalf: {
      gridColumn: `${grid.DdsGridXl1920Count / 2 + 1} / ${
        grid.DdsGridXl1920Count + 1
      }`,
    },
  },
};

const getHooksGridStyling = (screenSize: ScreenSize) => {
  const tokens = gridTokens[screenSize].grid;
  return {
    gridTemplateColumns: `repeat(${tokens.columns}, minmax(0, 1fr))`,
    gap: tokens.gap,
    marginLeft: tokens.marginLeft,
    marginRight: tokens.marginRight,
  };
};

type ColumnsOccupied = 'all' | 'firstHalf' | 'secondHalf';

type GridProps = {
  screenSize: ScreenSize;
};

type GridChildProps = {
  screenSize: ScreenSize;
  columnsOccupied: ColumnsOccupied;
};

const HooksGrid = styled.div<GridProps>`
  display: grid;
  ${({ screenSize }) => getHooksGridStyling(screenSize)}
`;

const GridChild = styled.div<GridChildProps>`
  grid-column: ${({ screenSize, columnsOccupied }) =>
    columnsOccupied === 'all'
      ? '1 / -1'
      : gridTokens[screenSize][columnsOccupied].gridColumn};
`;
const HooksFullWidthToRight = styled(GridChild)`
  justify-self: end;
`;

const HooksPostContainer = styled.div<GridProps>`
  display: grid;
  ${({ screenSize }) =>
    screenSize === ScreenSize.XSmall
      ? css`
          grid-auto-flow: row;
          row-gap: 16px;
        `
      : css`
          grid-auto-flow: column;
          grid-template-columns: min-content auto;
          column-gap: 16px;
        `}
`;

export const FormWithHooks = () => {
  const screenSize = useScreenSize();
  return (
    <HooksGrid screenSize={screenSize}>
      <GridChild screenSize={screenSize} columnsOccupied="all">
        <Typography typographyType="headingSans04" withMargins>
          Partopplysninger
        </Typography>
      </GridChild>
      <GridChild screenSize={screenSize} columnsOccupied="all">
        <LocalMessage
          message="Hva som må gjøres i dette skjemaet."
          width="100%"
        />
      </GridChild>
      <GridChild screenSize={screenSize} columnsOccupied="all">
        <Typography typographyType="headingSans03" withMargins>
          Siktede
        </Typography>
      </GridChild>
      <GridChild screenSize={screenSize} columnsOccupied="firstHalf">
        <TextInput label="Fornavn" width="100%" />
      </GridChild>
      <GridChild screenSize={screenSize} columnsOccupied="secondHalf">
        <TextInput label="Etternavn" width="100%" />
      </GridChild>
      <GridChild screenSize={screenSize} columnsOccupied="all">
        <TextInput label="Adresse" value="Kriminellveien 3" width="100%" />
      </GridChild>
      <GridChild screenSize={screenSize} columnsOccupied="all">
        <HooksPostContainer screenSize={screenSize}>
          <TextInput label="Postnr" width="89px" />
          <TextInput label="Poststed" width="100%" />
        </HooksPostContainer>
      </GridChild>
      <GridChild screenSize={screenSize} columnsOccupied="all">
        <Typography typographyType="headingSans03" withMargins>
          Forsvarer
        </Typography>
      </GridChild>
      <GridChild screenSize={screenSize} columnsOccupied="firstHalf">
        <TextInput label="Fornavn" width="100%" />
      </GridChild>
      <GridChild screenSize={screenSize} columnsOccupied="secondHalf">
        <TextInput label="Etternavn" width="100%" />
      </GridChild>
      <HooksFullWidthToRight screenSize={screenSize} columnsOccupied="all">
        <Button label="Legg til flere" purpose="secondary" icon={PlusIcon} />
      </HooksFullWidthToRight>
      <GridChild screenSize={screenSize} columnsOccupied="all">
        <BottomButtons>
          <Button label="Gå til partsopplysninger" purpose="primary" />
          <Button label="Send til godkjenning" purpose="secondary" />
          <Button label="Avbryt" purpose="secondary" />
        </BottomButtons>
      </GridChild>
    </HooksGrid>
  );
};

const AutolayoutGrid = styled.div`
  display: grid;
  gap: ${spacing.SizesDdsSpacingX1};
  grid-template-columns: repeat(
    auto-fit,
    minmax(${spacing.SizesDdsSpacingX10}, 1fr)
  );
`;

export const Autolayout = () => {
  return (
    <AutolayoutGrid>
      <Card cardType="info">card</Card>
      <Card cardType="info">card</Card>
      <Card cardType="info">card</Card>
      <Card cardType="info">card</Card>
    </AutolayoutGrid>
  );
};
