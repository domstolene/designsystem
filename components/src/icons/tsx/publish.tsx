import { SvgWrapper } from '../utils/SvgWrapper';
import { SvgProps } from '../utils/propTypes';
export function PublishIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M5 4h14v2H5V4zm0 10h4v6h6v-6h4l-7-7-7 7zm8-2v6h-2v-6H9.83L12 9.83 14.17 12H13z" />
    </SvgWrapper>
  );
}
