import { StoryTemplate } from '../../storybook';
import { Spinner, SpinnerProps } from '.';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

export default {
  title: 'Design system/Spinner',
  component: Spinner,
  argTypes: {
    color: { control: { type: 'text' } },
    size: { control: { type: 'text' } },
  },
};

export const Overview = () => (
  <StoryTemplate
    title="Spinner - overview"
    display="grid"
    columnsAmount={4}
    gap="30px"
  >
    <Spinner />
    <Spinner size="60px" tooltip="Egendefinert melding" />
    <Spinner color="gray4" />
    <Spinner color="gray4" size="60px" />
    <Spinner color="success" />
    <Spinner color="success" size="60px" />
    <Spinner color="gray7" />
    <Spinner color="gray7" size="60px" />
  </StoryTemplate>
);

export const Default = (args: SpinnerProps) => (
  <StoryTemplate title="Spinner - default">
    <Spinner
      {...args}
      size={args.size || ddsBaseTokens.iconSizes.DdsIconsizeMedium}
      color={args.color || 'interactive'}
    />
  </StoryTemplate>
);
