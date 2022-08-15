import { StyledSvg } from '../utils/StyledSvg';
import { SvgProps } from '../utils/propTypes';
export function BlockIcon(props: SvgProps) {
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
      <path d="M12 2C6.489 2 2 6.489 2 12s4.489 10 10 10 10-4.489 10-10S17.511 2 12 2zm0 2c4.43 0 8 3.57 8 8 0 1.853-.63 3.55-1.682 4.904L7.096 5.682A7.965 7.965 0 0112 4zM5.682 7.096l11.222 11.222A7.965 7.965 0 0112 20c-4.43 0-8-3.57-8-8 0-1.853.63-3.55 1.682-4.904z" />
    </StyledSvg>
  );
}
