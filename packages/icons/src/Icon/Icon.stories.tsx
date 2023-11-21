import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { OpenExternalIcon as OpenExternal } from '../icons/openExternal';
import { Icon, IconProps } from '.';

export default {
  title: 'dds-components/Icon',
  component: Icon,
  argTypes: {
    color: { control: { type: 'text' } },
  },
  parameters: {
    controls: {
      exclude: ['className'],
    },
  },
};

export const Overview = (args: IconProps) => {
  return (
    <StoryTemplate title="Icon - overview" display="grid" $columnsAmount={4}>
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
      <p style={{ display: 'flex', alignItems: 'center', fontSize: '20px' }}>
        <Icon {...args} icon={OpenExternal} iconSize="inherit" />
        Tekst
      </p>
    </StoryTemplate>
  );
};
