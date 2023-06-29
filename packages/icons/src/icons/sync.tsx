import { SvgWrapper } from '../utils/SvgWrapper';
import { SvgProps } from '../utils/propTypes';
export function SyncIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M12 0L8 4l4 4V5c3.859 0 7 3.14 7 7 0 .88-.17 1.72-.469 2.496l1.516 1.514A8.931 8.931 0 0021 12c0-4.962-4.037-9-9-9V0zM3.953 7.99A8.931 8.931 0 003 12c0 4.962 4.037 9 9 9v3l4-4-4-4v3c-3.859 0-7-3.14-7-7 0-.88.17-1.72.469-2.496L3.953 7.99z" />
    </SvgWrapper>
  );
}
