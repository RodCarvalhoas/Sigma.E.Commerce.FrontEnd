import { BuyButton, CardImg, CardProduct, Container, DescriptionBar, DescriptionProductContainer, FavoriteIcon, FavoriteIconOutlined, ProductName, ProductPrice, ReturnToHome, ShoppingCart } from "./ProductDetails.styles";
import { useNavigate } from "react-router";
import { useProductDetails } from "../../hooks/useProductDetails";

export default function ProductDetails(){
    const { data, isLoading } = useProductDetails();
    const navigate = useNavigate();

    return(
        <Container>
            <ReturnToHome onClick={() => navigate(-1)}>{"<-"}</ReturnToHome>
            <CardProduct>
                <CardImg img={data?.img ?? "Carregando..."}/>
                {!isLoading && 
                    <>
                        <DescriptionProductContainer>
                            <ProductName>
                                {data?.name}
                            </ProductName>
                            <DescriptionBar>
                                <ProductPrice>
                                    R$ {data?.price}
                                </ProductPrice>
                                {false ? <FavoriteIcon/> : <FavoriteIconOutlined/>}
                                <ShoppingCart/>
                            </DescriptionBar>
                            <BuyButton>
                                COMPRAR
                            </BuyButton>
                        </DescriptionProductContainer>
                    </>
                }
                {isLoading && <p>Carregando...</p>}
            </CardProduct>
        </Container>
    )
}