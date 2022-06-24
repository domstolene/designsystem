import { HTMLAttributes, PropsWithChildren } from 'react';

export type BaseComponentProps<
  T extends Element,
  TProps extends Record<string, unknown> = Record<string, unknown>,
  THTMLProps extends HTMLAttributes<T> = HTMLAttributes<T>
> = {
  /**ID til HTML-elementet som genereres. */
  id?: THTMLProps['id'];
  /**Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt ID som settes på toppnivå. */
  htmlProps?: Omit<THTMLProps, 'id'>;
} & TProps;

export type BaseComponentPropsWithChildren<
  T extends Element,
  TProps extends Record<string, unknown>,
  THTMLProps extends HTMLAttributes<T> = HTMLAttributes<T>
> = BaseComponentProps<T, PropsWithChildren<TProps>, THTMLProps>;

export const getBaseHTMLProps = <T extends Element>(
  id: HTMLAttributes<T>['id'],
  htmlProps: Omit<HTMLAttributes<T>, 'id'> | undefined,
  unknownProps: object
) => ({ ...unknownProps, ...htmlProps, id });
