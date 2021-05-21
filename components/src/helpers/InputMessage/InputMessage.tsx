import styled, { css } from 'styled-components';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import InlineIconWrapper from '../InlineIconWrapper';
import { inputMessageTokens as tokens} from './inputMessageTokens';
import * as CSS from 'csstype';

const InputMessageWrapper = styled.div<{messageType: MessageType, maxWidth: CSS.Property.MaxWidth<string>}>`
    display: flex;
    align-items: center;
    width: fit-content;
    word-break: break-word;
    ${tokens.base}
    ${({messageType}) => css`
        ${tokens[messageType].base}

    `}
    max-width: ${({ maxWidth }) => maxWidth};

    svg {
        margin-right: ${tokens.icon.spaceRight};
        position: relative;
    }
`;

type MessageType = 'error' | 'tip';

type Props = {
    message: string,
    messageType: MessageType;
    maxWidth: CSS.Property.MaxWidth<string>;
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

InputMessage.defaultProps = {
    maxWidth: tokens.defaultMaxWidth
}

export default InputMessage;