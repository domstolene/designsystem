import { type SvgProps, SvgWrapper } from '../utils';
export function ArrowRightIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
    </SvgWrapper>
  );
}
