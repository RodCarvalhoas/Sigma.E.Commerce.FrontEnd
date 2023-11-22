import { FooterDefault } from "../../components/Footer/Footer.styles";
import HeaderAdmin from "../../components/HeaderAdmin/HeaderAdmin";
import { Container, InnerContainer, OptionCard, Options, Tittle, TittleOption } from "./AdminPainel.styles";

export default function AdminPainel(){
    return(
        <Container>
            <HeaderAdmin/>
            <InnerContainer>
                <Tittle>PAINEL DO ADMINISTRADOR</Tittle>

                <Options>
                    <OptionCard value="Estoque">
                        <TittleOption>ESTOQUE</TittleOption>
                    </OptionCard>
                    <OptionCard value="Vendas">
                        <TittleOption>VENDAS</TittleOption>
                    </OptionCard>
                    <OptionCard value="Cadastro">
                        <TittleOption>CADASTRO</TittleOption>
                    </OptionCard>
                </Options>
            </InnerContainer>
            <FooterDefault/>
        </Container>
    )
}