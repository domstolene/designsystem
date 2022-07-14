import { StyledSvg } from '../utils/StyledSvg';
import { SvgProps } from '../utils/propTypes';
export function UploadIcon(props: SvgProps) {
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
      <path d="M9 16h6v-6h4l-7-7-7 7h4v6zm2-2V8H9.828L12 5.828 14.172 8H13v6h-2zm-6 4h14v2H5v-2z" />
    </StyledSvg>
  );
}
