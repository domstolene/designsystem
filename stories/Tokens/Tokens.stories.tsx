import { type Meta } from '@storybook/react-vite';

import {
  BorderRadiusGenerator,
  BreakpointsGenerator,
  ColorsGenerator,
  DataColorsGenerator,
  GridGenerator,
  IconSizesGenerator,
  ShadowsGenerator,
  SpacingGenerator,
  TypographyGenerator,
  Wrapper,
} from './utils';
import { ZIndexGenerator } from './utils/ZIndexGenerator';
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '../../packages/dds-components/src';
import { ddsProviderDecorator } from '../../packages/dds-components/src/storybook';

const meta: Meta = {
  title: 'dds-design-tokens/Tokens',
  parameters: {
    disableGlobalDecorator: true,
  },
  tags: ['!autodocs'],
  decorators: [ddsProviderDecorator],
};
export default meta;

export const BorderRadius = () => {
  return (
    <Wrapper>
      <Tabs>
        <TabList>
          <Tab>Core</Tab>
          <Tab>Public</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{BorderRadiusGenerator('core')}</TabPanel>
          <TabPanel>{BorderRadiusGenerator('public')}</TabPanel>
        </TabPanels>
      </Tabs>
    </Wrapper>
  );
};

export const Breakpoints = () => {
  return <Wrapper> {BreakpointsGenerator()}</Wrapper>;
};

export const Colors = () => {
  return (
    <Wrapper>
      <Tabs>
        <TabList>
          <Tab>Light</Tab>
          <Tab>Dark</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{ColorsGenerator('light')}</TabPanel>
          <TabPanel>{ColorsGenerator('dark')}</TabPanel>
        </TabPanels>
      </Tabs>
    </Wrapper>
  );
};

export const ColorsDataVisualisation = () => {
  return (
    <Wrapper>
      <Tabs>
        <TabList>
          <Tab>Light</Tab>
          <Tab>Dark</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{DataColorsGenerator('light')}</TabPanel>
          <TabPanel>{DataColorsGenerator('dark')}</TabPanel>
        </TabPanels>
      </Tabs>
    </Wrapper>
  );
};

export const Grid = () => {
  return <Wrapper> {GridGenerator()}</Wrapper>;
};

export const IconSizes = () => {
  return <Wrapper> {IconSizesGenerator()}</Wrapper>;
};

export const Shadows = () => {
  return (
    <Wrapper>
      <Tabs>
        <TabList>
          <Tab>Light</Tab>
          <Tab>Dark</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{ShadowsGenerator('light')}</TabPanel>
          <TabPanel>{ShadowsGenerator('dark')}</TabPanel>
        </TabPanels>
      </Tabs>
    </Wrapper>
  );
};

export const Spacing = () => {
  return <Wrapper> {SpacingGenerator()}</Wrapper>;
};

export const Typography = () => {
  return (
    <Wrapper maxWidth="120ch">
      <Tabs>
        <TabList>
          <Tab>Core</Tab>
          <Tab>Public</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{TypographyGenerator('core')}</TabPanel>
          <TabPanel>{TypographyGenerator('public')}</TabPanel>
        </TabPanels>
      </Tabs>
    </Wrapper>
  );
};

export const ZIndex = () => {
  return <Wrapper> {ZIndexGenerator()}</Wrapper>;
};
