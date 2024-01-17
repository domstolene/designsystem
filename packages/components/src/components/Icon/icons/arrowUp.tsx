import { type SvgProps } from '../utils/propTypes';
import { SvgWrapper } from '../utils/SvgWrapper';
export function ArrowUpIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </SvgWrapper>
  );
}
