import { ChangeEvent } from 'react';

/**
 * Lager en change-event som kan resette verdien i et input-felt.
 * Dette vil resultere i en event som har: event.target.value = ''.
 *
 * @param inputElementId Id'en til et gitt input-felt
 * @returns En change-event som har en tom streng som target value
 */
export function createEmptyChangeEvent(
  inputElementId: string
): ChangeEvent<HTMLInputElement> {
  const inputElement = document.getElementById(
    inputElementId
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
    preventDefault: () => {},
    stopPropagation: () => {},
    nativeEvent: new Event('input'),
    persist: () => {},
    type: 'change',
    timeStamp: Date.now(),
    isDefaultPrevented: () => false,
    isPropagationStopped: () => false,
  };

  return emptyChangeEvent;
}
