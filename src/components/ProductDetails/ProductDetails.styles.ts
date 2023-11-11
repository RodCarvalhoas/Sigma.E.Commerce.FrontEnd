import styled from "styled-components";
import GradeIcon from '@mui/icons-material/Grade';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface Props{
    img: string
}

export const Container = styled.div`
    flex: 1 0 auto;
`

export const CardProduct = styled.div`
    height: 250px;
    width: 100%;
    display: flex;
    column-gap: 1.5rem;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
    margin-bottom: 5rem;
`

export const CardImg = styled.div<Props>`
    height: 400px;
    width: 450px;
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 15px;
`

export const ProductImg = styled.img`
    height: 200px;
    width: 200px;
    border-radius: 10px;
`
export const DescriptionProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 400px;
    justify-content: space-between;
`

export const ReturnToHome = styled.p`
    font-family: 'Fira sans';
    font-weight: 500;
    width: 0;
    font-size: 30px;
    position: absolute;
    left: 16.5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: #6734ff;
    &:hover{
        cursor: pointer;
        opacity: 0.7;
    }
`
export const DescriptionBar = styled.div`
    display: flex;
    column-gap: 2rem;
    width: 400px;
    align-items: center;
    margin-top: 10rem;
`

export const ProductName = styled.p`
    font-family: 'Fira sans';
    font-weight: 600;
    font-size: 22px;
    max-width: 400px;
    height: 200px;
    padding-left: 1rem;
    margin-top: 0;
`

export const ProductPrice = styled.p`
    font-family: 'Fira sans';
    font-weight: 500;
    font-size: 22px;
    max-width: 400px;
    padding-left: 1rem;
    color: #008000;
    position: relative;
    bottom: 0;
`
export const BuyButton = styled.button`
    background-color: #6734ff;
    color: white;
    border-color: black;
    border-radius: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    font-family: 'Fira sans';
    font-weight: 500;
    font-size: 15px;
    position: relative;
    cursor: pointer;
    &:hover{
        opacity: 0.7;
    }
`

export const FavoriteIcon = styled(GradeIcon)`
    color: yellow;
`
export const FavoriteIconOutlined = styled(GradeOutlinedIcon)`
    color: black;
`

export const ShoppingCart = styled(ShoppingCartIcon)`
    color:  #008000;
`
