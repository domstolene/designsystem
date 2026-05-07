import { type Dispatch, type ReactNode, type SetStateAction } from 'react';

import styles from './NewsPopover.module.css';
import {
  useCombinedRef,
  useControllableState,
  useFocusTrap,
  useOnClickOutside,
  useOnKeyDown,
} from '../../hooks';
import { useTranslation } from '../../i18n';
import { commonTexts } from '../../i18n/commonTexts';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import { Button } from '../Button';
import { StylelessList } from '../helpers';
import { focusable } from '../helpers/styling/focus.module.css';
import { Icon } from '../Icon';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CircleFilledIcon,
  CloseIcon,
} from '../Icon/icons';
import { Box, type Breakpoint, HStack, Paper, VStack } from '../layout';
import { styleUpToBreakpoint } from '../layout/common/utils';
import { Heading, Paragraph } from '../Typography';
import { VisuallyHidden } from '../VisuallyHidden';

export interface NewsPopoverSlide {
  /**`<img>` bilde. */
  image: ReactNode;
  /**Overskiftstekst. */
  heading: string;
  /**Løpende tekst med detaljer. */
  text: string;
}

export type NewsPopoverProps = BaseComponentProps<
  HTMLElement,
  {
    /**Header-tekst. */
    header: string;
    /**Innhold i nyhetene. */
    news: Array<NewsPopoverSlide>;
    /**Aktiv nyhet ved første render i ukontrollert tilstand. */
    defaultActiveSlide?: number;
    /**Implementerer kontrollert tilstand: aktiv nyhet. */
    activeSlide?: number;
    /** Implementerer kontrollert tilstand: setter `aktivSlide`.  */
    setActiveSlide?: Dispatch<SetStateAction<number>>;
    /**Om komponenten skal være åpen på første render i ukontrollert tilstand.  */
    isInitiallyOpen?: boolean;
    /**Implementerer kontrollert tilstand: om komponenten skal være åpen.  */
    isOpen?: boolean;
    /**Implementerer kontrollert tilstand: setter `isOpen`.  */
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    /**
     * Om komponenten skal lukkes på klikk utenfor.
     * @default true
     */
    closeOnClickOutside?: boolean;
    /**
     * Brekkpunkt for små skjermer;
     * gjør at komponenten tar 100% bredde av forelderen.
     * @default 'xs'
     */
    smallScreenBreakpoint?: Breakpoint;
  }
>;

export const NewsPopover = ({
  id,
  className,
  style,
  htmlProps,
  header,
  news,
  defaultActiveSlide = 0,
  activeSlide: activeSlideProp,
  setActiveSlide: setActiveSlideProp,
  isOpen: isOpenProp,
  isInitiallyOpen = true,
  setIsOpen: setIsOpenProp,
  smallScreenBreakpoint = 'xs',
  closeOnClickOutside = true,
  ref,
  ...rest
}: NewsPopoverProps) => {
  if (news.length === 0) {
    throw new Error('NewsPopover must have at least one item in "news" prop');
  }

  if (header.length > 35) {
    console.warn(
      '[NewsPopover] header exceeds recommended length (about 35 characters). This may cause wrapping or layout issues depending on theme.',
    );
  }

  news.forEach((n, i) => {
    if (n.heading.length > 35) {
      console.warn(
        `[NewsPopover] news[${i}].heading exceeds recommended length (about 35 characters). This may cause wrapping or layout issues depending on theme.`,
      );
    }
    if (n.text.length > 135) {
      console.warn(
        `[NewsPopover] news[${i}].text exceeds recommended length (about 135 characters). This may cause wrapping or layout issues depending on theme.`,
      );
    }
  });

  const { t } = useTranslation();

  const [activeSlide, setActiveSlide] = useControllableState({
    value: activeSlideProp,
    defaultValue: defaultActiveSlide,
    onChange: setActiveSlideProp,
  });

  const [isOpen, setIsOpen] = useControllableState({
    onChange: setIsOpenProp,
    value: isOpenProp,
    defaultValue: isInitiallyOpen,
  });

  function handleSlideChange(slide: number) {
    setActiveSlide(slide);
  }

  const popoverRef = useFocusTrap<HTMLDivElement>(true);
  const combinedRef = useCombinedRef(ref, popoverRef);

  useOnClickOutside(popoverRef, () => {
    if (closeOnClickOutside && isOpen) {
      setIsOpen(false);
    }
  });

  useOnKeyDown('Escape', () => setIsOpen(false));

  const isList = news.length > 1;

  const slideContent = (el: NewsPopoverSlide, i?: number) => (
    <>
      <Paper
        background="brand-secondary-subtle"
        width="100%"
        borderRadius="0"
        display="grid"
        placeItems="center"
        paddingBlock="x0.5"
      >
        {i !== undefined && (
          <VisuallyHidden>
            {t(commonTexts.pageOf(i + 1, news.length))}
          </VisuallyHidden>
        )}
        <Box height="113px" maxWidth="380px" className={styles['img-wrapper']}>
          {el.image}
        </Box>
      </Paper>
      <VStack gap="x0.75" alignItems="center" margin="x0.75 x0.75 x1 x0.75">
        <Heading level={3}>{el.heading}</Heading>
        <Paragraph>{el.text}</Paragraph>
      </VStack>
    </>
  );

  const content = isList ? (
    <Box as={StylelessList} width="100%">
      {news.map((el, i) => {
        const active = activeSlide === i;
        return (
          <li key={i} aria-current={active} hidden={!active}>
            {slideContent(el, i)}
          </li>
        );
      })}
    </Box>
  ) : (
    <Box width="100%">{slideContent(news[0])}</Box>
  );

  function handleNext() {
    if (activeSlide === news.length - 1) handleSlideChange(0);
    else handleSlideChange(activeSlide + 1);
  }

  function handlePrevious() {
    if (activeSlide === 0) handleSlideChange(news.length - 1);
    else handleSlideChange(activeSlide - 1);
  }

  const headerId = 'dds-news-popover-header';

  return isOpen ? (
    <Paper
      {...getBaseHTMLProps(
        id,
        cn(className, focusable),
        style,
        htmlProps,
        rest,
      )}
      ref={combinedRef}
      position="relative"
      border="border-subtle"
      role="dialog"
      aria-labelledby={headerId}
      height={isList ? '368px' : '327px'}
      width={styleUpToBreakpoint('100%', smallScreenBreakpoint, '405px')}
    >
      <HStack margin="x0.75 x3 x0.75 x0.75">
        <Heading id={headerId} level={2} typographyType="headingSmall">
          {header}
        </Heading>
      </HStack>
      <VStack
        alignItems="center"
        height={isList ? '299px' : undefined}
        aria-live="polite"
      >
        {content}
        {isList && (
          <HStack alignItems="center" gap="x1" marginBlock="auto 0">
            <Button
              aria-label={t(commonTexts.previousPage)}
              size="small"
              purpose="tertiary"
              icon={ChevronLeftIcon}
              onClick={() => handlePrevious()}
            />
            {news.map((slide, i) => {
              const active = activeSlide === i;
              return (
                <Icon
                  iconSize="small"
                  icon={CircleFilledIcon}
                  color={
                    active ? 'brand-tertiary-default' : 'brand-tertiary-subtle'
                  }
                />
              );
            })}

            <Button
              aria-label={t(commonTexts.nextPage)}
              size="small"
              purpose="tertiary"
              icon={ChevronRightIcon}
              onClick={() => handleNext()}
            />
          </HStack>
        )}
        <Button
          icon={CloseIcon}
          purpose="tertiary"
          size="small"
          aria-label={t(commonTexts.close)}
          onClick={() => setIsOpen(false)}
          className={styles['close-button']}
        />
      </VStack>
    </Paper>
  ) : null;
};

NewsPopover.displayName = 'NewsPopover';
