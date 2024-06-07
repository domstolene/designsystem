import { type SvgProps, SvgWrapper } from '../utils';
export function FolderIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M4 4c-1.094 0-2 .906-2 2v12c0 1.094.906 2 2 2h16c1.094 0 2-.906 2-2V8c0-1.094-.906-2-2-2h-8l-2-2H4zm0 2h5.172l2 2H20v10H4V6z" />
    </SvgWrapper>
  );
}
