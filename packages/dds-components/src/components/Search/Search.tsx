import {
  type ChangeEvent,
  type ComponentPropsWithRef,
  useId,
  useState,
} from 'react';

import { useAutocompleteSearch } from './AutocompleteSearch.context';
import styles from './Search.module.css';
import { type SearchButtonProps, type SearchSize } from './Search.types';
import { typographyTypes } from './Search.utils';
import { SearchSuggestions } from './SearchSuggestions';
import { useCombinedRef } from '../../hooks';
import { createTexts, useTranslation } from '../../i18n';
import {
  cn,
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import { createClearChangeEvent } from '../../utils/createClearChangeEvent';
import { Button } from '../Button';
import { Input, type InputProps } from '../helpers';
import { ClearButton } from '../helpers/ClearButton/ClearButton';
import inputStyles from '../helpers/Input/Input.module.css';
import { Icon, type IconSize } from '../Icon';
import { SearchIcon } from '../Icon/icons';
import { renderInputMessage } from '../InputMessage';
import { Box, Grid, HStack, type ResponsiveProps, VStack } from '../layout';
import { Label, getTypographyCn } from '../Typography';
import typographyStyles from '../Typography/typographyStyles.module.css';
import { VisuallyHidden } from '../VisuallyHidden';

const getIconSize = (size: SearchSize): Exclude<IconSize, 'inherit'> => {
  switch (size) {
    case 'large':
      return 'medium';
    case 'medium':
      return 'medium';
    case 'small':
      return 'small';
  }
};

const getPadding = (
  size: SearchSize,
  showIcon: boolean,
): ResponsiveProps['padding'] => {
  /**Avhengig av størrelse på tømmeknapp  */
  const paddingRight = (textSize: string) => `calc(
 var(--dds-spacing-x1) + ${textSize} * 1.5 + var(--dds-spacing-x0-5)
 )`;
  /**Avhengig av størrelse på søkeikonet */
  const paddingLeft = (iconSize: string) => `calc(
 var(--dds-spacing-x0-75) + ${iconSize} + var(--dds-spacing-x0-5)
 )`;

  const pRSmallButton = paddingRight('0.875rem');
  const pRMediumButton = paddingRight('1rem');
  const pLSmallIcon = paddingLeft('var(--dds-icon-size-small)');
  const pLMediumIcon = paddingLeft('var(--dds-icon-size-medium)');

  const paddingMap = {
    large: `x1 ${pRMediumButton} x1 ${showIcon ? pLMediumIcon : 'x0.75'}`,
    medium: `x0.75 ${pRSmallButton} x0.75 ${showIcon ? pLMediumIcon : 'x0.75'}`,
    small: `x0.5 ${pRSmallButton} x0.5 ${showIcon ? pLSmallIcon : 'x0.75'}`,
  };

  return paddingMap[size];
};

export type SearchProps = Pick<InputProps, 'tip' | 'label'> & {
  /**Størrelsen på komponenten. */
  componentSize?: SearchSize;
  /**Props for søkeknappen. */
  buttonProps?: SearchButtonProps;
  /**Om søkeikonet skal vises. */
  showIcon?: boolean;
} & Pick<InputProps, 'width'> &
  Omit<ComponentPropsWithRef<'input'>, 'width'>;

export const Search = ({
  componentSize = 'medium',
  buttonProps,
  showIcon = true,
  name,
  label,
  tip,
  id,
  value,
  width,
  onChange,
  className,
  style,
  'aria-describedby': ariaDescribedby,
  ref,
  ...rest
}: SearchProps) => {
  const generatedId = useId();
  const uniqueId = id ?? `${generatedId}-searchInput`;
  const hasLabel = !!label;
  const tipId = derivativeIdGenerator(uniqueId, 'tip');
  const suggestionsId = derivativeIdGenerator(uniqueId, 'suggestions');
  const suggestionsDescriptionId = derivativeIdGenerator(
    uniqueId,
    'suggestions-description',
  );

  const { t } = useTranslation();

  const [hasValue, setHasValue] = useState(!!value);

  const context = useAutocompleteSearch();

  const combinedRef = context.inputRef
    ? useCombinedRef(context.inputRef, ref)
    : ref;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value !== '');

    context?.onValueChange?.(e);
    onChange?.(e);
  };

  const clearInput = () => {
    const clearChangeEvent = createClearChangeEvent<HTMLInputElement>(uniqueId);
    handleChange(clearChangeEvent);
  };

  const {
    label: buttonLabel,
    onClick,
    ...otherButtonProps
  } = buttonProps ?? {};

  const hasSuggestions = !!context.suggestions;
  const showSearchButton = !!buttonProps && !!onClick;
  const inputGroup = (
    <HStack
      position="relative"
      width={!showSearchButton ? width : undefined}
      className={!showSearchButton ? className : undefined}
    >
      {showIcon && (
        <Icon
          icon={SearchIcon}
          iconSize={getIconSize(componentSize)}
          className={cn(
            inputStyles['input-group__absolute-element'],
            styles['search-icon'],
          )}
        />
      )}
      <Box
        as={Input}
        {...rest}
        ref={combinedRef}
        name={name}
        type="search"
        id={uniqueId}
        aria-describedby={spaceSeparatedIdListGenerator([
          tip ? tipId : undefined,
          context.suggestions ? suggestionsDescriptionId : undefined,
          ariaDescribedby,
        ])}
        value={context.inputValue ?? value}
        onChange={handleChange}
        autoComplete="off"
        aria-autocomplete={hasSuggestions ? 'list' : undefined}
        aria-controls={hasSuggestions ? suggestionsId : undefined}
        aria-expanded={context.showSuggestions}
        role={hasSuggestions ? 'combobox' : undefined}
        width="100%"
        padding={getPadding(componentSize, showIcon)}
        className={cn(
          styles.input,
          typographyStyles[getTypographyCn(typographyTypes[componentSize])],
        )}
      />
      {hasSuggestions && (
        <>
          <SearchSuggestions
            id={suggestionsId}
            ref={context.suggestionsRef}
            searchId={uniqueId}
            onSuggestionClick={context.onSugggestionClick}
            suggestions={context.suggestions}
            showSuggestions={context.showSuggestions}
            componentSize={componentSize}
          />
          <VisuallyHidden id={suggestionsDescriptionId}>
            {t(texts.useArrowKeys)}
          </VisuallyHidden>
        </>
      )}
      {hasValue && (
        <ClearButton
          size={getIconSize(componentSize)}
          aria-label={t(texts.clearSearch)}
          onClick={clearInput}
          className={styles['clear-button']}
        />
      )}
    </HStack>
  );
  return (
    <VStack gap="x0.125">
      {hasLabel && <Label htmlFor={uniqueId}>{label}</Label>}
      <div>
        {showSearchButton ? (
          <Grid
            className={className}
            width={width}
            columnGap="x0.5"
            rowGap="0"
            marginInline="0"
            gridTemplateColumns="1fr auto"
            style={style}
          >
            {inputGroup}
            <Button
              size={componentSize}
              onClick={onClick}
              {...otherButtonProps}
            >
              {buttonLabel ?? 'Søk'}
            </Button>
          </Grid>
        ) : (
          inputGroup
        )}
        {renderInputMessage(tip, tipId)}
      </div>
    </VStack>
  );
};

Search.displayName = 'Search';

const texts = createTexts({
  clearSearch: {
    nb: 'Tøm søk',
    no: 'Tøm søk',
    nn: 'Tøm søk',
    en: 'Clear search',
  },
  useArrowKeys: {
    nb: 'Bruk piltastene for å navigere i forslagene når listen er utvidet',
    no: 'Bruk piltastene for å navigere i forslagene når listen er utvidet',
    nn: 'Bruk piltastane for å navigere i forslaga når lista er utvida',
    en: 'Use the arrow keys to navigate suggestions when the list is expanded',
  },
});
