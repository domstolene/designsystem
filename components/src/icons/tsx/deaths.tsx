import { StyledSvg } from '../utils/StyledSvg';
import { SvgProps } from '../utils/propTypes';
export function DeathsIcon(props: SvgProps) {
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
      <path d="M16.5 3c-.96 0-1.9.25-2.73.69L12 9h3l-3 10 1-9h-3l1.54-5.39C10.47 3.61 9.01 3 7.5 3 4.42 3 2 5.42 2 8.5c0 4.13 4.16 7.18 10 12.5 5.47-4.94 10-8.26 10-12.5C22 5.42 19.58 3 16.5 3zm-6.26 13.73C6.45 13.34 4 11 4 8.5 4 6.54 5.54 5 7.5 5c.59 0 1.19.15 1.73.42L7.35 12h3.42l-.53 4.73zm4.89-1.2L17.69 7h-2.91l.61-1.82c.36-.12.74-.18 1.11-.18C18.46 5 20 6.54 20 8.5c0 2.21-2.02 4.43-4.87 7.03z" />
    </StyledSvg>
  );
}
