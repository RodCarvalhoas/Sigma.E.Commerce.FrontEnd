import styled from "styled-components";

interface Props{
    isEmpty?: boolean;
}

export const InputContainer = styled.div<Props>`
    position: relative;
    margin-top: 5px;
`;

export const Label = styled.label<Props>`
    position: absolute;
    padding-left: 15px;
    font-weight: 500;
    line-height: 1.5rem;
    color: rgba(97.75, 85.94, 85.94, 0.60);
    font-family: 'Fira Sans';
    word-wrap: wrap;
    pointer-events: none;
    transition: 0.2s ease-out;
    font-size: ${(props) => (props.isEmpty ? '0.688rem' : '0.875rem')};
    top: ${(props) => (props.isEmpty ? '0' : '15px')};
`;

export const Input = styled.input`
    border-radius: 10px; 
    border: 1px black solid;
    width: 300px;
    height: 50px;
    padding-left: 15px;
    padding-right: 15px;
    font-family: 'Fira Sans';
`;

export const DivIcon = styled.div`
    position: absolute;
    top: 7px; 
    padding-left: 320px;
`;

export const DivHelperText = styled.div`
    font-family: 'Fira Sans';
    font-size: 0.688rem;
    padding-left: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
`;

export const DivIconButton = styled.div`
    position: absolute;
    top: -1px;
    right: -5px;
`;

export const DivErrorAlert = styled.div`
    position: absolute;
    top: -2.5px;
    right: -20px;
`;