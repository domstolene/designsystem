import { StyledSvg } from '../utils/StyledSvg';
import { SvgProps } from '../utils/propTypes';
export function PlusIcon(props: SvgProps) {
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
      <path d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6v2z" />
    </StyledSvg>
  );
}
