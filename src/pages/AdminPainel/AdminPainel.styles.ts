import styled from "styled-components";
import { FooterDefault } from "../../components/Footer/Footer.styles";

interface Props{
    value: string;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    min-height: 100%;
    min-width: 100%;
`;

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    width: 100%;
    height: 100%;
`;

export const Tittle = styled.h2`
    font-family: 'Fira Sans';
    font-weight: 600;
    font-size: 35px;
    display: flex;
    justify-content: center;
`;

export const OptionCard = styled.div<Props>`
    background-color: ${
    (props) => props.value === 'Estoque' ? '#c5d9c5' : props.value === 'Vendas' ? 'yellow' : 'grey'};
    border-radius: 20px;
    margin-top: 6rem;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    cursor: pointer;
    &:hover{
        opacity: 0.7;
    }
`;

export const TittleOption = styled.h3`
    font-family: 'Fira Sans';
    font-weight: 600;
    font-size: 20px;
    padding: 3rem;
    padding-left: 8rem;
    padding-right: 8rem;
    display: flex;
    justify-content: center;
`;

export const Options = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const FooterAdmin = styled(FooterDefault)`
    background-color: black;
`