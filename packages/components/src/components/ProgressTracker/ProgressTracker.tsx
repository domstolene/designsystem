import {
  Children,
  type ForwardRefExoticComponent,
  Fragment,
  type ReactElement,
  type ReactNode,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { ProgressTrackerContext } from './ProgressTracker.context';
import styles from './ProgressTracker.module.css';
import { ProgressTrackerItem } from './ProgressTrackerItem';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';

export type ProgressTrackerProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /** Indeksen til det aktive steget. */
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
  const Res = forwardRef<HTMLDivElement, ProgressTrackerProps>((props, ref) => {
    const {
      id,
      activeStep = 0,
      onStepChange,
      children,
      className,
      htmlProps,
      ...rest
    } = props;

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

    const containerProps = {
      ...getBaseHTMLProps(id, className, htmlProps, rest),
      ref,
    };

    const steps = useMemo(() => {
      const validChildren = removeInvalidChildren(children);
      const itemsWithIndex = passIndexPropToProgressTrackerItem(validChildren);
      const itemsWithConnectorsBetween =
        intersperseItemsWithConnector(itemsWithIndex);
      return itemsWithConnectorsBetween;
    }, [children]);

    return (
      <ProgressTrackerContext.Provider
        value={{
          activeStep: thisActiveStep,
          handleStepChange: handleChange,
        }}
      >
        <div role="group" aria-label="progress" {...containerProps}>
          <ol className={styles.list}>{steps}</ol>
        </div>
      </ProgressTrackerContext.Provider>
    );
  });

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

const intersperseItemsWithConnector = (children: Array<ReactElement>) =>
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
