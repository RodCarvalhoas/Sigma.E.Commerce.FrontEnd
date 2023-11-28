import styled from "styled-components";
import DeleteIcon from '@mui/icons-material/Delete';

export const ImgFavorite = styled.img`
    height: 150px;
    width: 150px;
`

export const Title = styled.h2`
    font-family: 'Fira Sans';
    font-weight: 700;
    font-size: 16px;
    padding-left: 1rem;
    max-width: 250px;
    flex: 1 0 auto;
`

export const Price = styled.p`
    font-family: 'Fira sans';
    font-weight: 500;
    font-size: 20px;
    max-width: 400px;
    padding-left: 1rem;
    color: #008000;
    position: relative;
    bottom: 0;
`

export const Container = styled.div`
    min-width: 450px;
    margin-left: 2rem;
    margin-top: 1rem;
    cursor: pointer;
`;

export const InnerCard = styled.div`
    display: flex;
    column-gap: 15px;
    align-items: center;
    position: relative;
`

export const DivInnerCar = styled.div`
    display: flex;
    flex-direction: column;
    height: 150px;
    max-width: 400px;
`

export const LineBreak = styled.div`
    height: 1px;
    padding: 0.1px;
    background: black;
    width: 550px;
    margin-top: 16px;
`;

export const Delete = styled(DeleteIcon)`
    color: red;
    position: absolute;
    right: 50px;
    cursor: pointer;
    padding: 10;
    z-index: 20;
`