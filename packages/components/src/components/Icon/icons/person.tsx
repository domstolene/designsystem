import { type SvgProps, SvgWrapper } from '../utils';
export function PersonIcon(props: SvgProps) {
  return (
    <SvgWrapper {...props}>
      <path d="M12 5.9a2.1 2.1 0 110 4.199A2.1 2.1 0 0112 5.9zm0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1zM12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
    </SvgWrapper>
  );
}
