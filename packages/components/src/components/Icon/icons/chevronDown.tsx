import { type SvgProps } from '../utils/propTypes';
import { SvgWrapper } from '../utils/SvgWrapper';
export function ChevronDownIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </SvgWrapper>
  );
}
