import { type LogoDefI18n } from '../Logo.types';
import enLight from '../svg/norges_domstoler_logo_en_coat_on_light.svg';
import nnLight from '../svg/norges_domstoler_logo_nn_coat_on_light.svg';
import seLight from '../svg/norges_domstoler_logo_se_coat_on_light.svg';
import { courtsOfNorwayLogoNbCoat } from './courtsOfNorwayLogoNbCoat';
import { texts } from './texts';

export const courtsOfNorwayLogoi18nCoat: LogoDefI18n = {
  variants: {
    nb: courtsOfNorwayLogoNbCoat,
    no: courtsOfNorwayLogoNbCoat,
    nn: {
      alt: texts.courtsOfNorway.nn,
      src: nnLight,
      width: 180,
      height: 87,
    },
    en: {
      alt: texts.courtsOfNorway.en,
      src: enLight,
      width: 180,
      height: 87,
    },
    se: {
      alt: texts.courtsOfNorway.se,
      src: seLight,
      width: 180,
      height: 87,
    },
  },
};
