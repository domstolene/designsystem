import { VisuallyHidden } from '../VisuallyHidden';

export const inlineEditVisuallyHidden = (id: string, emptiable?: boolean) => (
  <VisuallyHidden id={id}>
    Escape, Enter eller Tab for å lagre.{' '}
    {!emptiable && 'Inputfeltet er ikke tømmbar.'}
  </VisuallyHidden>
);
