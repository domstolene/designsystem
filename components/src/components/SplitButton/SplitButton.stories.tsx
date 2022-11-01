import { SplitButton, SplitButtonProps } from '.';
import { PlusCircledIcon } from '../../icons/tsx';
import { StoryTemplate } from '../../storybook';

export default {
  title: 'design system/SplitButton',
  component: SplitButton,
};

const items = [
  {
    title: 'Sekundær handling',
    onClick: () => {},
  },
  {
    title: 'Sekundær handling 2',
    onClick: () => {},
    icon: PlusCircledIcon,
  },
];

export const Overview = (args: SplitButtonProps) => (
  <StoryTemplate title="SplitButton - overview" display="grid">
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst' }}
      secondaryActions={items}
      size="large"
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst', icon: PlusCircledIcon }}
      secondaryActions={items}
      size="large"
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst', loading: true }}
      secondaryActions={items}
      size="large"
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst' }}
      secondaryActions={items}
      size="medium"
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst', icon: PlusCircledIcon }}
      secondaryActions={items}
      size="medium"
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst', loading: true }}
      secondaryActions={items}
      size="medium"
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst' }}
      secondaryActions={items}
      size="small"
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst', icon: PlusCircledIcon }}
      secondaryActions={items}
      size="small"
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst', loading: true }}
      secondaryActions={items}
      size="small"
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst' }}
      secondaryActions={items}
      size="tiny"
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst', icon: PlusCircledIcon }}
      secondaryActions={items}
      size="tiny"
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst', loading: true }}
      secondaryActions={items}
      size="tiny"
    />
  </StoryTemplate>
);

export const Default = (args: SplitButtonProps) => (
  <StoryTemplate title="SplitButton - default" display="block">
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst' }}
      secondaryActions={items}
    />
  </StoryTemplate>
);

export const FullWidth = () => (
  <StoryTemplate title="SplitButton - full width" display="block">
    <SplitButton
      primaryAction={{ label: 'Tekst', fullWidth: true }}
      secondaryActions={items}
    />
  </StoryTemplate>
);
