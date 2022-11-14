import { SvgWrapper } from '../utils/SvgWrapper';
import { SvgProps } from '../utils/propTypes';
export function BlockIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M12 2C6.489 2 2 6.489 2 12s4.489 10 10 10 10-4.489 10-10S17.511 2 12 2zm0 2c4.43 0 8 3.57 8 8 0 1.853-.63 3.55-1.682 4.904L7.096 5.682A7.965 7.965 0 0112 4zM5.682 7.096l11.222 11.222A7.965 7.965 0 0112 20c-4.43 0-8-3.57-8-8 0-1.853.63-3.55 1.682-4.904z" />
    </SvgWrapper>
  );
}
