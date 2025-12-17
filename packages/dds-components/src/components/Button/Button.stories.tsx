import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { ArrowLeftIcon } from '../..';
import { BUTTON_PURPOSES, BUTTON_SIZES } from './Button.types';
import {
  categoryHtml,
  commonArgTypes,
  ddsProviderDecorator,
  htmlArgType,
  htmlEventArgType,
  labelText,
} from '../../storybook';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';

import { Button } from '.';

export default {
  title: 'dds-components/Components/Button',
  component: Button,
  argTypes: {
    ...commonArgTypes,
    children: { control: 'text' },
    icon: { control: false },
    href: { table: categoryHtml },
    'aria-label': { table: categoryHtml },
    target: htmlArgType,
    type: htmlArgType,
    onClick: htmlEventArgType,
    onBlur: htmlEventArgType,
    onFocus: htmlEventArgType,
  },
  args: { onClick: fn(), onBlur: fn(), onFocus: fn() },
  decorators: [ddsProviderDecorator],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Preview: Story = {
  args: { children: 'Tekst' },
};

export const Purposes: Story = {
  render: args => (
    <StoryHStack>
      <StoryVStack>
        {BUTTON_PURPOSES.map(purpose => (
          <Button key={`t-${purpose}`} {...args} purpose={purpose}>
            {labelText(purpose)}
          </Button>
        ))}
      </StoryVStack>
      <StoryVStack>
        {BUTTON_PURPOSES.map(purpose => (
          <Button
            key={`i-left-${purpose}`}
            {...args}
            purpose={purpose}
            iconPosition={args.iconPosition ?? 'left'}
            icon={ArrowLeftIcon}
          >
            {labelText(purpose)}
          </Button>
        ))}
      </StoryVStack>
      <StoryVStack>
        {BUTTON_PURPOSES.map(purpose => (
          <Button
            key={`i-${purpose}`}
            {...args}
            icon={ArrowLeftIcon}
            purpose={purpose}
          />
        ))}
      </StoryVStack>
    </StoryHStack>
  ),
};

export const Sizes: Story = {
  render: args => (
    <StoryHStack>
      <StoryVStack>
        {BUTTON_SIZES.map(size => (
          <Button key={size} {...args} size={size}>
            {labelText(size)}
          </Button>
        ))}
      </StoryVStack>
      <StoryVStack>
        {BUTTON_SIZES.map(size => (
          <Button
            key={`il-${size}`}
            {...args}
            size={size}
            iconPosition={args.iconPosition ?? 'left'}
            icon={ArrowLeftIcon}
          >
            {labelText(size)}
          </Button>
        ))}
      </StoryVStack>
      <StoryVStack>
        {BUTTON_SIZES.map(size => (
          <Button
            key={`i-${size}`}
            {...args}
            icon={ArrowLeftIcon}
            size={size}
          />
        ))}
      </StoryVStack>
    </StoryHStack>
  ),
};

export const OverviewLoading: Story = {
  args: {
    children: 'Tekst',
  },
  render: args => (
    <StoryHStack>
      {BUTTON_PURPOSES.map(p => (
        <StoryVStack>
          {BUTTON_SIZES.map(s => (
            <Button {...args} key={`${p}-${s}`} purpose={p} size={s} loading />
          ))}
        </StoryVStack>
      ))}
    </StoryHStack>
  ),
};

export const OverviewFullWidth: Story = {
  args: { fullWidth: true, children: 'Tekst' },
  render: args => (
    <StoryVStack>
      <Button {...args}></Button>
      <Button {...args} iconPosition="left" icon={ArrowLeftIcon}>
        Tekst og ikon til venstre
      </Button>
      <Button {...args} iconPosition="right" icon={ArrowLeftIcon}>
        Tekst og ikon til høyre
      </Button>
      <Button {...args} children={undefined} icon={ArrowLeftIcon} />
      <Button {...args} loading>
        label
      </Button>
    </StoryVStack>
  ),
};

export const TextWithIcon: Story = {
  args: {
    children: 'Tekst og ikon',
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
