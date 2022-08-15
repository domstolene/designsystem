import { forwardRef } from 'react';
import styled from 'styled-components';
import { descriptionListDescTokens as tokens } from './DescriptionListDesc.tokens';
import { Icon } from '../Icon';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';
import { SvgIcon } from '../../icons/utils';

const DListDesc = styled.dd`
  ${tokens.base}
  margin-inline-start: 0;
`;

export type DescriptionListDescProps = BaseComponentPropsWithChildren<
  HTMLElement,
  {
    /**Ikon som vises ved siden av teksten. */
    icon?: SvgIcon;
  }
>;

export const DescriptionListDesc = forwardRef<
  HTMLElement,
  DescriptionListDescProps
>((props, ref) => {
  const { children, icon, id, className, htmlProps, ...rest } = props;

  const dListDescProps = {
    ...getBaseHTMLProps(id, className, htmlProps, rest),
    children,
    ref
  };

  return (
    <DListDesc {...dListDescProps}>
      {icon && <Icon icon={icon} />} {children}
    </DListDesc>
  );
});
