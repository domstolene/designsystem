import { getScrollbarSize } from '../../utils';

const isVerticalScrollbarDisplayed = (container: HTMLElement) =>
  container.clientHeight > window.innerHeight;

export function handleElementWithBackdropMount(container: HTMLElement) {
  if (isVerticalScrollbarDisplayed(container)) {
    const size = getScrollbarSize(document);
    container.style.paddingRight = `${size}px`;
    container.style.overflow = 'hidden';
  }
}

export function handleElementWithBackdropUnmount(container: HTMLElement) {
  container.style.removeProperty('padding-right');
  container.style.removeProperty('overflow');
}
