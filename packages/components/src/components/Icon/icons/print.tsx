import { type SvgProps } from '../utils/propTypes';
import { SvgWrapper } from '../utils/SvgWrapper';
export function PrintIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-4h8v2zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z" />
      <path d="M18 12.5a1 1 0 100-2 1 1 0 000 2z" />
    </SvgWrapper>
  );
}
