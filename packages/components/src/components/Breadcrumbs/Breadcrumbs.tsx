import { forwardRef, Children } from 'react';
import styled from 'styled-components';
import { breadcrumbTokens, typographyType } from './Breadcrumb.tokens';
import { Icon } from '../Icon';
import { ChevronRightIcon, ArrowLeftIcon } from '../../icons/tsx';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';
import { removeListStyling } from '../../helpers/styling/removeListStyling';
import { getFontStyling } from '../Typography/Typography.utils';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const { breakpoints } = ddsBaseTokens;

const { icon, list, listItem } = breadcrumbTokens;

const List = styled.ol`
  ${removeListStyling}
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${list.gap};
`;

const ListItem = styled.li<{ mediaQuery: string }>`
  align-items: center;
  display: flex;
  gap: ${listItem.gap};
  ${getFontStyling(typographyType)}

  @media ${p => p.mediaQuery} {
    display: none;
  }

  &:nth-last-child(2) {
    display: flex;
  }
`;

const StyledIcon = styled(Icon)<{ mediaQuery: string }>`
  color: ${icon.color};

  @media ${p => p.mediaQuery} {
    display: none;
  }
`;

const BackIcon = styled(Icon)<{ mediaQuery: string }>`
  color: ${icon.color};
  display: none;

  @media ${p => p.mediaQuery} {
    display: inline-block;
  }
`;

type ScreenSize = 'XSmall' | 'Small' | 'Medium' | 'Large' | 'XLarge';

const mediaQueries: Record<ScreenSize, string> = {
  XSmall: `only screen and (max-width: ${breakpoints.DdsBreakpointXs})`,
  Small: `only screen and (max-width: ${breakpoints.DdsBreakpointSm})`,
  Medium: `only screen and (max-width: ${breakpoints.DdsBreakpointMd})`,
  Large: `only screen and (max-width: ${breakpoints.DdsBreakpointLg})`,
  XLarge: `only screen and (max-width: ${breakpoints.DdsBreakpointXl})`,
};

export type BreadcrumbsProps = BaseComponentPropsWithChildren<
  HTMLElement,
  {
    /** Spesifiserer brekkpunkt for når små skjermer skal vises; den viser `<Breadcrumb />` kun til den forrige siden.  */
    smallScreenBreakpoint?: ScreenSize;
  }
>;

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  (props, ref) => {
    const {
      smallScreenBreakpoint,
      children,
      id,
      className,
      htmlProps,
      ...rest
    } = props;

    const childrenArray = Children.toArray(children);

    const mediaQuery = mediaQueries[smallScreenBreakpoint ?? 'XSmall'];

    const breadcrumbChildren = childrenArray.map((item, index) => (
      <ListItem mediaQuery={mediaQuery} key={`breadcrumb-${index}`}>
        {index !== 0 && (
          <StyledIcon icon={ChevronRightIcon} mediaQuery={mediaQuery} />
        )}
        {index === childrenArray.length - 2 && (
          <BackIcon
            icon={ArrowLeftIcon}
            iconSize="small"
            mediaQuery={mediaQuery}
          />
        )}
        {item}
      </ListItem>
    ));

    return (
      <nav
        {...getBaseHTMLProps(id, className, htmlProps, rest)}
        ref={ref}
        aria-label="brødsmulesti"
      >
        <List>{breadcrumbChildren}</List>
      </nav>
    );
  }
);
