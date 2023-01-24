import { SVGAttributes } from 'react';

export type SvgProps = { title?: string } & SVGAttributes<SVGSVGElement>;
export type SvgIcon = (props: SvgProps) => JSX.Element;
