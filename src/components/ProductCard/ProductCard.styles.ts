import styled from "styled-components";

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    background: rgba(255, 255, 255, 0.4);
    border-radius:8px;
    width: 256px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
`

export const Img = styled.img`
    width: 220px;
    height: 260px;
    padding-top: 15px;
    border-radius: 8px;
`

export const Name = styled.h3`
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: black;
    font-family: 'Fira Sans';
`
export const LineBreak = styled.div`
    width: 228px;
    height: 1px;
    margin: 8px 0;
    padding: 0.5px;
    background: #6734ff;
`
export const Value = styled.p`
    color: black;
    font-family: 'Fira Sans';
    font-weight: 300;
    font-size: 14px;
`