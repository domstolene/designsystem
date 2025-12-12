import {
  Children,
  type ForwardRefExoticComponent,
  type ReactElement,
  type ReactNode,
  cloneElement,
  isValidElement,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { ProgressTrackerContext } from './ProgressTracker.context';
import styles from './ProgressTracker.module.css';
import { ProgressTrackerItem } from './ProgressTrackerItem';
import { createTexts, useTranslation } from '../../i18n';
import {
  type BaseComponentPropsWithChildren,
  type Direction,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { StylelessOList } from '../helpers';
import { scrollbar } from '../helpers/styling/utilStyles.module.css';
import { Box } from '../layout';

export type ProgressTrackerProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /** Indeksen til det aktive steget.
     * @default 0
     */
    activeStep?: number;
    /** Ekstra logikk ved klikking på et steg. */
    onStepChange?: (step: number) => void;
    /**Retning stegene gjengis i. OBS! Ikke tilpasset mindre skjermer. */
    direction?: Direction;
  }
>;

type ProgressTrackerComponent =
  ForwardRefExoticComponent<ProgressTrackerProps> & {
    Item: typeof ProgressTrackerItem;
  };

export const ProgressTracker: ProgressTrackerComponent = (() => {
  const Res = ({
    id,
    activeStep = 0,
    onStepChange,
    direction = 'column',
    children,
    className,
    style,
    htmlProps = {},
    ...rest
  }: ProgressTrackerProps) => {
    const { t } = useTranslation();
    const [thisActiveStep, setActiveStep] = useState(activeStep);

    const handleChange = (step: number) => {
      setActiveStep(step);
      onStepChange?.(step);
    };

    useEffect(() => {
      if (activeStep !== undefined && activeStep != thisActiveStep) {
        setActiveStep(activeStep);
      }
    }, [activeStep, thisActiveStep]);

    const steps = useMemo(() => {
      const validChildren = removeInvalidChildren(children);
      const itemsWithIndex = passIndexPropToProgressTrackerItem(validChildren);
      return itemsWithIndex;
    }, [children]);

    const isRow = direction === 'row';

    const { 'aria-label': ariaLabel } = htmlProps;

    return (
      <ProgressTrackerContext
        value={{
          activeStep: thisActiveStep,
          handleStepChange: handleChange,
          direction,
        }}
      >
        <nav
          aria-label={ariaLabel ?? t(texts.stepProgression)}
          {...getBaseHTMLProps(id, className, style, htmlProps, rest)}
        >
          <Box
            as={StylelessOList}
            display="flex"
            flexDirection={direction}
            alignItems="start"
            gap={isRow ? 'x0.5' : 'x0.125'}
            overflowX={isRow ? 'auto' : undefined}
            margin="0"
            padding={isRow ? 'x0.25' : '0'}
            className={cn(styles.list, scrollbar)}
          >
            {steps}
          </Box>
        </nav>
      </ProgressTrackerContext>
    );
  };

  (Res as ProgressTrackerComponent).Item = ProgressTrackerItem;
  (Res as ProgressTrackerComponent).displayName = 'ProgressTracker';
  return Res as ProgressTrackerComponent;
})();

function removeInvalidChildren<TProps extends object>(children: ReactNode) {
  return Children.toArray(children).filter(isValidElement<TProps>);
}

function passIndexPropToProgressTrackerItem<TProps extends object>(
  children: Array<ReactElement<TProps>>,
) {
  return Children.map(children, (item, index) =>
    cloneElement(item, {
      ...item.props,
      index,
    }),
  );
}

const texts = createTexts({
  stepProgression: {
    nb: 'Trinnprogresjon',
    no: 'Trinnprogresjon',
    nn: 'Trinnprogresjon',
    en: 'Step progression',
    se: 'Ceahkkeprogrešuvdna',
  },
});
