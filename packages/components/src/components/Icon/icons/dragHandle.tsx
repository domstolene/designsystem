import { type SvgProps } from '../utils/propTypes';
import { SvgWrapper } from '../utils/SvgWrapper';
export function DragHandleIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" />
    </SvgWrapper>
  );
}
