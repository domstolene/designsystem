import { type LogoDefI18n } from '../Logo.types';
import enLight from '../svg/norges_domstoler_logo_en_on_light.svg';
import nnLight from '../svg/norges_domstoler_logo_nn_on_light.svg';
import seLight from '../svg/norges_domstoler_logo_se_on_light.svg';
import { courtsOfNorwayLogoNbOnLight } from './courtsOfNorwayLogoNbOnLight';
import { texts } from './texts';

export const courtsOfNorwayLogoi18nOnLight = {
  variants: {
    nb: courtsOfNorwayLogoNbOnLight,
    no: courtsOfNorwayLogoNbOnLight,
    nn: {
      alt: texts.courtsOfNorway.nn,
      src: nnLight,
      width: 200,
      height: 107,
    },
    en: {
      alt: texts.courtsOfNorway.en,
      src: enLight,
      width: 200,
      height: 107,
    },
    se: {
      alt: texts.courtsOfNorway.se,
      src: seLight,
      width: 200,
      height: 107,
    },
  },
} satisfies LogoDefI18n;
