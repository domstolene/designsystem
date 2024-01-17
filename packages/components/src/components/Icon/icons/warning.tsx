import { type SvgProps } from '../utils/propTypes';
import { SvgWrapper } from '../utils/SvgWrapper';
export function WarningIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z" />
      <path d="M12 17a1 1 0 100-2 1 1 0 000 2zM11 7h2v7h-2V7z" />
    </SvgWrapper>
  );
}
