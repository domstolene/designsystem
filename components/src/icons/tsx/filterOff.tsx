import { StyledSvg } from '../utils/StyledSvg';
import { SvgProps } from '../utils/propTypes';
export function FilterOffIcon(props: SvgProps) {
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
      <path d="M16.95 6l-3.57 4.55 1.43 1.43c1.03-1.31 4.98-6.37 4.98-6.37A.998.998 0 0019 4H6.83l2 2h8.12zM2.81 2.81L1.39 4.22 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.17l5.78 5.78 1.41-1.41L2.81 2.81z" />
    </StyledSvg>
  );
}
