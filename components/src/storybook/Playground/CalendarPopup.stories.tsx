import {
  CalendarPopup,
  CalendarPopupProps,
} from '../../components/Datepicker/CalendarPopup';
import { StoryTemplate } from '../StoryTemplate';

export default {
  title: 'Playground/CalendarPopup',
  component: CalendarPopup,
  argTypes: {
    withWeeks: {
      control: { type: 'boolean' },
    },
  },
};

export const CalendarPopupExample = (args: CalendarPopupProps) => (
  <StoryTemplate title="Datepicker - calendar popup preview ">
    <CalendarPopup {...args} />
  </StoryTemplate>
);
