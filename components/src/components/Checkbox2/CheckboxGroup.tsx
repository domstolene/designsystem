import React from 'react';
import styled from 'styled-components';
import RequiredMarker from '../../helpers/RequiredMarker';
import InputMessage from '../../helpers/InputMessage/InputMessage';
import { checkboxGroupTokens as tokens } from './checkboxGroupTokens';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const GroupContainer = styled.div<{direction?:Direction}>`
    display: flex;
    flex-direction: ${({direction}) => direction ?? 'row'};
`;

const Label = styled.span`
    ${tokens.label.base}
    padding-left: ${tokens.label.spaceLeft};
`;

type Direction = 'column' | 'row';

export type CheckboxGroupProps = {
    label?: string;
    direction?: Direction;
    errorMessage?: string;
    required?: boolean;
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

export const CheckboxGroup = ({label, direction, errorMessage, required, children, className, style, ...rest}: CheckboxGroupProps) => {

    const containerProps = {
        className,
        style,
        ...rest
    }

    return (
        <Container {...containerProps}>
            <Label>{label} {required && <RequiredMarker />}</Label>
            <GroupContainer direction={direction}>
                {children}
            </GroupContainer>
            {errorMessage ?
                <InputMessage messageType='error' message={errorMessage} />
                : ''
            }
        </Container>
    );
}