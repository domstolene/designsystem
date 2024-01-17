import { type SvgProps } from '../utils/propTypes';
import { SvgWrapper } from '../utils/SvgWrapper';
export function PlusCircledIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M12 2C6.467 2 2 6.467 2 12s4.467 10 10 10 10-4.467 10-10S17.533 2 12 2zm0 2c4.467 0 8 3.533 8 8 0 4.467-3.533 8-8 8-4.467 0-8-3.533-8-8 0-4.467 3.533-8 8-8zm-1 3v4H7v2h4v4h2v-4h4v-2h-4V7h-2z" />
    </SvgWrapper>
  );
}
