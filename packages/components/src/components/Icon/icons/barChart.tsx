import { type SvgProps, SvgWrapper } from '../utils';

export function BarChartIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z" />
    </SvgWrapper>
  );
}
