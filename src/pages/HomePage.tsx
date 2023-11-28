import { useState } from "react";
import FilterProducts from "../components/FilterProducts/FilterProducts";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProductsList from "../components/ProductsList/ProductsList";
import { FilterType } from "../types/Filter";
import styled from "styled-components";
import { useGetUserByEmail } from "../hooks/useGetUserByEmail";

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`
const InnerContainer = styled.div`
    flex: 1 0 auto;
`

export default function HomePage(){
    const [filterStateContext, setFilterStateContext] = useState<FilterType>(FilterType.ALL_PRODUCTS);
    const { data } = useGetUserByEmail();

    const handleFilterChange = (newFilter: FilterType) => {
      setFilterStateContext(newFilter);
    };
    
    return(
        <Container>
            <Header />
            <InnerContainer>
                <FilterProducts onFilterChange={handleFilterChange} />
                <ProductsList FilterStateContext={filterStateContext} />
            </InnerContainer>
            <Footer/>
        </Container>
    )
}