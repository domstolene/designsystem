const isVerticalScrollbarDisplayed = (container: HTMLElement) =>
  container.clientHeight > window.innerHeight;

export function handleElementWithBackdropMount(container: HTMLElement) {
  if (isVerticalScrollbarDisplayed(container)) {
    const scrollY = Math.round(window.scrollY);

    container.style.overflowY = 'scroll';
    container.style.position = 'fixed';
    container.style.top = `-${scrollY}px`;
  }
}

export function handleElementWithBackdropUnmount(container: HTMLElement) {
  const scrollY = parseInt(document.body.style.top) || 0;

  container.style.removeProperty('overflow-y');
  container.style.removeProperty('position');
  container.style.removeProperty('top');

  window.scrollTo(0, scrollY * -1);
}
