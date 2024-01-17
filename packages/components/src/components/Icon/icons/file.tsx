import { type SvgProps } from '../utils/propTypes';
import { SvgWrapper } from '../utils/SvgWrapper';
export function FileIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M6 2c-1.094 0-2 .906-2 2v16c0 1.094.906 2 2 2h12c1.094 0 2-.906 2-2V8l-6-6H6zm0 2h7v5h5v11H6V4z" />
    </SvgWrapper>
  );
}
