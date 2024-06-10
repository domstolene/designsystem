import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { fontPackages } = ddsBaseTokens;

const navigationItems = {
  gap: 'var(--dds-spacing-x0-5)',
  item: {
    ...fontPackages.body_sans_02.base,
    color: 'var(--dds-color-text-on-inverse)',
    borderRadius: 'var(--dds-border-radius-3)',
    padding: 'var(--dds-spacing-x0-75)',
    gap: 'var(--dds-spacing-x0-5)',
    external: {
      ...fontPackages.body_sans_01.base,
    },
    hover: {
      backgroundColor: 'var(--dds-color-surface-inverse-hover)',
    },
    active: {
      color: 'var(--dds-color-text-on-inverse)',
      backgroundColor: 'var(--dds-color-surface-inverse-selected)',
    },
  },
};

const logoAndVersion = {
  padding: '36px var(--dds-spacing-x1-5)',
  color: 'var(--dds-color-text-on-inverse)',
  logo: {
    ...fontPackages.heading_sans_05.base,
    fontWeight: 700,
    small: {
      ...fontPackages.heading_sans_03.base,
      fontWeight: 600,
    },
  },
  version: {
    ...fontPackages.supportingStyle_tiny_01.base,
  },
};

const topBar = {
  padding: 'var(--dds-spacing-x0-25)',
  height: `calc(var(--dds-spacing-x3) + 2 * var(--dds-spacing-x0-25))`,
  buttonTextColor: 'var(--dds-color-text-on-inverse)',
  gap: 'var(--dds-spacing-x0-25)',
  marginTop: 'var(--dds-spacing-x0-25)',
  button: {
    hover: {
      backgroundColor: 'var(--dds-color-surface-inverse-hover)',
    },
  },
};

const navigation = {
  navigationItems,
  logoAndVersion,
  topBar,

  color: 'var(--dds-color-text-on-inverse)',
  backgroundColor: 'var(--dds-color-surface-inverse-default)',
  gap: 'var(--dds-spacing-x0-5)',
  dividerColor: 'var(--dds-color-border-inverse)',
  padding: 'var(--dds-spacing-x1)',
  width: '264px',

  mobile: {
    breakpoint: ddsBaseTokens.breakpoints.DdsBreakpointSm,
    iconColors: 'var(--dds-color-icon-on-inverse)',
  },
};

const floatingActionButtons = {
  gap: 'var(--dds-spacing-x1)',
  textColor: 'var(--dds-color-text-medium)',
  backgroundColor: 'var(--dds-color-surface-default)',
  borderRadius: 'var(--dds-border-radius-3)',
};

export const appShellTokens = { navigation, floatingActionButtons };
