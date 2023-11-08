import { Container, FacebookImg, FooterDefault, InstagramImg, LinkedInImg, TwitterImg, Text, Logos } from "./Footer.styles"


export default function Footer(){
    return(
        <Container>
            <FooterDefault>
                <Text>
                    Viva sem medo!
                </Text>
                <Logos>
                    <FacebookImg/>
                    <InstagramImg/>
                    <TwitterImg/>
                    <LinkedInImg/>
                </Logos>
            </FooterDefault>
        </Container>
    )
}