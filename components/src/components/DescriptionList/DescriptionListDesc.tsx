import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { descriptionListDescTokens as tokens } from './DescriptionListDesc.tokens';
import { Icon, IconName } from '../Icon';

const DListDesc = styled.dd`
  ${tokens.base}
  margin-inline-start: 0;
`;

export type DescriptionListDescProps = {
  /**Ikon som vises ved siden av teksten. */
  icon?: IconName;
} & HTMLAttributes<HTMLElement>;

export const DescriptionListDesc = forwardRef<
  HTMLElement,
  DescriptionListDescProps
>(({ children, icon, ...rest }, ref) => {
  const dListDescProps = {
    children,
    ref,
    ...rest
  };

  return (
    <DListDesc {...dListDescProps}>
      {icon && <Icon iconName={icon} />} {children}
    </DListDesc>
  );
});
