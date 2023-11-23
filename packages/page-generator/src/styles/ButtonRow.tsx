import { ComponentProps } from 'react';
import { GridChild } from '@norges-domstoler/dds-components';
import styled, { IStyledComponent } from 'styled-components';
import { PageGeneratorTokens } from '../tokens';

export const ButtonRow: IStyledComponent<
  'web',
  ComponentProps<typeof GridChild>
> = styled(GridChild)`
  margin-top: ${PageGeneratorTokens.buttonRow.marginTop};
`;
