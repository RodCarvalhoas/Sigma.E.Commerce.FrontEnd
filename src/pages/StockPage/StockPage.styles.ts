import styled from "styled-components";
import ButtonComponent from "../../components/Button/Button";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    min-height: 100%;
    min-width: 100%;
    background-color: #c5d9c5;
    align-items: center;
`;

export const TitleStock = styled.h2`
    font-family: 'Fira Sans';
    font-weight: 600;
    font-size: 50px;
    display: flex;
    justify-content: center;
    color: black;
`;

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    width: 100%;
    height: 100%;
    align-items: center;
`;

export const DivButton = styled.div`
    min-width: 950px;
    margin-bottom: 10px;

`
export const ButtonAdd = styled(ButtonComponent)`
    color: white;
    background-color: green;
    display: flex;
    max-width: 100px;
`