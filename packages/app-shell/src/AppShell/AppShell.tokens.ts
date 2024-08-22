import { ddsTokens } from '@norges-domstoler/dds-design-tokens';

const navigationItems = {
  gap: 'var(--dds-spacing-x0-5)',
  item: {
    font: 'var(--dds-font-body-sans-02)',
    letterSpacing: 'var(--dds-font-body-sans-02-letter-spacing)',
    color: 'var(--dds-color-text-on-inverse)',
    borderRadius: 'var(--dds-border-radius-button)',
    padding: 'var(--dds-spacing-x0-75)',
    gap: 'var(--dds-spacing-x0-5)',
    external: {
      font: 'var(--dds-font-body-sans-01)',
      letterSpacing: 'var(--dds-font-body-sans-01-letter-spacing)',
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
    font: 'var(--dds-font-heading-sans-05)',
    letterSpacing: 'var(--dds-font-heading-sans-05-letter-spacing)',
    fontWeight: 'var(--dds-font-weight-bold)',
    small: {
      font: 'var(--dds-font-heading-sans-03)',
      letterSpacing: 'var(--dds-font-heading-sans-03-letter-spacing)',
      fontWeight: 'var(--dds-font-weight-bold)',
    },
  },
  version: {
    font: 'var(--dds-font-supporting-style-tiny-01)',
    letterSpacing: 'var(--dds-font-supporting-style-tiny-01-letter-spacing)',
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
    breakpoint: ddsTokens.ddsBreakpointSm,
    iconColors: 'var(--dds-color-icon-on-inverse)',
  },
};

const floatingActionButtons = {
  gap: 'var(--dds-spacing-x1)',
  textColor: 'var(--dds-color-text-medium)',
  backgroundColor: 'var(--dds-color-surface-default)',
  borderRadius: 'var(--dds-border-radius-button)',
};

export const appShellTokens = { navigation, floatingActionButtons };
