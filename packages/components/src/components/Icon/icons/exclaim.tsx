import { type SvgProps } from '../utils/propTypes';
import { SvgWrapper } from '../utils/SvgWrapper';
export function ExclaimIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M12 21a2 2 0 100-4 2 2 0 000 4zM10 3h4v12h-4V3z" />
    </SvgWrapper>
  );
}
