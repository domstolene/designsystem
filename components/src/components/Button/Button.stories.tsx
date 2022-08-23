import { Button, ButtonProps } from '.';
import { StoryTemplate } from '../../storybook';
import { PlusCircledIcon, CloseIcon } from '../../icons/tsx';

export default {
  title: 'Design system/Button',
  component: Button,
  argTypes: {
    label: { control: { type: 'text' } },
    loading: { control: { type: 'boolean' } },
    fullWidth: { control: { type: 'boolean' } },
    href: { control: { type: 'text' } },
  },
  parameters: {
    controls: {
      exclude: ['style', 'className', 'target', 'Icon'],
    },
  },
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
        icon={PlusCircledIcon}
      />
      <Button
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="filled"
        iconPosition={args.iconPosition || 'left'}
        icon={PlusCircledIcon}
      />
      <Button
        {...args}
        label="Danger"
        purpose="danger"
        appearance="filled"
        iconPosition={args.iconPosition || 'left'}
        icon={PlusCircledIcon}
      />
      <Button
        {...args}
        label="Primary"
        purpose="primary"
        appearance="ghost"
        iconPosition={args.iconPosition || 'left'}
        icon={PlusCircledIcon}
      />
      <Button
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="ghost"
        iconPosition={args.iconPosition || 'left'}
        icon={PlusCircledIcon}
      />
      <Button
        {...args}
        label="Danger"
        purpose="danger"
        appearance="ghost"
        iconPosition={args.iconPosition || 'left'}
        icon={PlusCircledIcon}
      />
      <Button
        {...args}
        label="Primary"
        purpose="primary"
        appearance="borderless"
        iconPosition={args.iconPosition || 'left'}
        icon={PlusCircledIcon}
      />
      <Button
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="borderless"
        iconPosition={args.iconPosition || 'left'}
        icon={PlusCircledIcon}
      />
      <Button
        {...args}
        label="Danger"
        purpose="danger"
        appearance="borderless"
        iconPosition={args.iconPosition || 'left'}
        icon={PlusCircledIcon}
      />
      <Button
        {...args}
        label="Primary"
        purpose="primary"
        appearance="rounded"
        iconPosition={args.iconPosition || 'left'}
        icon={PlusCircledIcon}
      />
      <Button
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="rounded"
        iconPosition={args.iconPosition || 'left'}
        icon={PlusCircledIcon}
      />
      <Button
        {...args}
        label="Danger"
        purpose="danger"
        appearance="rounded"
        iconPosition={args.iconPosition || 'left'}
        icon={PlusCircledIcon}
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
        icon={CloseIcon}
      />
      <Button
        {...args}
        purpose="secondary"
        appearance="filled"
        icon={CloseIcon}
      />
      <Button {...args} purpose="danger" appearance="filled" icon={CloseIcon} />
      <Button {...args} purpose="primary" appearance="ghost" icon={CloseIcon} />
      <Button
        {...args}
        purpose="secondary"
        appearance="ghost"
        icon={CloseIcon}
      />
      <Button {...args} purpose="danger" appearance="ghost" icon={CloseIcon} />
      <Button
        {...args}
        purpose="primary"
        appearance="borderless"
        icon={CloseIcon}
      />
      <Button
        {...args}
        purpose="secondary"
        appearance="borderless"
        icon={CloseIcon}
      />
      <Button
        {...args}
        purpose="danger"
        appearance="borderless"
        icon={CloseIcon}
      />
      <Button
        {...args}
        purpose="primary"
        appearance="rounded"
        icon={CloseIcon}
      />
      <Button
        {...args}
        purpose="secondary"
        appearance="rounded"
        icon={CloseIcon}
      />
      <Button
        {...args}
        purpose="danger"
        appearance="rounded"
        icon={CloseIcon}
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
        icon={PlusCircledIcon}
      />
      <Button
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="small"
        iconPosition={args.iconPosition || 'left'}
        icon={PlusCircledIcon}
      />
      <Button
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="medium"
        iconPosition={args.iconPosition || 'left'}
        icon={PlusCircledIcon}
      />
      <Button
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="large"
        iconPosition={args.iconPosition || 'left'}
        icon={PlusCircledIcon}
      />
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="tiny"
        icon={CloseIcon}
      />
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="small"
        icon={CloseIcon}
      />
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="medium"
        icon={CloseIcon}
      />
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="large"
        icon={CloseIcon}
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
        purpose="primary"
        appearance="filled"
        size="tiny"
        loading
      />
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="small"
        loading
      />
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="medium"
        loading
      />
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="large"
        loading
      />
      <Button
        {...args}
        purpose="secondary"
        appearance="filled"
        size="tiny"
        loading
      />
      <Button
        {...args}
        purpose="secondary"
        appearance="filled"
        size="small"
        loading
      />
      <Button
        {...args}
        purpose="secondary"
        appearance="filled"
        size="medium"
        loading
      />
      <Button
        {...args}
        purpose="secondary"
        appearance="filled"
        size="large"
        loading
      />
      <Button
        {...args}
        purpose="danger"
        appearance="filled"
        size="tiny"
        loading
      />
      <Button
        {...args}
        purpose="danger"
        appearance="filled"
        size="small"
        loading
      />
      <Button
        {...args}
        purpose="danger"
        appearance="filled"
        size="medium"
        loading
      />
      <Button
        {...args}
        purpose="danger"
        appearance="filled"
        size="large"
        loading
      />
      <Button
        {...args}
        purpose="primary"
        appearance="ghost"
        size="tiny"
        loading
      />
      <Button
        {...args}
        purpose="primary"
        appearance="ghost"
        size="small"
        loading
      />
      <Button
        {...args}
        purpose="primary"
        appearance="ghost"
        size="medium"
        loading
      />
      <Button
        {...args}
        purpose="primary"
        appearance="ghost"
        size="large"
        loading
      />
      <Button
        {...args}
        purpose="secondary"
        appearance="ghost"
        size="tiny"
        loading
      />
      <Button
        {...args}
        purpose="secondary"
        appearance="ghost"
        size="small"
        loading
      />
      <Button
        {...args}
        purpose="secondary"
        appearance="ghost"
        size="medium"
        loading
      />
      <Button
        {...args}
        purpose="secondary"
        appearance="ghost"
        size="large"
        loading
      />
      <Button
        {...args}
        purpose="danger"
        appearance="ghost"
        size="tiny"
        loading
      />
      <Button
        {...args}
        purpose="danger"
        appearance="ghost"
        size="small"
        loading
      />
      <Button
        {...args}
        purpose="danger"
        appearance="ghost"
        size="medium"
        loading
      />
      <Button
        {...args}
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
        icon={PlusCircledIcon}
        fullWidth
      />
      <Button
        {...args}
        label={args.label || 'Primary'}
        purpose="primary"
        appearance="filled"
        size="medium"
        iconPosition="right"
        icon={PlusCircledIcon}
        fullWidth
      />
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="medium"
        icon={CloseIcon}
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
      <Button label="Tekst" {...args} />
    </StoryTemplate>
  );
};

export const TextWithIcon = (args: ButtonProps) => {
  return (
    <StoryTemplate title="Button - default">
      <Button label="Tekst" {...args} icon={PlusCircledIcon} />
    </StoryTemplate>
  );
};

export const Icon = (args: ButtonProps) => {
  return (
    <StoryTemplate title="Button - just icon">
      <Button {...args} icon={CloseIcon} />
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
