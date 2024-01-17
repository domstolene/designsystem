import { type SvgProps } from '../utils/propTypes';
import { SvgWrapper } from '../utils/SvgWrapper';
export function InfoIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M12 2C6.489 2 2 6.489 2 12s4.489 10 10 10 10-4.489 10-10S17.511 2 12 2zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8zm-1 3v2h2V7h-2zm0 4v6h2v-6h-2z" />
    </SvgWrapper>
  );
}
