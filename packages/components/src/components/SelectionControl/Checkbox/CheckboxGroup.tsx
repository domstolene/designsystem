import { useId } from 'react';
import {
  CheckboxGroupContext,
  CheckboxGroupContextProps,
} from './CheckboxGroupContext';
import { Typography } from '@norges-domstoler/dds-typography';
import {
  derivativeIdGenerator,
  RequiredMarker,
  BaseComponentPropsWithChildren,
  Direction,
  getBaseHTMLProps,
} from '@norges-domstoler/dds-core';

import { renderInputMessage } from '../../../utils/renderInputMessage';
import {
  OuterGroupContainer,
  GroupContainer,
} from '../SelectionControl.styles';

export type CheckboxGroupProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Ledetekst for gruppen. */
    label?: string;
    /**Retningen barna gjengis i. */
    direction?: Direction;
    /**Custom id for for gruppen, knytter ledetekst til gruppen via `aria-label`. */
    groupId?: string;
    /**Meldingen som vises ved valideringsfeil. Sender error-tilstand til barna når det finnes  og setter `aria-describedby` for barna. */
    errorMessage?: string;
    tip?: string;
    /**Indikerer at det er påkrevd å velge minst ett alternativ. Innebærer visuell endring. **OBS!** `required` må i tillegg gis til `<Checkbox />` manuelt. */
    required?: boolean;
  }
>;

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  const {
    label,
    direction = 'row',
    errorMessage,
    tip,
    required,
    groupId,
    children,
    id,
    className,
    htmlProps = {},
    ...rest
  } = props;

  const { 'aria-required': ariaRequired } = htmlProps;

  const generatedId = useId();
  const uniqueGroupId = groupId ?? `${generatedId}-checkboxGroup`;
  const hasErrorMessage = !!errorMessage;
  const showRequiredMarker = required || ariaRequired;

  const errorMessageId = derivativeIdGenerator(uniqueGroupId, 'errorMessage');
  const tipId = derivativeIdGenerator(uniqueGroupId, 'tip');

  const contextProps: CheckboxGroupContextProps = {
    error: hasErrorMessage,
    errorMessageId: errorMessage ? errorMessageId : undefined,
    uniqueGroupId,
    tipId: tip ? tipId : undefined,
  };

  return (
    <OuterGroupContainer
      {...getBaseHTMLProps(
        id,
        className,
        { ...htmlProps, 'aria-required': ariaRequired },
        rest,
      )}
    >
      <Typography
        as="span"
        typographyType="supportingStyleLabel01"
        id={uniqueGroupId}
      >
        {label} {showRequiredMarker && <RequiredMarker />}
      </Typography>
      {renderInputMessage(tip, tipId)}
      <CheckboxGroupContext.Provider value={{ ...contextProps }}>
        <GroupContainer
          role="group"
          aria-labelledby={uniqueGroupId}
          aria-describedby={tip ? tipId : undefined}
          direction={direction}
        >
          {children}
        </GroupContainer>
      </CheckboxGroupContext.Provider>
      {renderInputMessage(undefined, undefined, errorMessage, errorMessageId)}
    </OuterGroupContainer>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';
