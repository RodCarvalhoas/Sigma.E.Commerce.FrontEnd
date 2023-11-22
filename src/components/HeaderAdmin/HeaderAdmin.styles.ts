import styled from "styled-components";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';

export const Header = styled.header`
    width: 100%;
    height: 90px;
    background-color: #6734ff;
    position: relative;
`;

export const InnerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.h2`
    font-family: 'Fira Sans';
    font-weight: 600;
    font-size: 30px;
    color: white;
    padding-left: 5rem;
    &:hover{
        cursor: pointer;
    }
`;

export const ContainerProfile = styled.div`
    display: flex;
    flex-direction: column;
`

export const AccountCircle = styled(AccountCircleIcon)`
    color: white;
    cursor: pointer;
    padding-right: 3rem;
    size: 50px;
    top: 50%;
`

export const MyProfile = styled.ul`
    background-color: white;
    width: 100px;
    height: 150px;
    position: absolute;
    right: 0;
    top: 0;
    margin: 0;
    text-align: left;
    padding: 20px 25px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
`

export const Option = styled.li`
    background: transparent;
    position: relative;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    list-style: none;
    font-family: 'Fira Sans';
    font-weight: 400;
    border-bottom: 2px solid  #6734ff;
    font-size: 15px;
    color: black;
    padding-top: 20px;
    &:hover{
        transition: 0.5s;   
        opacity: 0.7;
        font-size: 16px;
    }
`

export const CloseX = styled(CloseIcon)`
    color: black;
    position: relative;
    left: 90px;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover{
        transition: 0.5s;
        opacity: 0.7;
        font-size: 26px;
    }
`
