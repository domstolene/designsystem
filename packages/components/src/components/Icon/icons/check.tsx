import { type SvgProps, SvgWrapper } from '../utils';
export function CheckIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M20.293 5.293L9 16.586l-4.293-4.293-1.414 1.414L9 19.414 21.707 6.707l-1.414-1.414z" />
    </SvgWrapper>
  );
}
