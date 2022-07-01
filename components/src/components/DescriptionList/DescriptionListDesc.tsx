import { forwardRef } from 'react';
import styled from 'styled-components';
import { descriptionListDescTokens as tokens } from './DescriptionListDesc.tokens';
import { Icon, IconName } from '../Icon';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';

const DListDesc = styled.dd`
  ${tokens.base}
  margin-inline-start: 0;
`;

export type DescriptionListDescProps = BaseComponentPropsWithChildren<
  HTMLElement,
  {
    /**Ikon som vises ved siden av teksten. */
    icon?: IconName;
  }
>;

export const DescriptionListDesc = forwardRef<
  HTMLElement,
  DescriptionListDescProps
>((props, ref) => {
  const { children, icon, id, htmlProps, ...rest } = props;

  const dListDescProps = {
    ...getBaseHTMLProps(id, htmlProps, rest),
    children,
    ref
  };

  return (
    <DListDesc {...dListDescProps}>
      {icon && <Icon iconName={icon} />} {children}
    </DListDesc>
  );
});
