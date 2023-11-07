import { ContainerCard, Img, LineBreak, Name, Value } from "./ProductCard.styles";

interface Props{
    id?: string;
    imgUrl: string;
    name: string;
    price: number;
    categoryName?: string;
}

export default function ProductCard({ id, imgUrl, name, price, categoryName }: Props){
    return(
        <ContainerCard>
            <Img src={imgUrl}/>
            <Name>
                {name.length > 54 ? `${name.substring(0, 54)}...` : name}
            </Name>
            <LineBreak/>
            <Value>
                R$ {price}
            </Value>
        </ContainerCard>
    )
}