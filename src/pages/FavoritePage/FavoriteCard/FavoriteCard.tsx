import { useNavigate } from "react-router-dom";
import { useFavoriteRemove } from "../../../hooks/useFavoriteRemove";
import { Container, ImgFavorite, Price, Title, InnerCard, DivInnerCar, LineBreak, Delete } from "./FavoriteCard.styles";

interface Props{
    id: string;
    img: string;
    title: string;
    price: number;

}

export default function FavoriteCard({ id, img, title, price }: Props){
    
    const { mutate: FavoriteRemove } = useFavoriteRemove();

    const handleClickDelete = (value: string, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        FavoriteRemove(value);
    }

    const navigate = useNavigate();

    const handleClickContainer = () => {
        navigate(`/product/${title}`)
        
    }

    return(
        <Container onClick={handleClickContainer}>
            <InnerCard>
                <ImgFavorite src={img}/>
                <DivInnerCar>
                    <Title>{title}</Title>
                    <Price>R$ {price}</Price>
                </DivInnerCar>
                <div onClick={(ev) => handleClickDelete(id, ev)}>
                    <Delete/>
                </div>
            </InnerCard>
            <LineBreak/>
        </Container>
    )
}