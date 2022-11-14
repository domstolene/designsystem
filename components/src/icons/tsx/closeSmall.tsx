import { SvgWrapper } from '../utils/SvgWrapper';
import { SvgProps } from '../utils/propTypes';

export function CloseSmallIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M7.293 8.707l1.414-1.414L12 10.586l3.293-3.293 1.414 1.414L13.414 12l3.293 3.293-1.414 1.414L12 13.414l-3.293 3.293-1.414-1.414L10.586 12 7.293 8.707z" />
    </SvgWrapper>
  );
}
