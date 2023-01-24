import { SvgWrapper } from '../utils/SvgWrapper';
import { SvgProps } from '../utils/propTypes';
export function ChevronLastIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6-1.41 1.41zM16 6h2v12h-2V6z" />
    </SvgWrapper>
  );
}
