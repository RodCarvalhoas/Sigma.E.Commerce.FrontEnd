import { useFormik } from "formik";
import HeaderAdmin from "../../../components/HeaderAdmin/HeaderAdmin";
import { FooterAdmin, Tittle } from "../../AdminPainel/AdminPainel.styles";
import { Container, InnerContainer } from "./ProductAddPage.styles";
import * as yup from 'yup'
import { useProductAdd } from "../../../hooks/useProductAdd";
import InputText from "../../../components/InputText/InputText";
import Button from "../../../components/Button/Button";

export default function ProductAddPage(){

    const { mutate: addProduct, isSuccess } = useProductAdd();

    const validationSchema = yup.object({
        name: yup
            .string(),
        price: yup
            .number(),
        img: yup
            .string(),
        categoryName: yup
            .string(),
        quantity: yup
            .number(),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            price: 0,
            img: '',
            categoryName: '',
            quantity: 0
        },
        validationSchema: validationSchema,
        onSubmit: () => {

            const submitData = {
                name: formik.values.name, 
                price: formik.values.price,
                img: formik.values.img,
                categoryName: formik.values.categoryName,
                quantity: formik.values.quantity,
            }
            addProduct(submitData);
        }
    })

    return(
        <Container>
            <HeaderAdmin/>
            <InnerContainer>
                <Tittle>
                    ADICIONAR PRODUTO
                </Tittle>
                <form onSubmit={formik.handleSubmit}>
                    <InputText
                        inputId="name"
                        type="text"
                        placeholder="Nome"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                    <InputText
                        inputId="price"
                        type="number"
                        placeholder="Preço"
                        value={formik.values.price}
                        onChange={formik.handleChange}
                    />
                    <InputText
                        inputId="img"
                        type="text"
                        placeholder="URL img"
                        value={formik.values.img}
                        onChange={formik.handleChange}
                    />
                    <InputText
                        inputId="categoryName"
                        type="text"
                        placeholder="Categoria"
                        value={formik.values.categoryName}
                        onChange={formik.handleChange}
                    />
                    <InputText
                        inputId="quantity"
                        type="number"
                        placeholder="Quantidade (Un)"
                        value={formik.values.quantity}
                        onChange={formik.handleChange}
                    />
                    <Button type="submit">Adicionar</Button>
                </form>
            </InnerContainer>
            <FooterAdmin/>
        </Container>
    )
}