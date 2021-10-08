import { Typography as DDSTypography } from './Typography';
import { StoryTemplate } from '../../storybook/StoryTemplate';

export default {
  title: 'Design system/Typography/Overview/Supporting',
  component: DDSTypography
};

export const Supporting = () => {
  return (
    <StoryTemplate title="Supporting styles - overview" gap="30px">
      <DDSTypography typographyType="supportingStyleLabel01">
        supportingStyleLabel01
      </DDSTypography>
      <DDSTypography typographyType="supportingStyleHelperText01">
        supportingStyleHelperText01
      </DDSTypography>
      <DDSTypography typographyType="supportingStyleInputText01">
        supportingStyleInputText01
      </DDSTypography>
      <DDSTypography typographyType="supportingStyleInputText02">
        supportingStyleInputText02
      </DDSTypography>
      <DDSTypography typographyType="supportingStyleInputText03">
        supportingStyleInputText03
      </DDSTypography>
      <DDSTypography typographyType="supportingStylePlaceholderText01">
        supportingStylePlaceholderText01
      </DDSTypography>
      <DDSTypography typographyType="supportingStyleTiny01">
        supportingStyleTiny01
      </DDSTypography>
    </StoryTemplate>
  );
};
