import { HTMLAttributes, PropsWithChildren } from 'react';

/**
 * Basetype for props som eksponeres til konsumenter av designsystemet.
 * Lager en intersection-type med props som sendes inn og `id` og `htmlProps`
 * slik at man kan ha `HTMLAttributes`-props på komponenter som eksponeres
 * av designsystemet. Se også {@link BaseComponentPropsWithChildren} og
 * {@link getBaseHTMLProps}.
 *
 * @template TElement Element-type som genereres av komponenten.
 * @template TOtherProps Andre props komponenten skal eksponere til konsumenter.
 * @template THTMLAttributesProps Standard `HTMLAttributes<T>` men kan overstyres for f.eks knapper hvis man trenger en annen basetype for `htmlProps`.
 */
export type BaseComponentProps<
  TElement extends Element,
  TOtherProps extends Record<string, unknown> = Record<string, unknown>,
  THTMLAttributesProps extends HTMLAttributes<TElement> = HTMLAttributes<TElement>
> = {
  /**ID til HTML-elementet som genereres. */
  id?: THTMLAttributesProps['id'];
  /**Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt ID som settes på toppnivå. */
  htmlProps?: Omit<THTMLAttributesProps, 'id'>;
} & TOtherProps;

/**
 * Utvidelese av {@link BaseComponentProps} med prop for `children`.
 *
 * {@link BaseComponentProps}
 */
export type BaseComponentPropsWithChildren<
  T extends Element,
  TProps extends Record<string, unknown>,
  THTMLProps extends HTMLAttributes<T> = HTMLAttributes<T>
> = BaseComponentProps<T, PropsWithChildren<TProps>, THTMLProps>;

/**
 * Slår sammen htmlProps, id, og unknownProps til ett objekt som
 * kan spreades som baseprops for en komponent. `unknownProps` er
 * med for å sikre at aria- og data- attributter blir spreadet, alle
 * komponenter må derfor ta hensyn til `...rest` når de leser props.
 *
 * Typisk bruk:
 * ```
 * const Props = BaseComponentProps<HTMLElement, {
 *   propA: string,
 *   propB: string,
 * }>
 *
 * const MyComponent = (props: Props) => {
 *   const { propA, propB, id, htmlProps, ...rest } = props;
 *
 *   const wrapperProps = getBaseHTMLProps(id, htmlProps, rest)
 *
 *   return <div {...wrapperProps}>innhold</div>
 * }
 * ```
 * @param id id fra props til komponenten.
 * @param htmlProps htmlProps fra komponenten.
 * @param unknownProps andre ukjente props som skal spreades, kommer typisk fra `...rest` når man leser props til komponenten.
 * @returns Objekt med alle argumentene som kan spreades.
 */
export const getBaseHTMLProps = <T extends Element>(
  id: HTMLAttributes<T>['id'],
  htmlProps: Omit<HTMLAttributes<T>, 'id'> | undefined,
  unknownProps: object
) => ({ ...unknownProps, ...htmlProps, id });
