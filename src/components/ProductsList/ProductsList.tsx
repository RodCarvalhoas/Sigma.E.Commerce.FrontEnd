import { useState } from "react"
import products from "../../data/Products.json";
import ProductCard from '../../components/ProductCard/ProductCard';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    position: relative;
    padding-top: 4rem;
    padding-left: 5rem;
`

export default function ProductsList(){
    const [listProducts, setListProducts] = useState(products);

    return(
        <Container>
            {listProducts.map((prod) => (
                <ProductCard
                key={prod.id}
                id={prod.id}
                imgUrl={prod.img}
                name={prod.name}
                value={prod.value}
                />
            ))}
        </Container>
    )
}