import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { htmlEventArgType, htmlPropsArgType } from '../../storybook/helpers';
import { Button } from '../Button';
import { HelpIcon } from '../Icon/icons';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';

import { Tooltip } from '.';

export default {
  title: 'dds-components/Components/Tooltip',
  component: Tooltip,
  argTypes: {
    htmlProps: htmlPropsArgType,
    children: { control: false },
    tooltipId: { control: false },
    onMouseLeave: htmlEventArgType,
    onMouseOver: htmlEventArgType,
  },
  args: { onMouseLeave: fn(), onMouseOver: fn() },
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
    <StoryVStack alignItems="center" paddingBlock="x6">
      <Tooltip {...args}>
        <Button icon={HelpIcon} aria-label="Vis forklaring" />
      </Tooltip>
    </StoryVStack>
  ),
};

export const NotKeptMounted: Story = {
  args: { text: 'Dette er en tooltip' },
  render: args => (
    <StoryVStack alignItems="center" paddingBlock="x6">
      <Tooltip {...args} keepMounted={false}>
        <Button icon={HelpIcon} aria-label="Vis forklaring" />
      </Tooltip>
    </StoryVStack>
  ),
};

export const Overview: Story = {
  render: () => (
    <StoryHStack justifyContent="center" paddingBlock="x6">
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
