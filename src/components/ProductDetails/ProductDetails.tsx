import { useEffect, useState } from "react";
import { BuyButton, CardImg, CardProduct, Container, DescriptionBar, DescriptionProductContainer, FavoriteIcon, FavoriteIconOutlined, ProductImg, ProductName, ProductPrice, ReturnToHome, ShoppingCart } from "./ProductDetails.styles";
import axios from "axios";
import { Product } from "../../types/Product";
import { useNavigate } from "react-router";

export default function ProductDetails(){
    const [ProductDetails, setProductDetails] = useState<Product>()
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080${window.location.pathname}`)
        .then(result => setProductDetails(result.data))
        .catch(err => console.log(err))
    }, [])
    return(
        <Container>
            <ReturnToHome onClick={() => navigate(-1)}>{"<-"}</ReturnToHome>
            <CardProduct>
                <CardImg img={ProductDetails?.img || "https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400006/100130939-error-404-page-not-found-error-with-glitch-effect-on-screen-vector-illustration-for-your-design.jpg"}/>
                <DescriptionProductContainer>
                    <ProductName>
                        {ProductDetails?.name}
                    </ProductName>
                    <DescriptionBar>
                        <ProductPrice>
                            R$ {ProductDetails?.price}
                        </ProductPrice>
                        {false ? <FavoriteIcon/> : <FavoriteIconOutlined/>}
                        <ShoppingCart/>
                    </DescriptionBar>
                    <BuyButton>
                        COMPRAR
                    </BuyButton>
                </DescriptionProductContainer>
            </CardProduct>
        </Container>
    )
}