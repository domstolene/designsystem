import { type HTMLAttributes, useState } from 'react';

import styles from './Pagination.module.css';
import { PaginationGenerator } from './paginationGenerator';
import { createTexts, useTranslation } from '../../i18n';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import { Button } from '../Button';
import { Icon } from '../Icon';
import {
  ChevronFirstIcon,
  ChevronLastIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from '../Icon/icons';
import { Box, type Breakpoint, ShowHide } from '../layout';
import { styleUpToBreakpoint } from '../layout/common/utils';
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
    smallScreenBreakpoint?: Breakpoint;
  },
  Omit<HTMLAttributes<HTMLElement>, 'onChange'>
>;

export const Pagination = ({
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
  ref,
  ...rest
}: PaginationProps) => {
  const { t } = useTranslation();

  const [activePage, setActivePage] = useState(defaultActivePage);
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);

  const pagesLength = Math.ceil(itemsAmount / itemsPerPage);

  const items = PaginationGenerator(pagesLength, activePage);

  const onPageChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    page: number,
  ) => {
    if (page) setActivePage(page);
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
              {item !== 'truncator' && typeof item === 'number' ? (
                <Button
                  purpose={isActive ? 'primary' : 'secondary'}
                  size="small"
                  onClick={event => {
                    onPageChange(event, item);
                  }}
                  aria-label={
                    isActive ? t(texts.currentPage(item)) : t(texts.page(item))
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
      aria-label={t(texts.previousPage)}
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
      aria-label={t(texts.nextPage)}
    />
  );

  const isOnFirstPage = activePage === 1;
  const isOnLastPage = activePage === pagesLength;

  const navigation = withPagination ? (
    <Box
      as="nav"
      ref={ref}
      aria-label={t(texts.pagination)}
      display="flex"
      alignItems="center"
      {...(!withSelect &&
        !withCounter && {
          ...getBaseHTMLProps(id, className, htmlProps, rest),
        })}
    >
      <ShowHide
        as="ol"
        hideBelow={smallScreenBreakpoint}
        className={styles.list}
      >
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
      </ShowHide>
      {!!smallScreenBreakpoint && (
        <ShowHide
          as="ol"
          showBelow={smallScreenBreakpoint}
          className={styles.list}
        >
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
              aria-label={t(texts.firstPage)}
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
              aria-label={t(texts.lastPage)}
            />
          </li>
        </ShowHide>
      )}
    </Box>
  ) : null;

  const activePageFirstItem =
    activePage === 1 ? 1 : activePage * itemsPerPage - itemsPerPage + 1;

  const activePageLastItem =
    activePage === pagesLength ? itemsAmount : activePage * itemsPerPage;

  return !withCounter && !withSelect ? (
    navigation
  ) : (
    <Box
      display="flex"
      gap="x0.75"
      justifyContent="space-between"
      flexWrap="wrap"
      flexDirection={styleUpToBreakpoint('column', smallScreenBreakpoint)}
      alignItems={styleUpToBreakpoint('center', smallScreenBreakpoint)}
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
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
            aria-label={t(texts.itemsPerPage)}
          />
        )}
        {withCounter && (
          <Paragraph>
            {t(
              texts.showsAmountOfTotalItems(
                activePageFirstItem,
                activePageLastItem,
                itemsAmount,
              ),
            )}
          </Paragraph>
        )}
      </div>
      {navigation}
    </Box>
  );
};

Pagination.displayName = 'Pagination';

const texts = createTexts({
  pagination: {
    nb: 'Paginering',
    no: 'Paginering',
    nn: 'Paginering',
    en: 'Pagination',
  },
  itemsPerPage: {
    nb: 'Elementer per side',
    no: 'Elementer per side',
    nn: 'Element per side',
    en: 'Items per page',
  },
  nextPage: {
    nb: 'Neste side',
    no: 'Neste side',
    nn: 'Neste side',
    en: 'Next page',
  },
  previousPage: {
    nb: 'Forrige side',
    no: 'Forrige side',
    nn: 'Førre side',
    en: 'Previous page',
  },
  firstPage: {
    nb: 'Første side',
    no: 'Første side',
    nn: 'Fyrste side',
    en: 'First page',
  },
  lastPage: {
    nb: 'Siste side',
    no: 'Siste side',
    nn: 'Siste side',
    en: 'Last page',
  },
  currentPage: page => ({
    nb: `Nåværende side (${page})`,
    no: `Nåværende side (${page})`,
    nn: `Noverande side (${page})`,
    en: `Current page (${page})`,
  }),
  page: page => ({
    nb: `Side ${page}`,
    no: `Side ${page}`,
    nn: `Side ${page}`,
    en: `Page ${page}`,
  }),
  showsAmountOfTotalItems: (first, last, total) => ({
    nb: `Viser ${first}-${last} av ${total}`,
    no: `Viser ${first}-${last} av ${total}`,
    nn: `Viser ${first}-${last} av ${total}`,
    en: `Shows ${first}-${last} of ${total}`,
  }),
});
