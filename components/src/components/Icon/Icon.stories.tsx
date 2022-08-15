import { StoryTemplate } from '../../storybook';
import { Icon, IconProps } from '.';
import { Typography } from '../Typography';
import { OpenExternalIcon as OpenExternal } from '../../icons/tsx';

export default {
  title: 'Design system/Icon',
  component: Icon,
  argTypes: {
    color: { control: { type: 'text' } }
  },
  parameters: {
    controls: {
      exclude: ['className']
    }
  }
};

export const Overview = (args: IconProps) => {
  return (
    <StoryTemplate title="Icon - overview" display="grid" columnsAmount={4}>
      <Icon {...args} iconSize="inherit" icon={OpenExternal} />
      <Icon {...args} iconSize="small" icon={OpenExternal} />
      <Icon {...args} iconSize="medium" icon={OpenExternal} />
      <Icon {...args} iconSize="large" icon={OpenExternal} />
    </StoryTemplate>
  );
};

export const Default = (args: IconProps) => {
  return (
    <StoryTemplate title="Icon - default">
      <Icon {...args} icon={OpenExternal} />
    </StoryTemplate>
  );
};

export const Inherit = (args: IconProps) => {
  return (
    <StoryTemplate title="Icon - inherit">
      <Typography
        typographyType="bodySans04"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <Icon {...args} icon={OpenExternal} iconSize="inherit" />
        Tekst
      </Typography>
    </StoryTemplate>
  );
};
