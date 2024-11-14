import { type HTMLAttributes, forwardRef, useState } from 'react';

import styles from './Pagination.module.css';
import { PaginationGenerator } from './paginationGenerator';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import { Button } from '../Button';
import { type ScreenSizeLiteral } from '../helpers';
import { Icon } from '../Icon';
import {
  ChevronFirstIcon,
  ChevronLastIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from '../Icon/icons';
import { Select } from '../Select';
import { Paragraph } from '../Typography';

export interface PaginationOption {
  label: string;
  value: number;
}

export type PaginationProps = BaseComponentProps<
  HTMLElement,
  {
    /**Totalt antall elementer å paginere. */
    itemsAmount: number;
    /**Antall elementer per side ved innlastning av komponenten.
     * @default 10
     */
    defaultItemsPerPage?: number;
    /**Den aktive siden ved innlastning av komponenten.
     * @default 1
     */
    defaultActivePage?: number;
    /**Spesifiserer om selve pagineringen skal vises.
     * @default true
     */
    withPagination?: boolean;
    /**Spesifiserer om teksten `'Vis x-y av z'` skal vises. */
    withCounter?: boolean;
    /**Spesifiserer om `<Select />` til å velge antall resultater per side skal vises. */
    withSelect?: boolean;
    /**Custom options for `<Select />`. **OBS!** hvis det settes custom `selectOptions` bør "alle"-alternativet inkluderes der det er relevant, da brukere ofte liker å ha muligheten.
     * @default [
        { label: '10', value: 10 },
        { label: '25', value: 25 },
        { label: '50', value: 50 },
        { label: 'Alle', value: itemsAmount },
      ]
     */
    selectOptions?: Array<PaginationOption>;
    /**Brukes til å hente side og eventuelt annen logikk ved endring av side. */
    onChange?: (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      page: number,
    ) => void;
    /**Brukes til å hente `selectedOption` og eventuelt kjøre annen logikk når `withSelect=true` ved endring av alternativ. */
    onSelectOptionChange?: (option: PaginationOption | null) => void;
    /**Spesifiserer ved hvilket brekkpunkt og nedover versjonen for små skjermer skal vises; den viser færre sideknapper og stacker subkomponentene. */
    smallScreenBreakpoint?: ScreenSizeLiteral;
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
      smallScreenBreakpoint,
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
      page: number,
    ) => {
      page && setActivePage(page);
      if (event && onChange) {
        onChange(event, page);
      }
    };

    const handleSelectChange = (option: PaginationOption | null) => {
      if (option !== null) {
        setItemsPerPage(option.value);
      }

      if (onSelectOptionChange) {
        onSelectOptionChange(option);
      }
    };

    const listItems =
      items.length > 0
        ? items.map((item, i) => {
            const isActive = item === activePage;
            return (
              <li key={`pagination-item-${i}`} className={styles.list__item}>
                {item !== 'truncator' ? (
                  <Button
                    purpose={isActive ? 'primary' : 'secondary'}
                    size="small"
                    onClick={event => {
                      onPageChange(event, item as number);
                    }}
                    aria-label={
                      isActive
                        ? `Nåværende side (side ${item})`
                        : `Gå til side ${item}`
                    }
                  >
                    {item}
                  </Button>
                ) : (
                  <Icon
                    icon={MoreHorizontalIcon}
                    className={styles['truncation-icon']}
                  />
                )}
              </li>
            );
          })
        : undefined;

    const previousPageButton = (
      <Button
        purpose="secondary"
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
        size="small"
        icon={ChevronRightIcon}
        onClick={event => {
          onPageChange(event, activePage + 1);
        }}
        aria-label="Gå til neste siden"
      />
    );

    const navProps = (smallScreenVariant?: boolean) => {
      const cns = [
        styles.nav,
        smallScreenVariant && styles['nav--small-screen'],
        smallScreenVariant &&
          smallScreenBreakpoint &&
          styles[`nav--small-screen-show-${smallScreenBreakpoint}`],
        !smallScreenVariant &&
          smallScreenBreakpoint &&
          styles[`nav--large-screen-hide-${smallScreenBreakpoint}`],
      ];
      return !withSelect && !withCounter
        ? {
            ...getBaseHTMLProps(id, cn(className, ...cns), htmlProps, rest),
          }
        : { className: cn(...cns) };
    };

    const isOnFirstPage = activePage === 1;
    const isOnLastPage = activePage === pagesLength;

    const largeScreenNavigation = withPagination ? (
      <nav ref={ref} aria-label="paginering" {...navProps()}>
        <ol className={styles.list}>
          <li
            className={cn(
              styles.list__item,
              isOnFirstPage && styles['list__item--hidden'],
            )}
            aria-hidden={isOnFirstPage}
          >
            {previousPageButton}
          </li>
          {listItems}
          <li
            className={cn(
              styles.list__item,
              isOnLastPage && styles['list__item--hidden'],
            )}
            aria-hidden={isOnLastPage}
          >
            {nextPageButton}
          </li>
        </ol>
      </nav>
    ) : null;

    const smallScreenNavigation = withPagination ? (
      <nav ref={ref} aria-label="paginering" {...navProps(true)}>
        <ol className={styles.list}>
          <li
            className={cn(
              styles.list__item,
              isOnFirstPage && styles['list__item--hidden'],
            )}
            aria-hidden={isOnFirstPage}
          >
            <Button
              purpose="secondary"
              size="small"
              icon={ChevronFirstIcon}
              onClick={event => {
                onPageChange(event, 1);
              }}
              aria-label="Gå til første siden"
            />
          </li>
          <li
            className={cn(
              styles.list__item,
              isOnFirstPage && styles['list__item--hidden'],
            )}
            aria-hidden={isOnFirstPage}
          >
            {previousPageButton}
          </li>
          <li className={styles.list__item}>
            <Button
              size="small"
              onClick={event => {
                onPageChange(event, activePage);
              }}
            >
              {activePage}
            </Button>
          </li>
          <li
            className={cn(
              styles.list__item,
              isOnLastPage && styles['list__item--hidden'],
            )}
            aria-hidden={isOnLastPage}
          >
            {nextPageButton}
          </li>
          <li
            className={cn(
              styles.list__item,
              isOnLastPage && styles['list__item--hidden'],
            )}
            aria-hidden={isOnLastPage}
          >
            <Button
              purpose="secondary"
              size="small"
              icon={ChevronLastIcon}
              onClick={event => {
                onPageChange(event, pagesLength);
              }}
              aria-label="Gå til siste siden"
            />
          </li>
        </ol>
      </nav>
    ) : null;

    const activePageFirstItem =
      activePage === 1 ? 1 : activePage * itemsPerPage - itemsPerPage + 1;

    const activePageLastItem =
      activePage === pagesLength ? itemsAmount : activePage * itemsPerPage;

    return !withCounter && !withSelect ? (
      <>
        {largeScreenNavigation}
        {smallScreenBreakpoint && smallScreenNavigation}
      </>
    ) : (
      <div
        {...getBaseHTMLProps(
          id,
          cn(
            className,
            styles.container,
            smallScreenBreakpoint &&
              styles[`container--small-screen-${smallScreenBreakpoint}`],
          ),
          htmlProps,
          rest,
        )}
      >
        <div className={styles.indicators}>
          {withSelect && (
            <Select
              options={selectOptions}
              isSearchable={false}
              width="74px"
              defaultValue={{
                label: itemsPerPage.toString(),
                value: itemsPerPage,
              }}
              isClearable={false}
              onChange={handleSelectChange}
              componentSize="small"
              aria-label="Antall elementer per side"
            />
          )}
          {withCounter && (
            <Paragraph>
              Viser {activePageFirstItem}-{activePageLastItem} av {itemsAmount}
            </Paragraph>
          )}
        </div>
        {largeScreenNavigation}
        {smallScreenBreakpoint && smallScreenNavigation}
      </div>
    );
  },
);

Pagination.displayName = 'Pagination';
