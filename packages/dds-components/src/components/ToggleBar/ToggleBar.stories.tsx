import preview from '#.storybook/preview';

import { TOGGLE_BAR_PURPOSES, TOGGLE_BAR_SIZES } from './ToggleBar.types';
import {
  StoryLabel,
  commonArgTypesWithNodeChildren,
  labelText,
  responsivePropsArgTypes,
  windowWidthDecorator,
} from '../../storybook';
import { PlusCircledIcon } from '../Icon/icons';
import { VStack } from '../layout';
import { StoryHStack, StoryVStack } from '../layout/Stack/storybook-utils';

import { ToggleBar, ToggleRadio } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/ToggleBar',
  component: ToggleBar,
  argTypes: {
    width: responsivePropsArgTypes.width,
    value: { control: false },
    ...commonArgTypesWithNodeChildren,
  },
});

export default meta;

const toggleRadios = (label?: boolean, icon?: boolean) => {
  const radios = [];
  for (let i = 1; i <= 3; i++) {
    radios.push(
      <ToggleRadio
        key={i}
        icon={icon ? PlusCircledIcon : undefined}
        label={label ? `Alt${i}` : undefined}
        value={`Alt${i}`}
      />,
    );
  }
  return <>{radios}</>;
};

export const Preview = meta.story({
  render: args => (
    <ToggleBar {...args} name="test">
      <ToggleRadio label="Alt1" value="Alt1" />
      <ToggleRadio label="Alt2" value="Alt2" />
      <ToggleRadio label="Alt3" value="Alt3" />
    </ToggleBar>
  ),
});

export const Purposes = meta.story({
  render: args => {
    let name = 0;
    return (
      <StoryVStack>
        {TOGGLE_BAR_PURPOSES.map(purpose => (
          <ToggleBar
            label={labelText(purpose)}
            {...args}
            name={`test${name++}`}
            purpose={purpose}
          >
            {toggleRadios(true)}
          </ToggleBar>
        ))}
      </StoryVStack>
    );
  },
});

export const Sizes = meta.story({
  render: args => {
    let name = 0;
    return (
      <StoryHStack flexWrap="wrap">
        {TOGGLE_BAR_SIZES.map(size => (
          <VStack key={size} gap="x0.125">
            <StoryLabel>{labelText(size)}</StoryLabel>
            <StoryVStack>
              <ToggleBar {...args} name={`test${name++}`} size={size}>
                {toggleRadios(true)}
              </ToggleBar>
              <ToggleBar {...args} name={`test${name++}`} size={size}>
                {toggleRadios(true, true)}
              </ToggleBar>
              <ToggleBar {...args} name={`test${name++}`} size={size}>
                {toggleRadios(false, true)}
              </ToggleBar>
            </StoryVStack>
          </VStack>
        ))}
      </StoryHStack>
    );
  },
});

export const WithWidth = meta.story({
  render: args => {
    return (
      <ToggleBar {...args} name="test" width="320px">
        {toggleRadios(true)}
      </ToggleBar>
    );
  },
});

export const ResponsiveWidth = meta.story({
  decorators: [Story => windowWidthDecorator(<Story />)],
  args: {
    width: {
      xs: '100%',
      sm: '100%',
      md: '30%',
      lg: '500px',
      xl: '1000px',
    },
  },
  render: args => {
    return (
      <ToggleBar {...args} name="test">
        {toggleRadios(true)}
      </ToggleBar>
    );
  },
});
