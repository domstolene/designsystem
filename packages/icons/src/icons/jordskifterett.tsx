import { SvgWrapper } from '../utils/SvgWrapper';
import { SvgProps } from '../utils/propTypes';

export function JordskifterettIcon(props: SvgProps) {
  const { title, ...rest } = props;
  return (
    <SvgWrapper
      width="24"
      height="24"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {title && <title>{title}</title>}
      <circle cx="12" cy="12" r="6" />
    </SvgWrapper>
  );
}
