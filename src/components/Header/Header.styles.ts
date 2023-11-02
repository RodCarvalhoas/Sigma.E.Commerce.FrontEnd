import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styled from "styled-components";

export const HeaderDefault = styled.header`
    width: 100%;
    height: 90px;
    background-color: #6734ff;    
`;

export const InnerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ShoppingCart = styled(ShoppingCartIcon)`
    color: white;
    cursor: pointer;
`
export const AccountCircle = styled(AccountCircleIcon)`
    color: white;
    cursor: pointer;
    padding-right: 3rem;
    size: 50px;
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 2rem;
`

export const Title = styled.h2`
    font-family: 'Fira Sans';
    font-weight: 600;
    font-size: 30px;
    color: white;
    padding-left: 30px;
`;

export const ContainerSearch = styled.div`
    padding-right: 10rem;
`

export const Search = styled.input`
    padding: 10px 10px;
    border-radius: 15px;
    border: none; 
`;