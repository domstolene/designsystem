import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { Property } from 'csstype';
import { forwardRef, HTMLAttributes, ReactNode, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { visibilityTransition } from '../../helpers/styling';
import { Placement, useCombinedRef, useFloatPosition } from '../../hooks';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { popoverTokens as tokens } from './Popover.tokens';

const { spacing: Spacing } = ddsBaseTokens;

type WrapperProps = {
  isOpen: boolean;
  sizeProps?: PopoverSizeProps;
};

const Wrapper = styled.div<WrapperProps>`
  ${({ isOpen }) => visibilityTransition(isOpen)}
  box-sizing: border-box;
  position: absolute;
  width: fit-content;
  z-index: 20;
  ${tokens.wrapper.base}
  ${({ sizeProps }) =>
    sizeProps &&
    css`
      ${sizeProps}
    `}
`;

const TitleContainer = styled.div`
  ${tokens.title.base}
`;

type ContentContainerProps = {
  hasTitle: boolean;
  withCloseButton: boolean;
};

const ContentContainer = styled.div<ContentContainerProps>`
  ${({ withCloseButton, hasTitle }) =>
    withCloseButton &&
    !hasTitle &&
    css`
      margin-top: ${tokens.content.spaceTopNoTitle};
    `}
`;

const StyledButton = styled(Button)`
  ${tokens.button.base}
`;

export type PopoverSizeProps = {
  width?: Property.Width<string>;
  height?: Property.Height<string>;
  minWidth?: Property.MinWidth<string>;
  minHeight?: Property.MinHeight<string>;
  maxWidth?: Property.MaxWidth<string>;
  maxHeight?: Property.MaxHeight<string>;
};

export type PopoverProps = {
  /**Tittel. */
  title?: string | ReactNode;
  /** **OBS!** Propen settes automatisk av `<PopoverGroup />`. Spesifiserer om `<Popover />` skal vises. */
  isOpen?: boolean;
  /**Om lukkeknapp skal vises. */
  withCloseButton?: boolean;
  /** **OBS!** Propen settes automatisk av `<PopoverGroup />`. Anchor-elementet. */
  anchorElement?: HTMLElement;
  /**Spesifiserer hvor komponenten skal plasseres i forhold til anchor-elementet. */
  placement?: Placement;
  /**Avstand fra anchor-elementet i px. */
  offset?: number;
  /** Ekstra logikk kjørt når lukkeknappen trykkes. */
  onCloseButtonClick?: () => void;
  /** Ekstra logikk kjørt når lukkeknappen mister fokus. */
  onCloseButtonBlur?: () => void;
  /**Custom størrelse. */
  sizeProps?: PopoverSizeProps;
} & HTMLAttributes<HTMLDivElement>;

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      title,
      isOpen = false,
      withCloseButton = true,
      onCloseButtonClick,
      onCloseButtonBlur,
      anchorElement,
      children,
      placement = 'bottom',
      offset = Spacing.SizesDdsSpacingLocalX05NumberPx,
      style,
      ...rest
    },
    ref
  ) => {
    const { reference, floating, styles } = useFloatPosition(
      null,
      placement,
      offset
    );
    const multiRef = useCombinedRef(ref, floating);

    useEffect(() => {
      isOpen && anchorElement ? reference(anchorElement) : reference(null);
      return () => reference(null);
    }, [anchorElement, isOpen]);

    const wrapperProps = {
      ref: multiRef,
      isOpen,
      style: { ...style, ...styles.floating },
      ...rest,
      role: 'dialog'
    };

    return (
      <Wrapper {...wrapperProps}>
        {title && (
          <TitleContainer>
            {typeof title === 'string' ? (
              <Typography typographyType="headingSans02">{title}</Typography>
            ) : (
              title
            )}
          </TitleContainer>
        )}
        <ContentContainer hasTitle={!!title} withCloseButton={withCloseButton}>
          {children}
        </ContentContainer>
        {withCloseButton && (
          <StyledButton
            icon="close"
            appearance="borderless"
            purpose="secondary"
            size="small"
            onClick={onCloseButtonClick}
            aria-label="Lukk"
            onBlur={onCloseButtonBlur}
          />
        )}
      </Wrapper>
    );
  }
);
