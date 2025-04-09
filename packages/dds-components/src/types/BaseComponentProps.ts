import {
  type CSSProperties,
  type ComponentPropsWithRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
  type Ref,
} from 'react';

import { cn } from '../../../dds-components/src/utils/dom';

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
  TOtherProps extends object = object,
  THTMLAttributesProps extends
    HTMLAttributes<TElement> = HTMLAttributes<TElement>,
> = Omit<THTMLAttributesProps, 'id' | 'className'> &
  TOtherProps & {
    /**Native HTML-attributter som vil settes på elementet som genereres. Untatt `id`, `className` (og eventuelle andre attributter spesifisert i dokumentasjonen) som settes på toppnivå. */
    htmlProps?: THTMLAttributesProps;
    /**Ref til komponenten. */
    ref?: Ref<TElement>;
    /**HTML id. */
    id?: string;
    /**Klassenavn. */
    className?: string;
  };

/**
 * Basetype for polymorfe props som eksponeres til konsumenter av designsystemet.
 * Lager en intersection-type med props som sendes inn og `id` og `htmlProps`
 * slik at man kan ha `ComponentPropsWithRef`-props på komponenter som eksponeres
 * av designsystemet.
 *
 * @template E `ElemenType` komponenten returnerer.
 * @template TOtherProps Andre props komponenten skal eksponere til konsumenter.
 * @template TComponentProps Standard `ComponentPropsWithoutRef<E>` som kan overstyres hvis man trenger en annen basetype for `htmlProps`, f.eks. for å støtte ofte brukte attributter på roten.
 */
export type PolymorphicBaseComponentProps<
  E extends ElementType,
  TOtherProps extends object = object,
  TComponentProps extends object = ComponentPropsWithoutRef<E>,
> = Omit<TComponentProps, 'id' | 'className' | 'style' | 'ref'> &
  TOtherProps & {
    /**HTML- eller React-element som returneres. */
    as?: E;
    /**Ref til komponenten. */
    ref?: ComponentPropsWithRef<E>['ref'];
    /**Native HTML-attributter som vil settes på elementet som genereres. Untatt `id`, `className` og `style` (og eventuelle andre attributter spesifisert i dokumentasjonen) som settes på toppnivå. */
    htmlProps?: TComponentProps;
    /**HTML id. */
    id?: string;
    /**Klassenavn. */
    className?: string;
    /**Inline style. */
    style?: CSSProperties;
  };

/**
 * Utvidelese av {@link BaseComponentProps} med prop for `children`.
 *
 * {@link BaseComponentProps}
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

interface GetBaseHTMLProps {
  <T extends Element>(
    id: HTMLAttributes<T>['id'],
    className: HTMLAttributes<T>['className'],
    htmlProps: HTMLAttributes<T> | undefined,
    unknownProps: object,
  ): HTMLAttributes<T> & object;
  <T extends Element>(
    id: HTMLAttributes<T>['id'],
    htmlProps: HTMLAttributes<T> | undefined,
    unknownProps: object,
  ): HTMLAttributes<T> & object;
}

/**
 * Slår sammen id, className, htmlProps og unknownProps til ett objekt
 * som kan spreades som baseprops for en komponent. `unknownProps` er
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
 *   const { propA, propB, id, className, htmlProps, ...rest } = props;
 *
 *   const wrapperProps = getBaseHTMLProps(id, className, htmlProps, rest)
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
export const getBaseHTMLProps: GetBaseHTMLProps = <T extends Element>(
  id: HTMLAttributes<T>['id'],
  htmlPropsOrClassName:
    | HTMLAttributes<T>['className']
    | (HTMLAttributes<T> | undefined),
  htmlPropsOrUnknownProps: (HTMLAttributes<T> | undefined) | object,
  unknownPropsOrUndefined?: object,
): HTMLAttributes<T> & object => {
  if (
    typeof htmlPropsOrClassName === 'string' ||
    unknownPropsOrUndefined != undefined
  ) {
    const {
      id: idFromHtmlProps,
      className: classNameFromHtmlProps,
      ...restHTMLProps
    } = (htmlPropsOrUnknownProps as HTMLAttributes<T> | undefined) ?? {};

    const propId = id ?? idFromHtmlProps;

    const propClassName = cn(
      htmlPropsOrClassName as string | undefined,
      classNameFromHtmlProps,
    );

    return {
      ...unknownPropsOrUndefined,
      ...restHTMLProps,
      ...(propClassName && { className: propClassName }),
      ...(propId && { id: propId }),
    };
  } else {
    const {
      id: htmlPropsId,
      className: htmlPropsClassName,
      ...restHTMLProps
    } = htmlPropsOrClassName ?? {};

    const propId = id ?? htmlPropsId;

    return {
      ...htmlPropsOrUnknownProps,
      ...restHTMLProps,
      ...(htmlPropsClassName && { className: htmlPropsClassName }),
      ...(propId && { id: propId }),
    };
  }
};
