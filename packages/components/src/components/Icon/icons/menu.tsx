import { type SvgProps, SvgWrapper } from '../utils';
export function MenuIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </SvgWrapper>
  );
}
