import { type SvgProps } from '../utils/propTypes';
import { SvgWrapper } from '../utils/SvgWrapper';
export function UploadIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M9 16h6v-6h4l-7-7-7 7h4v6zm2-2V8H9.828L12 5.828 14.172 8H13v6h-2zm-6 4h14v2H5v-2z" />
    </SvgWrapper>
  );
}
