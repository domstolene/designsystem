import { type Meta, type StoryObj } from '@storybook/react';

import {
  commonBasePropsArgTypes,
  windowWidthDecorator,
} from '../../../storybook/helpers';
import { Icon } from '../../Icon';
import { ArrowDownIcon } from '../../Icon/icons';
import { Grid } from '../Grid';

import { ShowHide } from '.';

const meta: Meta<typeof ShowHide> = {
  title: 'dds-components/Layout Primitives/ShowHide',
  component: ShowHide,
  argTypes: {
    ...commonBasePropsArgTypes,
  },
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  decorators: [Story => windowWidthDecorator(<Story />)],
};
export default meta;

type Story = StoryObj<typeof ShowHide>;

export const Preview: Story = {
  render: () => (
    <Grid gridTemplateColumns="150px 150px" gap="x1">
      <div>
        Denne skjules ved sm brekkpunkt og nedover
        <div>
          <Icon icon={ArrowDownIcon} />
        </div>
        <ShowHide hideBelow="sm">😜</ShowHide>
      </div>
      <div>
        Denne vises ved sm brekkpunkt og nedover
        <div>
          <Icon icon={ArrowDownIcon} />
        </div>
        <ShowHide showBelow="sm">🤓</ShowHide>
      </div>
    </Grid>
  ),
};

export const Default: Story = {
  args: {
    children: 'Skjul meg ved å sette brekkpunkt i props',
  },
};
