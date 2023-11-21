import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    min-height: 100%;
    min-width: 100%;
`;

export const CardLogin = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #6734ff;
    align-items: center;
    border-radius: 25px;
    box-shadow: 0px 0px 100px 30px rgba(0, 0, 0, 0.25);
    padding: 1rem;
`;

export const TitleCardLogin = styled.h2`
    font-family: 'Fira Sans';
    font-weight: 600;
    font-size: 50px;
    color: white;
    margin-bottom: 0;
`;

export const DivButton = styled.div`
    display: flex;
    justify-content: center;
`

export const InnerCard = styled.div`
    padding: 32px 25px;
    
`

export const SubTitle = styled.h3`
    font-family: 'Fira Sans';
    font-weight: 400;
    font-size: 24px;
    color: white;
`