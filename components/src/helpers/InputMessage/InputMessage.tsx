import styled, { css } from 'styled-components';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import InlineIconWrapper from '../InlineIconWrapper';
import { inputMessageTokens as tokens} from './inputMessageTokens';

const InputMessageWrapper = styled.div<{messageType: MessageType, maxWidth?: string}>`
    display: flex;
    width: fit-content;
    word-break: break-word;
    max-width: ${({ maxWidth }) => maxWidth ? maxWidth : '100%'};
    padding: ${tokens.padding};
    ${({messageType}) => css`
        ${tokens.font[messageType]}
        color: ${tokens.colors[messageType].text};
        background-color: ${tokens.colors[messageType].background};

    `}

    svg {
        margin-right: ${tokens.margin.icon.marginRight};
        position: relative;
        top: 0.25em;
    }
`;

type MessageType = 'error' | 'tip';

type Props = {
    message: string,
    messageType: MessageType;
    maxWidth?: string;
}

function InputMessage({message, messageType, maxWidth}: Props) {

    const wrapperProps = {messageType, maxWidth};
    return (
        <InputMessageWrapper {...wrapperProps}>
            {messageType === 'error' && <InlineIconWrapper Icon={ReportProblemOutlinedIcon} />}
            <div>
                {message}
            </div>
        </InputMessageWrapper>
    )
}

export default InputMessage;