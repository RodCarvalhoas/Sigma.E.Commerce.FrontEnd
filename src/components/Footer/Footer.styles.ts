import styled from "styled-components";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Container = styled.div`
    min-width: 100%;
    
`
export const FooterDefault = styled.footer`
    background-color: #6734ff;
    min-width: 100%;
    height: 75px;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const InstagramImg = styled(InstagramIcon)`
    color: white;
`
export const FacebookImg = styled(FacebookIcon)`
    color: white;
`
export const TwitterImg = styled(TwitterIcon)`
    color: white;
`
export const LinkedInImg = styled(LinkedInIcon)`
    color: white;
`

export const Logos = styled.div`
    display: flex;
    column-gap: 50px;
`

export const Text = styled.p`
    color: white;
    font-family: 'Fira Sans';
    font-size: 16px;
    font-weight: 500;
`