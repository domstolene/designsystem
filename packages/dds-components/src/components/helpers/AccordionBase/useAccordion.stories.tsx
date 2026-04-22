import preview from '#.storybook/preview';

import { AccordionExample } from './AccordionExample';

const meta = preview.meta({
  title: 'dds-components/Hooks/useAccordion',
  component: AccordionExample,
  parameters: {
    disableGlobalDecorator: true,
  },
  argTypes: {
    id: { control: false },
  },
});

export const Preview = meta.story();
