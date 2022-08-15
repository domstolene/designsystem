import { StyledSvg } from '../utils/StyledSvg';
import { SvgProps } from '../utils/propTypes';
export function LinkedInIcon(props: SvgProps) {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 2.838A1.838 1.838 0 012.838 1H21.16A1.836 1.836 0 0123 2.838V21.16A1.838 1.838 0 0121.161 23H2.838A1.839 1.839 0 011 21.161V2.838zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634 3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708V9.388zm-5.5 10.403h3.208V9.25H4.208V19.791zM7.875 5.812a2.063 2.063 0 11-4.125.09 2.063 2.063 0 014.125-.09z"
      />
    </StyledSvg>
  );
}
