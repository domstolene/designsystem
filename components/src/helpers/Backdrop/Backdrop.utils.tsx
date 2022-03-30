const isVerticalScrollbarDisplayed = (container: HTMLElement) =>
  container.clientHeight > window.innerHeight;

export function handleElementWithBackdropMount(container: HTMLElement) {
  if (isVerticalScrollbarDisplayed(container)) {
    container.style.position = 'fixed';
    container.style.overflowY = 'scroll';
  }
}

export function handleElementWithBackdropUnmount(container: HTMLElement) {
  container.style.removeProperty('position');
  container.style.removeProperty('overflow-y');
}
