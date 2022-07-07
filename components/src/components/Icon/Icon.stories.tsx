import { StoryTemplate } from '../../storybook';
import { Icon, IconProps } from '.';
import { Typography } from '../Typography';

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
      <Icon
        {...args}
        iconSize="inherit"
        iconName={args.iconName || 'openExternal'}
      />
      <Icon
        {...args}
        iconSize="small"
        iconName={args.iconName || 'openExternal'}
      />
      <Icon
        {...args}
        iconSize="medium"
        iconName={args.iconName || 'openExternal'}
      />
      <Icon
        {...args}
        iconSize="large"
        iconName={args.iconName || 'openExternal'}
      />
    </StoryTemplate>
  );
};

export const Default = (args: IconProps) => {
  return (
    <StoryTemplate title="Icon - default">
      <Icon {...args} iconName={args.iconName || 'openExternal'} />
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
        <Icon
          {...args}
          iconName={args.iconName || 'openExternal'}
          iconSize="inherit"
        />
        Tekst
      </Typography>
    </StoryTemplate>
  );
};
