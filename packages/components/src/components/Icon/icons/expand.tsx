import { type SvgProps } from '../utils/propTypes';
import { SvgWrapper } from '../utils/SvgWrapper';
export function ExpandIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M21 11V3h-8l3.29 3.29-10 10L3 13v8h8l-3.29-3.29 10-10L21 11z" />
    </SvgWrapper>
  );
}
