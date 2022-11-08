import { SvgWrapper } from '../utils/SvgWrapper';
import { SvgProps } from '../utils/propTypes';
export function CloseCircledIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M12 2C6.467 2 2 6.467 2 12s4.467 10 10 10 10-4.467 10-10S17.533 2 12 2zm0 2c4.467 0 8 3.533 8 8 0 4.467-3.533 8-8 8-4.467 0-8-3.533-8-8 0-4.467 3.533-8 8-8zM8.707 7.293L7.293 8.707 10.586 12l-3.293 3.293 1.414 1.414L12 13.414l3.293 3.293 1.414-1.414L13.414 12l3.293-3.293-1.414-1.414L12 10.586 8.707 7.293z" />
    </SvgWrapper>
  );
}
