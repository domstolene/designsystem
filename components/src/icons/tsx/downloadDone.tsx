import { StyledSvg } from '../utils/StyledSvg';
import { SvgProps } from '../utils/propTypes';
export function DownloadDoneIcon(props: SvgProps) {
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
      <path d="M20.13 5.41L18.72 4l-9.19 9.19-4.25-4.24-1.41 1.41 5.66 5.66 10.6-10.61zM5 18h14v2H5v-2z" />
    </StyledSvg>
  );
}
