import styled from 'styled-components';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { Typography } from '../../components/Typography';
import { TextInput } from '../../components/TextInput';
import { LocalMessage } from '../../components/LocalMessage';
import { Button } from '../../components/Button';
import { PlusIcon } from '../../icons/tsx';
import { useScreenSize, ScreenSize } from '../../hooks';

export default {
  title: 'Examples/Grid',
};

const { breakpoints, grid, spacing } = ddsBaseTokens;

export const GridArticlePage = () => {
  const Grid = styled.div`
    display: grid;
    @media only screen and (min-width: ${breakpoints.DdsBreakpointSm}) {
      grid-template-columns: repeat(
        ${grid.DdsGridSm600959Count},
        minmax(0, 1fr)
      );
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
  `;

  const Header = styled.div`
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
  const Footer = styled.div`
    grid-column: 1 / 13;
    grid-row: 3;

    border: 1px solid black;
    padding: 8px;
  `;

  return (
    <Grid>
      <Header>Header</Header>
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
      <Footer>Footer</Footer>
    </Grid>
  );
};

export const GridArticle = () => {
  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 12px;
    margin: 4px 48px;
  `;

  const Header = styled.div`
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
  const Footer = styled.div`
    grid-column: 1 / 13;
    grid-row: 3;

    border: 1px solid black;
    padding: 8px;
  `;

  return (
    <>
      <Header>Header</Header>
      <Grid>
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
      </Grid>
      <Footer>Footer</Footer>
    </>
  );
};

export const GridFormWithMedia = () => {
  const Grid = styled.div`
    display: grid;
    @media only screen and (min-width: ${breakpoints.DdsBreakpointXs}) {
      grid-template-columns: repeat(${grid.DdsGridXs0599Count}, minmax(0, 1fr));
      gap: ${grid.DdsGridXs0599GutterSize};
    }
    @media only screen and (min-width: ${breakpoints.DdsBreakpointSm}) {
      grid-template-columns: repeat(
        ${grid.DdsGridSm600959Count},
        minmax(0, 1fr)
      );
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

  const FullWidth = styled.div`
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

  const FirstHalf = styled.div`
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

  const SecondHalf = styled.div`
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
  const FirstThird = styled.div`
    @media only screen and (min-width: ${breakpoints.DdsBreakpointXs}) {
      grid-column: 1 / ${grid.DdsGridXs0599Count + 1};
    }
    @media only screen and (min-width: ${breakpoints.DdsBreakpointSm}) {
      grid-column: 1 / ${Math.ceil(grid.DdsGridSm600959Count / 3 + 1)};
    }
    @media only screen and (min-width: ${breakpoints.DdsBreakpointMd}) {
      grid-column: 1 / ${Math.ceil(grid.DdsGridMd9601279Count / 3 + 1)};
    }
    @media only screen and (min-width: ${breakpoints.DdsBreakpointLg}) {
      grid-column: 1 / ${Math.ceil(grid.DdsGridLg12801919Count / 3 + 1)};
    }
    @media only screen and (min-width: ${breakpoints.DdsBreakpointXl}) {
      grid-column: 1 / ${Math.ceil(grid.DdsGridXl1920Count / 3 + 1)};
    }
  `;
  const SecondThird = styled.div`
    @media only screen and (min-width: ${breakpoints.DdsBreakpointXs}) {
      grid-column: 1 / ${grid.DdsGridXs0599Count + 1};
    }
    @media only screen and (min-width: ${breakpoints.DdsBreakpointSm}) {
      grid-column: ${Math.round(grid.DdsGridSm600959Count / 3 + 1)} /
        ${grid.DdsGridSm600959Count + 1};
    }
    @media only screen and (min-width: ${breakpoints.DdsBreakpointMd}) {
      grid-column: ${Math.round(grid.DdsGridMd9601279Count / 3 + 1)} /
        ${grid.DdsGridMd9601279Count + 1};
    }
    @media only screen and (min-width: ${breakpoints.DdsBreakpointLg}) {
      grid-column: ${Math.round(grid.DdsGridLg12801919Count / 3 + 1)} /
        ${grid.DdsGridLg12801919Count + 1};
    }
    @media only screen and (min-width: ${breakpoints.DdsBreakpointXl}) {
      grid-column: ${Math.round(grid.DdsGridXl1920Count / 3 + 1)} /
        ${grid.DdsGridXl1920Count + 1};
    }
  `;
  const ToRight = styled.div`
    justify-self: end;
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
  const BottomButtons = styled.div`
    margin-top: 64px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  `;
  return (
    <>
      <Grid>
        <FullWidth>
          <Typography typographyType="headingSans04" withMargins>
            Partopplysninger
          </Typography>
        </FullWidth>
        <FullWidth>
          <LocalMessage
            message="Hva som må gjøres i dette skjemaet."
            width="100%"
          />
        </FullWidth>
        <FullWidth>
          <Typography typographyType="headingSans03" withMargins>
            Siktede
          </Typography>
        </FullWidth>
        <FirstHalf>
          <TextInput label="Fornavn" width="100%" />
        </FirstHalf>
        <SecondHalf>
          <TextInput label="Etternavn" width="100%" />
        </SecondHalf>
        <FullWidth>
          <TextInput label="Adresse" value="Kriminellveien 3" width="100%" />
        </FullWidth>
        <FirstThird>
          <TextInput label="Postnummer" width="100%" />
        </FirstThird>
        <SecondThird>
          <TextInput label="Poststed" width="100%" />
        </SecondThird>
        <FullWidth>
          <Typography typographyType="headingSans03" withMargins>
            Forsvarer
          </Typography>
        </FullWidth>
        <FirstHalf>
          <TextInput label="Fornavn" width="100%" />
        </FirstHalf>
        <SecondHalf>
          <TextInput label="Etternavn" width="100%" />
        </SecondHalf>
        <ToRight>
          <Button label="Legg til flere" purpose="secondary" icon={PlusIcon} />
        </ToRight>
        <FullWidth>
          <BottomButtons>
            <Button label="Gå til partsopplysninger" purpose="primary" />
            <Button label="Send til godkjenning" purpose="secondary" />
            <Button label="Avbryt" purpose="secondary" />
          </BottomButtons>
        </FullWidth>
      </Grid>
    </>
  );
};

export const GridFormWithHooks = () => {
  const gridTokens = {
    [ScreenSize.XSmall]: {
      grid: {
        columns: grid.DdsGridXs0599Count,
        gap: grid.DdsGridXs0599GutterSize,
        marginLeft: spacing.SizesDdsSpacingLayoutX1,
        marginRight: spacing.SizesDdsSpacingLayoutX1,
      },
      fullWidth: {
        gridColumn: `1 / ${grid.DdsGridXs0599Count + 1}`,
      },
      firstHalf: {
        gridColumn: `1 / ${grid.DdsGridXs0599Count + 1}`,
      },
    },
    [ScreenSize.Small]: {
      grid: {
        columns: grid.DdsGridSm600959Count,
        gap: grid.DdsGridSm600959GutterSize,
        marginLeft: spacing.SizesDdsSpacingLayoutX1,
        marginRight: spacing.SizesDdsSpacingLayoutX1,
      },
      fullWidth: { gridColumn: `1 / ${grid.DdsGridSm600959Count + 1}` },
      firstHalf: {
        gridColumn: `1 / ${grid.DdsGridSm600959Count + 1}`,
      },
    },
    [ScreenSize.Medium]: {
      grid: {
        columns: grid.DdsGridMd9601279Count,
        gap: grid.DdsGridMd9601279GutterSize,
        marginLeft: spacing.SizesDdsSpacingLayoutX1,
        marginRight: spacing.SizesDdsSpacingLayoutX1,
      },
      fullWidth: { gridColumn: `1 / ${grid.DdsGridMd9601279Count + 1}` },
      firstHalf: {
        gridColumn: `1 / ${grid.DdsGridXs0599Count + 1}`,
      },
    },
    [ScreenSize.Large]: {
      grid: {
        columns: grid.DdsGridLg12801919Count,
        gap: grid.DdsGridLg12801919GutterSize,
        marginLeft: spacing.SizesDdsSpacingLayoutX1,
        marginRight: spacing.SizesDdsSpacingLayoutX1,
      },
      fullWidth: { gridColumn: `1 / ${grid.DdsGridLg12801919Count + 1}` },
    },
    [ScreenSize.XLarge]: {
      grid: {
        columns: grid.DdsGridXl1920Count,
        gap: grid.DdsGridXl1920GutterSize,
        marginLeft: spacing.SizesDdsSpacingLayoutX1,
        marginRight: spacing.SizesDdsSpacingLayoutX1,
      },
      fullWidth: { gridColumn: `1 / ${grid.DdsGridXl1920Count + 1}` },
    },
  };

  const screenSize = useScreenSize();

  const getGridStyling = (screenSize: ScreenSize) => {
    const tokens = gridTokens[screenSize].grid;
    return {
      gridTemplateColumns: `repeat(${tokens.columns}, minmax(0, 1fr))`,
      gap: tokens.gap,
      marginLeft: tokens.marginLeft,
      marginRight: tokens.marginRight,
    };
  };

  type GridProps = {
    screenSize: ScreenSize;
  };

  const Grid = styled.div<GridProps>`
    display: grid;
    ${({ screenSize }) => getGridStyling(screenSize)}
  `;

  const FullWidth = styled.div<GridProps>`
    grid-column: ${({ screenSize }) =>
      gridTokens[screenSize].fullWidth.gridColumn};
  `;

  const FirstHalf = styled.div`
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

  const SecondHalf = styled.div`
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
  const FirstThird = styled.div`
    @media only screen and (min-width: ${breakpoints.DdsBreakpointXs}) {
      grid-column: 1 / ${grid.DdsGridXs0599Count + 1};
    }
    @media only screen and (min-width: ${breakpoints.DdsBreakpointSm}) {
      grid-column: 1 / ${Math.ceil(grid.DdsGridSm600959Count / 3 + 1)};
    }
    @media only screen and (min-width: ${breakpoints.DdsBreakpointMd}) {
      grid-column: 1 / ${Math.ceil(grid.DdsGridMd9601279Count / 3 + 1)};
    }
    @media only screen and (min-width: ${breakpoints.DdsBreakpointLg}) {
      grid-column: 1 / ${Math.ceil(grid.DdsGridLg12801919Count / 3 + 1)};
    }
    @media only screen and (min-width: ${breakpoints.DdsBreakpointXl}) {
      grid-column: 1 / ${Math.ceil(grid.DdsGridXl1920Count / 3 + 1)};
    }
  `;
  const SecondThird = styled.div`
    @media only screen and (min-width: ${breakpoints.DdsBreakpointXs}) {
      grid-column: 1 / ${grid.DdsGridXs0599Count + 1};
    }
    @media only screen and (min-width: ${breakpoints.DdsBreakpointSm}) {
      grid-column: ${Math.round(grid.DdsGridSm600959Count / 3 + 1)} /
        ${grid.DdsGridSm600959Count + 1};
    }
    @media only screen and (min-width: ${breakpoints.DdsBreakpointMd}) {
      grid-column: ${Math.round(grid.DdsGridMd9601279Count / 3 + 1)} /
        ${grid.DdsGridMd9601279Count + 1};
    }
    @media only screen and (min-width: ${breakpoints.DdsBreakpointLg}) {
      grid-column: ${Math.round(grid.DdsGridLg12801919Count / 3 + 1)} /
        ${grid.DdsGridLg12801919Count + 1};
    }
    @media only screen and (min-width: ${breakpoints.DdsBreakpointXl}) {
      grid-column: ${Math.round(grid.DdsGridXl1920Count / 3 + 1)} /
        ${grid.DdsGridXl1920Count + 1};
    }
  `;
  const ToRight = styled.div`
    justify-self: end;
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
  const BottomButtons = styled.div`
    margin-top: 64px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  `;
  return (
    <>
      <Grid screenSize={screenSize}>
        <FullWidth screenSize={screenSize}>
          <Typography typographyType="headingSans04" withMargins>
            Partopplysninger
          </Typography>
        </FullWidth>
        <FullWidth screenSize={screenSize}>
          <LocalMessage
            message="Hva som må gjøres i dette skjemaet."
            width="100%"
          />
        </FullWidth>
        <FullWidth screenSize={screenSize}>
          <Typography typographyType="headingSans03" withMargins>
            Siktede
          </Typography>
        </FullWidth>
        <FirstHalf>
          <TextInput label="Fornavn" width="100%" />
        </FirstHalf>
        <SecondHalf>
          <TextInput label="Etternavn" width="100%" />
        </SecondHalf>
        <FullWidth screenSize={screenSize}>
          <TextInput label="Adresse" value="Kriminellveien 3" width="100%" />
        </FullWidth>
        <FirstThird>
          <TextInput label="Postnummer" width="100%" />
        </FirstThird>
        <SecondThird>
          <TextInput label="Poststed" width="100%" />
        </SecondThird>
        <FullWidth screenSize={screenSize}>
          <Typography typographyType="headingSans03" withMargins>
            Forsvarer
          </Typography>
        </FullWidth>
        <FirstHalf>
          <TextInput label="Fornavn" width="100%" />
        </FirstHalf>
        <SecondHalf>
          <TextInput label="Etternavn" width="100%" />
        </SecondHalf>
        <ToRight>
          <Button label="Legg til flere" purpose="secondary" icon={PlusIcon} />
        </ToRight>
        <FullWidth screenSize={screenSize}>
          <BottomButtons>
            <Button label="Gå til partsopplysninger" purpose="primary" />
            <Button label="Send til godkjenning" purpose="secondary" />
            <Button label="Avbryt" purpose="secondary" />
          </BottomButtons>
        </FullWidth>
      </Grid>
    </>
  );
};
