import { type SvgProps, SvgWrapper } from '../utils';
export function GavelIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.112 15.528L3.302 9.86l1.393-1.43 5.81 5.669-1.393 1.429zM15.385 9.097L9.575 3.43 10.967 2l5.81 5.668-1.393 1.43zM21.606 21.44l-9.095-8.87 1.394-1.43L23 20.012l-1.394 1.429zM10.802 12.993L5.75 8.066l3.485-3.573 5.052 4.929-3.485 3.572zM3.998 18.686h8.984v1.996H3.998v-1.996z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 20.183h10.98v1.997H3v-1.997z"
      />
    </SvgWrapper>
  );
}
