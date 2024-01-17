import { type SvgProps } from '../utils/propTypes';
import { SvgWrapper } from '../utils/SvgWrapper';
export function FilterListIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
    </SvgWrapper>
  );
}
