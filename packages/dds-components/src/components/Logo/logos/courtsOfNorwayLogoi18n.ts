import { type LogoDefI18n } from '../Logo.types';
import enDark from '../svg/norges_domstoler_logo_en_on_dark.svg';
import enLight from '../svg/norges_domstoler_logo_en_on_light.svg';
import nnDark from '../svg/norges_domstoler_logo_nn_on_dark.svg';
import nnLight from '../svg/norges_domstoler_logo_nn_on_light.svg';
import seDark from '../svg/norges_domstoler_logo_se_on_dark.svg';
import seLight from '../svg/norges_domstoler_logo_se_on_light.svg';
import { courtsOfNorwayLogoNb } from './courtsOfNorwayLogoNb';
import { texts } from './texts';

export const courtsOfNorwayLogoi18n = {
  variants: {
    nb: courtsOfNorwayLogoNb,
    no: courtsOfNorwayLogoNb,
    nn: {
      alt: texts.courtsOfNorway.nn,
      src: {
        dark: nnDark,
        light: nnLight,
      },
      width: 200,
      height: 107,
    },
    en: {
      alt: texts.courtsOfNorway.en,
      src: {
        dark: enDark,
        light: enLight,
      },
      width: 200,
      height: 107,
    },
    se: {
      alt: texts.courtsOfNorway.se,
      src: {
        dark: seDark,
        light: seLight,
      },
      width: 200,
      height: 107,
    },
  },
} satisfies LogoDefI18n;
