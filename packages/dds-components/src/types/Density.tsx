export type Density = 'normal' | 'compact' | 'extraCompact';

export function getDensityCn(value: Density) {
  switch (value) {
    case 'normal':
    case 'compact':
      return value;
    case 'extraCompact':
      return 'extra-compact';
  }
}
