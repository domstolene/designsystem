import { StyledSvg } from '../utils/StyledSvg';
import { SvgProps } from '../utils/propTypes';
export function CheckCircledIcon(props: SvgProps) {
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
      <path d="M12 2C6.467 2 2 6.467 2 12s4.467 10 10 10 10-4.467 10-10S17.533 2 12 2zm0 2c4.467 0 8 3.533 8 8 0 4.467-3.533 8-8 8-4.467 0-8-3.533-8-8 0-4.467 3.533-8 8-8zm4.293 4.293L10 14.586l-2.293-2.293-1.414 1.414L10 17.414l7.707-7.707-1.414-1.414z" />
    </StyledSvg>
  );
}
