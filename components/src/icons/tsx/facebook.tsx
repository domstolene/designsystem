import { StyledSvg } from '../utils/StyledSvg';
import { SvgProps } from '../utils/propTypes';
export function FacebookIcon(props: SvgProps) {
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
      <path d="M20.625 2.625H3.375a.75.75 0 00-.75.75v17.25c0 .415.335.75.75.75h17.25a.75.75 0 00.75-.75V3.375a.75.75 0 00-.75-.75zm-2.166 5.473h-1.497c-1.175 0-1.402.557-1.402 1.378v1.807h2.803l-.365 2.829H15.56v7.263h-2.923v-7.26h-2.444v-2.832h2.444V9.197c0-2.421 1.48-3.74 3.64-3.74 1.036 0 1.925.077 2.185.112v2.529h-.003z" />
    </StyledSvg>
  );
}
