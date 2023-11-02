import { HeaderDefault, InnerHeader, Search, Title, ContainerSearch, Nav, ShoppingCart, AccountCircle } from "./Header.styles"


export default function Header(){
    return(
        <HeaderDefault>
            <InnerHeader>
                <Title>SIGMA</Title>
                <Nav>

                    <ShoppingCart/>                    
                    <ContainerSearch>
                        <Search placeholder="Busque aqui"></Search>
                    </ContainerSearch>
                    <AccountCircle/>
                </Nav>
            </InnerHeader>
        </HeaderDefault>
    )
}