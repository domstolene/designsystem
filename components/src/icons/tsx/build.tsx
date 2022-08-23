import { StyledSvg } from '../utils/StyledSvg';
import { SvgProps } from '../utils/propTypes';
export function BuildIcon(props: SvgProps) {
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
      <path d="M7.5 1c-.873 0-1.707.176-2.467.488l-1.388.57L7.585 6 6 7.586 2.059 3.645l-.57 1.388A6.474 6.474 0 001 7.5C1 11.078 3.922 14 7.5 14c.619 0 1.181-.183 1.748-.346l8.908 8.907a1.514 1.514 0 002.121 0l2.285-2.288a1.516 1.516 0 00-.002-2.119l-8.906-8.906c.162-.567.346-1.13.346-1.748C14 3.922 11.078 1 7.5 1zm0 2C9.998 3 12 5.002 12 7.5c0 .607-.122 1.182-.34 1.713l-.252.617 9.385 9.385-1.576 1.578-9.387-9.387-.617.254c-.53.219-1.105.34-1.713.34A4.484 4.484 0 013 7.5c0-.026.013-.047.014-.072L6 10.414 10.414 6 7.428 3.014c.025 0 .046-.014.072-.014z" />
    </StyledSvg>
  );
}
