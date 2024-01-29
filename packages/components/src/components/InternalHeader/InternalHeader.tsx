import { useRef, useState } from 'react';
import styled from 'styled-components';

import {
  ApplicationNameWrapper,
  BannerLeftWrapper,
  BannerWrapper,
  ContextMenuGroup,
  LovisaWrapper,
  Navigation,
  NavigationList,
  OuterContainer,
  StyledOverflowMenu,
} from './InternalHeader.styles';
import { type InternalHeaderProps } from './InternalHeader.types';
import { NavigationItem } from './NavigationItem';
import { getBaseHTMLProps } from '../../types';
import { Button } from '../Button';
import { MenuIcon, MoreVerticalIcon } from '../Icon/icons';
import { Typography } from '../Typography';

const Li = styled.li`
  display: flex;
`;

export const InternalHeader = (props: InternalHeaderProps) => {
  const {
    applicationDesc,
    applicationName,
    smallScreen,
    navigationElements,
    contextMenuElements,
    currentPageHref,
    userProps,
    onCurrentPageChange,
    id,
    className,
    htmlProps,
    ...rest
  } = props;

  const [contextMenuIsClosed, setContextMenuIsClosed] = useState(true);
  const [currentPage, setCurrentPage] = useState<string | undefined>(
    currentPageHref,
  );

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleCurrentPageChange = (href: string) => {
    setCurrentPage(href);
    onCurrentPageChange && onCurrentPageChange();
  };

  const handleContextMenuClick = () => {
    setContextMenuIsClosed(!contextMenuIsClosed);
  };

  const onOveflowMenuClose = () => setContextMenuIsClosed(true);

  const hasNavigationElements =
    !!navigationElements && navigationElements.length > 0;
  const hasContextMenuElements =
    !!contextMenuElements && contextMenuElements.length > 0;
  const hasNavInContextMenu = smallScreen && hasNavigationElements;

  const navigation =
    hasNavigationElements && !smallScreen ? (
      <Navigation aria-label="sidenavigasjon">
        <NavigationList>
          {navigationElements.map((item, index) => {
            const { href, ...rest } = item;
            const isCurrent = href === currentPage;
            return (
              <Li key={index}>
                <NavigationItem
                  href={href}
                  {...rest}
                  isCurrent={isCurrent}
                  onClick={() => handleCurrentPageChange(href)}
                />
              </Li>
            );
          })}
        </NavigationList>
      </Navigation>
    ) : null;

  const hasContextMenu =
    hasContextMenuElements || !!userProps || hasNavInContextMenu;
  return (
    <OuterContainer {...getBaseHTMLProps(id, className, htmlProps, rest)}>
      <BannerWrapper $hasContextMenu={hasContextMenu}>
        <BannerLeftWrapper>
          <LovisaWrapper>
            <Typography typographyType="bodySans02" bold as="span">
              {applicationName}
            </Typography>
          </LovisaWrapper>
          <ApplicationNameWrapper>
            <Typography typographyType="bodySans02" as="span">
              {applicationDesc}
            </Typography>
          </ApplicationNameWrapper>
        </BannerLeftWrapper>
      </BannerWrapper>
      {navigation}
      {hasContextMenu && (
        <ContextMenuGroup>
          <Button
            ref={buttonRef}
            icon={hasNavInContextMenu ? MenuIcon : MoreVerticalIcon}
            appearance="borderless"
            purpose="secondary"
            onClick={handleContextMenuClick}
            aria-haspopup="menu"
            aria-expanded={!contextMenuIsClosed ? true : undefined}
            aria-label="åpne meny"
          />
          <StyledOverflowMenu
            isOpen={!contextMenuIsClosed}
            onClose={onOveflowMenuClose}
            anchorRef={buttonRef}
            navItems={hasNavInContextMenu ? navigationElements : undefined}
            items={hasContextMenuElements ? contextMenuElements : undefined}
            userProps={userProps}
          />
        </ContextMenuGroup>
      )}
    </OuterContainer>
  );
};

InternalHeader.displayName = 'InternalHeader';
