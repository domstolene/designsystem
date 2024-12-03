import { StyledSvg } from './StyledSvg';
import { type SvgProps } from './types';

export function SvgWrapper(props: SvgProps) {
  const { title, children, ...rest } = props;

  return (
    <StyledSvg {...rest}>
      {title && <title>{title}</title>}
      {children}
    </StyledSvg>
  );
}
