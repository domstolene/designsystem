import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { StoryTemplate } from '@norges-domstoler/storybook-components';

import { Spinner, type SpinnerProps } from '.';

export default {
  title: 'dds-components/Spinner',
  component: Spinner,
  argTypes: {
    color: { control: { type: 'text' } },
    size: { control: { type: 'text' } },
    tooltip: { control: { type: 'text' }, defaultValue: 'Innlasting pågår' },
  },
};

export const Overview = (args: SpinnerProps) => (
  <StoryTemplate
    title="Spinner - overview"
    display="grid"
    $columnsAmount={4}
    gap="30px"
  >
    <Spinner {...args} />
    <Spinner {...args} size="60px" tooltip="Egendefinert melding" />
    <Spinner {...args} color="gray4" />
    <Spinner {...args} color="gray4" size="60px" />
    <Spinner {...args} color="success" />
    <Spinner {...args} color="success" size="60px" />
    <Spinner {...args} color="gray7" />
    <Spinner {...args} color="gray7" size="60px" />
  </StoryTemplate>
);

export const Default = (args: SpinnerProps) => (
  <StoryTemplate title="Spinner - default">
    <Spinner
      {...args}
      size={args.size ?? ddsBaseTokens.iconSizes.DdsIconsizeMedium}
      color={args.color ?? 'interactive'}
    />
  </StoryTemplate>
);
