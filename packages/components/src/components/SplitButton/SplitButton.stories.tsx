import { SplitButton, SplitButtonProps, SplitButtonPurpose } from '.';
import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { PlusCircledIcon } from '../Icon/icons';

export default {
  title: 'dds-components/SplitButton',
  component: SplitButton,
};

const items = [
  {
    title: 'Sekundær handling',
    onClick: () => null,
  },
  {
    title: 'Sekundær handling 2',
    onClick: () => null,
    icon: PlusCircledIcon,
  },
];

export const Overview = (args: SplitButtonProps) => (
  <StoryTemplate title="SplitButton - overview" display="grid">
    <SplitButtonVariants args={args} purpose="primary" />
    <SplitButtonVariants args={args} purpose="secondary" />
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

interface SplitButtonVariantsProps {
  args: SplitButtonProps;
  purpose: SplitButtonPurpose;
}

const SplitButtonVariants = ({ args, purpose }: SplitButtonVariantsProps) => (
  <>
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst' }}
      secondaryActions={items}
      size="large"
      purpose={purpose}
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst', icon: PlusCircledIcon }}
      secondaryActions={items}
      size="large"
      purpose={purpose}
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst', loading: true }}
      secondaryActions={items}
      size="large"
      purpose={purpose}
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst' }}
      secondaryActions={items}
      size="medium"
      purpose={purpose}
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst', icon: PlusCircledIcon }}
      secondaryActions={items}
      size="medium"
      purpose={purpose}
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst', loading: true }}
      secondaryActions={items}
      size="medium"
      purpose={purpose}
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst' }}
      secondaryActions={items}
      size="small"
      purpose={purpose}
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst', icon: PlusCircledIcon }}
      secondaryActions={items}
      size="small"
      purpose={purpose}
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst', loading: true }}
      secondaryActions={items}
      size="small"
      purpose={purpose}
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst' }}
      secondaryActions={items}
      size="tiny"
      purpose={purpose}
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst', icon: PlusCircledIcon }}
      secondaryActions={items}
      size="tiny"
      purpose={purpose}
    />
    <SplitButton
      {...args}
      primaryAction={{ label: 'Tekst', loading: true }}
      secondaryActions={items}
      size="tiny"
      purpose={purpose}
    />
  </>
);
