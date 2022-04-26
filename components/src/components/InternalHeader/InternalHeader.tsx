import { useRef, useState } from 'react';
import { Typography } from '../Typography';
import { Button } from '../Button';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { InternalHeaderProps } from './InternalHeader.types';
import {
  Wrapper,
  Navigation,
  NavigationList,
  BannerWrapper,
  BannerLeftWrapper,
  LovisaWrapper,
  ApplicationNameWrapper,
  ContextMenuGroup,
  StyledOverflowMenu,
} from './InternalHeader.styles';
import { NavigationItem } from './NavigationItem';
import { InternalHeaderListItem } from './InternalHeaderListItem';

export const InternalHeader = ({
  applicationName,
  smallScreen,
  navigationElements,
  contextMenuElements,
  currentPageHref,
  userProps,
  onCurrentPageChange,
  ...rest
}: InternalHeaderProps) => {
  const [contextMenuIsClosed, setContextMenuIsClosed] = useState(true);
  const [currentPage, setCurrentPage] =
    useState<string | undefined>(currentPageHref);

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
              <InternalHeaderListItem key={index}>
                <NavigationItem
                  href={href}
                  {...rest}
                  isCurrent={isCurrent}
                  onClick={() => handleCurrentPageChange(href)}
                />
              </InternalHeaderListItem>
            );
          })}
        </NavigationList>
      </Navigation>
    ) : null;

  const hasContextMenu =
    hasContextMenuElements || !!userProps || hasNavInContextMenu;
  return (
    <Wrapper {...rest}>
      <BannerWrapper hasContextMenu={hasContextMenu}>
        <BannerLeftWrapper>
          <LovisaWrapper>
            <Typography typographyType="bodySans02" bold as="span">
              Lovisa Next
            </Typography>
          </LovisaWrapper>
          <ApplicationNameWrapper>
            <Typography typographyType="bodySans02" as="span">
              {applicationName}
            </Typography>
          </ApplicationNameWrapper>
        </BannerLeftWrapper>
      </BannerWrapper>
      {navigation}
      {hasContextMenu && (
        <ContextMenuGroup>
          <Button
            ref={buttonRef}
            Icon={hasNavInContextMenu ? MenuOutlinedIcon : MoreVertOutlinedIcon}
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
    </Wrapper>
  );
};
