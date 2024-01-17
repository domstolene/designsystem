import { type SvgProps } from '../utils/propTypes';
import { SvgWrapper } from '../utils/SvgWrapper';
export function PlusIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6v2z" />
    </SvgWrapper>
  );
}
