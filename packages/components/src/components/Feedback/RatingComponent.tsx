import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import styled, { css } from 'styled-components';

import { type Layout, type Rating } from './Feedback.types';
import { Button } from '../Button';
import { Thumbdown, Thumbup } from '../Icon/icons';
import { Spinner } from '../Spinner';
import { HStack } from '../Stack';
import { Tooltip } from '../Tooltip';
import { Label } from '../Typography';

const RatingContainer = styled.div<{
  $layout: Layout;
}>`
  display: flex;
  gap: ${ddsBaseTokens.spacing.SizesDdsSpacingX1};
  ${({ $layout }) => css`
    flex-direction: ${$layout === 'horizontal' ? 'row' : 'column'};
    align-items: ${$layout === 'horizontal' ? 'center' : 'start'};
  `}
`;

const RatingButton = styled(Button)`
  padding: 0px;
  color: ${ddsBaseTokens.colors.DdsColorNeutralsGray7};
`;

interface RatingComponentType {
  layout: Layout;
  ratingLabel: string;
  loading: boolean;
  thumbUpTooltip: string;
  thumbDownTooltip: string;
  handleRatingChange: (rating: Rating) => void;
}

export const RatingComponent = ({
  layout,
  ratingLabel,
  loading,
  thumbUpTooltip,
  thumbDownTooltip,
  handleRatingChange,
}: RatingComponentType) => {
  return (
    <RatingContainer $layout={layout}>
      <Label>{ratingLabel}</Label>
      {loading ? (
        <Spinner tooltip="Laster opp tilbakemelding ..." />
      ) : (
        <HStack gap="x1">
          <Tooltip text={thumbUpTooltip}>
            <RatingButton
              htmlProps={{ 'aria-label': thumbUpTooltip }}
              icon={Thumbup}
              appearance="borderless"
              onClick={() => handleRatingChange('positive')}
              size="large"
            />
          </Tooltip>
          <Tooltip text={thumbDownTooltip}>
            <div>
              <RatingButton
                htmlProps={{ 'aria-label': thumbDownTooltip }}
                icon={Thumbdown}
                appearance="borderless"
                onClick={() => handleRatingChange('negative')}
                size="large"
              />
            </div>
          </Tooltip>
        </HStack>
      )}
    </RatingContainer>
  );
};
