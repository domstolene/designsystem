import { HStack, type StackProps, VStack } from '../Stack';

export function StoryVStack({ align, gap, ...rest }: StackProps) {
  return (
    <VStack {...rest} align={align ? align : 'start'} gap={gap ? gap : 'x1'} />
  );
}

export function StoryHStack({ align, gap, ...rest }: StackProps) {
  return (
    <HStack {...rest} align={align ? align : 'start'} gap={gap ? gap : 'x1'} />
  );
}
