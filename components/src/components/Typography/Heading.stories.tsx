import { Typography as DDSTypography } from './Typography';
import { StoryTemplate } from '../../storybook/StoryTemplate';

export default {
  title: 'Design system/Typography/Overview/Headings',
  component: DDSTypography
};

export const Headings = () => {
  return (
    <StoryTemplate title="Headings - overview" gap="30px">
      <DDSTypography typographyType="headingSans01">
        Heading-sans-01
      </DDSTypography>
      <DDSTypography typographyType="headingSans02">
        Heading-sans-02
      </DDSTypography>
      <DDSTypography typographyType="headingSans03">
        Heading-sans-03
      </DDSTypography>
      <DDSTypography typographyType="headingSans04">
        Heading-sans-04
      </DDSTypography>
      <DDSTypography typographyType="headingSans05">
        Heading-sans-05
      </DDSTypography>
      <DDSTypography typographyType="headingSans06">
        Heading-sans-06
      </DDSTypography>
      <DDSTypography typographyType="headingSans07">
        Heading-sans-07
      </DDSTypography>
      <DDSTypography typographyType="headingSans08">
        Heading-sans-08
      </DDSTypography>
    </StoryTemplate>
  );
};
