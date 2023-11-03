import { HeaderDefault, InnerHeader, Search, Title, ContainerSearch, Nav, ShoppingCart, AccountCircle, SearchIco } from "./Header.styles"


export default function Header(){
    return(
        <HeaderDefault>
            <InnerHeader>
                <Title>SIGMA</Title>
                <Nav>
                    <ContainerSearch>
                        <SearchIco/>
                        <Search placeholder="Procurando por algo específico?"></Search>
                    </ContainerSearch>
                    <ShoppingCart/>                  
                    <AccountCircle/>
                </Nav>
            </InnerHeader>
        </HeaderDefault>
    )
}