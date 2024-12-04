import { type Meta, type StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { HelpIcon } from '../Icon/icons';
import { VStack } from '../Stack';
import { StoryHStack, StoryVStack } from '../Stack/utils';

import { Tooltip } from '.';

export default {
  title: 'dds-components/Tooltip',
  component: Tooltip,
  argTypes: {
    text: { control: 'text' },
    delay: { control: 'number' },
    htmlProps: { control: false },
    children: { control: false },
    tooltipId: { control: false },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof Tooltip>;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: { text: 'Dette er en tooltip' },
  render: args => (
    <VStack htmlProps={{ style: { paddingBlock: 'var(--dds-spacing-x6)' } }}>
      <Tooltip {...args}>
        <Button icon={HelpIcon} aria-label="Vis forklaring" />
      </Tooltip>
    </VStack>
  ),
};

export const Overview: Story = {
  render: () => (
    <StoryHStack
      justify="center"
      htmlProps={{ style: { paddingBlock: 'var(--dds-spacing-x6)' } }}
    >
      <StoryVStack>
        <Tooltip placement="top-start" text="top-start">
          <Button size="large" icon={HelpIcon} aria-label="Vis forklaring" />
        </Tooltip>
        <Tooltip placement="bottom-start" text="bottom-start">
          <Button size="large" icon={HelpIcon} aria-label="Vis forklaring" />
        </Tooltip>
        <Tooltip placement="left-start" text="left-start">
          <Button size="large" icon={HelpIcon} aria-label="Vis forklaring" />
        </Tooltip>
        <Tooltip placement="right-start" text="right-start">
          <Button size="large" icon={HelpIcon} aria-label="Vis forklaring" />
        </Tooltip>
      </StoryVStack>
      <StoryVStack>
        <Tooltip placement="top" text="top">
          <Button size="large" icon={HelpIcon} aria-label="Vis forklaring" />
        </Tooltip>
        <Tooltip placement="bottom" text="bottom">
          <Button size="large" icon={HelpIcon} aria-label="Vis forklaring" />
        </Tooltip>
        <Tooltip placement="left" text="left">
          <Button size="large" icon={HelpIcon} aria-label="Vis forklaring" />
        </Tooltip>
        <Tooltip placement="right" text="right">
          <Button size="large" icon={HelpIcon} aria-label="Vis forklaring" />
        </Tooltip>
      </StoryVStack>
      <StoryVStack>
        <Tooltip placement="top-end" text="top-end">
          <Button size="large" icon={HelpIcon} aria-label="Vis forklaring" />
        </Tooltip>
        <Tooltip placement="bottom-end" text="bottom-end">
          <Button size="large" icon={HelpIcon} aria-label="Vis forklaring" />
        </Tooltip>
        <Tooltip placement="left-end" text="left-end">
          <Button size="large" icon={HelpIcon} aria-label="Vis forklaring" />
        </Tooltip>
        <Tooltip placement="right-end" text="right-end">
          <Button size="large" icon={HelpIcon} aria-label="Vis forklaring" />
        </Tooltip>
      </StoryVStack>
    </StoryHStack>
  ),
};
