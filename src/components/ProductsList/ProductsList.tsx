import { useEffect, useState } from "react"
import ProductCard from '../../components/ProductCard/ProductCard';
import styled from "styled-components";
import axios from "axios";
import { Product } from "../../types/Product";
import { FilterType } from "../../types/Filter";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    grid-gap: 32px;
    max-width: 100%;
    padding-top: 4rem;
    padding-left: 5rem;
    margin-bottom: 8rem;
`

interface Props{
    FilterStateContext: FilterType
}

export default function ProductsList({FilterStateContext}: Props) {
    const [ProductsList, setProductsList] = useState<Product[]>([]);

    useEffect(() => {
        if(FilterStateContext === 1){
            axios.get("http://localhost:8080/product?categoryName=PERIFERICOS")
            .then(resposta => {
                setProductsList(resposta.data);
            }).catch(err => {
                console.log(err);})
        }else if(FilterStateContext === 2){
            axios.get("http://localhost:8080/product?categoryName=COMPUTADORES")
            .then(resposta => {
                setProductsList(resposta.data)
            }).catch(err => {console.log(err)});
        }else{
            axios.get("http://localhost:8080/product/all")
            .then(resposta => {
                setProductsList(resposta.data);
            }).catch(err => {
                console.log("Erro na requisição:", err);});
        }
    }, [FilterStateContext]);

    return (
        <Container>
            {ProductsList.map((prod) => (
                <ProductCard
                    key={prod.name}
                    imgUrl={prod.img}
                    name={prod.name}
                    price={prod.price}
                />
            ))}
        </Container>
    );
    
}
