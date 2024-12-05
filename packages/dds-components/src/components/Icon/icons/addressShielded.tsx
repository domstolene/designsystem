import { type SvgProps, SvgWrapper } from '../utils';

export function AddressShieldedIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M19 4V10H16.7889L12 5.69L7 10.19V18H9V12H14V14H11V20H5V12H2L12 3L16 6.6V4H19Z" />
      <path d="M10 10H14C14 8.9 13.1 8 12 8C10.9 8 10 8.9 10 10Z" />
      <path d="M20 15V14C20 12.9 19.1 12 18 12C16.9 12 16 12.9 16 14V15C15.45 15 15 15.45 15 16V19C15 19.55 15.45 20 16 20H20C20.55 20 21 19.55 21 19V16C21 15.45 20.55 15 20 15ZM17 15V14C17 13.45 17.45 13 18 13C18.55 13 19 13.45 19 14V15H17Z" />
    </SvgWrapper>
  );
}
