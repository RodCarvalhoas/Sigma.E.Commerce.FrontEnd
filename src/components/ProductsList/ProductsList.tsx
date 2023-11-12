import ProductCard from "../../components/ProductCard/ProductCard";
import styled from "styled-components";
import { FilterType } from "../../types/Filter";
import { useProductList } from "../../hooks/useProductList";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-gap: 32px;
  max-width: 100%;
  padding-top: 4rem;
  padding-left: 5rem;
  margin-bottom: 8rem;
`;

interface Props {
  FilterStateContext: FilterType;
}

export default function ProductsList({ FilterStateContext }: Props) {
  const { data, isLoading } = useProductList(FilterStateContext)

  return (
    <Container>
      {!isLoading && data?.map((prod) => (
          <ProductCard
          key={prod.name}
          imgUrl={prod.img}
          name={prod.name}
          price={prod.price}
          />
          ))}
        {isLoading && <p>Carregando...</p>}
    </Container>
  );
}
