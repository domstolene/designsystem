import { getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';
import { VStack } from '../layout';
import { Checkbox, type CheckboxProps } from '../SelectionControl/Checkbox';
import { Typography } from '../Typography';
import styles from './CookieBanner.module.css';

export type CookieBannerCheckboxProps = Omit<
  CheckboxProps,
  'label' | 'children'
> & {
  /**Header - kort oppsummering av den spesifikke typen informasjonskapsel. */
  headerText?: string;
  /**Detaljer rundt den spesifikke typen informasjonskapsel. */
  description: string;
};

export function CookieBannerCheckbox({
  headerText,
  description,
  id,
  className,
  style,
  htmlProps,
  ...rest
}: CookieBannerCheckboxProps) {
  return (
    <Checkbox
      {...getBaseHTMLProps(
        id,
        cn(className, styles['checkbox-label']),
        style,
        htmlProps,
        rest,
      )}
    >
      <VStack gap="x0.5">
        <Typography as="span" typographyType="headingSmall">
          {headerText}
        </Typography>
        <Typography as="span" typographyType="bodyLongSmall">
          {description}
        </Typography>
      </VStack>
    </Checkbox>
  );
}

CookieBannerCheckbox.displayName = 'CookieBannerCheckbox';
