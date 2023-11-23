import { useNavigate } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin/HeaderAdmin";
import { Container, InnerContainer, OptionCard, Options, Tittle, TittleOption, FooterAdmin } from "./AdminPainel.styles";

export default function AdminPainel(){

    const navigate = useNavigate();

    const handleClick = (url: string) => {
        navigate(url);
    }

    return(
        <Container>
            <HeaderAdmin/>
            <InnerContainer>
                <Tittle>PAINEL DO ADMINISTRADOR</Tittle>

                <Options>
                    <OptionCard value="Estoque" onClick={() => handleClick("stock")}>
                        <TittleOption>ESTOQUE</TittleOption>
                    </OptionCard>
                    <OptionCard value="Vendas" onClick={() => handleClick("sales")}>
                        <TittleOption>VENDAS</TittleOption>
                    </OptionCard>
                    <OptionCard value="Cadastro" onClick={() => handleClick("register")}>
                        <TittleOption>CADASTRO</TittleOption>
                    </OptionCard>
                </Options>
            </InnerContainer>
            <FooterAdmin/>
        </Container>
    )
}