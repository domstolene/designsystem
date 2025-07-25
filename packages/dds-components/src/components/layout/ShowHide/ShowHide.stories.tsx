import { type Meta, type StoryObj } from '@storybook/react-vite';

import {
  commonResponsivePropsArgTypes,
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
    ...commonResponsivePropsArgTypes,
  },
  decorators: [Story => windowWidthDecorator(<Story />)],
};
export default meta;

type Story = StoryObj<typeof ShowHide>;

export const Preview: Story = {
  render: args => (
    <Grid gridTemplateColumns="150px 150px" gap="x1">
      <div>
        Denne skjules ved sm brekkpunkt og nedover
        <div>
          <Icon icon={ArrowDownIcon} />
        </div>
        <ShowHide {...args} hideBelow="sm">
          😜
        </ShowHide>
      </div>
      <div>
        Denne vises ved sm brekkpunkt og nedover
        <div>
          <Icon icon={ArrowDownIcon} />
        </div>
        <ShowHide {...args} showBelow="sm">
          🤓
        </ShowHide>
      </div>
    </Grid>
  ),
};

export const SetBreakpoints: Story = {
  args: {
    children: 'Skjul eller vis meg ved å sette brekkpunkter i props',
  },
};
