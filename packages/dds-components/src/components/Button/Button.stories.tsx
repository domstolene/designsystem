import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { ArrowLeftIcon } from '../..';
import {
  categoryHtml,
  htmlEventArgType,
  htmlPropsArgType,
} from '../../storybook/helpers';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';

import { Button } from '.';

export default {
  title: 'dds-components/Components/Button',
  component: Button,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
  argTypes: {
    href: { table: categoryHtml },
    children: { control: 'text' },
    target: { control: false, table: categoryHtml },
    icon: { control: false },
    htmlProps: htmlPropsArgType,
    onClick: htmlEventArgType,
    onBlur: htmlEventArgType,
    onFocus: htmlEventArgType,
  },
  args: { onClick: fn(), onBlur: fn(), onFocus: fn() },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: 'Tekst' },
};

export const OverviewPurposes: Story = {
  render: args => (
    <StoryHStack>
      <StoryVStack>
        <Button
          {...args}
          purpose="primary"
          onClick={() => console.log('click')}
        >
          Primary
        </Button>
        <Button {...args} purpose="secondary">
          Secondary
        </Button>
        <Button {...args} purpose="tertiary">
          Tertiary
        </Button>
        <Button {...args} purpose="danger">
          Danger
        </Button>
      </StoryVStack>
      <StoryVStack>
        <Button
          {...args}
          purpose="primary"
          iconPosition={args.iconPosition ?? 'left'}
          icon={ArrowLeftIcon}
        >
          Primary
        </Button>
        <Button
          {...args}
          purpose="secondary"
          iconPosition={args.iconPosition ?? 'left'}
          icon={ArrowLeftIcon}
        >
          Secondary
        </Button>
        <Button
          {...args}
          purpose="tertiary"
          iconPosition={args.iconPosition ?? 'left'}
          icon={ArrowLeftIcon}
        >
          Tertiary
        </Button>
        <Button
          {...args}
          purpose="danger"
          iconPosition={args.iconPosition ?? 'left'}
          icon={ArrowLeftIcon}
        >
          Danger
        </Button>
      </StoryVStack>
      <StoryVStack>
        <Button {...args} icon={ArrowLeftIcon} purpose="primary" />
        <Button {...args} icon={ArrowLeftIcon} purpose="secondary" />
        <Button {...args} icon={ArrowLeftIcon} purpose="tertiary" />
        <Button {...args} icon={ArrowLeftIcon} purpose="danger" />
      </StoryVStack>
    </StoryHStack>
  ),
};

export const OverviewSizes: Story = {
  args: { purpose: 'primary' },
  render: args => (
    <StoryHStack>
      <StoryVStack>
        <Button {...args} size="xsmall">
          Primary
        </Button>
        <Button {...args} size="small">
          Primary
        </Button>
        <Button {...args} size="medium">
          Primary
        </Button>
        <Button {...args} size="large">
          Primary
        </Button>
      </StoryVStack>
      <StoryVStack>
        <Button
          {...args}
          size="xsmall"
          iconPosition={args.iconPosition ?? 'left'}
          icon={ArrowLeftIcon}
        >
          Primary
        </Button>
        <Button
          {...args}
          size="small"
          iconPosition={args.iconPosition ?? 'left'}
          icon={ArrowLeftIcon}
        >
          Primary
        </Button>
        <Button
          {...args}
          size="medium"
          iconPosition={args.iconPosition ?? 'left'}
          icon={ArrowLeftIcon}
        >
          Primary
        </Button>
        <Button
          {...args}
          size="large"
          iconPosition={args.iconPosition ?? 'left'}
          icon={ArrowLeftIcon}
        >
          Primary
        </Button>
      </StoryVStack>
      <StoryVStack>
        <Button {...args} size="xsmall" icon={ArrowLeftIcon} />
        <Button {...args} size="small" icon={ArrowLeftIcon} />
        <Button {...args} size="medium" icon={ArrowLeftIcon} />
        <Button {...args} size="large" icon={ArrowLeftIcon} />
      </StoryVStack>
    </StoryHStack>
  ),
};

export const OverviewLoading: Story = {
  render: args => (
    <StoryHStack>
      <StoryVStack>
        <Button {...args} purpose="primary" size="xsmall" loading />
        <Button {...args} purpose="primary" size="small" loading />
        <Button {...args} purpose="primary" size="medium" loading />
        <Button {...args} purpose="primary" size="large" loading />
      </StoryVStack>
      <StoryVStack>
        <Button {...args} purpose="secondary" size="xsmall" loading />
        <Button {...args} purpose="secondary" size="small" loading />
        <Button {...args} purpose="secondary" size="medium" loading />
        <Button {...args} purpose="secondary" size="large" loading />
      </StoryVStack>
      <StoryVStack>
        <Button {...args} purpose="danger" size="xsmall" loading />
        <Button {...args} purpose="danger" size="small" loading />
        <Button {...args} purpose="danger" size="medium" loading />
        <Button {...args} purpose="danger" size="large" loading />
      </StoryVStack>
    </StoryHStack>
  ),
};

export const OverviewFullWidth: Story = {
  args: { fullWidth: true, children: 'Tekst' },
  render: args => (
    <StoryVStack>
      <Button {...args}></Button>
      <Button {...args} iconPosition="left" icon={ArrowLeftIcon}></Button>
      <Button {...args} iconPosition="right" icon={ArrowLeftIcon}></Button>
      <Button {...args} children={undefined} icon={ArrowLeftIcon} />
      <Button {...args} loading>
        label
      </Button>
    </StoryVStack>
  ),
};

export const TextWithIcon: Story = {
  args: {
    children: 'Tekst',
    icon: ArrowLeftIcon,
    iconPosition: 'left',
  },
};

export const Icon: Story = {
  args: { icon: ArrowLeftIcon },
};

export const Secondary: Story = {
  args: { purpose: 'secondary' },
  render: args => (
    <StoryHStack>
      <Button {...args}>Tekst</Button>
      <Button {...args} icon={ArrowLeftIcon}>
        Tekst
      </Button>
      <Button {...args} icon={ArrowLeftIcon} />
    </StoryHStack>
  ),
};

export const Tertiary: Story = {
  args: { purpose: 'tertiary' },
  render: args => (
    <StoryHStack>
      <Button {...args}>Tekst</Button>
      <Button {...args} icon={ArrowLeftIcon}>
        Tekst
      </Button>
      <Button {...args} icon={ArrowLeftIcon} />
    </StoryHStack>
  ),
};

export const Danger: Story = {
  args: { purpose: 'danger' },
  render: args => (
    <StoryHStack>
      <Button {...args}>Tekst</Button>
      <Button {...args} icon={ArrowLeftIcon}>
        Tekst
      </Button>
      <Button {...args} icon={ArrowLeftIcon} />
    </StoryHStack>
  ),
};
