import styled from 'styled-components';
import { FlexContainer } from './FlexContainer';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { Icon } from '../Icon';
import { Rating } from './Feedback.types';
import { ThumbupFilled, ThumbdownFilled } from '../../icons/tsx';
import { Button } from '../Button';
import { TextArea } from '../TextArea';
import { Paragraph } from '../Typography';

const IconLabelSpan = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${ddsBaseTokens.spacing.SizesDdsSpacingLocalX05};
`;

type CommentComponentType = {
  rating: Rating | null;
  feedbackText: string | undefined;
  positiveFeedbackLabel: string;
  negativeFeedbackLabel: string;
  loading: boolean;
  handleSubmit: () => void;
  handleFeedbackTextChange: (newText: string) => void;
};

export const CommentComponent = ({
  rating,
  feedbackText,
  positiveFeedbackLabel,
  negativeFeedbackLabel,
  loading,
  handleSubmit,
  handleFeedbackTextChange,
}: CommentComponentType) => {
  return (
    <FlexContainer flexDirection="column">
      <IconLabelSpan>
        <Icon
          icon={rating === 'positive' ? ThumbupFilled : ThumbdownFilled}
          color={ddsBaseTokens.colors.DdsColorInteractiveBase}
        />
        <Paragraph>Takk for tilbakemeldingen!</Paragraph>
      </IconLabelSpan>
      <TextArea
        value={feedbackText}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          handleFeedbackTextChange(e.target.value)
        }
        label={
          rating === 'positive' ? positiveFeedbackLabel : negativeFeedbackLabel
        }
        tip="Ikke send inn sensitive eller personlige opplysninger"
      />

      <Button
        label="Send inn"
        purpose="secondary"
        size="small"
        onClick={handleSubmit}
        loading={loading}
      />
    </FlexContainer>
  );
};