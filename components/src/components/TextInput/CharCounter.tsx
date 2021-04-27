import styled from "styled-components";
import { ddsBaseTokens as tokens } from '@norges-domstoler/dds-design-tokens';

const Wrapper = styled.span`
    color: ${tokens.colors.DdsColorNeutralsGray6};
    ${tokens.fontPackages.sansRegularx0_875}
`;

type Props = {
    current: number,
    max: number
}

function CharCounter({current, max}: Props) {
    return (
        <Wrapper>{current}/{max}</Wrapper>
    )
}

export default CharCounter;