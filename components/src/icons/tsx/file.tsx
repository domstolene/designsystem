import { StyledSvg } from '../utils/StyledSvg';
import { SvgProps } from '../utils/propTypes';
export function FileIcon(props: SvgProps) {
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
      <path d="M6 2c-1.094 0-2 .906-2 2v16c0 1.094.906 2 2 2h12c1.094 0 2-.906 2-2V8l-6-6H6zm0 2h7v5h5v11H6V4z" />
    </StyledSvg>
  );
}
