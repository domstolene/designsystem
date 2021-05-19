import React, { forwardRef } from "react"
import styled from "styled-components";
import RequiredMarker from '../../helpers/RequiredMarker';
import InputMessage from '../../helpers/InputMessage/InputMessage';
import { radioButtonGroupTokens as tokens } from './radioButtonGroupTokens';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const GroupContainer = styled.div<{direction?: Direction}>`
    display: flex;
    flex-direction: ${({direction}) => direction ?? 'row'};
`;

const Label = styled.label`
    ${tokens.label.base}
`;

type Direction = 'column' | 'row';

export type RadioButtonGroupProps = {
    label?: string;
    errorMessage?: string;
    tip?: string;
    direction?: Direction;
    children?: React.ReactNode;
    required?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

export const RadioButtonGroup = ({label, errorMessage, tip, direction, children, required, className, style, ...rest}: RadioButtonGroupProps) => {

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
                <InputMessage message={errorMessage} messageType={'error'} />
                : tip ?
                <InputMessage message={tip} messageType={'tip'} />
                : ''
            }
        </Container>
    );
}