import { HStack, type HStackProps } from '../HStack';
import { VStack, type VStackProps } from '../VStack';

export function StoryVStack({ alignItems, gap, ...rest }: VStackProps) {
  return (
    <VStack
      {...rest}
      alignItems={alignItems ? alignItems : 'start'}
      gap={gap ? gap : 'x1'}
    />
  );
}

export function StoryHStack({ alignItems, gap, ...rest }: HStackProps) {
  return (
    <HStack
      {...rest}
      alignItems={alignItems ? alignItems : 'start'}
      gap={gap ? gap : 'x1'}
    />
  );
}
