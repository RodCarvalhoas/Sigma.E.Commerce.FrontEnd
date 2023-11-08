import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProductDetails from "../components/ProductDetails/ProductDetails";

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`


export default function ProductPage(){
    return(
        <Container>
            <Header/>
            <ProductDetails/>
            <Footer/>
        </Container>
    )
}