import { type SvgProps } from '../utils/propTypes';
import { SvgWrapper } from '../utils/SvgWrapper';
export function LockIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M12 1C8.676 1 6 3.676 6 7v1c-.522 0-1.055.191-1.432.568C4.191 8.945 4 9.478 4 10v10c0 .522.191 1.055.568 1.432.377.377.91.568 1.432.568h12c.522 0 1.055-.191 1.432-.568.377-.377.568-.91.568-1.432V10c0-.522-.191-1.055-.568-1.432C19.055 8.191 18.522 8 18 8V7c0-3.324-2.676-6-6-6zm0 2c2.276 0 4 1.724 4 4v1H8V7c0-2.276 1.724-4 4-4zm-6 7h12v10H6V10zm6 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </SvgWrapper>
  );
}
