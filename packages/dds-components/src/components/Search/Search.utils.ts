import { type ChangeEvent } from 'react';

import { type SearchSize } from './Search.types';
import { type StaticTypographyType } from '../Typography';

export const typographyTypes: Record<SearchSize, StaticTypographyType> = {
  small: 'bodySmall',
  medium: 'bodyMedium',
  large: 'bodyLarge',
};

/**
 * Lager en change-event som kan resette verdien i et input-felt.
 * Dette vil resultere i en event som har: event.target.value = ''.
 *
 * @param inputElementId Id'en til et gitt input-felt
 * @returns En change-event som har en tom streng som target value
 */
export function createEmptyChangeEvent(
  inputElementId: string,
): ChangeEvent<HTMLInputElement> {
  const inputElement = document.getElementById(
    inputElementId,
  ) as HTMLInputElement;

  inputElement.value = '';

  const emptyChangeEvent: ChangeEvent<HTMLInputElement> = {
    target: inputElement,
    currentTarget: inputElement,
    bubbles: true,
    cancelable: false,
    defaultPrevented: false,
    eventPhase: 0,
    isTrusted: false,
    preventDefault: () => null,
    stopPropagation: () => null,
    nativeEvent: new Event('input'),
    persist: () => null,
    type: 'change',
    timeStamp: Date.now(),
    isDefaultPrevented: () => false,
    isPropagationStopped: () => false,
  };

  return emptyChangeEvent;
}
