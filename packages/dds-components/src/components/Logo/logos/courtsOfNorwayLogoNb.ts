import { type LogoDefSingle } from '../Logo.types';
import dark from '../svg/norges_domstoler_logo_nb_on_dark.svg';
import light from '../svg/norges_domstoler_logo_nb_on_light.svg';
import { texts } from './texts';

export const courtsOfNorwayLogoNb = {
  alt: texts.courtsOfNorway.nb,
  src: {
    dark,
    light,
  },
  width: 200,
  height: 107,
} satisfies LogoDefSingle;
