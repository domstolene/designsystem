import { StyledSvg } from '../utils/StyledSvg';
import { SvgProps } from '../utils/propTypes';
export function CalendarViewDayIcon(props: SvgProps) {
  const { title, ...rest } = props;
  return (
    <StyledSvg
      width={24}
      height={24}
      fill="currentColor"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {title && <title>{title}</title>}
      <path d="M3 17h18v2H3v-2zm16-5v1H5v-1h14zm2-2H3v5h18v-5zM3 6h18v2H3V6z" />
    </StyledSvg>
  );
}
