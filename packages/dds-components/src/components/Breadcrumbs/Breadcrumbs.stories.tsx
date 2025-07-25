import { type Meta, type StoryObj } from '@storybook/react-vite';

import { LanguageProvider } from '../../i18n';
import { commonArgTypes, windowWidthDecorator } from '../../storybook/helpers';
import { StoryVStack } from '../layout/Stack/utils';

import { Breadcrumb, Breadcrumbs } from '.';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'dds-components/Components/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    ...commonArgTypes,
  },
  decorators: [
    Story => (
      <LanguageProvider language="nb">
        <Story />
      </LanguageProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

const children = [
  <Breadcrumb href="#">Side 1</Breadcrumb>,
  <Breadcrumb href="#">Side 2</Breadcrumb>,
  <Breadcrumb href="#">Side 3</Breadcrumb>,
  <Breadcrumb>Siden du er på</Breadcrumb>,
];

export const Preview: Story = {
  args: {
    children,
  },
};

export const Overview: Story = {
  args: {
    children,
  },
  render: args => (
    <StoryVStack>
      <Breadcrumbs {...args} />
      <Breadcrumbs {...args} smallScreenBreakpoint="xl" />
    </StoryVStack>
  ),
};

export const SmallScreen: Story = {
  args: {
    children,
    smallScreenBreakpoint: 'xl',
  },
};

export const Responsive: Story = {
  args: {
    children,
    smallScreenBreakpoint: 'sm',
  },
  decorators: [
    Story =>
      windowWidthDecorator(
        <Story />,
        'Versjonen for liten skjerm vises ved sm brekkpunkt og nedover.',
      ),
  ],
};
