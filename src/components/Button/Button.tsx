import React from "react"
import styled from "styled-components"

interface Props{
    children: React.ReactNode;
    type: 'button' | 'submit';
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const ButtonComponent = styled.button`
    padding: 1rem;
    margin-top: 1rem;
    background-color: white;
    font-family: 'Fira Sans';
    font-size: 0.9rem;
    font-weight: 400;
    color: #6734ff;
    border: none;
    border-radius: 15px;
    width: 100%;
    cursor: pointer;
    &:hover{
        opacity: 0.7;
    }
`

export default function Button({children, type, onClick}: Props){
    return(
        <>
            <ButtonComponent type={type} onClick={onClick}>
                {children}
            </ButtonComponent>
        </>
    )
}