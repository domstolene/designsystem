import { forwardRef, HTMLAttributes, useState } from 'react';
import styled, { css } from 'styled-components';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { Select } from '../Select';
import { PaginationGenerator } from './paginationGenerator';
import { Icon } from '../Icon';
import { paginationTokens as tokens } from './Pagination.tokens';
import {
  MoreHorizontalIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronFirstIcon,
  ChevronLastIcon,
} from '../../icons/tsx';
import { BaseComponentProps, getBaseHTMLProps } from '../../types';

const { outerContainer, indicatorsContainer, truncationIcon, list } = tokens;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const List = styled.ol`
  display: grid;
  grid-auto-flow: column;
  gap: ${list.gap};
  margin: 0;
  padding: 0;
`;

type ListItemProps = {
  isHidden?: boolean;
};

const ListItem = styled.li<ListItemProps>`
  display: inline-grid;
  align-content: center;
  ${({ isHidden }) =>
    isHidden &&
    css`
      visibility: hidden;
    `}
`;

const OuterContainer = styled.div<{ smallScreen?: boolean }>`
  display: flex;
  gap: ${outerContainer.gap};
  ${({ smallScreen }) =>
    smallScreen
      ? css`
          flex-direction: column;
          align-items: center;
        `
      : css`
          justify-content: space-between;
          flex-wrap: wrap;
        `}
`;

const IndicatorsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: ${indicatorsContainer.gap};
`;

export type PaginationOption = {
  label: string;
  value: number;
};

export type PaginationProps = BaseComponentProps<
  HTMLElement,
  {
    /**Totalt antall elementer å paginere. */
    itemsAmount: number;
    /**Antall elementer per side ved innlastning av komponenten. */
    defaultItemsPerPage?: number;
    /**Den aktive siden ved innlastning av komponenten. */
    defaultActivePage?: number;
    /**Spesifiserer om selve pagineringen skal vises. */
    withPagination?: boolean;
    /**Spesifiserer om teksten `'Vis x-y av z'` skal vises. */
    withCounter?: boolean;
    /**Spesifiserer om `<Select />` til å velge antall resultater per side skal vises. */
    withSelect?: boolean;
    /**Custom options for `<Select />`. **OBS!** hvis det settes custom `selectOptions` bør "alle"-alternativet inkluderes der det er relevant, da brukere ofte liker å ha muligheten. */
    selectOptions?: PaginationOption[];
    /**Brukes til å hente side og eventuelt annen logikk ved endring av side. */
    onChange?: (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      page: number
    ) => void;
    /**Brukes til å hente `selectedOption` og eventuelt kjøre annen logikk når `withSelect=true` ved endring av alternativ. */
    onSelectOptionChange?: (option: PaginationOption | null) => void;
    /**Spesifiserer om versjonen for små skjermer skal vises; den viser færre sideknapper og stacker subkomponentene. */
    smallScreen?: boolean;
  },
  Omit<HTMLAttributes<HTMLElement>, 'onChange'>
>;

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  (props, ref) => {
    const {
      itemsAmount,
      defaultItemsPerPage = 10,
      defaultActivePage = 1,
      withPagination = true,
      withCounter,
      withSelect,
      selectOptions = [
        { label: '10', value: 10 },
        { label: '25', value: 25 },
        { label: '50', value: 50 },
        { label: 'Alle', value: itemsAmount },
      ],
      smallScreen,
      onChange,
      onSelectOptionChange,
      id,
      className,
      htmlProps,
      ...rest
    } = props;

    const [activePage, setActivePage] = useState(defaultActivePage);
    const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);

    const pagesLength = Math.ceil(itemsAmount / itemsPerPage);

    const items = PaginationGenerator(pagesLength, activePage);

    const onPageChange = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      page: number
    ) => {
      page && setActivePage(page);
      if (event && onChange) {
        onChange(event, page);
      }
    };

    const handleSelectChange = (option: PaginationOption | null) => {
      setItemsPerPage(option?.value as number);
      if (onSelectOptionChange) {
        onSelectOptionChange(option);
      }
    };

    const listItems =
      items.length > 0
        ? items.map((item, i) => {
            const isActive = item === activePage;
            return (
              <ListItem key={`pagination-item-${i}`}>
                {item !== 'truncator' ? (
                  <Button
                    label={item.toString()}
                    purpose={isActive ? 'primary' : 'secondary'}
                    appearance={isActive ? 'filled' : 'ghost'}
                    size="small"
                    onClick={event => {
                      onPageChange(event, item as number);
                    }}
                    aria-label={
                      isActive
                        ? `Nåværende side (side ${item})`
                        : `Gå til side ${item}`
                    }
                  />
                ) : (
                  <Icon
                    icon={MoreHorizontalIcon}
                    color={truncationIcon.color}
                  />
                )}
              </ListItem>
            );
          })
        : undefined;

    const previousPageButton = (
      <Button
        purpose="secondary"
        appearance="ghost"
        size="small"
        icon={ChevronLeftIcon}
        onClick={event => {
          onPageChange(event, activePage - 1);
        }}
        aria-label="Gå til forrige siden"
      />
    );

    const nextPageButton = (
      <Button
        purpose="secondary"
        appearance="ghost"
        size="small"
        icon={ChevronRightIcon}
        onClick={event => {
          onPageChange(event, activePage + 1);
        }}
        aria-label="Gå til neste siden"
      />
    );

    const navProps = !withSelect &&
      !withCounter && {
        ...getBaseHTMLProps(id, className, htmlProps, rest),
      };

    const containerProps = {
      ...getBaseHTMLProps(id, className, htmlProps, rest),
      smallScreen,
    };

    const isOnFirstPage = activePage === 1;
    const isOnLastPage = activePage === pagesLength;

    const navigation = withPagination ? (
      <Nav ref={ref} aria-label="paginering" {...navProps}>
        <List>
          <ListItem isHidden={isOnFirstPage} aria-hidden={isOnFirstPage}>
            {previousPageButton}
          </ListItem>
          {listItems}
          <ListItem isHidden={isOnLastPage} aria-hidden={isOnLastPage}>
            {nextPageButton}
          </ListItem>
        </List>
      </Nav>
    ) : null;

    const smallScreenNavigation = withPagination ? (
      <Nav ref={ref} aria-label="paginering" {...navProps}>
        <List>
          <ListItem isHidden={isOnFirstPage} aria-hidden={isOnFirstPage}>
            <Button
              purpose="secondary"
              appearance="ghost"
              size="small"
              icon={ChevronFirstIcon}
              onClick={event => {
                onPageChange(event, 1);
              }}
              aria-label="Gå til første siden"
            />
          </ListItem>
          <ListItem isHidden={isOnFirstPage} aria-hidden={isOnFirstPage}>
            {previousPageButton}
          </ListItem>
          <ListItem>
            <Button
              label={activePage.toString()}
              size="small"
              onClick={event => {
                onPageChange(event, activePage);
              }}
            />
          </ListItem>
          <ListItem isHidden={isOnLastPage} aria-hidden={isOnLastPage}>
            {nextPageButton}
          </ListItem>
          <ListItem isHidden={isOnLastPage} aria-hidden={isOnLastPage}>
            <Button
              purpose="secondary"
              appearance="ghost"
              size="small"
              icon={ChevronLastIcon}
              onClick={event => {
                onPageChange(event, pagesLength);
              }}
              aria-label="Gå til siste siden"
            />
          </ListItem>
        </List>
      </Nav>
    ) : null;

    const activePageFirstItem =
      activePage === 1 ? 1 : activePage * itemsPerPage - itemsPerPage + 1;

    const activePageLastItem =
      activePage === pagesLength ? itemsAmount : activePage * itemsPerPage;

    const navigationToBeRendered = smallScreen
      ? smallScreenNavigation
      : navigation;

    return !withCounter && !withSelect ? (
      navigationToBeRendered
    ) : (
      <OuterContainer {...containerProps}>
        <IndicatorsContainer>
          {withSelect && (
            <Select
              options={selectOptions}
              isSearchable={false}
              width="88px"
              defaultValue={{
                label: itemsPerPage.toString(),
                value: itemsPerPage,
              }}
              isClearable={false}
              onChange={handleSelectChange}
              aria-label="Antall elementer per side"
            />
          )}
          {withCounter && (
            <Typography typographyType="supportingStyleLabel01" as="p">
              Viser {activePageFirstItem}-{activePageLastItem} av {itemsAmount}
            </Typography>
          )}
        </IndicatorsContainer>
        {navigationToBeRendered}
      </OuterContainer>
    );
  }
);

Pagination.displayName = 'Pagination';
