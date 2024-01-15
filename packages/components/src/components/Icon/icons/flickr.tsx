import { SvgWrapper } from '../utils/SvgWrapper';
import { SvgProps } from '../utils/propTypes';

export function FlickrIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M18.75 1.5H2.25C1.00781 1.5 0 2.50781 0 3.75V20.25C0 21.4922 1.00781 22.5 2.25 22.5H18.75C19.9922 22.5 21 21.4922 21 20.25V3.75C21 2.50781 19.9922 1.5 18.75 1.5ZM6.77344 14.9531C5.12813 14.9531 3.79688 13.6219 3.79688 11.9766C3.79688 10.3313 5.12813 9 6.77344 9C8.41875 9 9.75 10.3313 9.75 11.9766C9.75 13.6219 8.41875 14.9531 6.77344 14.9531ZM14.2266 14.9531C12.5813 14.9531 11.25 13.6219 11.25 11.9766C11.25 10.3313 12.5813 9 14.2266 9C15.8719 9 17.2031 10.3313 17.2031 11.9766C17.2031 13.6219 15.8719 14.9531 14.2266 14.9531Z" />
    </SvgWrapper>
  );
}