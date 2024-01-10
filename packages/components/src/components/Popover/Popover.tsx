import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { Property } from 'csstype';
import { forwardRef, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { Button } from '../Button';
import { popoverTokens as tokens } from './Popover.tokens';
import {
  Placement,
  useMountTransition,
  useFloatPosition,
  useReturnFocusOnBlur,
  useOnClickOutside,
  useCombinedRef,
} from '../../hooks';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';
import {
  PaperProps,
  Paper,
  visibilityTransition,
  focusVisible,
} from '../helpers';
import { CloseIcon } from '../Icon/icons';
import { Typography } from '../Typography';

const { spacing: Spacing } = ddsBaseTokens;
const { wrapper, content, closeButton, title } = tokens;

interface WrapperProps extends PaperProps {
  $sizeProps?: PopoverSizeProps;
  $hasTransitionedIn?: boolean;
  $isOpen: boolean;
}

const Wrapper = styled(Paper)<WrapperProps>`
  opacity: 0;
  ${({ $hasTransitionedIn, $isOpen }) =>
    $hasTransitionedIn && visibilityTransition($hasTransitionedIn && $isOpen)}
  position: absolute;
  width: fit-content;
  z-index: 100;
  padding: ${wrapper.padding};

  &:focus-visible {
    ${focusVisible}
  }
  ${({ $sizeProps }) =>
    $sizeProps &&
    css`
      width: ${$sizeProps.width};
      height: ${$sizeProps.height};
      min-width: ${$sizeProps.minWidth};
      min-height: ${$sizeProps.minHeight};
      max-width: ${$sizeProps.maxWidth};
      max-height: ${$sizeProps.maxHeight};
    `}
`;

const TitleContainer = styled.div`
  margin-right: ${title.marginRight};
`;

interface ContentContainerProps {
  $hasTitle: boolean;
  $withCloseButton: boolean;
}

const ContentContainer = styled.div<ContentContainerProps>`
  ${({ $withCloseButton, $hasTitle }) =>
    $withCloseButton &&
    !$hasTitle &&
    css`
      margin-top: ${content.noTitle.marginTop};
    `}
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: ${closeButton.top};
  right: ${closeButton.right};
`;

export interface PopoverSizeProps {
  width?: Property.Width<string>;
  height?: Property.Height<string>;
  minWidth?: Property.MinWidth<string>;
  minHeight?: Property.MinHeight<string>;
  maxWidth?: Property.MaxWidth<string>;
  maxHeight?: Property.MaxHeight<string>;
}

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
      offset = Spacing.SizesDdsSpacingX05NumberPx,
      id,
      className,
      htmlProps = {},
      ...rest
    } = props;
    const hasTransitionedIn = useMountTransition(isOpen, 400);

    const { refs, styles } = useFloatPosition(null, {
      placement,
      offset,
    });
    // Use position from anchor element for the popover
    refs.setReference(anchorElement || null);

    const popoverRef = useReturnFocusOnBlur(
      isOpen && hasTransitionedIn,
      () => {
        onClose && onClose();
        onBlur && onBlur();
      },
      anchorElement && anchorElement,
    );

    const multiRef = useCombinedRef(ref, popoverRef, refs.setFloating);

    const elements: (HTMLElement | null)[] = [popoverRef.current!];
    if (anchorElement) elements.push(anchorElement);

    useOnClickOutside(elements, () => {
      if (isOpen) onClose && onClose();
    });

    return isOpen || hasTransitionedIn ? (
      <Wrapper
        {...getBaseHTMLProps(id, className, htmlProps, rest)}
        ref={multiRef}
        $isOpen={isOpen}
        $hasTransitionedIn={hasTransitionedIn}
        tabIndex={-1}
        style={{ ...htmlProps.style, ...styles.floating }}
        role="dialog"
        elevation={3}
        border="light"
      >
        {title && (
          <TitleContainer>
            {typeof title === 'string' ? (
              <Typography typographyType="headingSans02">{title}</Typography>
            ) : (
              title
            )}
          </TitleContainer>
        )}
        <ContentContainer
          $hasTitle={!!title}
          $withCloseButton={withCloseButton}
        >
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
  },
);

Popover.displayName = 'Popover';
