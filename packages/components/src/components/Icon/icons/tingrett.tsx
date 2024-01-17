import { type SvgProps } from '../utils/propTypes';
import { SvgWrapper } from '../utils/SvgWrapper';
export function TingrettIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M12 16.615c4.418 0 8-3.857 8-8.615H4c0 4.758 3.582 8.615 8 8.615z" />
    </SvgWrapper>
  );
}
