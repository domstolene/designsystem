import { type SvgProps } from '../utils/propTypes';
import { SvgWrapper } from '../utils/SvgWrapper';
export function DateRangeIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M6.4 10.9h2.2v2.2H6.4v-2.2zm15.4-5.5v15.4c0 1.21-.99 2.2-2.2 2.2H4.2A2.2 2.2 0 012 20.8l.011-15.4c0-1.21.968-2.2 2.189-2.2h1.1V1h2.2v2.2h8.8V1h2.2v2.2h1.1c1.21 0 2.2.99 2.2 2.2zM4.2 7.6h15.4V5.4H4.2v2.2zm15.4 13.2v-11H4.2v11h15.4zm-4.4-7.7h2.2v-2.2h-2.2v2.2zm-4.4 0H13v-2.2h-2.2v2.2z" />
    </SvgWrapper>
  );
}
