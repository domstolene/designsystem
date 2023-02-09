import { Property } from 'csstype';
import {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import styled, { css } from 'styled-components';
import useIsMounted from '../../../hooks/useIsMounted';
import {
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { getFontStyling } from '../../Typography/Typography.utils';
import {
  cardAccordionTokens as tokens,
  typographyTypes,
} from './CardAccordion.tokens';

const expandingAnimation = css`
  @media (prefers-reduced-motion: no-preference) {
    transition: padding 0.2s, visibility 0.3s,
      max-height 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

function getPadding(props: BodyProps): string {
  const { padding } = props;

  return padding || tokens.body.padding;
}

type BodyProps = {
  isExpanded?: boolean;
  paddingTop?: Property.PaddingTop<string>;
  padding?: Property.Padding<string>;
  animate: boolean;
};

const Body = styled.div<BodyProps>`
  @media (prefers-reduced-motion: no-preference) {
    ${({ animate }) => animate && expandingAnimation}
  }
  padding: ${getPadding};
  ${getFontStyling(typographyTypes.body)}
  ${({ paddingTop }) =>
    paddingTop &&
    css`
      padding-top: ${paddingTop};
    `}
  ${({ isExpanded }) =>
    !isExpanded &&
    css`
      padding-top: 0;
      padding-bottom: 0;
    `}
`;

type BodyContainerProps = {
  isExpanded?: boolean;
  maxHeight?: number;
  animate: boolean;
};

const BodyContainer = styled.div<BodyContainerProps>`
  ${({ animate }) => animate && expandingAnimation}
  overflow: hidden;
  visibility: ${({ isExpanded }) => (isExpanded ? 'visible' : 'hidden')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 0)}px;
`;

export type CardAccordionBodyProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /** **OBS!** denne propen blir satt automatisk av forelder. Forteller komponenten om den skal utvides.  */
    isExpanded?: boolean;
    /** **OBS!** denne propen blir satt automatisk av forelder. Forteller `id` til `<CardAccordionHeader />`.  */
    headerId?: string;
    /**Overskriver default padding på toppen. Brukes når barn har spacing på toppen, f.eks. en overskrift. */
    paddingTop?: Property.PaddingTop<string>;
    /**Overskriver default padding. */
    padding?: Property.Padding<string>;
  }
>;

export const CardAccordionBody = forwardRef<
  HTMLDivElement,
  CardAccordionBodyProps
>((props, ref) => {
  const { children, isExpanded, headerId, id, className, htmlProps, ...rest } =
    props;

  const bodyRef = useRef<HTMLDivElement>(null);

  const isMounted = useIsMounted();
  const [animate, setAnimate] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);

  useLayoutEffect(() => {
    if (bodyRef.current && isExpanded) {
      setMaxHeight(bodyRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    if (isMounted()) {
      setAnimate(true);
    }
  }, [isMounted]);

  useEffect(() => {
    if (!isExpanded) {
      setMaxHeight(0);
    } else if (bodyRef && bodyRef.current) {
      setMaxHeight(bodyRef.current.scrollHeight);
    }
  }, [isExpanded]);

  const bodyProps = {
    ...getBaseHTMLProps(id, className, htmlProps, rest),
    ref,
    isExpanded,
    role: 'region',
  };
  const bodyContainerProps = {
    ref: bodyRef,
    maxHeight: maxHeight,
    isExpanded,
  };

  return (
    <Body
      {...bodyProps}
      animate={animate}
      aria-labelledby={headerId}
      aria-hidden={!isExpanded}
    >
      <BodyContainer {...bodyContainerProps} animate={animate}>
        {children}
      </BodyContainer>
    </Body>
  );
});
