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
  getBaseHTMLProps,
} from '../../types';

export type ProgressTrackerProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /** Indeksen til det aktive steget.
     * @default 0
     */
    activeStep?: number;
    /** Ekstra logikk ved klikking på et steg. */
    onStepChange?: (step: number) => void;
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
      const itemsWithConnectorsBetween =
        intersperseItemsWithConnector(itemsWithIndex);
      return itemsWithConnectorsBetween;
    }, [children]);

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
          <ol className={styles.list}>{steps}</ol>
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
) =>
  Children.map(children, (child, index) => {
    if (index === 0) {
      return child;
    }
    return (
      <Fragment key={index}>
        <div aria-hidden className={styles.connector} />
        {child}
      </Fragment>
    );
  });
