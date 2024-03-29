import { type SvgProps } from '../utils/propTypes';
import { SvgWrapper } from '../utils/SvgWrapper';
export function HourglassBottom(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="m18 22-.01-6L14 12l3.99-4.01L18 2H6v6l4 4-4 3.99V22h12zM8 7.5V4h8v3.5l-4 4-4-4z" />
    </SvgWrapper>
  );
}
