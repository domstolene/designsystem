import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { HelpIcon } from '../Icon/icons';

import { Tooltip } from '.';

export default {
  title: 'dds-components/Tooltip',
  component: Tooltip,
  argTypes: {
    text: { control: { type: 'text' } },
    delay: { control: { type: 'number' } },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
};

type Story = StoryObj<typeof Tooltip>;

export const Overview: Story = {
  decorators: Story => (
    <StoryTemplate
      display="grid"
      containerStyle={{
        alignContent: 'center',
        justifyContent: 'center',
        padding: '70px 40px 70px 40px',
      }}
    >
      <Story />
    </StoryTemplate>
  ),
  render: () => (
    <>
      <Tooltip placement="top" text="top">
        <Button
          size="large"
          icon={HelpIcon}
          appearance="rounded"
          aria-label="Vis forklaring"
        />
      </Tooltip>
      <Tooltip placement="top-start" text="top-start">
        <Button
          size="large"
          icon={HelpIcon}
          appearance="rounded"
          aria-label="Vis forklaring"
        />
      </Tooltip>
      <Tooltip placement="top-end" text="top-end">
        <Button
          size="large"
          icon={HelpIcon}
          appearance="rounded"
          aria-label="Vis forklaring"
        />
      </Tooltip>
      <Tooltip placement="bottom" text="bottom">
        <Button
          size="large"
          icon={HelpIcon}
          appearance="rounded"
          aria-label="Vis forklaring"
        />
      </Tooltip>
      <Tooltip placement="bottom-start" text="bottom-start">
        <Button
          size="large"
          icon={HelpIcon}
          appearance="rounded"
          aria-label="Vis forklaring"
        />
      </Tooltip>
      <Tooltip placement="bottom-end" text="bottom-end">
        <Button
          size="large"
          icon={HelpIcon}
          appearance="rounded"
          aria-label="Vis forklaring"
        />
      </Tooltip>
      <Tooltip placement="left" text="left">
        <Button
          size="large"
          icon={HelpIcon}
          appearance="rounded"
          aria-label="Vis forklaring"
        />
      </Tooltip>
      <Tooltip placement="left-start" text="left-start">
        <Button
          size="large"
          icon={HelpIcon}
          appearance="rounded"
          aria-label="Vis forklaring"
        />
      </Tooltip>
      <Tooltip placement="left-end" text="left-end">
        <Button
          size="large"
          icon={HelpIcon}
          appearance="rounded"
          aria-label="Vis forklaring"
        />
      </Tooltip>
      <Tooltip placement="right" text="right">
        <Button
          size="large"
          icon={HelpIcon}
          appearance="rounded"
          aria-label="Vis forklaring"
        />
      </Tooltip>
      <Tooltip placement="right-start" text="right-start">
        <Button
          size="large"
          icon={HelpIcon}
          appearance="rounded"
          aria-label="Vis forklaring"
        />
      </Tooltip>
      <Tooltip placement="right-end" text="right-end">
        <Button
          size="large"
          icon={HelpIcon}
          appearance="rounded"
          aria-label="Vis forklaring"
        />
      </Tooltip>
    </>
  ),
};

export const Default: Story = {
  args: { text: 'Dette er en tooltip' },
  decorators: Story => (
    <StoryTemplate
      display="block"
      containerStyle={{
        alignContent: 'center',
        justifyContent: 'center',
        padding: ' 100px 50%',
      }}
    >
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <Tooltip {...args}>
      <Button
        icon={HelpIcon}
        appearance="rounded"
        aria-label="Vis forklaring"
      />
    </Tooltip>
  ),
};
