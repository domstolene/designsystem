import preview from '#.storybook/preview';
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
import { StoryHStack, StoryVStack } from '../layout/Stack/storybook-utils';

import { Button } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/Button',
  component: Button,
  argTypes: {
    ...commonArgTypes,
    children: { control: 'text' },
    icon: { control: false },
    iconState: { control: false },
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
});

export default meta;

export const Preview = meta.story({
  args: { children: 'Tekst' },
});

export const Purposes = meta.story({
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
});

export const Sizes = meta.story({
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
});

export const OverviewLoading = meta.story({
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
});

export const OverviewFullWidth = meta.story({
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
});

export const TextWithIcon = meta.story({
  args: {
    children: 'Tekst og ikon',
    icon: ArrowLeftIcon,
    iconPosition: 'left',
  },
});

export const Icon = meta.story({
  args: { icon: ArrowLeftIcon },
});
