import { BuyButton, CardImg, CardProduct, Container, DescriptionBar, DescriptionProductContainer, FavoriteIcon, FavoriteIconOutlined, ProductName, ProductPrice, ReturnToHome, ShoppingCart } from "./ProductDetails.styles";
import { useNavigate } from "react-router";
import { useProductDetails } from "../../hooks/useProductDetails";
import { useFavoriteAdd } from "../../hooks/useFavoriteAdd";
import { useState } from "react";
import { useFavoriteRemove } from "../../hooks/useFavoriteRemove";

export default function ProductDetails(){
    const { data, isLoading } = useProductDetails();
    const navigate = useNavigate();

    const [ productIsFavorite, setProductIsFavorite ] = useState(false);
    const { mutate: FavoriteAdd } = useFavoriteAdd();
    const { mutate: FavoriteRemove } = useFavoriteRemove();

    const handleClick = () => {
        if(data){
            const ProductRequest = {
                id: data.id,
                name: data.name,
                price: data.price,
                img: data.img,
                quantity: data.quantity
            }
            FavoriteAdd(ProductRequest);
            setProductIsFavorite(!productIsFavorite);
        }
    }

    const handleClickToRemoveFavorite = () => {
        if(data){
            FavoriteRemove(data.id);
        }
        setProductIsFavorite(!productIsFavorite);
    }

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
                                {productIsFavorite ? <FavoriteIcon onClick={handleClickToRemoveFavorite}/> : <FavoriteIconOutlined onClick={handleClick}/>}
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