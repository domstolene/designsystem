import { Button as DDSButton } from './Button';
import { ButtonProps } from './Button.types';
import { StoryTemplate } from '../../storybook/StoryTemplate';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export default {
  title: 'Design system/Button',
  component: DDSButton,
  argTypes: {
    label: { control: { type: 'text' } },
    loading: { control: { type: 'boolean' } },
    fullWidth: { control: { type: 'boolean' } },
    href: { control: { type: 'text' } }
  },
  parameters: {
    controls: {
      exclude: ['style', 'className', 'target', 'Icon']
    }
  }
};

export const OverviewWithText = (args: ButtonProps) => {
  return (
    <StoryTemplate title="Button overview - with text" display="grid">
      <DDSButton
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
      />
      <DDSButton
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="filled"
      />
      <DDSButton
        {...args}
        label="Danger"
        purpose="danger"
        appearance="filled"
      />
      <DDSButton
        {...args}
        label="Primary"
        purpose="primary"
        appearance="ghost"
      />
      <DDSButton
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="ghost"
      />
      <DDSButton {...args} label="Danger" purpose="danger" appearance="ghost" />
      <DDSButton
        {...args}
        label="Primary"
        purpose="primary"
        appearance="borderless"
      />
      <DDSButton
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="borderless"
      />
      <DDSButton
        {...args}
        label="Danger"
        purpose="danger"
        appearance="borderless"
      />
      <DDSButton
        {...args}
        label="Primary"
        purpose="primary"
        appearance="rounded"
      />
      <DDSButton
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="rounded"
      />
      <DDSButton
        {...args}
        label="Danger"
        purpose="danger"
        appearance="rounded"
      />
      <DDSButton
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="filled"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        label="Danger"
        purpose="danger"
        appearance="filled"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        label="Primary"
        purpose="primary"
        appearance="ghost"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="ghost"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        label="Danger"
        purpose="danger"
        appearance="ghost"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        label="Primary"
        purpose="primary"
        appearance="borderless"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="borderless"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        label="Danger"
        purpose="danger"
        appearance="borderless"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        label="Primary"
        purpose="primary"
        appearance="rounded"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="rounded"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        label="Danger"
        purpose="danger"
        appearance="rounded"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
    </StoryTemplate>
  );
};

export const OverviewJustIcon = (args: ButtonProps) => {
  return (
    <StoryTemplate title="Button overview - just icon" display="grid">
      <DDSButton
        {...args}
        purpose="primary"
        appearance="filled"
        Icon={CloseOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="secondary"
        appearance="filled"
        Icon={CloseOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="danger"
        appearance="filled"
        Icon={CloseOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="primary"
        appearance="ghost"
        Icon={CloseOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="secondary"
        appearance="ghost"
        Icon={CloseOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="danger"
        appearance="ghost"
        Icon={CloseOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="primary"
        appearance="borderless"
        Icon={CloseOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="secondary"
        appearance="borderless"
        Icon={CloseOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="danger"
        appearance="borderless"
        Icon={CloseOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="primary"
        appearance="rounded"
        Icon={CloseOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="secondary"
        appearance="rounded"
        Icon={CloseOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="danger"
        appearance="rounded"
        Icon={CloseOutlinedIcon}
      />
    </StoryTemplate>
  );
};

export const OverviewSizes = (args: ButtonProps) => {
  return (
    <StoryTemplate
      title="Button overview - sizes"
      display="grid"
      columnsAmount={4}
    >
      <DDSButton
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="tiny"
      />
      <DDSButton
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="small"
      />
      <DDSButton
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="medium"
      />
      <DDSButton
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="large"
      />
      <DDSButton
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="tiny"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="small"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="medium"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="large"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="primary"
        appearance="filled"
        size="tiny"
        Icon={CloseOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="primary"
        appearance="filled"
        size="small"
        Icon={CloseOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="primary"
        appearance="filled"
        size="medium"
        Icon={CloseOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="primary"
        appearance="filled"
        size="large"
        Icon={CloseOutlinedIcon}
      />
    </StoryTemplate>
  );
};

export const OverviewLoading = (args: ButtonProps) => {
  return (
    <StoryTemplate
      title="Button overview - loading"
      display="grid"
      columnsAmount={4}
    >
      <DDSButton
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="tiny"
        loading
      />
      <DDSButton
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="small"
        loading
      />
      <DDSButton
        {...args}
        label="label"
        purpose="primary"
        appearance="filled"
        size="medium"
        loading
      />
      <DDSButton
        {...args}
        label="label"
        purpose="primary"
        appearance="filled"
        size="large"
        loading
      />
      <DDSButton
        {...args}
        label="label"
        purpose="secondary"
        appearance="filled"
        size="tiny"
        loading
      />
      <DDSButton
        {...args}
        label="label"
        purpose="secondary"
        appearance="filled"
        size="small"
        loading
      />
      <DDSButton
        {...args}
        label="label"
        purpose="secondary"
        appearance="filled"
        size="medium"
        loading
      />
      <DDSButton
        {...args}
        label="label"
        purpose="secondary"
        appearance="filled"
        size="large"
        loading
      />
      <DDSButton
        {...args}
        label="label"
        purpose="danger"
        appearance="filled"
        size="tiny"
        loading
      />
      <DDSButton
        {...args}
        label="label"
        purpose="danger"
        appearance="filled"
        size="small"
        loading
      />
      <DDSButton
        {...args}
        label="label"
        purpose="danger"
        appearance="filled"
        size="medium"
        loading
      />
      <DDSButton
        {...args}
        label="label"
        purpose="danger"
        appearance="filled"
        size="large"
        loading
      />
      <DDSButton
        {...args}
        label="label"
        purpose="primary"
        appearance="ghost"
        size="tiny"
        loading
      />
      <DDSButton
        {...args}
        label="label"
        purpose="primary"
        appearance="ghost"
        size="small"
        loading
      />
      <DDSButton
        {...args}
        label="label"
        purpose="primary"
        appearance="ghost"
        size="medium"
        loading
      />
      <DDSButton
        {...args}
        label="label"
        purpose="primary"
        appearance="ghost"
        size="large"
        loading
      />
      <DDSButton
        {...args}
        label="label"
        purpose="secondary"
        appearance="ghost"
        size="tiny"
        loading
      />
      <DDSButton
        {...args}
        label="label"
        purpose="secondary"
        appearance="ghost"
        size="small"
        loading
      />
      <DDSButton
        {...args}
        label="label"
        purpose="secondary"
        appearance="ghost"
        size="medium"
        loading
      />
      <DDSButton
        {...args}
        label="label"
        purpose="secondary"
        appearance="ghost"
        size="large"
        loading
      />
      <DDSButton
        {...args}
        label="label"
        purpose="danger"
        appearance="ghost"
        size="tiny"
        loading
      />
      <DDSButton
        {...args}
        label="label"
        purpose="danger"
        appearance="ghost"
        size="small"
        loading
      />
      <DDSButton
        {...args}
        label="label"
        purpose="danger"
        appearance="ghost"
        size="medium"
        loading
      />
      <DDSButton
        {...args}
        label="label"
        purpose="danger"
        appearance="ghost"
        size="large"
        loading
      />
    </StoryTemplate>
  );
};

export const OverviewFullWidth = (args: ButtonProps) => {
  return (
    <StoryTemplate title="Button overview - full width">
      <DDSButton
        {...args}
        label={args.label || 'Primary'}
        purpose="primary"
        appearance="filled"
        size="medium"
        fullWidth
      />
      <DDSButton
        {...args}
        label={args.label || 'Primary'}
        purpose="primary"
        appearance="filled"
        size="medium"
        iconPosition="left"
        Icon={AddCircleOutlineOutlinedIcon}
        fullWidth
      />
      <DDSButton
        {...args}
        label={args.label || 'Primary'}
        purpose="primary"
        appearance="filled"
        size="medium"
        iconPosition="right"
        Icon={AddCircleOutlineOutlinedIcon}
        fullWidth
      />
      <DDSButton
        {...args}
        purpose="primary"
        appearance="filled"
        size="medium"
        Icon={CloseOutlinedIcon}
        fullWidth
      />
      <DDSButton
        {...args}
        label="label"
        purpose="primary"
        appearance="filled"
        size="medium"
        loading
        fullWidth
      />
    </StoryTemplate>
  );
};

export const Default = (args: ButtonProps) => {
  return (
    <StoryTemplate title="Button - default">
      <DDSButton {...args} label={args.label || 'Tekst'} />
    </StoryTemplate>
  );
};

export const WithIcon = (args: ButtonProps) => {
  return (
    <StoryTemplate title="Button - with icon">
      <DDSButton
        {...args}
        label={args.label || 'Tekst'}
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
    </StoryTemplate>
  );
};

export const Icon = (args: ButtonProps) => {
  return (
    <StoryTemplate title="Button - just icon">
      <DDSButton {...args} Icon={CloseOutlinedIcon} />
    </StoryTemplate>
  );
};
export const Ghost = (args: ButtonProps) => {
  return (
    <StoryTemplate title="Button - ghost">
      <DDSButton
        {...args}
        label={args.label || 'tekst'}
        purpose="primary"
        appearance="ghost"
      />
      <DDSButton
        {...args}
        label={args.label || 'tekst'}
        purpose="secondary"
        appearance="ghost"
      />
      <DDSButton
        {...args}
        label={args.label || 'tekst'}
        purpose="danger"
        appearance="ghost"
      />
    </StoryTemplate>
  );
};

export const Borderless = (args: ButtonProps) => {
  return (
    <StoryTemplate title="Button - borderless">
      <DDSButton
        {...args}
        label={args.label || 'tekst'}
        purpose="primary"
        appearance="borderless"
      />
      <DDSButton
        {...args}
        label={args.label || 'tekst'}
        purpose="secondary"
        appearance="borderless"
      />
      <DDSButton
        {...args}
        label={args.label || 'tekst'}
        purpose="danger"
        appearance="borderless"
      />
    </StoryTemplate>
  );
};

export const Rounded = (args: ButtonProps) => {
  return (
    <StoryTemplate title="Button - rounded">
      <DDSButton
        {...args}
        label={args.label || 'tekst'}
        purpose="primary"
        appearance="rounded"
      />
      <DDSButton
        {...args}
        label={args.label || 'tekst'}
        purpose="secondary"
        appearance="rounded"
      />
      <DDSButton
        {...args}
        label={args.label || 'tekst'}
        purpose="danger"
        appearance="rounded"
      />
    </StoryTemplate>
  );
};
