import { StyledSvg } from '../utils/StyledSvg';
import { SvgProps } from '../utils/propTypes';
export function FolderIcon(props: SvgProps) {
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
      <path d="M4 4c-1.094 0-2 .906-2 2v12c0 1.094.906 2 2 2h16c1.094 0 2-.906 2-2V8c0-1.094-.906-2-2-2h-8l-2-2H4zm0 2h5.172l2 2H20v10H4V6z" />
    </StyledSvg>
  );
}
