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
  useMemo,
  useState,
} from 'react';
import styled from 'styled-components';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';
import {
  Card,
  CardAccordion,
  CardAccordionBody,
  CardAccordionHeader,
} from '../Card';
import { Typography } from '../Typography';
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

const SmallScreenWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
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
    /** Ekstra logikk ved klikking på et steg. */
    onStepChange?: (step: number) => void;
    /** Om brukeren kan hoppe mellom stegene via museklikk på et steg. */
    clickable?: boolean;
    /** Spesifiserer om versjonen for små skjermer skal vises. */
    smallScreen?: boolean;
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
      smallScreen = false,
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

    const currentStepWithoutConnectors = useMemo(() => {
      const validChildren = removeInvalidChildren(children);
      const itemsWithIndex = passIndexPropToProgressTrackerItem(validChildren);
      return itemsWithIndex;
    }, [children]);

    return (
      <ProgressTrackerContext.Provider
        value={{
          activeStep: thisActiveStep,
          handleStepChange: handleChange,
        }}
      >
        <div role="group" aria-label="progress" {...containerProps}>
          {smallScreen ? (
            <Card cardType="expandable" color="strokeDark">
              <CardAccordion
                htmlProps={{
                  style: {},
                }}
              >
                <CardAccordionHeader>
                  <SmallScreenWrapper>
                    {currentStepWithoutConnectors[activeStep]}
                    <Typography
                      typographyType="supportingStyleHelperText01"
                      style={{
                        marginLeft:
                          progressTrackerTokens.smallScreenTokens.marginLeft,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {`Steg ${activeStep + 1} av ${
                        currentStepWithoutConnectors.length
                      }`}
                    </Typography>
                  </SmallScreenWrapper>
                </CardAccordionHeader>
                <CardAccordionBody>
                  <ItemsWrapper>{steps}</ItemsWrapper>
                </CardAccordionBody>
              </CardAccordion>
            </Card>
          ) : (
            <ItemsWrapper>{steps}</ItemsWrapper>
          )}
        </div>
      </ProgressTrackerContext.Provider>
    );
  });

  (Res as ProgressTrackerComponent).Item = ProgressTrackerItem;
  (Res as ProgressTrackerComponent).displayName = 'ProgressTracker';
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
