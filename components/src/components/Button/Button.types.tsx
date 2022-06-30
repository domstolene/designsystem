import { ButtonHTMLAttributes } from 'react';
import { IconName } from '../../icons';

export type ButtonPurpose = 'primary' | 'secondary' | 'danger';
export type ButtonSize = 'tiny' | 'small' | 'medium' | 'large';
export type ButtonAppearance = 'filled' | 'ghost' | 'rounded' | 'borderless';
export type IconPosition = 'left' | 'right';

export type ButtonProps = {
  /**Størrelsen på knappen. */
  size?: ButtonSize;
  /**Tekst i knappen. */
  label?: string;
  /**Bestemmer farger basert på formål. */
  purpose?: ButtonPurpose;
  /**	Posisjonen til ikonet i forhold til teksten.*/
  iconPosition?: IconPosition;
  /**Bestemmer utseende på knappen, bl.a. bakgrunn, border radius og skygger.  */
  appearance?: ButtonAppearance;
  /**Indikerer en loading-knapp. */
  loading?: boolean;
  /**Ikonet som ligger i knappen.  */
  icon?: IconName;
  /**Knapp med full bredde. */
  fullWidth?: boolean;
  /**URL for knapper som skal brukes som lenke. Knappen blir til et `<a>`-element. */
  href?: string;
  /**Nativt target-attributt som kan spesifiseres når knappen er et `<a>`-element.  */
  target?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
