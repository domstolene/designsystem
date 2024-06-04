import { type Property } from 'csstype';

const scrollbarWidth: Property.ScrollbarWidth = 'thin';

/**
 * CSS-in-JS scrollbar styling
 */
export const scrollbarStyling = {
  scrollbarColor: 'var(--dds-color-surface-scrollbar) transparent',
  scrollbarWidth: scrollbarWidth,

  /* Safari styling. TODO: fjernes når scrollbar styling blir standardisert */

  /* width */
  '&::-webkit-scrollbar': {
    width: 'var(--dds-spacing-x0-5)',
    height: 'var(--dds-spacing-x0-5)',
  },
  /* Track */
  '&::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  /* Handle */
  '&::-webkit-scrollbar-thumb': {
    background: 'var(--dds-color-surface-scrollbar)',
  },
};
