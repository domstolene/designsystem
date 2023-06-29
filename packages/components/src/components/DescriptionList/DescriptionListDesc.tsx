import { forwardRef } from 'react';
import styled from 'styled-components';
import { descriptionListTokens as tokens } from './DescriptionList.tokens';
import {
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '@norges-domstoler/dds-core';
import { Icon, SvgIcon } from '@norges-domstoler/dds-icons';

const DListDesc = styled.dd`
  margin-inline-start: 0;
  align-items: center;
  display: flex;
  color: ${tokens.desc.base.color};
  gap: ${tokens.desc.base.gap};
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
    ref,
  };

  return (
    <DListDesc {...dListDescProps}>
      {icon && <Icon icon={icon} />} {children}
    </DListDesc>
  );
});

DescriptionListDesc.displayName = 'DescriptionListDesc';
