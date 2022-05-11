import { Button } from './Button';
import { ButtonProps } from './Button.types';
import { StoryTemplate } from '../../storybook/StoryTemplate';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export default {
  title: 'Design system/Button',
  component: Button,
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
      <Button {...args} label="Primary" purpose="primary" appearance="filled" />
      <Button
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="filled"
      />
      <Button {...args} label="Danger" purpose="danger" appearance="filled" />
      <Button {...args} label="Primary" purpose="primary" appearance="ghost" />
      <Button
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="ghost"
      />
      <Button {...args} label="Danger" purpose="danger" appearance="ghost" />
      <Button
        {...args}
        label="Primary"
        purpose="primary"
        appearance="borderless"
      />
      <Button
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="borderless"
      />
      <Button
        {...args}
        label="Danger"
        purpose="danger"
        appearance="borderless"
      />
      <Button
        {...args}
        label="Primary"
        purpose="primary"
        appearance="rounded"
      />
      <Button
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="rounded"
      />
      <Button {...args} label="Danger" purpose="danger" appearance="rounded" />
      <Button
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <Button
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="filled"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <Button
        {...args}
        label="Danger"
        purpose="danger"
        appearance="filled"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <Button
        {...args}
        label="Primary"
        purpose="primary"
        appearance="ghost"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <Button
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="ghost"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <Button
        {...args}
        label="Danger"
        purpose="danger"
        appearance="ghost"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <Button
        {...args}
        label="Primary"
        purpose="primary"
        appearance="borderless"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <Button
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="borderless"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <Button
        {...args}
        label="Danger"
        purpose="danger"
        appearance="borderless"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <Button
        {...args}
        label="Primary"
        purpose="primary"
        appearance="rounded"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <Button
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="rounded"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <Button
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
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        Icon={CloseOutlinedIcon}
      />
      <Button
        {...args}
        purpose="secondary"
        appearance="filled"
        Icon={CloseOutlinedIcon}
      />
      <Button
        {...args}
        purpose="danger"
        appearance="filled"
        Icon={CloseOutlinedIcon}
      />
      <Button
        {...args}
        purpose="primary"
        appearance="ghost"
        Icon={CloseOutlinedIcon}
      />
      <Button
        {...args}
        purpose="secondary"
        appearance="ghost"
        Icon={CloseOutlinedIcon}
      />
      <Button
        {...args}
        purpose="danger"
        appearance="ghost"
        Icon={CloseOutlinedIcon}
      />
      <Button
        {...args}
        purpose="primary"
        appearance="borderless"
        Icon={CloseOutlinedIcon}
      />
      <Button
        {...args}
        purpose="secondary"
        appearance="borderless"
        Icon={CloseOutlinedIcon}
      />
      <Button
        {...args}
        purpose="danger"
        appearance="borderless"
        Icon={CloseOutlinedIcon}
      />
      <Button
        {...args}
        purpose="primary"
        appearance="rounded"
        Icon={CloseOutlinedIcon}
      />
      <Button
        {...args}
        purpose="secondary"
        appearance="rounded"
        Icon={CloseOutlinedIcon}
      />
      <Button
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
      <Button
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="tiny"
      />
      <Button
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="small"
      />
      <Button
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="medium"
      />
      <Button
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="large"
      />
      <Button
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="tiny"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <Button
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="small"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <Button
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="medium"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <Button
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="large"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="tiny"
        Icon={CloseOutlinedIcon}
      />
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="small"
        Icon={CloseOutlinedIcon}
      />
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="medium"
        Icon={CloseOutlinedIcon}
      />
      <Button
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
      <Button
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="tiny"
        loading
      />
      <Button
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="small"
        loading
      />
      <Button
        {...args}
        label="label"
        purpose="primary"
        appearance="filled"
        size="medium"
        loading
      />
      <Button
        {...args}
        label="label"
        purpose="primary"
        appearance="filled"
        size="large"
        loading
      />
      <Button
        {...args}
        label="label"
        purpose="secondary"
        appearance="filled"
        size="tiny"
        loading
      />
      <Button
        {...args}
        label="label"
        purpose="secondary"
        appearance="filled"
        size="small"
        loading
      />
      <Button
        {...args}
        label="label"
        purpose="secondary"
        appearance="filled"
        size="medium"
        loading
      />
      <Button
        {...args}
        label="label"
        purpose="secondary"
        appearance="filled"
        size="large"
        loading
      />
      <Button
        {...args}
        label="label"
        purpose="danger"
        appearance="filled"
        size="tiny"
        loading
      />
      <Button
        {...args}
        label="label"
        purpose="danger"
        appearance="filled"
        size="small"
        loading
      />
      <Button
        {...args}
        label="label"
        purpose="danger"
        appearance="filled"
        size="medium"
        loading
      />
      <Button
        {...args}
        label="label"
        purpose="danger"
        appearance="filled"
        size="large"
        loading
      />
      <Button
        {...args}
        label="label"
        purpose="primary"
        appearance="ghost"
        size="tiny"
        loading
      />
      <Button
        {...args}
        label="label"
        purpose="primary"
        appearance="ghost"
        size="small"
        loading
      />
      <Button
        {...args}
        label="label"
        purpose="primary"
        appearance="ghost"
        size="medium"
        loading
      />
      <Button
        {...args}
        label="label"
        purpose="primary"
        appearance="ghost"
        size="large"
        loading
      />
      <Button
        {...args}
        label="label"
        purpose="secondary"
        appearance="ghost"
        size="tiny"
        loading
      />
      <Button
        {...args}
        label="label"
        purpose="secondary"
        appearance="ghost"
        size="small"
        loading
      />
      <Button
        {...args}
        label="label"
        purpose="secondary"
        appearance="ghost"
        size="medium"
        loading
      />
      <Button
        {...args}
        label="label"
        purpose="secondary"
        appearance="ghost"
        size="large"
        loading
      />
      <Button
        {...args}
        label="label"
        purpose="danger"
        appearance="ghost"
        size="tiny"
        loading
      />
      <Button
        {...args}
        label="label"
        purpose="danger"
        appearance="ghost"
        size="small"
        loading
      />
      <Button
        {...args}
        label="label"
        purpose="danger"
        appearance="ghost"
        size="medium"
        loading
      />
      <Button
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
      <Button
        {...args}
        label={args.label || 'Primary'}
        purpose="primary"
        appearance="filled"
        size="medium"
        fullWidth
      />
      <Button
        {...args}
        label={args.label || 'Primary'}
        purpose="primary"
        appearance="filled"
        size="medium"
        iconPosition="left"
        Icon={AddCircleOutlineOutlinedIcon}
        fullWidth
      />
      <Button
        {...args}
        label={args.label || 'Primary'}
        purpose="primary"
        appearance="filled"
        size="medium"
        iconPosition="right"
        Icon={AddCircleOutlineOutlinedIcon}
        fullWidth
      />
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="medium"
        Icon={CloseOutlinedIcon}
        fullWidth
      />
      <Button
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
      <Button {...args} label={args.label || 'Tekst'} />
    </StoryTemplate>
  );
};

export const WithIcon = (args: ButtonProps) => {
  return (
    <StoryTemplate title="Button - with icon">
      <Button
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
      <Button {...args} Icon={CloseOutlinedIcon} />
    </StoryTemplate>
  );
};
export const Ghost = (args: ButtonProps) => {
  return (
    <StoryTemplate title="Button - ghost">
      <Button
        {...args}
        label={args.label || 'tekst'}
        purpose="primary"
        appearance="ghost"
      />
      <Button
        {...args}
        label={args.label || 'tekst'}
        purpose="secondary"
        appearance="ghost"
      />
      <Button
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
      <Button
        {...args}
        label={args.label || 'tekst'}
        purpose="primary"
        appearance="borderless"
      />
      <Button
        {...args}
        label={args.label || 'tekst'}
        purpose="secondary"
        appearance="borderless"
      />
      <Button
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
      <Button
        {...args}
        label={args.label || 'tekst'}
        purpose="primary"
        appearance="rounded"
      />
      <Button
        {...args}
        label={args.label || 'tekst'}
        purpose="secondary"
        appearance="rounded"
      />
      <Button
        {...args}
        label={args.label || 'tekst'}
        purpose="danger"
        appearance="rounded"
      />
    </StoryTemplate>
  );
};
