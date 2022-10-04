import {
  Children,
  cloneElement,
  forwardRef,
  ForwardRefExoticComponent,
  Fragment,
  isValidElement,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
  useMemo,
} from 'react';
import styled from 'styled-components';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';
import { ProgressTrackerContext } from './ProgressTracker.context';
import { progressTrackerTokens } from './ProgressTracker.tokens';
import { ProgressTrackerItem } from './ProgressTrackerItem';

const ItemsWrapper = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${progressTrackerTokens.itemsWrapper.gap};
  margin: 0;
  padding: 0;
`;

const ProgressTrackerConnector = styled.div`
  margin-left: calc(
    (${progressTrackerTokens.itemNumber.size} / 2) -
      (${progressTrackerTokens.connector.width} / 2)
  );
  height: ${progressTrackerTokens.connector.height};
  border-right: ${progressTrackerTokens.connector.width} solid
    ${progressTrackerTokens.connector.color};
`;

type ProgressTrackerProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /** Indeksen til det aktive steget. */
    activeStep?: number;
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
      children,
      className,
      htmlProps,
      ...rest
    } = props;

    const [thisActiveStep, setActiveStep] = useState(activeStep);

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
        }}
      >
        <div role="group" aria-label="progress" {...containerProps}>
          <ItemsWrapper>{steps}</ItemsWrapper>
        </div>
      </ProgressTrackerContext.Provider>
    );
  });

  (Res as ProgressTrackerComponent).Item = ProgressTrackerItem;
  return Res as ProgressTrackerComponent;
})();

const removeInvalidChildren = (children: ReactNode) =>
  Children.toArray(children).filter(isValidElement);

const passIndexPropToProgressTrackerItem = (children: ReactElement[]) =>
  Children.map(children, (item, index) =>
    cloneElement(item, {
      ...item.props,
      index,
    })
  );

const intersperseItemsWithConnector = (children: ReactElement[]) =>
  Children.map(children, (child, index) => {
    if (index === 0) {
      return child;
    }
    return (
      <Fragment key={index}>
        <ProgressTrackerConnector aria-hidden />
        {child}
      </Fragment>
    );
  });
