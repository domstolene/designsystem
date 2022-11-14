import { SvgWrapper } from '../utils/SvgWrapper';
import { SvgProps } from '../utils/propTypes';
export function ChevronLeftIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
    </SvgWrapper>
  );
}
