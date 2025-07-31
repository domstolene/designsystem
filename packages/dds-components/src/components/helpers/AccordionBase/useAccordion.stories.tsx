import { type Meta, type StoryObj } from '@storybook/react-vite';

import { AccordionExample } from './AccordionExample';

const meta: Meta<typeof AccordionExample> = {
  title: 'dds-components/Hooks/useAccordion',
  component: AccordionExample,
  parameters: {
    disableGlobalDecorator: true,
  },
  argTypes: {
    id: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof AccordionExample>;

export const Preview: Story = {};
