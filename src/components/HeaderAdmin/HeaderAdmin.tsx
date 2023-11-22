import { useNavigate } from "react-router-dom";
import { AccountCircle, CloseX, ContainerProfile, Header, InnerHeader, MyProfile, Title, Option} from "./HeaderAdmin.styles";
import { useState } from "react";

export default function HeaderAdmin(){
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()

    const navegateToHomeAdmin = () => {
        navigate("/admin")
    }

    return(
        <Header>
            <InnerHeader>
                <Title onClick={navegateToHomeAdmin}>SIGMA</Title>
                <ContainerProfile>
                        {isOpen === false && <AccountCircle onClick={() => setIsOpen(!isOpen)}/>}
                        {isOpen && 
                        <MyProfile>
                            <CloseX onClick={() => setIsOpen(!isOpen)}/>
                            <Option>Sair</Option>
                        </MyProfile>}
                </ContainerProfile>      
            </InnerHeader>
        </Header>
    )
}