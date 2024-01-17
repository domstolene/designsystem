import { type SvgProps } from '../utils/propTypes';
import { SvgWrapper } from '../utils/SvgWrapper';

export function ImageIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M19 5v14H5V5h14zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86L11 16l-2-2.86L6 17h12l-3.86-5.14z" />
    </SvgWrapper>
  );
}
