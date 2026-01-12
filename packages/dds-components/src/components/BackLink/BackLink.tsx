import { type ComponentPropsWithRef, type ElementType } from 'react';

import styles from './BackLink.module.css';
import { createTexts, useTranslation } from '../../i18n';
import { cn } from '../../utils';
import { focusable } from '../helpers/styling/focus.module.css';
import { Icon } from '../Icon';
import { ArrowLeftIcon } from '../Icon/icons';
import { HStack } from '../layout';
import tgStyles from '../Typography/typographyStyles.module.css';

export type BackLinkProps = {
  /**
   * Ledetekst.
   */
  label: string;
  /**
   * Custom HTML- eller React-element som returneres. Brukes ved klient-side ruting o.l.
   */
  as?: ElementType;
} & Pick<ComponentPropsWithRef<'a'>, 'onClick' | 'href' | 'ref'>;

export const BackLink = ({ label, ref, as = 'a', ...rest }: BackLinkProps) => {
  const { t } = useTranslation();
  return (
    <nav
      ref={ref}
      aria-label={t(texts.goBack)}
      className={tgStyles['body-short-medium']}
    >
      <HStack
        as={as}
        className={cn(tgStyles.a, focusable)}
        rel="noopener noreferer"
        {...rest}
      >
        <Icon
          icon={ArrowLeftIcon}
          iconSize="component"
          className={cn(styles.icon)}
        />
        {label}
      </HStack>
    </nav>
  );
};

BackLink.displayName = 'BackLink';

const texts = createTexts({
  goBack: {
    nb: 'Gå tilbake',
    no: 'Gå tilbake',
    nn: 'Gå tilbake',
    en: 'Go back',
    se: 'Mana ruovttoluotta',
  },
});
