import { type ChangeEvent } from 'react';

/**
 * Lager en change-event som kan resette verdien i et input-felt.
 * Dette vil resultere i en event som har: event.target.value = ''.
 *
 * @param elementId Id'en til et gitt input-felt
 * @returns En change-event som har en tom streng som target value
 */
export function createClearChangeEvent<
  T extends HTMLInputElement | HTMLSelectElement,
>(elementId: string): ChangeEvent<T> {
  const element = document.getElementById(elementId) as T;

  if (!element) {
    throw new Error(`Element by id '${elementId}' not found.`);
  }

  if (element instanceof HTMLInputElement) {
    element.value = '';
  } else if (element instanceof HTMLSelectElement) {
    element.selectedIndex = 0;
  }

  const clearChangeEvent: ChangeEvent<typeof element> = {
    target: element,
    currentTarget: element,
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

  return clearChangeEvent;
}
