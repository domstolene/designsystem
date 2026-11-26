import { type LogoDefI18n } from '../Logo.types';
import enDark from '../svg/norges_domstoler_logo_en_on_dark.svg';
import nnDark from '../svg/norges_domstoler_logo_nn_on_dark.svg';
import seDark from '../svg/norges_domstoler_logo_se_on_dark.svg';
import { courtsOfNorwayLogoNbOnDark } from './courtsOfNorwayLogoNbOnDark';
import { texts } from './texts';

export const courtsOfNorwayLogoi18nOnDark: LogoDefI18n = {
  variants: {
    no: courtsOfNorwayLogoNbOnDark,
    nb: courtsOfNorwayLogoNbOnDark,
    nn: {
      alt: texts.courtsOfNorway.nn,
      src: nnDark,
      width: 200,
      height: 107,
    },
    en: {
      alt: texts.courtsOfNorway.en,
      src: enDark,
      width: 200,
      height: 107,
    },
    se: {
      alt: texts.courtsOfNorway.se,
      src: seDark,
      width: 200,
      height: 107,
    },
  },
};
