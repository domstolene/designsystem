import styled, {css} from 'styled-components';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { Button, ButtonPurpose } from '../Button';
import { forwardRef, HTMLAttributes, useState } from 'react';
import { globalMessageTokens as tokens } from './globalMessageTokens';
import { IconWrapper } from '../../helpers/IconWrapper';

const stylingBase = (purpose: GlobalMessagePurpose) => {
    return css`
        ${tokens.container.base}
        ${tokens.container[purpose].base}
    `;
}

const Container = styled.div<{purpose: GlobalMessagePurpose}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${({purpose}) => stylingBase(purpose)}
`;

const MessageIconWrapper = styled(IconWrapper)<{purpose: GlobalMessagePurpose}>`
    ${({purpose}) => purpose && css`
        color: ${tokens.icon[purpose].color};
    `}
    margin-right: ${tokens.icon.marginRight};
`;

const ControlsContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ContentContainer = styled.div<{closable?: boolean}>`
    display: flex;
    align-items: center;
    ${tokens.contentContainer.base}
    ${({closable}) => closable && css`
        ${tokens.contentContainer.withClosable.base}
    `}

`;

export type GlobalMessagePurpose = 'info' | 'warning' | 'danger';

export type GlobalMessageProps = {
    message?: string;
    purpose?: GlobalMessagePurpose;
    closable?: boolean;
} & HTMLAttributes<HTMLDivElement>

export const GlobalMessage = forwardRef<HTMLDivElement, GlobalMessageProps>(
    ({message, purpose = 'info', closable, children, ...rest}, ref) => {

    const [isClosed, setClosed] = useState(false);
    const buttonPurpose = tokens.button[purpose].purpose as ButtonPurpose;

    return (
        !isClosed ?
        <Container purpose={purpose} ref={ref} {...rest}>
            <ContentContainer closable={closable}>
                <MessageIconWrapper purpose={purpose} Icon={tokens.icon[purpose].icon} />
                <span>{children ?? message}</span>
            </ContentContainer>
            <ControlsContainer>
                {closable ?
                    <Button
                        Icon={CloseOutlinedIcon}
                        purpose={buttonPurpose}
                        appearance='borderless'
                        onClick={() => setClosed(true)}
                        size='small'
                    />
                    : null
                }
            </ControlsContainer>
        </Container>
        : null
    );
})
