import { type SvgProps, SvgWrapper } from '../utils';

export function DragHandleIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M20.2421 14C20.6563 14 20.9921 14.3358 20.9921 14.75C20.9921 15.1642 20.6563 15.5 20.2421 15.5H3.75C3.33579 15.5 3 15.1642 3 14.75C3 14.3358 3.33579 14 3.75 14H20.2421ZM20.2421 8C20.6563 8 20.9921 8.33579 20.9921 8.75C20.9921 9.16421 20.6563 9.5 20.2421 9.5H3.75C3.33579 9.5 3 9.16421 3 8.75C3 8.33579 3.33579 8 3.75 8H20.2421Z" />
    </SvgWrapper>
  );
}
