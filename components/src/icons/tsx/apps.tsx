import { StyledSvg } from '../utils/StyledSvg';
import { SvgProps } from '../utils/propTypes';
export function AppsIcon(props: SvgProps) {
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
      <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
    </StyledSvg>
  );
}
