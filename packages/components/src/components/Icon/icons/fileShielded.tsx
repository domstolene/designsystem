import { type SvgProps } from '../utils';
import { SvgWrapper } from '../utils/SvgWrapper';

export function FileShieldedIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M13 2H5C3.9 2 3 2.9 3 4V20C3 21.1 3.89 22 4.99 22H13V20H5V4H12V9H17V12H19V8L13 2Z" />
      <path d="M20 17V16C20 14.9 19.1 14 18 14C16.9 14 16 14.9 16 16V17C15.45 17 15 17.45 15 18V21C15 21.55 15.45 22 16 22H20C20.55 22 21 21.55 21 21V18C21 17.45 20.55 17 20 17ZM17 17V16C17 15.45 17.45 15 18 15C18.55 15 19 15.45 19 16V17H17Z" />
    </SvgWrapper>
  );
}
