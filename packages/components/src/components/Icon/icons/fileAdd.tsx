import { type SvgProps, SvgWrapper } from '../utils';

export function FileAddIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M13 11h-2v3H8v2h3v3h2v-3h3v-2h-3v-3zm1-9H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
    </SvgWrapper>
  );
}
