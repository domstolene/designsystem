import { Button, ButtonProps } from '.';
import { StoryTemplate } from '../../storybook';

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
        icon="addCircled"
      />
      <Button
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="filled"
        iconPosition={args.iconPosition || 'left'}
        icon="addCircled"
      />
      <Button
        {...args}
        label="Danger"
        purpose="danger"
        appearance="filled"
        iconPosition={args.iconPosition || 'left'}
        icon="addCircled"
      />
      <Button
        {...args}
        label="Primary"
        purpose="primary"
        appearance="ghost"
        iconPosition={args.iconPosition || 'left'}
        icon="addCircled"
      />
      <Button
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="ghost"
        iconPosition={args.iconPosition || 'left'}
        icon="addCircled"
      />
      <Button
        {...args}
        label="Danger"
        purpose="danger"
        appearance="ghost"
        iconPosition={args.iconPosition || 'left'}
        icon="addCircled"
      />
      <Button
        {...args}
        label="Primary"
        purpose="primary"
        appearance="borderless"
        iconPosition={args.iconPosition || 'left'}
        icon="addCircled"
      />
      <Button
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="borderless"
        iconPosition={args.iconPosition || 'left'}
        icon="addCircled"
      />
      <Button
        {...args}
        label="Danger"
        purpose="danger"
        appearance="borderless"
        iconPosition={args.iconPosition || 'left'}
        icon="addCircled"
      />
      <Button
        {...args}
        label="Primary"
        purpose="primary"
        appearance="rounded"
        iconPosition={args.iconPosition || 'left'}
        icon="addCircled"
      />
      <Button
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="rounded"
        iconPosition={args.iconPosition || 'left'}
        icon="addCircled"
      />
      <Button
        {...args}
        label="Danger"
        purpose="danger"
        appearance="rounded"
        iconPosition={args.iconPosition || 'left'}
        icon="addCircled"
      />
    </StoryTemplate>
  );
};

export const OverviewJustIcon = (args: ButtonProps) => {
  return (
    <StoryTemplate title="Button overview - just icon" display="grid">
      <Button {...args} purpose="primary" appearance="filled" icon="close" />
      <Button {...args} purpose="secondary" appearance="filled" icon="close" />
      <Button {...args} purpose="danger" appearance="filled" icon="close" />
      <Button {...args} purpose="primary" appearance="ghost" icon="close" />
      <Button {...args} purpose="secondary" appearance="ghost" icon="close" />
      <Button {...args} purpose="danger" appearance="ghost" icon="close" />
      <Button
        {...args}
        purpose="primary"
        appearance="borderless"
        icon="close"
      />
      <Button
        {...args}
        purpose="secondary"
        appearance="borderless"
        icon="close"
      />
      <Button {...args} purpose="danger" appearance="borderless" icon="close" />
      <Button {...args} purpose="primary" appearance="rounded" icon="close" />
      <Button {...args} purpose="secondary" appearance="rounded" icon="close" />
      <Button {...args} purpose="danger" appearance="rounded" icon="close" />
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
        icon="addCircled"
      />
      <Button
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="small"
        iconPosition={args.iconPosition || 'left'}
        icon="addCircled"
      />
      <Button
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="medium"
        iconPosition={args.iconPosition || 'left'}
        icon="addCircled"
      />
      <Button
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="large"
        iconPosition={args.iconPosition || 'left'}
        icon="addCircled"
      />
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="tiny"
        icon="close"
      />
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="small"
        icon="close"
      />
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="medium"
        icon="close"
      />
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="large"
        icon="close"
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
        icon="addCircled"
        fullWidth
      />
      <Button
        {...args}
        label={args.label || 'Primary'}
        purpose="primary"
        appearance="filled"
        size="medium"
        iconPosition="right"
        icon="addCircled"
        fullWidth
      />
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="medium"
        icon="close"
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

export const Icon = (args: ButtonProps) => {
  return (
    <StoryTemplate title="Button - just icon">
      <Button {...args} icon="close" />
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
