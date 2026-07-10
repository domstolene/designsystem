import preview from '#.storybook/preview';

import {
  BorderRadiusGenerator,
  BreakpointsGenerator,
  ColorsGenerator,
  DataColorsGenerator,
  GridGenerator,
  MotionGenerator,
  ShadowsGenerator,
  SizeHeightGenerator,
  SizeIconGenerator,
  SpacingGenerator,
  TypographyGenerator,
  Wrapper,
  ZIndexGenerator,
} from './utils';
import {
  Divider,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '../../packages/dds-components/src';
import { ddsProviderDecorator } from '../../packages/dds-components/src/storybook';

const meta = preview.meta({
  title: 'dds-design-tokens/Tokens',
  parameters: {
    disableGlobalDecorator: true,
  },
  tags: ['!autodocs'],
  decorators: [ddsProviderDecorator],
});

export const BorderRadius = meta.story(() => {
  return (
    <Wrapper>
      <Tabs>
        <TabList>
          <Tab>Core</Tab>
          <Tab>Public</Tab>
          <Tab>Supreme</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{BorderRadiusGenerator('core')}</TabPanel>
          <TabPanel>{BorderRadiusGenerator('public')}</TabPanel>
          <TabPanel>{BorderRadiusGenerator('public')}</TabPanel>
        </TabPanels>
      </Tabs>
    </Wrapper>
  );
});

export const Breakpoints = meta.story(() => {
  return <Wrapper> {BreakpointsGenerator()}</Wrapper>;
});

export const Colors = meta.story(() => {
  return (
    <Wrapper>
      <Tabs>
        <TabList>
          <Tab>Core/Public Light</Tab>
          <Tab>Core/Public Dark</Tab>
          <Tab>Supreme Light</Tab>
          <Tab>Supreme Dark</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{ColorsGenerator('core-light')}</TabPanel>
          <TabPanel>{ColorsGenerator('core-dark')}</TabPanel>
          <TabPanel>{ColorsGenerator('supreme-light')}</TabPanel>
          <TabPanel>{ColorsGenerator('supreme-dark')}</TabPanel>
        </TabPanels>
      </Tabs>
    </Wrapper>
  );
});

export const ColorsDataVisualisation = meta.story(() => {
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
});

export const Grid = meta.story(() => {
  return <Wrapper> {GridGenerator()}</Wrapper>;
});

export const Size = meta.story(() => {
  return (
    <Wrapper>
      <Heading level={2} withMargins>
        Icon
      </Heading>
      {SizeIconGenerator()}
      <Divider />
      <Heading level={2} withMargins>
        Height
      </Heading>
      <Tabs>
        <TabList>
          <Tab>Core</Tab>
          <Tab>Public</Tab>
          <Tab>Supreme</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{SizeHeightGenerator('core')}</TabPanel>
          <TabPanel>{SizeHeightGenerator('public')}</TabPanel>
          <TabPanel>{SizeHeightGenerator('public')}</TabPanel>
        </TabPanels>
      </Tabs>
    </Wrapper>
  );
});

export const Shadows = meta.story(() => {
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
});

export const Spacing = meta.story(() => {
  return <Wrapper> {SpacingGenerator()}</Wrapper>;
});

export const Motion = meta.story(() => {
  return <Wrapper> {MotionGenerator()}</Wrapper>;
});

export const Typography = meta.story(() => {
  return (
    <Wrapper maxWidth="120ch">
      <Tabs>
        <TabList>
          <Tab>Core</Tab>
          <Tab>Public</Tab>
          <Tab>Supreme</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{TypographyGenerator('core')}</TabPanel>
          <TabPanel>{TypographyGenerator('public')}</TabPanel>
          <TabPanel>{TypographyGenerator('supreme')}</TabPanel>
        </TabPanels>
      </Tabs>
    </Wrapper>
  );
});

export const ZIndex = meta.story(() => {
  return <Wrapper> {ZIndexGenerator()}</Wrapper>;
});
