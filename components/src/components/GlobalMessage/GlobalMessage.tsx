import styled, {css} from 'styled-components';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { Button } from '../Button';
import { forwardRef, HTMLAttributes, useState } from 'react';
import { globalMessageTokens as tokens } from './globalMessageTokens';

const stylingBase = (purpose: GlobalMessagePurpose) => {
    return css`
        ${tokens.base}
        ${tokens.typography.font}
        color: ${tokens.typography[purpose].color};
        border-color: ${tokens[purpose].color.border};
        background-color: ${tokens[purpose].color.background};
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
        color: ${tokens[purpose].color.icon};
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

type GlobalMessagePurpose = 'info' | 'warning' | 'danger' | 'system';

export type GlobalMessageProps = {
    message: string;
    purpose: GlobalMessagePurpose;
    closable: boolean;
} & HTMLAttributes<HTMLDivElement>

export const GlobalMessage = forwardRef<HTMLDivElement, GlobalMessageProps>(
    ({message, purpose, closable, children, ...rest}, ref) => {

    const [isClosed, setClosed] = useState(false);

    return (
        !isClosed ?
        <Container purpose={purpose} ref={ref} {...rest}>
            <ContentContainer>
                <IconWrapper purpose={purpose}>
                    {tokens[purpose].icon}
                </IconWrapper>
                <span>{children ? children : message ? message : ''}</span>
            </ContentContainer>
            <ControlsContainer>
                {closable ?
                    <Button
                        Icon={CloseOutlinedIcon}
                        purpose={purpose === 'danger' ? purpose : 'secondary'}
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
