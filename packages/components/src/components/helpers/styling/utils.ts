import { type Property } from 'csstype';

/**
 * Styling utils i TS (CSS-in-JS)
 */

/**
 * DDS utils
 */

export const outlineOffset = 'var(--dds-spacing-x0-125)';
export const outlineInset = 'calc(var(--dds-spacing-x0-125) * -1)';

export const focusVisible = {
  outline: 'var(--dds-color-focus-outside) 2px solid',
  outlineOffset: outlineOffset,
  boxShadow: '0 0 0 2px var(--dds-color-focus-inside)',
};

export const focusVisibleTransitionValue = 'outline-offset 0.2s';

export const focusVisibleInset = {
  outline: 'var(--dds-color-focus-outside) 2px solid',
  outlineOffset: outlineInset,
};

const scrollbarWidth: Property.ScrollbarWidth = 'thin';

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

export const visibilityTransition = (open: boolean) => {
  return `
      @media (prefers-reduced-motion: no-preference) {
        transition:
          visibility 0.4s,
          opacity 0.2s;
      }
      visibility: ${open ? 'visible' : 'hidden'};
      opacity: ${open ? 1 : 0};
    `;
};

/**
 * Generelle utils
 */

export const hideInput = {
  clip: 'rect(0 0 0 0)',
  position: 'absolute',
  height: '1px',
  width: '1px',
  margin: 0,
};

export const inheritLinkStyling = {
  color: 'inherit',
  textDecoration: 'inherit',
};

export const removeButtonStyling = {
  background: 'none',
  color: 'inherit',
  border: 'none',
  padding: 0,
  font: 'inherit',
  cursor: 'pointer',
  outline: 'inherit',
};

export const removeListStyling = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

export const normalizeButton = {
  margin: 0,
  textTransform: 'none' as Property.TextTransform,
};
