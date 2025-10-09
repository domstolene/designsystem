import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';

import { InlineButton } from './InlineButton';
import { htmlEventArgType } from '../../storybook/helpers';
import { Icon } from '../Icon';
import { HelpIcon } from '../Icon/icons';
import { StoryVStack } from '../layout/Stack/utils';
import { Popover, PopoverGroup } from '../Popover';
import { TextInput } from '../TextInput';
import { Tooltip } from '../Tooltip';
import { Paragraph } from '../Typography';
import { VisuallyHidden } from '../VisuallyHidden';

export default {
  title: 'dds-components/Components/InlineButton',
  component: InlineButton,
  argTypes: {
    children: { control: { type: 'text' } },
    onClick: htmlEventArgType,
    onFocus: htmlEventArgType,
    onBlur: htmlEventArgType,
  },
  args: { onClick: fn(), onBlur: fn(), onFocus: fn() },
} satisfies Meta<typeof InlineButton>;

type Story = StoryObj<typeof InlineButton>;

export const Preview: Story = {
  args: {
    children: 'Vis mer',
  },
};

export const WithIcon: Story = {
  args: {
    icon: HelpIcon,
  },
};

export const WithColor: Story = {
  args: {
    children: 'Vis mer',
    color: 'text-subtle',
  },
  render: args => (
    <StoryVStack>
      <InlineButton {...args}>Vis mer</InlineButton>
      <InlineButton {...args}>
        <Icon icon={HelpIcon} />
      </InlineButton>
    </StoryVStack>
  ),
};

export const Example: Story = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: args => {
    const [isShown, show] = useState(false);

    const toggle = () => {
      show(!isShown);
    };

    return (
      <>
        <ul>
          <li>Resultat 1</li>
          <li>Resultat 2</li>
          <li>Resultat 3</li>
          <li>
            Resultat 4
            {!isShown && (
              <span>
                ...{' '}
                <InlineButton onClick={toggle}>
                  Vis flere <VisuallyHidden>resultater</VisuallyHidden>
                </InlineButton>
              </span>
            )}
          </li>
          {isShown && (
            <>
              <li>Resultat 5</li>
              <li>Resultat 6</li>
              <li>Resultat 7</li>
              <li>Resultat 8</li>
            </>
          )}
        </ul>
        {isShown && (
          <InlineButton onClick={toggle}>
            Vis færre <VisuallyHidden>resultater</VisuallyHidden>
          </InlineButton>
        )}
      </>
    );
  },
};

export const ExampleIcon: Story = {
  render: args => {
    return (
      <StoryVStack>
        <TextInput
          label="Med tooltip"
          afterLabelContent={
            <Tooltip
              text="Ekstra info"
              style={{
                display: 'inline',
                marginInlineStart: 'var(--dds-spacing-x0-25)',
              }}
            >
              <InlineButton {...args}>
                <Icon icon={HelpIcon} iconSize="inherit" />
              </InlineButton>
            </Tooltip>
          }
        />
        <TextInput
          label="Med popover"
          afterLabelContent={
            <PopoverGroup>
              <InlineButton
                {...args}
                style={{ marginInlineStart: 'var(--dds-spacing-x0-25)' }}
                icon={HelpIcon}
              ></InlineButton>
              <Popover>
                <Paragraph>Ekstra info</Paragraph>
              </Popover>
            </PopoverGroup>
          }
        />
      </StoryVStack>
    );
  },
};
