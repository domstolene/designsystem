import { StoryTemplate } from '../../storybook';
import { IconWrapper, IconWrapper2, IconWrapperProps } from '.';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import { Typography } from '../Typography';

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

export const Default2 = (args: IconWrapperProps) => {
  return (
    <StoryTemplate title="IconWrapper2 - default">
      <IconWrapper2 {...args} iconName="sortByAlpha" />
      <IconWrapper2 {...args} color="red" iconName="sortByAlpha" />
      <IconWrapper2 {...args} iconName="sortByAlpha" iconSize="inline" />
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
