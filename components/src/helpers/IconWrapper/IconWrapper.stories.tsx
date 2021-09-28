import { storyHTMLTemplate } from '../../storybook/storyHTMLTemplate';
import { storyHTMLGridTemplate } from '../../storybook/storyHTMLGridTemplate';
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
  return storyHTMLGridTemplate(
    'IconWrapper - overview',
    <>
      <IconWrapper {...args} iconSize="inline" Icon={LaunchOutlinedIcon} />
      <IconWrapper {...args} iconSize="small" Icon={LaunchOutlinedIcon} />
      <IconWrapper {...args} iconSize="medium" Icon={LaunchOutlinedIcon} />
      <IconWrapper {...args} iconSize="large" Icon={LaunchOutlinedIcon} />
    </>,
    '30px',
    4
  );
};

export const Default = (args: IconWrapperProps) => {
  return storyHTMLTemplate(
    'IconWrapper - default',
    <IconWrapper {...args} Icon={LaunchOutlinedIcon} />
  );
};

export const Inline = (args: IconWrapperProps) => {
  return storyHTMLTemplate(
    'IconWrapper - inline',
    <Typography
      typographyType="bodySans04"
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <IconWrapper {...args} Icon={LaunchOutlinedIcon} iconSize="inline" />
      Tekst
    </Typography>
  );
};
