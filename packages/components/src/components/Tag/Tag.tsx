import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import { tagTokens as tokens, typographyType } from './Tag.tokens';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { Icon } from '../Icon';
import {
  TextOverflowEllipsisInner,
  TextOverflowEllipsisWrapper,
  getFontStyling,
} from '../Typography';

const { wrapper } = tokens;

interface WrapperProps {
  $purpose: TagPurpose;
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
  ${({ $purpose }) => css`
    background-color: ${wrapper.purpose[$purpose].backgroundColor};
    border-color: ${wrapper.purpose[$purpose].borderColor};
  `}
`;

const StyledIcon = styled(Icon)<Pick<WrapperProps, '$purpose'>>`
  color: ${({ $purpose }) => wrapper.purpose[$purpose].icon?.color};
`;

export type TagPurpose = 'success' | 'info' | 'danger' | 'warning' | 'default';

export type TagProps = BaseComponentProps<
  HTMLSpanElement,
  {
    /**Tekst som vises i `<Tag />.` */
    text?: string;
    /**Formål med status eller kategorisering. Påvirker styling. */
    purpose?: TagPurpose;
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
    id,
    className,
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
      $withIcon={Boolean(withIcon && icon)}
    >
      {withIcon && icon && (
        <StyledIcon
          $purpose={purpose}
          icon={icon.icon}
          iconSize={tokens.wrapper.icon.size}
        />
      )}
      <TextOverflowEllipsisInner>{text}</TextOverflowEllipsisInner>
    </Wrapper>
  );
});

Tag.displayName = 'Tag';
