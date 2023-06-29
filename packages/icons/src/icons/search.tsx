import { SvgWrapper } from '../utils/SvgWrapper';
import { SvgProps } from '../utils/propTypes';
export function SearchIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M9 2C5.146 2 2 5.146 2 9s3.146 7 7 7a6.958 6.958 0 004.574-1.719l.426.426V16l6 6 2-2-6-6h-1.293l-.426-.426A6.958 6.958 0 0016 9c0-3.854-3.146-7-7-7zm0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5 2.227-5 5-5z" />
    </SvgWrapper>
  );
}
