import { getScrollbarSize } from '../../utils';

const isVerticalScrollbarDisplayed = (container: HTMLElement) =>
  container.clientHeight > window.innerHeight;

export function handleElementWithBackdropMount(container: HTMLElement) {
  if (isVerticalScrollbarDisplayed(container)) {
    const scrollbarSize = getScrollbarSize(container.ownerDocument);
    container.style.paddingRight = `${scrollbarSize}px`;
    container.style.overflow = 'hidden';
  }
}

export function handleElementWithBackdropUnmount(container: HTMLElement) {
  container.style.removeProperty('padding-right');
  container.style.removeProperty('overflow');
}
