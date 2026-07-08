import preview from '#.storybook/preview';
import { useState } from 'react';

import { NewsPopover } from './NewsPopover';
import img from './test-img.png';
import img2 from './test-img2.png';
import img3 from './test-img3.png';
import img4 from './test-img4.png';
import { commonArgTypes } from '../../storybook';
import { Button } from '../Button';
import { StoryVStack } from '../layout/Stack/storybook-utils';

const meta = preview.meta({
  title: 'dds-components/Components/NewsPopover',
  component: NewsPopover,
  argTypes: {
    ...commonArgTypes,
    setIsOpen: { control: false },
    setActiveSlide: { control: false },
  },
  args: {
    closeOnClickOutside: false,
  },
});

export default meta;

const pText =
  'Dette er et eksempel på beskrivelse av en nyhet. Tar maksimum tre linjer med tekst.';

export const Preview = meta.story({
  args: {
    header: 'Nyheter eksempel',
    news: [
      {
        heading: 'Heading 1',
        text: pText,
        image: <img src={img} alt="Beskrivelse av img" />,
      },
      {
        heading: 'Heading 2',
        text: pText,
        image: <img alt="Beskrivelse av img2" src={img2} />,
      },
      {
        heading: 'Heading 3',
        text: pText,
        image: <img alt="Beskrivelse av img3" src={img3} />,
      },
      {
        heading: 'Heading 4',
        text: pText,
        image: <img alt="Beskrivelse av img4" src={img4} />,
      },
    ],
  },
});

export const One = meta.story({
  args: {
    header: 'Nyheter eksempel',
    news: [
      {
        heading: 'Heading 1',
        text: pText,
        image: <img alt="Beskrivelse av img" src={img} />,
      },
    ],
  },
});

export const ControllableSlideChange = meta.story({
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    header: 'Nyheter eksempel',
    news: [
      {
        heading: 'Header text is quite long andt andt',
        text: pText,
        image: <img alt="Beskrivelse av img" src={img} />,
      },
      {
        heading: 'Heading 2',
        text: pText,
        image: <img alt="Beskrivelse av img2" src={img2} />,
      },
      {
        heading: 'Heading 3',
        text: pText,
        image: <img alt="Beskrivelse av img3" src={img3} />,
      },
    ],
  },
  render: args => {
    const [activeSlide, setActiveSlide] = useState(1);

    return (
      <StoryVStack>
        <Button
          onClick={() => setActiveSlide(activeSlide > 1 ? 0 : activeSlide + 1)}
        >
          Neste side
        </Button>
        <NewsPopover
          {...args}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
        />
      </StoryVStack>
    );
  },
});

export const ControllableClosing = meta.story({
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    header: 'Nyheter eksempel',
    news: [
      {
        heading: 'Heading 1',
        text: pText,
        image: <img alt="Beskrivelse av img" src={img} />,
      },
      {
        heading: 'Heading 2',
        text: pText,
        image: <img alt="Beskrivelse av img2" src={img2} />,
      },
    ],
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <StoryVStack>
        <Button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Lukk' : 'Åpne'} popover
        </Button>
        <NewsPopover {...args} isOpen={isOpen} setIsOpen={setIsOpen} />
      </StoryVStack>
    );
  },
});
