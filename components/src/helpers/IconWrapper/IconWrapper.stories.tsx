import { StoryTemplate } from '../../storybook/StoryTemplate';
import { IconWrapper, IconWrapperProps } from './IconWrapper';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';
import { Typography } from '../../components/Typography';

export default {
  title: 'Design system/IconWrapper',
  component: IconWrapper,
  argTypes: {
    color: { control: { type: 'text' } }
  },
  parameters: {
    controls: {
      exclude: ['style', 'className', 'Icon']
    }
  }
};

export const Overview = (args: IconWrapperProps) => {
  return (
    <StoryTemplate
      title="IconWrapper - overview"
      display="grid"
      columnsAmount={4}
    >
      <IconWrapper {...args} iconSize="inline" Icon={LaunchOutlinedIcon} />
      <IconWrapper {...args} iconSize="small" Icon={LaunchOutlinedIcon} />
      <IconWrapper {...args} iconSize="medium" Icon={LaunchOutlinedIcon} />
      <IconWrapper {...args} iconSize="large" Icon={LaunchOutlinedIcon} />
    </StoryTemplate>
  );
};

export const Default = (args: IconWrapperProps) => {
  return (
    <StoryTemplate title="IconWrapper - default">
      <IconWrapper {...args} Icon={LaunchOutlinedIcon} />
    </StoryTemplate>
  );
};

export const Inline = (args: IconWrapperProps) => {
  return (
    <StoryTemplate title="IconWrapper - inline">
      <Typography
        typographyType="bodySans04"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <IconWrapper {...args} Icon={LaunchOutlinedIcon} iconSize="inline" />
        Tekst
      </Typography>
    </StoryTemplate>
  );
};
