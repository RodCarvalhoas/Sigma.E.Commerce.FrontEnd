import { useState } from "react";
import FilterProducts from "../components/FilterProducts/FilterProducts";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProductsList from "../components/ProductsList/ProductsList";
import { FilterType } from "../types/Filter";

export default function HomePage(){
    const [filterStateContext, setFilterStateContext] = useState<FilterType>(FilterType.ALL_PRODUCTS);

    const handleFilterChange = (newFilter: FilterType) => {
      setFilterStateContext(newFilter);
    };
    
    return(
        <>
            <Header />
            <FilterProducts onFilterChange={handleFilterChange} />
            <ProductsList FilterStateContext={filterStateContext} />
            <Footer/>
        </>
    )
}