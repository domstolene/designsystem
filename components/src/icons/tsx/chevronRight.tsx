import { SvgWrapper } from '../utils/SvgWrapper';
import { SvgProps } from '../utils/propTypes';

export function ChevronRightIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
    </SvgWrapper>
  );
}
