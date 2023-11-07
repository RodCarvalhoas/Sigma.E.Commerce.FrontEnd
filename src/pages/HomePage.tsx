import React, { useState } from 'react';
import FilterProducts from '../components/FilterProducts/FilterProducts';
import Header from '../components/Header/Header';
import ProductsList from '../components/ProductsList/ProductsList';
import { FilterType } from '../types/Filter';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  min-width: 100vh;
  background-color: #e9ecef;
`;

function App() {
  const [filterStateContext, setFilterStateContext] = useState<FilterType>(FilterType.ALL_PRODUCTS);

  const handleFilterChange = (newFilter: FilterType) => {
    setFilterStateContext(newFilter);
  };

  return (
    <Container>
      <Header />
      <FilterProducts onFilterChange={handleFilterChange} />
      <ProductsList FilterStateContext={filterStateContext} />
    </Container>
  );
}

export default App;
