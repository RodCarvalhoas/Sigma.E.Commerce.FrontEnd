import Footer from "../../components/Footer/Footer";
import { useAllFavorites } from "../../hooks/useFavoriteList";
import FavoriteCard from "./FavoriteCard/FavoriteCard";
import { Container, Div, HeaderFavorite, InnerContainer, LineBreak, TitleFav } from "./FavoritePage.styles";

export default function FavoritePage(){
    
    const { data: favorites, isLoading } = useAllFavorites();
   
    return(
        <Container>
            <HeaderFavorite/>
            <TitleFav>Seus Favoritos</TitleFav>
            <LineBreak/>
            <InnerContainer>
                <Div>
                    {!isLoading && favorites?.map((fav, index) => 
                        <FavoriteCard
                            key={index}
                            id={fav.product.id}
                            img={fav.product.img}
                            title={fav.product.name}
                            price={fav.product.price}
                        />
                    )}
                    {isLoading && <p>Carregando</p>}
                </Div>
            </InnerContainer>
            <Footer/>
        </Container>

    )
}