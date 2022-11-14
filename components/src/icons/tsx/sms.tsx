import { SvgWrapper } from '../utils/SvgWrapper';
import { SvgProps } from '../utils/propTypes';
export function SmsIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM7 9h2v2H7V9zm8 0h2v2h-2V9zm-4 0h2v2h-2V9z" />
    </SvgWrapper>
  );
}
