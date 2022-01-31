import {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  RefObject,
  useEffect,
  useState
} from 'react';
import styled, { css } from 'styled-components';
import { popoverTokens as tokens } from './Popover.tokens';
import { Button } from '../Button';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { useCombinedRef, useReactPopper, Placement } from '../../hooks';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { Typography } from '../Typography';
import * as CSS from 'csstype';

const { spacing: Spacing } = ddsBaseTokens;

type WrapperProps = {
  isOpen: boolean;
  sizeProps?: PopoverSizeProps;
};

const Wrapper = styled.div<WrapperProps>`
  transition: visibility 0.4s, opacity 0.2s;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  box-sizing: border-box;
  position: absolute;
  width: fit-content;
  z-index: 200;
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
  minWidth?: CSS.MinWidthProperty<string>;
  minHeight?: CSS.MinHeightProperty<string>;
  maxWidth?: CSS.MaxWidthProperty<string>;
  maxHeight?: CSS.MaxHeightProperty<string>;
};

export type PopoverProps = {
  title?: string | ReactNode;
  onCloseButton?: () => void;
  isOpen?: boolean;
  withCloseButton?: boolean;
  anchorElement?: RefObject<HTMLElement>;
  placement?: Placement;
  spaceFromAnchor?: number;
  sizeProps?: PopoverSizeProps;
} & HTMLAttributes<HTMLDivElement>;

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      title,
      isOpen = false,
      withCloseButton = true,
      onCloseButton,
      anchorElement,
      children,
      placement = 'bottom',
      spaceFromAnchor = Spacing.SizesDdsSpacingLocalX05NumberPx,

      ...rest
    },
    ref
  ) => {
    const [referenceElement, setReferenceElement] = useState(null) as any;
    const [popperElement, setPopperElement] = useState(null) as any;
    const multiRef = useCombinedRef(ref, setPopperElement);

    const { styles, attributes } = useReactPopper(
      referenceElement,
      popperElement,
      undefined,
      placement,
      spaceFromAnchor
    );

    useEffect(() => {
      isOpen ? setReferenceElement(anchorElement) : setReferenceElement(null);
      return () => setReferenceElement(null);
    }, [anchorElement, isOpen]);

    const wrapperProps = {
      ref: multiRef,
      isOpen,
      style: styles.popper,
      ...rest,
      ...attributes.popper
    };

    return (
      <Wrapper {...wrapperProps}>
        {/* {(title || withCloseButton) && (
          <TopContainer hasTitle={!!title}>
            {title && (
              <TitleContainer>
                {typeof title === 'string' ? (
                  <Typography typographyType="headingSans02">
                    {title}
                  </Typography>
                ) : (
                  title
                )}
              </TitleContainer>
            )}

            {withCloseButton && (
              <StyledButton
                Icon={CloseOutlinedIcon}
                appearance="borderless"
                purpose="secondary"
                size="small"
                onClick={onCloseButton}
              />
            )}
          </TopContainer>
        )} */}
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
            Icon={CloseOutlinedIcon}
            appearance="borderless"
            purpose="secondary"
            size="small"
            onClick={onCloseButton}
            aria-label="Lukk"
          />
        )}
      </Wrapper>
    );
  }
);
