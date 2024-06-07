import { type SvgProps, SvgWrapper } from '../utils';
export function DragHandleIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" />
    </SvgWrapper>
  );
}
