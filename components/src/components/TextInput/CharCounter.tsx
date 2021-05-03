import styled from "styled-components";
import { charCounterTokens as tokens} from './charCounterTokens';

const Wrapper = styled.div`
    ${tokens.base}
    ${tokens.font}
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