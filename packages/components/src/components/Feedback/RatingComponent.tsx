import styled, { css } from 'styled-components';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { Layout, Rating } from './Feedback.types';
import { Thumbup, Thumbdown } from '../../icons/tsx';
import { Spinner } from '../Spinner';
import { Tooltip } from '../Tooltip';
import { Label } from '../Typography';
import { Button } from '../Button';
import { FlexContainer } from './FlexContainer';

type RatingContainerProps = {
  layout: Layout;
};

const RatingContainer = styled.div<RatingContainerProps>`
  display: flex;
  gap: ${ddsBaseTokens.spacing.SizesDdsSpacingLocalX05};
  ${({ layout }) => css`
    flex-direction: ${layout === 'horizontal' ? 'row' : 'column'};
    align-items: ${layout === 'horizontal' ? 'center' : 'start'};
  `}
`;
export const RatingButton = styled(Button)`
  padding: 0px;
  color: ${ddsBaseTokens.colors.DdsColorNeutralsGray7};
`;

type RatingComponentType = {
  layout: Layout;
  ratingLabel: string;
  loading: boolean;
  thumbUpTooltip: string;
  thumbDownTooltip: string;
  handleRatingChange: (rating: Rating) => void;
};

export const RatingComponent = ({
  layout,
  ratingLabel,
  loading,
  thumbUpTooltip,
  thumbDownTooltip,
  handleRatingChange,
}: RatingComponentType) => {
  return (
    <RatingContainer layout={layout}>
      <Label>{ratingLabel}</Label>
      {loading ? (
        <Spinner tooltip="Laster opp tilbakemelding ..." />
      ) : (
        <FlexContainer flexDirection="row">
          <Tooltip text={thumbUpTooltip}>
            <RatingButton
              htmlProps={{ 'aria-label': thumbUpTooltip }}
              icon={Thumbup}
              appearance="borderless"
              onClick={() => handleRatingChange('positive')}
            />
          </Tooltip>
          <Tooltip text={thumbDownTooltip}>
            <div>
              <RatingButton
                htmlProps={{ 'aria-label': thumbDownTooltip }}
                icon={Thumbdown}
                appearance="borderless"
                onClick={() => handleRatingChange('negative')}
              />
            </div>
          </Tooltip>
        </FlexContainer>
      )}
    </RatingContainer>
  );
};
