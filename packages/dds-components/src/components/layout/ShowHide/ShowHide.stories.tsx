import preview from '#.storybook/preview';

import {
  commonResponsivePropsArgTypes,
  windowWidthDecorator,
} from '../../../storybook';
import { Icon } from '../../Icon';
import { ArrowDownIcon } from '../../Icon/icons';
import { Grid } from '../Grid';

import { ShowHide } from '.';

const meta = preview.meta({
  title: 'dds-components/Layout Primitives/ShowHide',
  component: ShowHide,
  argTypes: {
    ...commonResponsivePropsArgTypes,
  },
  decorators: [Story => windowWidthDecorator(<Story />)],
});

export default meta;

export const Preview = meta.story({
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
});

export const SetBreakpoints = meta.story({
  args: {
    children: 'Skjul eller vis meg ved å sette brekkpunkter i props',
  },
});
