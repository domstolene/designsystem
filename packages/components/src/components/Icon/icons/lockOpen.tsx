import { type SvgProps } from '../utils/propTypes';
import { SvgWrapper } from '../utils/SvgWrapper';
export function LockOpenIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M12 1C9.128 1 6.719 3.046 6.123 5.787l1.955.426C8.482 4.353 10.072 3 12 3c2.276 0 4 1.724 4 4v1H6c-1.093 0-2 .907-2 2v10c0 1.093.907 2 2 2h12c1.093 0 2-.907 2-2V10c0-1.093-.907-2-2-2V7c0-3.324-2.676-6-6-6zm-6 9h12v10H6V10zm6 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </SvgWrapper>
  );
}
