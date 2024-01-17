import { type SvgProps } from '../utils/propTypes';
import { SvgWrapper } from '../utils/SvgWrapper';
export function ChevronFirstIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z" />
    </SvgWrapper>
  );
}
