import { type SvgProps } from '../utils/propTypes';
import { SvgWrapper } from '../utils/SvgWrapper';
export function DownloadIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M13 5v6h1.17L12 13.17 9.83 11H11V5h2zm2-2H9v6H5l7 7 7-7h-4V3zm4 15H5v2h14v-2z" />
    </SvgWrapper>
  );
}
