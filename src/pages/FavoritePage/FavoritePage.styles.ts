import styled from "styled-components";
import Header from "../../components/Header/Header";

export const HeaderFavorite = styled(Header)`
    background-color: #6734ff;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
    min-width: 100%;
    position: absolute;
`

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    width: 100%;
    height: 100%;
`;

export const TitleFav = styled.h2`
    font-family: 'Fira sans';
    font-weight: 700;
    font-size: 30px;
    max-width: 500px;
    margin-left: 2rem;
    color: #6734ff;
`;

export const LineBreak = styled.div`
    max-width: 100%;
    height: 1px;
    padding: 0.1px;
    background: black;
`

export const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
`