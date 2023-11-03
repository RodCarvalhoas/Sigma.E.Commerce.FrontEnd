import { ContainerCard, Img, LineBreak, Name, Value } from "./ProductCard.styles";

interface Props{
    id: string;
    imgUrl: string;
    name: string;
    value: number;
}

export default function ProductCard({ id, imgUrl, name, value }: Props){
    return(
        <ContainerCard>
            <Img src={imgUrl}/>
            <Name>
                {name}
            </Name>
            <LineBreak/>
            <Value>
                R$ {value}
            </Value>
        </ContainerCard>
    )
}