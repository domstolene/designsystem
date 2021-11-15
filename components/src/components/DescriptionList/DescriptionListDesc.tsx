import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { descriptionListDescTokens as tokens } from './DescriptionListDesc.tokens';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core';
import { IconWrapper } from '../../helpers/IconWrapper';
import '../../styles/fontStyles.css';

const DListDesc = styled.dd`
  ${tokens.base}
  display: flex;
  align-items: center;
  margin-inline-start: 0;
`;

const StyledIconWrapper = styled(IconWrapper)`
  ${tokens.icon.base}
`;

export type DescriptionListDescProps = {
  Icon?: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
} & HTMLAttributes<HTMLElement>;

export const DescriptionListDesc = forwardRef<
  HTMLElement,
  DescriptionListDescProps
>(({ children, Icon, ...rest }, ref) => {
  const dListDescProps = {
    children,
    ref,
    ...rest
  };

  return (
    <DListDesc {...dListDescProps}>
      {Icon && <StyledIconWrapper Icon={Icon} />} {children}
    </DListDesc>
  );
});
