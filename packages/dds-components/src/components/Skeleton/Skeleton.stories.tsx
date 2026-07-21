import preview from '#.storybook/preview';

import { Skeleton } from './Skeleton';
import {
  categoryCss,
  responsivePropsArgTypes,
  windowWidthDecorator,
} from '../../storybook';
import { Box, VStack } from '../layout';
import { StoryVStack } from '../layout/Stack/storybook-utils';

const meta = preview.meta({
  title: 'dds-components/Components/Skeleton',
  component: Skeleton,
  argTypes: {
    width: responsivePropsArgTypes.width,
    height: responsivePropsArgTypes.height,
    borderRadius: { control: 'text', table: categoryCss },
  },
});

export default meta;

export const Preview = meta.story({
  args: {
    width: '320px',
    height: 'var(--dds-spacing-x2)',
  },
});

export const Overview = meta.story({
  args: {
    width: 'var(--dds-spacing-x2)',
    height: 'var(--dds-spacing-x2)',
  },
  render: args => (
    <StoryVStack>
      <Skeleton {...args} borderRadius="rounded" />
      <Skeleton {...args} width="320px" />
    </StoryVStack>
  ),
});

export const Example = meta.story({
  render: args => (
    <StoryVStack>
      <Skeleton
        {...args}
        borderRadius="rounded"
        width="var(--dds-spacing-x4)"
        height="var(--dds-spacing-x4)"
      />
      <Skeleton {...args} width="320px" height="var(--dds-spacing-x2)" />
      <Skeleton {...args} width="220px" height="var(--dds-spacing-x1)" />
      <Skeleton {...args} width="220px" height="var(--dds-spacing-x1)" />
      <Skeleton
        {...args}
        width="60px"
        height="var(--dds-spacing-x2-5)"
        borderRadius="button"
        style={{ marginTop: 'var(--dds-spacing-x1)' }}
      />
    </StoryVStack>
  ),
});

export const Responsive = meta.story({
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  decorators: [Story => windowWidthDecorator(<Story />)],

  render: () => (
    <VStack
      gap="x2"
      maxWidth={{
        xs: '100%',
        sm: '100%',
        md: '30rem',
        lg: '30rem',
        xl: '30rem',
      }}
    >
      <Box
        display="flex"
        alignItems={{
          lg: 'center',
          xl: 'center',
        }}
        flexDirection={{
          xs: 'column',
          sm: 'column',
          md: 'column',
          lg: 'row',
          xl: 'row',
        }}
        gap={{
          xs: 'x1',
          sm: 'x1',
          md: 'x1',
          lg: 'x1',
          xl: 'x1',
        }}
      >
        <Skeleton
          borderRadius="rounded"
          width={{
            xs: '80px',
            sm: '75px',
            md: '75px',
            lg: '60px',
            xl: '60px',
          }}
          height={{
            xs: '80px',
            sm: '75px',
            md: '75px',
            lg: '60px',
            xl: '60px',
          }}
        />
        <VStack gap="x0.75">
          <Skeleton
            width={{
              xs: '8rem',
              sm: '8rem',
              md: '8rem',
              lg: '8rem',
              xl: '8rem',
            }}
            height="18px"
          />
          <Skeleton
            width={{
              xs: '100%',
              sm: '15rem',
              md: '15rem',
              lg: '15rem',
              xl: '15rem',
            }}
            height="18px"
          />
        </VStack>
      </Box>
      <VStack gap="x1">
        <Skeleton
          width={{
            xs: '100%',
            sm: '25rem',
            md: '25rem',
            lg: '25rem',
            xl: '25rem',
          }}
          height="25px"
        />
        <Skeleton
          width={{
            xs: '100%',
            sm: '18rem',
            md: '18rem',
            lg: '18rem',
            xl: '18rem',
          }}
          height="25px"
        />
      </VStack>
      <Box marginBlock="x1">
        <Skeleton
          width={{
            xs: '100%',
            sm: '110px',
            md: '110px',
            lg: '110px',
            xl: '110px',
          }}
          height="50px"
          borderRadius="button"
        />
      </Box>
    </VStack>
  ),
});
