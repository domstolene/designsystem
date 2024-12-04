import { VisuallyHidden } from '../VisuallyHidden';

export const inlineEditVisuallyHidden = (id: string, emptiable?: boolean) => (
  <VisuallyHidden id={id} as="span">
    Escape, Enter eller Tab for å lagre.{' '}
    {!emptiable && 'Inputfeltet er ikke tømmbar.'}
  </VisuallyHidden>
);
