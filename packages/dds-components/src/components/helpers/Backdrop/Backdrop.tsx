import { type ComponentPropsWithRef } from 'react';

import styles from './Backdrop.module.css';
import { cn } from '../../../utils';

type BackdropProps = {
  isMounted?: boolean;
  zIndex: 'drawer' | 'modal';
} & Pick<ComponentPropsWithRef<'div'>, 'children' | 'onClick' | 'ref'>;

/**
 * Backdrop-komponent, viser et bakgrunnslag for et element som skal låse applikasjonen i bakgrunnen (Modal el.l.).
 *
 * @component
 * @param {Object} props - Props for komponenten.
 * @param {boolean} [props.isMounted] - Angir om backdropen skal være synlig (`true`) eller skjult (`false`). Standard er `false`.
 * @param {'drawer' | 'modal'} props.zIndex - Bestemmer hvilken z-index-klasse som skal brukes, avhengig av konteksten (f.eks. drawer eller modal).
 * @param {React.ReactNode} [props.children] - Eventuelt innhold som skal vises inni backdropen.
 * @param {React.MouseEventHandler<HTMLDivElement>} [props.onClick] - Klikkhåndterer for backdropen, f.eks. for å lukke en modal.
 * @param {React.Ref<HTMLDivElement>} [props.ref] - Referanse til DOM-elementet.
 *
 * @returns {JSX.Element} Et `<div>`-element med riktige klasser basert på synlighet og z-index.

 * @example
 * ```tsx
 * <Backdrop isMounted={true} zIndex="modal" onClick={handleClose}>
 *   <ModalContent />
 * </Backdrop>
 * ```
 */

export const Backdrop = ({ isMounted, zIndex, ...props }: BackdropProps) => {
  const isMountedCn = isMounted ? 'visible' : 'hidden';
  return (
    <div
      className={cn(
        styles.backdrop,
        styles[zIndex],
        styles[`backdrop--${isMountedCn}`],
      )}
      {...props}
    />
  );
};

Backdrop.displayName = 'Backdrop';
