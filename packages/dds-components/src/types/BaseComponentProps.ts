import {
  type CSSProperties,
  type ComponentPropsWithRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
  type Ref,
} from 'react';

interface HTMLRootProps {
  /**HTML id. */
  id?: string;
  /**HTML klassenavn. */
  className?: string;
  /**HTML inline style. */
  style?: CSSProperties;
}

type CommonComponentProps<
  THTMLProps extends object,
  TRef extends Ref<unknown>,
> = HTMLRootProps & {
  /**Native HTML-attributter som vil settes på elementet som genereres.
   * Untatt `id`, `className`, `style` og eventuelt andre ofte brukte native HTML-attributter spesifisert i dokumentasjonen.
   * */
  htmlProps?: THTMLProps;
  /**Ref til komponenten. */
  ref?: TRef;
};

/**
 * Basetype for props som eksponeres til konsumenter av designsystemet.
 * - Rot: `id`, `className`, `style`, `TOtherProps`
 * - `htmlProps`: resterende HTML-attributter.
 * Se også {@link BaseComponentPropsWithChildren} og
 * {@link getBaseHTMLProps}.
 *
 * @template TElement Element-type som genereres av komponenten.
 * @template TOtherProps Andre props komponenten skal eksponere til konsumenter.
 * @template THTMLAttributesProps Standard `HTMLAttributes<T>` men kan overstyres for f.eks knapper hvis man trenger en annen basetype for `htmlProps`.
 */
export type BaseComponentProps<
  TElement extends Element,
  TOtherProps extends object = object,
  THTMLAttributesProps extends HTMLAttributes<TElement> =
    HTMLAttributes<TElement>,
> = TOtherProps &
  CommonComponentProps<
    Omit<THTMLAttributesProps, keyof HTMLRootProps | keyof TOtherProps>,
    Ref<TElement>
  >;

/**
 * Basetype for polymorfe props som eksponeres til konsumenter av designsystemet.
 * - Rot: `id`, `className`, `style`, `TOtherProps`
 * - `htmlProps`: resterende props fra `TComponentProps`
 *
 * @template E `ElemenType` komponenten returnerer.
 * @template TOtherProps Andre props komponenten skal eksponere til konsumenter.
 * @template TComponentProps Standard `ComponentPropsWithoutRef<E>` som kan overstyres hvis man trenger en annen basetype for `htmlProps`, f.eks. for å støtte ofte brukte attributter på roten.
 */
export type PolymorphicBaseComponentProps<
  E extends ElementType,
  TOtherProps extends object = object,
> = TOtherProps &
  HTMLRootProps & {
    /** HTML- eller React-element som returneres. */
    as?: E;
    /** Barn. Blir ignorert hvis returnert HTML tag ikke støtter de. */
    children?: React.ReactNode;
  } & CommonComponentProps<
    Omit<ComponentPropsWithoutRef<E>, keyof HTMLRootProps | keyof TOtherProps>,
    ComponentPropsWithRef<E>['ref']
  > &
  Omit<
    ComponentPropsWithoutRef<E>,
    keyof HTMLRootProps | keyof TOtherProps | 'children' | 'ref'
  >;

/**
 * Utvidelse av {@link BaseComponentProps} med prop for `children`.
 */
export type BaseComponentPropsWithChildren<
  T extends Element,
  TProps extends object = object,
  THTMLProps extends HTMLAttributes<T> = HTMLAttributes<T>,
> = BaseComponentProps<
  T,
  TProps & {
    /**Barn. */
    children?: ReactNode;
  },
  THTMLProps
>;

function pruneUndefined<T extends Record<string, unknown>>(obj: T) {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== undefined),
  ) as T;
}

/**
 * Slår sammen id, className,htmlProps og unknownProps til ett objekt
 * som kan spreades som baseprops for en komponent. `unknownProps` er
 * med for å sikre at aria- og data- attributter blir spreadet, alle
 * komponenter må derfor ta hensyn til `...rest` når de leser props.
 *
 * Typisk bruk:
 * ```tsx
 * const Props = BaseComponentProps<HTMLElement, {
 *   propA: string,
 *   propB: string,
 * }>
 *
 * const MyComponent = (props: Props) => {
 *   const { id, className, style, htmlProps, ...rest } = props;
 *
 *   const wrapperProps = getBaseHTMLProps(id, className, style, htmlProps, rest)
 *
 *   return <div {...wrapperProps}>innhold</div>
 * }
 * ```
 * @param id id fra props til komponenten.
 * @param className className for komponenten.
 * @param htmlProps htmlProps fra komponenten.
 * @param unknownProps andre ukjente props som skal spreades, kommer typisk fra `...rest` når man leser props til komponenten.
 * @returns Objekt med alle argumentene som kan spreades.
 *
 * Kan også kalles uten `className`-parameteret. Oppførselen er lik.
 */
export function getBaseHTMLProps<T extends Element>(
  id: HTMLAttributes<T>['id'],
  className: HTMLAttributes<T>['className'],
  style: HTMLAttributes<T>['style'],
  htmlProps: HTMLAttributes<T> | undefined,
  unknownProps: object,
): HTMLAttributes<T> & object {
  const out = pruneUndefined({
    ...htmlProps,
    ...unknownProps,
    ...(className && { className }),
    ...(id && { id }),
    ...(style && { style }),
  });

  return out;
}
