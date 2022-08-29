import { scrollbarTokens as tokens } from './ScrollableContainer.tokens';

const { thumb, track } = tokens;

/**
 * CSS-in-JS scrollbar styling til bruk der det ikke passer å bruke dedikerte komponenter. Inkluderer styling for webkit pseudo-elementer og for Firefox.
 */
export const scrollbarStyling = {
  webkit: {
    /* width */
    '&::-webkit-scrollbar': {
      width: track.width,
      height: track.width,
    },
    /* Track */
    '&::-webkit-scrollbar-track': {
      background: track.backgroundColor,
      borderRadius: track.borderRadius,
    },
    /* Handle */
    '&::-webkit-scrollbar-thumb': {
      background: thumb.base.backgroundColor,
      borderRadius: thumb.base.borderRadius,
    },
  },
  /* Handle on hover */
  '&::-webkit-scrollbar-thumb:hover': {
    background: thumb.hover.backgroundColor,
  },
  firefox: {
    scrollbarColor: thumb.base.backgroundColor + ' ' + track.backgroundColor,
    scrollbarWidth: 'thin',
  },
};
