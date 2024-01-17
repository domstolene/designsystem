import { type SvgProps } from '../utils';
import { SvgWrapper } from '../utils/SvgWrapper';

export function FolderShieldedIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M1 6C1 4.90575 1.90575 4 3 4H9L11 6H19C20.0943 6 21 6.90575 21 8V10H19V8H10.1719L8.17188 6H3V18H15V20H3C1.90575 20 1 19.0943 1 18V6Z" />
      <path d="M22 15V14C22 12.9 21.1 12 20 12C18.9 12 18 12.9 18 14V15C17.45 15 17 15.45 17 16V19C17 19.55 17.45 20 18 20H22C22.55 20 23 19.55 23 19V16C23 15.45 22.55 15 22 15ZM19 15V14C19 13.45 19.45 13 20 13C20.55 13 21 13.45 21 14V15H19Z" />
    </SvgWrapper>
  );
}
