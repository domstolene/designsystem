import styled, {css} from 'styled-components';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { Button, ButtonPurpose } from '../Button';
import { forwardRef, HTMLAttributes, useState } from 'react';
import { localMessageTokens as tokens } from './localMessageTokens';
import * as CSS from "csstype";

const stylingBase = (purpose: LocalMessagePurpose) => {
    return css`
        ${tokens.container.base}
        ${tokens.container[purpose].base}
    `;
}

const Container = styled.div<{purpose: LocalMessagePurpose, width: CSS.Property.Width<string>}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${({purpose}) => stylingBase(purpose)}
    width: ${({width}) => width};
`;

const IconWrapper = styled.div<{purpose: LocalMessagePurpose}>`
    display: flex;
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

type LocalMessagePurpose = 'info' | 'warning' | 'danger' | 'confidential' | 'success' | 'tips';

export type LocalMessageProps = {
    message?: string;
    purpose: LocalMessagePurpose;
    closable?: boolean;
    width: CSS.Property.Width<string>;
} & HTMLAttributes<HTMLDivElement>

export const LocalMessage = forwardRef<HTMLDivElement, LocalMessageProps>(
    ({message, purpose, closable, width, children, ...rest}, ref) => {

    const [isClosed, setClosed] = useState(false);
    const buttonPurpose = tokens.button[purpose].purpose as ButtonPurpose;

    return (
        !isClosed ?
        <Container purpose={purpose} width={width} ref={ref} {...rest}>
            <ContentContainer closable={closable}>
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
                        appearance='borderless'
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
    purpose: 'info',
    width: tokens.container.defaultWidth,
}
