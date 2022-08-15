import { StyledSvg } from '../utils/StyledSvg';
import { SvgProps } from '../utils/propTypes';
export function DownloadIcon(props: SvgProps) {
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
      <path d="M13 5v6h1.17L12 13.17 9.83 11H11V5h2zm2-2H9v6H5l7 7 7-7h-4V3zm4 15H5v2h14v-2z" />
    </StyledSvg>
  );
}
