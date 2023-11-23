import { Container, TitleStock, InnerContainer, DivButton, ButtonAdd } from "./StockPage.styles";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useProductList } from "../../hooks/useProductList";
import { FilterType } from "../../types/Filter";
import HeaderAdmin from "../../components/HeaderAdmin/HeaderAdmin";
import { FooterDefault } from "../../components/Footer/Footer.styles";
import { useNavigate } from "react-router-dom";
import { FooterAdmin } from "../AdminPainel/AdminPainel.styles";

function createData(
    name: string,
    price: number,
    category: string
  ) {
    return { name, price, category };
  }


export default function StockPage(){

    const { data, isLoading } = useProductList(FilterType.ALL_PRODUCTS);
    const navigate = useNavigate();

    const handleClickAdd = () => {
        navigate("productAdd")
    }

    return(
        <Container>
            <HeaderAdmin/>
            <TitleStock>
                ESTOQUE
            </TitleStock>
            <InnerContainer>
            <DivButton>
                <ButtonAdd type="button" onClick={handleClickAdd}>Adicionar</ButtonAdd>
            </DivButton>
            <TableContainer component={Paper} sx={{ maxWidth: 950}}>
                <Table sx={{ maxWidth: 950 }} align="center">
                    <TableHead>
                    <TableRow>
                        <TableCell align="justify">Nome do Produto</TableCell>
                        <TableCell align="justify">Preço</TableCell>
                        <TableCell align="justify">Categoria</TableCell>
                        <TableCell align="justify">Quantidade</TableCell>
                        <TableCell align="justify">Ações</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {!isLoading && data?.map((data) => (
                        <TableRow
                        key={data.name}
                        >
                        <TableCell align="justify">{data.name.substring(0, 45)}...</TableCell>
                        <TableCell align="justify">R$ {data.price}</TableCell>
                        <TableCell align="justify">{data.categoryName}</TableCell>
                        <TableCell align="justify">{data.quantity} un</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                </InnerContainer>
                <FooterAdmin/>
        </Container>
    )
}