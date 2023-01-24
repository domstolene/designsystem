import { SvgProps } from './propTypes';
import { StyledSvg } from './StyledSvg';

export function SvgWrapper(props: SvgProps) {
  const { title, children, ...rest } = props;

  return (
    <StyledSvg {...rest}>
      {title && <title>{title}</title>}
      {children}
    </StyledSvg>
  );
}
