import { Button, ButtonProps } from '.';
import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { icons } from '@norges-domstoler/dds-icons';

export default {
  title: 'dds-components/Button',
  component: Button,
  argTypes: {
    loading: { control: { type: 'boolean' } },
    fullWidth: { control: { type: 'boolean' } },
    href: { control: { type: 'text' } },
    children: { control: { type: 'text' } },
  },
  parameters: {
    controls: {
      exclude: ['style', 'className', 'target', 'Icon', 'label'],
    },
  },
};

export const OverviewWithText = (args: ButtonProps) => {
  return (
    <StoryTemplate title="Button overview - with text" display="grid">
      <Button {...args} purpose="primary" appearance="filled">
        Primary
      </Button>
      <Button {...args} purpose="secondary" appearance="filled">
        Secondary
      </Button>
      <Button {...args} purpose="danger" appearance="filled">
        Danger
      </Button>
      <Button {...args} purpose="primary" appearance="ghost">
        Primary
      </Button>
      <Button {...args} purpose="secondary" appearance="ghost">
        Secondary
      </Button>
      <Button {...args} purpose="danger" appearance="ghost">
        Danger
      </Button>
      <Button {...args} purpose="primary" appearance="borderless">
        Primary
      </Button>
      <Button {...args} purpose="secondary" appearance="borderless">
        Secondary
      </Button>
      <Button {...args} purpose="danger" appearance="borderless">
        Danger
      </Button>
      <Button {...args} purpose="primary" appearance="rounded">
        Primary
      </Button>
      <Button {...args} purpose="secondary" appearance="rounded">
        Secondary
      </Button>
      <Button {...args} purpose="danger" appearance="rounded">
        Danger
      </Button>
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Primary
      </Button>
      <Button
        {...args}
        purpose="secondary"
        appearance="filled"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Secondary
      </Button>
      <Button
        {...args}
        purpose="danger"
        appearance="filled"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Danger
      </Button>
      <Button
        {...args}
        purpose="primary"
        appearance="ghost"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Primary
      </Button>
      <Button
        {...args}
        purpose="secondary"
        appearance="ghost"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Secondary
      </Button>
      <Button
        {...args}
        purpose="danger"
        appearance="ghost"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Danger
      </Button>
      <Button
        {...args}
        purpose="primary"
        appearance="borderless"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Primary
      </Button>
      <Button
        {...args}
        purpose="secondary"
        appearance="borderless"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Secondary
      </Button>
      <Button
        {...args}
        purpose="danger"
        appearance="borderless"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Danger
      </Button>
      <Button
        {...args}
        purpose="primary"
        appearance="rounded"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Primary
      </Button>
      <Button
        {...args}
        purpose="secondary"
        appearance="rounded"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Secondary
      </Button>
      <Button
        {...args}
        purpose="danger"
        appearance="rounded"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Danger
      </Button>
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
        icon={icons.CloseIcon}
      />
      <Button
        {...args}
        purpose="secondary"
        appearance="filled"
        icon={icons.CloseIcon}
      />
      <Button
        {...args}
        purpose="danger"
        appearance="filled"
        icon={icons.CloseIcon}
      />
      <Button
        {...args}
        purpose="primary"
        appearance="ghost"
        icon={icons.CloseIcon}
      />
      <Button
        {...args}
        purpose="secondary"
        appearance="ghost"
        icon={icons.CloseIcon}
      />
      <Button
        {...args}
        purpose="danger"
        appearance="ghost"
        icon={icons.CloseIcon}
      />
      <Button
        {...args}
        purpose="primary"
        appearance="borderless"
        icon={icons.CloseIcon}
      />
      <Button
        {...args}
        purpose="secondary"
        appearance="borderless"
        icon={icons.CloseIcon}
      />
      <Button
        {...args}
        purpose="danger"
        appearance="borderless"
        icon={icons.CloseIcon}
      />
      <Button
        {...args}
        purpose="primary"
        appearance="rounded"
        icon={icons.CloseIcon}
      />
      <Button
        {...args}
        purpose="secondary"
        appearance="rounded"
        icon={icons.CloseIcon}
      />
      <Button
        {...args}
        purpose="danger"
        appearance="rounded"
        icon={icons.CloseIcon}
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
      <Button {...args} purpose="primary" appearance="filled" size="tiny">
        Primary
      </Button>
      <Button {...args} purpose="primary" appearance="filled" size="small">
        Primary
      </Button>
      <Button {...args} purpose="primary" appearance="filled" size="medium">
        Primary
      </Button>
      <Button {...args} purpose="primary" appearance="filled" size="large">
        Primary
      </Button>
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="tiny"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Primary
      </Button>
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="small"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Primary
      </Button>
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="medium"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Primary
      </Button>
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="large"
        iconPosition={args.iconPosition ?? 'left'}
        icon={icons.PlusCircledIcon}
      >
        Primary
      </Button>
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="tiny"
        icon={icons.CloseIcon}
      />
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="small"
        icon={icons.CloseIcon}
      />
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="medium"
        icon={icons.CloseIcon}
      />
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="large"
        icon={icons.CloseIcon}
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
        purpose="primary"
        appearance="filled"
        size="medium"
        fullWidth
      >
        {args.children ?? 'Primary'}
      </Button>
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="medium"
        iconPosition="left"
        icon={icons.PlusCircledIcon}
        fullWidth
      >
        {args.children ?? 'Primary'}
      </Button>
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="medium"
        iconPosition="right"
        icon={icons.PlusCircledIcon}
        fullWidth
      >
        {args.children ?? 'Primary'}
      </Button>
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="medium"
        icon={icons.CloseIcon}
        fullWidth
      />
      <Button
        {...args}
        purpose="primary"
        appearance="filled"
        size="medium"
        loading
        fullWidth
      >
        label
      </Button>
    </StoryTemplate>
  );
};

export const Default = (args: ButtonProps) => {
  return (
    <StoryTemplate title="Button - default">
      <Button {...args}>{args.children ?? 'Tekst'}</Button>
    </StoryTemplate>
  );
};

export const TextWithIcon = (args: ButtonProps) => {
  return (
    <StoryTemplate title="Button - default">
      <Button {...args} icon={icons.PlusCircledIcon}>
        {args.children ?? 'Tekst'}
      </Button>
    </StoryTemplate>
  );
};

export const Icon = (args: ButtonProps) => {
  return (
    <StoryTemplate title="Button - just icon">
      <Button {...args} icon={icons.CloseIcon} />
    </StoryTemplate>
  );
};
export const Ghost = (args: ButtonProps) => {
  return (
    <StoryTemplate title="Button - ghost">
      <Button {...args} purpose="primary" appearance="ghost">
        {args.children ?? 'tekst'}
      </Button>
      <Button {...args} purpose="secondary" appearance="ghost">
        {args.children ?? 'tekst'}
      </Button>
      <Button {...args} purpose="danger" appearance="ghost">
        {args.children ?? 'tekst'}
      </Button>
    </StoryTemplate>
  );
};

export const Borderless = (args: ButtonProps) => {
  return (
    <StoryTemplate title="Button - borderless">
      <Button {...args} purpose="primary" appearance="borderless">
        {args.children ?? 'tekst'}
      </Button>
      <Button {...args} purpose="secondary" appearance="borderless">
        {args.children ?? 'tekst'}
      </Button>
      <Button {...args} purpose="danger" appearance="borderless">
        {args.children ?? 'tekst'}
      </Button>
    </StoryTemplate>
  );
};

export const Rounded = (args: ButtonProps) => {
  return (
    <StoryTemplate title="Button - rounded">
      <Button {...args} purpose="primary" appearance="rounded">
        {args.children ?? 'tekst'}
      </Button>
      <Button {...args} purpose="secondary" appearance="rounded">
        {args.children ?? 'tekst'}
      </Button>
      <Button {...args} purpose="danger" appearance="rounded">
        {args.children ?? 'tekst'}
      </Button>
    </StoryTemplate>
  );
};
