import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { ScreenSize } from '@norges-domstoler/dds-components';

const { grid, spacing } = ddsBaseTokens;

const allColumns = '1 / -1';
const halfWayColumn = {
  [ScreenSize.Small]: grid.DdsGridSm600959Count / 2 + 1,
  [ScreenSize.Medium]: grid.DdsGridMd9601279Count / 2 + 1,
  [ScreenSize.Large]: grid.DdsGridLg12801919Count / 2 + 1,
  [ScreenSize.XLarge]: grid.DdsGridXs0599Count / 2 + 1,
};

export const gridTokens = {
  [ScreenSize.XSmall]: {
    grid: {
      columns: grid.DdsGridXs0599Count,
      gap: grid.DdsGridXs0599GutterSize,
      marginLeft: spacing.SizesDdsSpacingX1,
      marginRight: spacing.SizesDdsSpacingX1,
    },

    columns: {
      firstHalf: {
        gridColumn: allColumns,
      },
      secondHalf: {
        gridColumn: allColumns,
      },
    },
  },
  [ScreenSize.Small]: {
    grid: {
      columns: grid.DdsGridSm600959Count,
      gap: grid.DdsGridSm600959GutterSize,
      marginLeft: spacing.SizesDdsSpacingX2,
      marginRight: spacing.SizesDdsSpacingX2,
    },
    columns: {
      firstHalf: {
        gridColumn: `1 / ${halfWayColumn[ScreenSize.Small]}`,
      },
      secondHalf: {
        gridColumn: `${halfWayColumn[ScreenSize.Small]} / -1`,
      },
    },
  },
  [ScreenSize.Medium]: {
    grid: {
      columns: grid.DdsGridMd9601279Count,
      gap: grid.DdsGridMd9601279GutterSize,
      marginLeft: spacing.SizesDdsSpacingX4,
      marginRight: spacing.SizesDdsSpacingX4,
    },
    columns: {
      firstHalf: {
        gridColumn: `1 / ${halfWayColumn[ScreenSize.Medium]}`,
      },
      secondHalf: {
        gridColumn: `${halfWayColumn[ScreenSize.Medium]} / -1`,
      },
    },
  },
  [ScreenSize.Large]: {
    grid: {
      columns: grid.DdsGridLg12801919Count,
      gap: grid.DdsGridLg12801919GutterSize,
      marginLeft: spacing.SizesDdsSpacingX6,
      marginRight: spacing.SizesDdsSpacingX6,
    },
    columns: {
      firstHalf: {
        gridColumn: `1 / ${halfWayColumn[ScreenSize.Large]}`,
      },
      secondHalf: {
        gridColumn: `${halfWayColumn[ScreenSize.Large]} / -1`,
      },
    },
  },
  [ScreenSize.XLarge]: {
    grid: {
      columns: grid.DdsGridXl1920Count,
      gap: grid.DdsGridXl1920GutterSize,
      marginLeft: spacing.SizesDdsSpacingX10,
      marginRight: spacing.SizesDdsSpacingX10,
    },
    columns: {
      firstHalf: {
        gridColumn: `1 / ${halfWayColumn[ScreenSize.XLarge]}`,
      },
      secondHalf: {
        gridColumn: `${halfWayColumn[ScreenSize.XLarge]} / -1`,
      },
    },
  },
};
