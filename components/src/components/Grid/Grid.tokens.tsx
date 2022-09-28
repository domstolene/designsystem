import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { ScreenSize } from '../../hooks';

const { grid, spacing } = ddsBaseTokens;

export const gridTokens = {
  [ScreenSize.XSmall]: {
    grid: {
      columns: grid.DdsGridXs0599Count,
      gap: grid.DdsGridXs0599GutterSize,
      marginLeft: spacing.SizesDdsSpacingLayoutX1,
      marginRight: spacing.SizesDdsSpacingLayoutX1,
    },

    columns: {
      firstHalf: {
        gridColumn: '1 / -1',
      },
      secondHalf: {
        gridColumn: '1 / -1',
      },
    },
  },
  [ScreenSize.Small]: {
    grid: {
      columns: grid.DdsGridSm600959Count,
      gap: grid.DdsGridSm600959GutterSize,
      marginLeft: spacing.SizesDdsSpacingLayoutX2,
      marginRight: spacing.SizesDdsSpacingLayoutX2,
    },
    columns: {
      firstHalf: {
        gridColumn: `1 / ${grid.DdsGridSm600959Count / 2 + 1}`,
      },
      secondHalf: {
        gridColumn: `${grid.DdsGridSm600959Count / 2 + 1} / ${
          grid.DdsGridSm600959Count + 1
        }`,
      },
    },
  },
  [ScreenSize.Medium]: {
    grid: {
      columns: grid.DdsGridMd9601279Count,
      gap: grid.DdsGridMd9601279GutterSize,
      marginLeft: spacing.SizesDdsSpacingLayoutX4,
      marginRight: spacing.SizesDdsSpacingLayoutX4,
    },
    columns: {
      firstHalf: {
        gridColumn: `1 / ${grid.DdsGridMd9601279Count / 2 + 1}`,
      },
      secondHalf: {
        gridColumn: `${grid.DdsGridMd9601279Count / 2 + 1} / ${
          grid.DdsGridMd9601279Count + 1
        }`,
      },
    },
  },
  [ScreenSize.Large]: {
    grid: {
      columns: grid.DdsGridLg12801919Count,
      gap: grid.DdsGridLg12801919GutterSize,
      marginLeft: spacing.SizesDdsSpacingLayoutX6,
      marginRight: spacing.SizesDdsSpacingLayoutX6,
    },
    columns: {
      firstHalf: {
        gridColumn: `1 / ${grid.DdsGridLg12801919Count / 2 + 1}`,
      },
      secondHalf: {
        gridColumn: `${grid.DdsGridLg12801919Count / 2 + 1} / ${
          grid.DdsGridLg12801919Count + 1
        }`,
      },
    },
  },
  [ScreenSize.XLarge]: {
    grid: {
      columns: grid.DdsGridXl1920Count,
      gap: grid.DdsGridXl1920GutterSize,
      marginLeft: spacing.SizesDdsSpacingLayoutX10,
      marginRight: spacing.SizesDdsSpacingLayoutX10,
    },
    columns: {
      firstHalf: {
        gridColumn: `1 / ${grid.DdsGridXs0599Count / 2 + 1}`,
      },
      secondHalf: {
        gridColumn: `${grid.DdsGridXl1920Count / 2 + 1} / ${
          grid.DdsGridXl1920Count + 1
        }`,
      },
    },
  },
};
