import { type SvgProps } from '../utils/propTypes';
import { SvgWrapper } from '../utils/SvgWrapper';
export function ChevronUpIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" />
    </SvgWrapper>
  );
}
