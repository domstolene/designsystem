import { HStack, type HStackProps, VStack, type VStackProps } from '../';

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
