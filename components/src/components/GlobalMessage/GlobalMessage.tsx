import styled, {css} from 'styled-components';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { Button, ButtonPurpose } from '../Button';
import { forwardRef, HTMLAttributes, useState } from 'react';
import { globalMessageTokens as tokens } from './globalMessageTokens';

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
    width: 100%;
    ${({purpose}) => stylingBase(purpose)}
`;

const IconWrapper = styled.div<{purpose: GlobalMessagePurpose}>`
    display: flex;
    ${({purpose}) => purpose && css`
        color: ${tokens.container[purpose].iconColor};
    `}
    margin-right: ${tokens.icon.marginRight};
`;

const ControlsContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    ${tokens.contentContainer.base}
`;

type GlobalMessagePurpose = 'info' | 'warning' | 'danger';

export type GlobalMessageProps = {
    message: string;
    purpose: GlobalMessagePurpose;
    closable: boolean;
} & HTMLAttributes<HTMLDivElement>

export const GlobalMessage = forwardRef<HTMLDivElement, GlobalMessageProps>(
    ({message, purpose, closable, children, ...rest}, ref) => {

    const [isClosed, setClosed] = useState(false);
    const buttonPurpose = tokens.button[purpose].purpose as ButtonPurpose;

    return (
        !isClosed ?
        <Container purpose={purpose} ref={ref} {...rest}>
            <ContentContainer>
                <IconWrapper purpose={purpose}>
                    {tokens.icon[purpose].icon}
                </IconWrapper>
                <span>{children ?? message}</span>
            </ContentContainer>
            <ControlsContainer>
                {closable ?
                    <Button
                        Icon={CloseOutlinedIcon}
                        purpose={buttonPurpose}
                        form='borderless'
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

GlobalMessage.defaultProps = {
    purpose: 'info'
}
