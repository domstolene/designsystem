import styled from "styled-components";
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

const {
    colors: Colors,
    spacing: Spacing,
} = ddsBaseTokens;

const calculateBorderWidth = (width: number) => {
    return width/8;
}

const SpinnerElement = styled.div<{width:number, unit:string}>`
    border-radius: 50%;
    border: ${({color, width, unit}) => `${calculateBorderWidth(width)}${unit} solid ${color}`};
    border-top: ${({width, unit}) => `${calculateBorderWidth(width)}${unit} solid transparent`};
    width: ${({width, unit}) => `${width}${unit}`};
    height: ${({width, unit}) => `${width}${unit}`};
    display: inline-block;
    animation: spin 2s linear infinite;
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

type Props = {
    width: number;
    unit: string;
    inline: boolean;
    color: string
}

function Spinner({width, unit, inline, color}: Props) {
    return <SpinnerElement as={inline ? 'span' : 'div'} width={width} color={color} unit={unit} />
}

Spinner.defaultProps = {
    width: Spacing.SizesDdsSpacingLayoutX6NumberPx,
    unit: 'px',
    color: Colors.DdsColorNeutralsGray2
}

export default Spinner;