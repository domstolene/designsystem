import { Tooltip, TooltipProps } from '.';
import { StoryTemplate } from '../../storybook';
import { Button } from '../Button';
import { HelpIcon } from '../../icons/tsx';

export default {
  title: 'Design system/Tooltip',
  component: Tooltip,
  argTypes: {
    text: { control: { type: 'text' } },
  },
  parameters: {
    controls: {
      exclude: ['style', 'className'],
    },
  },
};

export const Overview = () => (
  <StoryTemplate
    title="Tooltip - overview"
    display="grid"
    containerStyle={{
      alignContent: 'center',
      justifyContent: 'center',
      padding: '70px 40px 70px 40px',
    }}
  >
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
  </StoryTemplate>
);

export const Default = (args: TooltipProps) => (
  <StoryTemplate title="Tooltip - default" display="block">
    <Tooltip {...args} text="dette er en tooltip">
      <Button
        icon={HelpIcon}
        appearance="rounded"
        aria-label="Vis forklaring"
      />
    </Tooltip>
  </StoryTemplate>
);

export const Centered = (args: TooltipProps) => (
  <StoryTemplate
    title="Tooltip - centered"
    display="block"
    containerStyle={{
      alignContent: 'center',
      justifyContent: 'center',
      padding: ' 100px 50%',
    }}
  >
    <Tooltip {...args} text="dette er en tooltip">
      <Button
        icon={HelpIcon}
        appearance="rounded"
        aria-label="Vis forklaring"
      />
    </Tooltip>
  </StoryTemplate>
);

export const TextButton = (args: TooltipProps) => (
  <StoryTemplate title="Tooltip - text button" display="block">
    <Tooltip {...args} text="dette er en tooltip">
      <Button label="Knapp" />
    </Tooltip>
  </StoryTemplate>
);
