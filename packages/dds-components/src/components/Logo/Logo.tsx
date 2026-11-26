import { type ImgHTMLAttributes } from 'react';

import { useLanguage } from '../../i18n';
import { type Language } from '../../i18n/translation.types';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { useTheme } from '../ThemeProvider';
import { type DdsThemeMode } from '../ThemeProvider';
import { type LogoDefinition } from './Logo.types';

export type LogoProps = BaseComponentProps<
  HTMLImageElement,
  {
    /**Logo, enkel eller med varianter basert på språk og/eller mørk/lys modus. */
    logo: LogoDefinition;
    /** Overstyrer lys/mørk variant for logo.
     * Standard følger `<Contrast>` og tema fra `DdsProvider`.
     * Brukes kun hvis `logo` har varianter for modus. */
    themeMode?: DdsThemeMode;
    /** Overstyrer språk for flerspråklige logoer og alt-tekst.
     * Standard følger `DdsProvider`.
     * Brukes kun hvis `logo` har varianter for språk.
     */
    lang?: Language;
  } & Pick<ImgHTMLAttributes<HTMLImageElement>, 'loading' | 'height' | 'width'>
>;

export const Logo = ({
  id,
  className,
  style,
  htmlProps,
  logo,
  themeMode: propThemeMode,
  lang: propLang,
  height,
  width,
  ...rest
}: LogoProps) => {
  const { themeMode } = useTheme();

  if (!themeMode) {
    throw new Error('Logo must be used within a DdsProvider');
  }
  const contextLang = useLanguage();
  const mode = propThemeMode ?? themeMode;
  const currentLang = propLang ?? contextLang;

  /**Sjekk om logoen er enkel eller har varianter basert på språk */
  const variant = 'variants' in logo ? logo.variants[currentLang] : logo;
  /**Sjekk om logoen er enkel eller har varianter basert på modus */
  const src = typeof variant.src === 'string' ? variant.src : variant.src[mode];
  /**Sjekk om alt-tekst er enkel eller har varianter basert på språk */
  const alt =
    typeof variant.alt === 'string' ? variant.alt : variant.alt[currentLang];

  return (
    <img
      {...getBaseHTMLProps(id, className, style, htmlProps, rest)}
      src={src}
      alt={alt}
      height={height ?? variant.height}
      width={width ?? variant.width}
    />
  );
};

Logo.displayName = 'Logo';
