import {
  Children,
  type ForwardRefExoticComponent,
  Fragment,
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
import {
  ProgressTrackerItem,
  type ProgressTrackerItemProps,
} from './ProgressTrackerItem';
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
    htmlProps,
    ...rest
  }: ProgressTrackerProps) => {
    const [thisActiveStep, setActiveStep] = useState(activeStep);

    const handleChange = (step: number) => {
      setActiveStep(step);
      onStepChange && onStepChange(step);
    };

    useEffect(() => {
      if (activeStep !== undefined && activeStep != thisActiveStep) {
        setActiveStep(activeStep);
      }
    }, [activeStep, thisActiveStep]);

    const steps = useMemo(() => {
      const validChildren = removeInvalidChildren(children);
      const itemsWithIndex = passIndexPropToProgressTrackerItem(validChildren);
      const itemsWithConnectorsBetween = intersperseItemsWithConnector(
        itemsWithIndex,
        direction,
      );
      return itemsWithConnectorsBetween;
    }, [children]);

    const isRow = direction === 'row';

    return (
      <ProgressTrackerContext
        value={{
          activeStep: thisActiveStep,
          handleStepChange: handleChange,
        }}
      >
        <div
          role="group"
          aria-label="progress"
          {...getBaseHTMLProps(id, className, htmlProps, rest)}
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
        </div>
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

const intersperseItemsWithConnector = (
  children: Array<ReactElement<ProgressTrackerItemProps>>,
  direction: Direction,
) =>
  Children.map(children, (child, index) => {
    if (index === 0) {
      return child;
    }
    return (
      <Fragment key={index}>
        <div aria-hidden className={styles[`connector--${direction}`]} />
        {child}
      </Fragment>
    );
  });
