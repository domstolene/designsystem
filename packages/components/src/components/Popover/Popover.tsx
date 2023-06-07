import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { Property } from 'csstype';
import { forwardRef, ReactNode, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { focusVisible, visibilityTransition } from '../../helpers/styling';
import {
  Placement,
  useCombinedRef,
  useFloatPosition,
  useReturnFocusOnBlur,
  useMountTransition,
  useOnClickOutside,
} from '../../hooks';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { popoverTokens as tokens } from './Popover.tokens';
import { CloseIcon } from '../../icons/tsx';
import { Paper } from '../../helpers';

const { spacing: Spacing } = ddsBaseTokens;
const { wrapper, content, closeButton, title } = tokens;

type WrapperProps = {
  sizeProps?: PopoverSizeProps;
  hasTransitionedIn?: boolean;
  isOpen: boolean;
};

const Wrapper = styled(Paper)<WrapperProps>`
  opacity: 0;
  ${({ hasTransitionedIn, isOpen }) =>
    hasTransitionedIn && visibilityTransition(hasTransitionedIn && isOpen)}
  position: absolute;
  width: fit-content;
  z-index: 100;
  padding: ${wrapper.padding};

  &:focus-visible {
    ${focusVisible}
  }
  ${({ sizeProps }) =>
    sizeProps &&
    css`
      ${sizeProps}
    `}
`;

const TitleContainer = styled.div`
  margin-right: ${title.marginRight};
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
      margin-top: ${content.noTitle.marginTop};
    `}
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: ${closeButton.top};
  right: ${closeButton.right};
`;

export type PopoverSizeProps = {
  width?: Property.Width<string>;
  height?: Property.Height<string>;
  minWidth?: Property.MinWidth<string>;
  minHeight?: Property.MinHeight<string>;
  maxWidth?: Property.MaxWidth<string>;
  maxHeight?: Property.MaxHeight<string>;
};

export type PopoverProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
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
    /** Ekstra logikk kjørt når popover mister fokus. */
    onBlur?: () => void;
    /**Custom størrelse. */
    sizeProps?: PopoverSizeProps;
    /** **OBS!** Propen settes automatisk av `<PopoverGroup />`. Funksjon kjørt ved lukking. */
    onClose?: () => void;
  }
>;

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (props, ref) => {
    const {
      title,
      isOpen = false,
      withCloseButton = true,
      onBlur,
      onCloseButtonClick,
      onClose,
      anchorElement,
      children,
      placement = 'bottom',
      offset = Spacing.SizesDdsSpacingLocalX05NumberPx,
      id,
      className,
      htmlProps = {},
      ...rest
    } = props;

    const popoverRef = useReturnFocusOnBlur(
      isOpen,
      () => {
        onClose && onClose();
        onBlur && onBlur();
      },
      anchorElement && anchorElement
    );

    const { reference, floating, styles } = useFloatPosition(null, {
      placement,
      offset,
    });
    const multiRef = useCombinedRef(ref, popoverRef, floating);

    useEffect(() => {
      anchorElement ? reference(anchorElement) : reference(null);
    }, [anchorElement]);

    const elements: (HTMLElement | null)[] = [
      popoverRef.current as HTMLElement,
    ];
    if (anchorElement) elements.push(anchorElement);

    useOnClickOutside(elements, () => {
      if (isOpen) onClose && onClose();
    });

    const hasTransitionedIn = useMountTransition(isOpen, 400);

    const wrapperProps = {
      ...getBaseHTMLProps(id, className, htmlProps, rest),
      ref: multiRef,
      isOpen,
      hasTransitionedIn,
      tabIndex: -1,
      style: { ...htmlProps.style, ...styles.floating },
      role: 'dialog',
    };

    return isOpen || hasTransitionedIn ? (
      <Wrapper {...wrapperProps} elevation={3} border="light">
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
            icon={CloseIcon}
            appearance="borderless"
            purpose="secondary"
            size="small"
            onClick={onCloseButtonClick}
            aria-label="Lukk"
          />
        )}
      </Wrapper>
    ) : null;
  }
);

Popover.displayName = 'Popover';
