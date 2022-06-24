import { forwardRef } from 'react';
import styled from 'styled-components';
import { descriptionListDescTokens as tokens } from './DescriptionListDesc.tokens';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
import { IconWrapper } from '../IconWrapper';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';

const DListDesc = styled.dd`
  ${tokens.base}
  display: flex;
  align-items: center;
  margin-inline-start: 0;
`;

const StyledIconWrapper = styled(IconWrapper)`
  ${tokens.icon.base}
`;

export type DescriptionListDescProps = BaseComponentPropsWithChildren<
  HTMLElement,
  {
    /**Ikon som vises ved siden av teksten. */
    Icon?: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
  }
>;

export const DescriptionListDesc = forwardRef<
  HTMLElement,
  DescriptionListDescProps
>((props, ref) => {
  const { children, Icon, id, htmlProps, ...rest } = props;

  const dListDescProps = {
    ...getBaseHTMLProps(id, htmlProps, rest),
    children,
    ref
  };

  return (
    <DListDesc {...dListDescProps}>
      {Icon && <StyledIconWrapper Icon={Icon} />} {children}
    </DListDesc>
  );
});
