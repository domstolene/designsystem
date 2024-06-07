import { type SvgProps, SvgWrapper } from '../utils';
export function ErrorIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M12 5.99L19.53 19H4.47L12 5.99zM12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" />
    </SvgWrapper>
  );
}
