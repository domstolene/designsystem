import { StyledSvg } from '../utils/StyledSvg';
import { SvgProps } from '../utils/propTypes';
export function UnfoldMoreIcon(props: SvgProps) {
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
      <path d="M11.59 18.17L8.42 15l-1.41 1.41L11.59 21l4.59-4.59L14.76 15l-3.17 3.17zm0-12.34L14.76 9l1.41-1.41L11.59 3 7 7.59 8.42 9l3.17-3.17z" />
    </StyledSvg>
  );
}
