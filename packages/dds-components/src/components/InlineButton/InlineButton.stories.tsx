import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import { InlineButton } from './InlineButton';
import { VisuallyHidden } from '../VisuallyHidden';

export default {
  title: 'dds-components/Components/InlineButton',
  component: InlineButton,
  argTypes: {
    children: { control: { type: 'text' } },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof InlineButton>;

type Story = StoryObj<typeof InlineButton>;

export const Default: Story = {
  args: {
    children: 'Vis mer',
  },
};

export const Example: Story = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: args => {
    const [isShown, show] = useState(false);

    const toggle = () => {
      show(!isShown);
    };

    return (
      <>
        <ul>
          <li>Resultat 1</li>
          <li>Resultat 2</li>
          <li>Resultat 3</li>
          <li>
            Resultat 4
            {!isShown && (
              <span>
                ...{' '}
                <InlineButton onClick={toggle}>
                  Vis flere <VisuallyHidden>resultater</VisuallyHidden>
                </InlineButton>
              </span>
            )}
          </li>
          {isShown && (
            <>
              <li>Resultat 5</li>
              <li>Resultat 6</li>
              <li>Resultat 7</li>
              <li>Resultat 8</li>
            </>
          )}
        </ul>
        {isShown && (
          <InlineButton onClick={toggle}>
            Vis færre <VisuallyHidden>resultater</VisuallyHidden>
          </InlineButton>
        )}
      </>
    );
  },
};
