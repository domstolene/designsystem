import { SvgWrapper } from '../utils/SvgWrapper';
import { SvgProps } from '../utils/propTypes';
export function CalendarViewDayIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M3 17h18v2H3v-2zm16-5v1H5v-1h14zm2-2H3v5h18v-5zM3 6h18v2H3V6z" />
    </SvgWrapper>
  );
}
