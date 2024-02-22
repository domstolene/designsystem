import { type ReactNode, forwardRef } from 'react';
import styled, { css } from 'styled-components';

import { tagTokens as tokens, typographyType } from './Tag.tokens';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { Icon } from '../Icon';
import {
  TextOverflowEllipsisInner,
  TextOverflowEllipsisWrapper,
  getFontStyling,
} from '../Typography';

const { wrapper } = tokens;

interface WrapperProps {
  $purpose: TagPurpose;
  $strong?: boolean;
  $withIcon: boolean;
}

const Wrapper = styled(TextOverflowEllipsisWrapper)<WrapperProps>`
  display: inline-flex;
  align-items: center;
  gap: ${tokens.wrapper.icon.gap};
  border: ${wrapper.border};
  border-radius: ${wrapper.borderRadius};
  padding: ${({ $withIcon }) =>
    $withIcon ? wrapper.icon.padding : wrapper.padding};
  ${getFontStyling(typographyType)}
  ${({ $purpose, $strong }) => css`
    background-color: ${wrapper.purpose[$purpose][$strong ? 'strong' : 'base']
      .backgroundColor};
    border-color: ${wrapper.purpose[$purpose][$strong ? 'strong' : 'base']
      .borderColor};
  `}
`;

const StyledIcon = styled(Icon)<Pick<WrapperProps, '$purpose' | '$strong'>>`
  color: ${({ $purpose, $strong }) =>
    wrapper.purpose[$purpose][$strong ? 'strong' : 'base'].icon?.color};
`;

export type TagPurpose = 'success' | 'info' | 'danger' | 'warning' | 'default';

export type TagProps = BaseComponentPropsWithChildren<
  HTMLSpanElement,
  {
    /**
     * Innholdet til `<Tag>.` Kan brukes istedenfor `text`.
     */
    children?: ReactNode;
    /**
     * Samme oppførsel som `children`. Er `children` brukt vil denne ignoreres. Tekst som vises i `<Tag>`.
     */
    text?: string;
    /**
     * Formål med status eller kategorisering. Påvirker styling.
     * */
    purpose?: TagPurpose;
    /**
     * Variant med sterkere visuelt uttrykk. Hver `purpose` har en sterk variant.
     */
    strong?: boolean;
    /**
     * Om `<Tag>` skal ha et ikon til venstre for teksten. Tags med `purpose="default"` har aldri ikon.
     * @default false
     */
    withIcon?: boolean;
  }
>;

export const Tag = forwardRef<HTMLSpanElement, TagProps>((props, ref) => {
  const {
    text,
    purpose = 'default',
    strong,
    id,
    className,
    children,
    htmlProps,
    withIcon,
    ...rest
  } = props;

  const icon = tokens.wrapper.purpose[purpose].icon;

  return (
    <Wrapper
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
      ref={ref}
      $purpose={purpose}
      $strong={strong}
      $withIcon={Boolean(withIcon && icon)}
    >
      {withIcon && icon && (
        <StyledIcon
          $purpose={purpose}
          $strong={strong}
          icon={icon}
          iconSize={tokens.wrapper.icon.size}
        />
      )}
      <TextOverflowEllipsisInner>{children ?? text}</TextOverflowEllipsisInner>
    </Wrapper>
  );
});

Tag.displayName = 'Tag';
