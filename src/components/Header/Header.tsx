import { useState } from "react"
import { HeaderDefault, InnerHeader, Search, Title, ContainerSearch, Nav, ShoppingCart, AccountCircle, SearchIco, MyProfile, Option, ContainerProfile, CloseX } from "./Header.styles"
import { useNavigate } from "react-router";

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()

    const navegateToHome = () => {
        navigate("/")
    }
    return(
        <HeaderDefault>
            <InnerHeader>
                <Title onClick={navegateToHome}>SIGMA</Title>
                <Nav>
                    <ContainerSearch>
                        <SearchIco/>
                        <Search placeholder="Procurando por algo específico?"></Search>
                    </ContainerSearch>
                    <ShoppingCart/> 
                    <ContainerProfile>
                        {isOpen === false && <AccountCircle onClick={() => setIsOpen(!isOpen)}/>}
                        {isOpen && 
                        <MyProfile>
                            <CloseX onClick={() => setIsOpen(!isOpen)}/>
                            <Option>Meu Perfil</Option>
                            <Option>Meu carrinho</Option>
                            <Option>Favoritos</Option>
                            <Option>SAC</Option>
                        </MyProfile>}
                    </ContainerProfile>                 
                </Nav>
            </InnerHeader>
        </HeaderDefault>
    )
}