import { forwardRef, HTMLAttributes, useState } from 'react';
import styled, { css } from 'styled-components';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import FirstPageOutlinedIcon from '@material-ui/icons/FirstPageOutlined';
import LastPageOutlinedIcon from '@material-ui/icons/LastPageOutlined';
import { Typography } from '../../components/Typography';
import { Button } from '../../components/Button';
import { Select, SelectOption } from '../Select';
import { PaginationGenerator } from './paginationGenerator';
import { IconWrapper } from '../../helpers/IconWrapper';
import { paginationTokens as tokens } from './Pagination.tokens';

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const List = styled.ol`
  display: grid;
  grid-auto-flow: column;
  gap: ${tokens.paginationItem.spacing};
  ${tokens.list.base}
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  list-style: none;
  display: inline-grid;
  align-content: center;
`;

const Container = styled.div<{ smallScreen?: boolean }>`
  display: inline-flex;
  gap: ${tokens.container.spaceBetweenItems};
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
  gap: ${tokens.indicatorsContainer.spacing};
`;

export type PaginationProps = {
  itemsAmount: number;
  defaultItemsPerPage?: number;
  defaultActivePage?: number;
  withPagination?: boolean;
  withCounter?: boolean;
  withSelect?: boolean;
  selectOptions?: SelectOption[];
  onSelectOptionChange?: (option: SelectOption | null) => void;
  smallScreen?: boolean;
  onChange?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    page: number
  ) => void;
} & Omit<HTMLAttributes<HTMLElement>, 'onChange'>;

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  (
    {
      itemsAmount,
      defaultItemsPerPage = 10,
      defaultActivePage = 1,
      withPagination = true,
      withCounter,
      withSelect,
      selectOptions = [
        { label: '10', value: 10 },
        { label: '25', value: 25 },
        { label: '50', value: 50 }
      ],
      smallScreen,
      onChange,
      onSelectOptionChange,
      ...rest
    },
    ref
  ) => {
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

    const handleSelectChange = (option: SelectOption | null) => {
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
                  <IconWrapper Icon={MoreHorizOutlinedIcon} />
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
        Icon={ChevronLeftOutlinedIcon}
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
        Icon={ChevronRightOutlinedIcon}
        onClick={event => {
          onPageChange(event, activePage + 1);
        }}
        aria-label="Gå til neste siden"
      />
    );

    const navProps = !withSelect &&
      !withCounter && {
        ...rest
      };

    const containerProps = {
      smallScreen,
      ...rest
    };

    const navigation = withPagination ? (
      <Nav ref={ref} aria-label="paginering" {...navProps}>
        <List>
          {activePage > 1 && <ListItem> {previousPageButton}</ListItem>}
          {listItems}
          {activePage < pagesLength && <ListItem> {nextPageButton} </ListItem>}
        </List>
      </Nav>
    ) : null;

    const smallScreenNavigation = withPagination ? (
      <Nav ref={ref} aria-label="paginering" {...navProps}>
        <List>
          {activePage > 1 && (
            <>
              <ListItem>
                <Button
                  purpose="secondary"
                  appearance="ghost"
                  size="small"
                  Icon={FirstPageOutlinedIcon}
                  onClick={event => {
                    onPageChange(event, 1);
                  }}
                  aria-label="Gå til første siden"
                />
              </ListItem>
              <ListItem>{previousPageButton}</ListItem>
            </>
          )}
          <ListItem>
            <Button
              label={activePage.toString()}
              size="small"
              onClick={event => {
                onPageChange(event, activePage);
              }}
            />
          </ListItem>
          {activePage < pagesLength && (
            <>
              <ListItem>{nextPageButton}</ListItem>
              <ListItem>
                <Button
                  purpose="secondary"
                  appearance="ghost"
                  size="small"
                  Icon={LastPageOutlinedIcon}
                  onClick={event => {
                    onPageChange(event, pagesLength);
                  }}
                  aria-label="Gå til siste siden"
                />
              </ListItem>
            </>
          )}
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
      <Container {...containerProps}>
        <IndicatorsContainer>
          {withSelect && (
            <Select
              options={selectOptions}
              width="76px"
              defaultValue={{
                label: itemsPerPage.toString(),
                value: itemsPerPage.toString()
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
      </Container>
    );
  }
);
