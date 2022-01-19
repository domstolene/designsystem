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
import { usePopper } from 'react-popper';
import { useCombinedRef } from '../../hooks';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { Typography } from '../Typography';

const { spacing: Spacing } = ddsBaseTokens;

type WrapperProps = {
  isOpen: boolean;
};

const Wrapper = styled.div<WrapperProps>`
  ${({ isOpen }) =>
    isOpen
      ? css`
          visibility: visible;
        `
      : css`
          visibility: hidden;
        `}
  box-sizing: border-box;
  position: absolute;
  width: fit-content;
  z-index: 200;
  ${tokens.wrapper.base}
`;

type TopContainerProps = {
  hasTitle?: boolean;
};

const TopContainer = styled.div<TopContainerProps>`
  position: relative;
  display: flex;
  justify-content: ${({ hasTitle }) => (hasTitle ? 'space-between' : 'end')};
  align-items: center;
`;
const TitleContainer = styled.div``;

type ContentContainerProps = {
  hasTitle: boolean;
  withCloseButton: boolean;
};

const ContentContainer = styled.div<ContentContainerProps>`
  ${({ hasTitle }) =>
    !hasTitle &&
    css`
      /* margin-top: ${tokens.content.spaceTopNoTitle}; */
    `}
`;

const StyledButton = styled(Button)`
  /* ${tokens.button.base} */
`;

export type Placement =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'left'
  | 'left-start'
  | 'left-end';

export type PopoverProps = {
  title?: string | ReactNode;
  popoverContent?: React.ReactElement;
  onCloseButton?: () => void;
  isOpen?: boolean;
  withCloseButton?: boolean;
  anchorElement?: RefObject<HTMLElement>;
  placement?: Placement;
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
      popoverContent,
      placement = 'auto',
      ...rest
    },
    ref
  ) => {
    const [referenceElement, setReferenceElement] = useState(null) as any;
    const [popperElement, setPopperElement] = useState(null) as any;
    const multiRef = useCombinedRef(ref, setPopperElement);

    const { styles, attributes } = usePopper(referenceElement, popperElement, {
      placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, Spacing.SizesDdsSpacingLocalX05NumberPx]
          }
        }
      ]
    });

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
        {(title || withCloseButton) && (
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
        )}
        <ContentContainer hasTitle={!!title} withCloseButton={withCloseButton}>
          {children}
        </ContentContainer>
      </Wrapper>
    );
  }
);
