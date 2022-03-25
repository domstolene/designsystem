import { Ref, MutableRefObject, useEffect } from 'react';

export const trapFocus = (modalRef: Ref<HTMLDivElement>) => {
  useEffect(() => {
    const focusableElements = (modalRef as MutableRefObject<HTMLDivElement>).current.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;
    window.setTimeout(() => {
      if (firstElement) firstElement.focus();
    }, 300);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (!e.shiftKey && document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }

      if (e.shiftKey && document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    };

    document.addEventListener('keydown', handleKeyDown, false);
    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  }, []);
};
