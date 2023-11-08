import { useEffect, useState } from "react";
import { Filter, Filters } from "./FilterProducts.styles";
import { FilterType } from "../../types/Filter";

interface Props{
  onFilterChange: (newFilter: FilterType) => void;
}

export default function FilterProducts({onFilterChange}: Props) {
  const [selectedFilter, setSelectedFilter] = useState<FilterType | null>(FilterType.ALL_PRODUCTS);
  
  useEffect(() => {
    if(selectedFilter === 0 || selectedFilter){
      console.log(selectedFilter)
      onFilterChange(selectedFilter)
    }
  }, [selectedFilter])

  const handleClick = (filterType: FilterType) => {
    if (filterType === selectedFilter) {
      setSelectedFilter(FilterType.ALL_PRODUCTS);
    } else {
      setSelectedFilter(filterType);
    }
  };

  const isFilterSelected = (filterType: FilterType) => {
    return filterType === selectedFilter;
  };

  return (
    <Filters>
      <Filter
        selected={isFilterSelected(FilterType.ALL_PRODUCTS)}
        onClick={() => handleClick(FilterType.ALL_PRODUCTS)}
      >
        TODOS OS PRODUTOS
      </Filter>
      <Filter
        selected={isFilterSelected(FilterType.PERIFERICOS)}
        onClick={() => handleClick(FilterType.PERIFERICOS)}
      >
        PERIFÉRICOS
      </Filter>
      <Filter
        selected={isFilterSelected(FilterType.COMPUTADORES)}
        onClick={() => handleClick(FilterType.COMPUTADORES)}
      >
        COMPUTADORES
      </Filter>
    </Filters>
  );
}
