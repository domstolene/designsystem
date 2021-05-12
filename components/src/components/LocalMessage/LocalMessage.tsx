import styled, {css} from 'styled-components';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { Button } from '../Button';
import { forwardRef, HTMLAttributes, useState } from 'react';
import { localMessageTokens as tokens } from './localMessageTokens';

const stylingBase = (purpose: LocalMessagePurpose) => {
    return css`
        ${tokens.base}
        ${tokens.typography.font}
        color: ${tokens.typography[purpose].color};
        border-color: ${tokens[purpose].color.border};
        background-color: ${tokens[purpose].color.background};
    `;
}

const Container = styled.div<{purpose: LocalMessagePurpose, width?: string}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${({width}) => width? width : tokens.base.width};
    ${({purpose}) => stylingBase(purpose)}
`;

const IconWrapper = styled.div<{purpose: LocalMessagePurpose}>`
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

type LocalMessagePurpose = 'info' | 'warning' | 'danger' | 'confidential' | 'success' | 'tips';

export type LocalMessageProps = {
    message?: string;
    purpose: LocalMessagePurpose;
    closable: boolean;
    width?: string;
} & HTMLAttributes<HTMLDivElement>

export const LocalMessage = forwardRef<HTMLDivElement, LocalMessageProps>(
    ({message, purpose, closable, width, children, ...rest}, ref) => {

    const [isClosed, setClosed] = useState(false);

    return (
        !isClosed ?
        <Container purpose={purpose} width={width} ref={ref} {...rest}>
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
                        size='medium'
                    />
                : ''
                }
            </ControlsContainer>
        </Container>
        : null
    );
});

LocalMessage.defaultProps = {
    purpose: 'info'
}
