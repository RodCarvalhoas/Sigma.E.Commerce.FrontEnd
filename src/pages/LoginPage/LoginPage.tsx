import Button from "../../components/Button/Button";
import InputText from "../../components/InputText/InputText";
import * as yup from 'yup'
import { CardLogin, Container, DivButton, InnerCard, SubTitle, TitleCardLogin } from "./LoginPage.styles";
import { useFormik } from "formik";
import { useLogin } from "../../hooks/useLogin";

export default function LoginPage(){

    const { mutate: login } = useLogin();

    const validationSchema = yup.object({
        email: yup
            .string()
            .required("Dugute seu email"),
        password: yup
            .string()
            .required("Digite sua senha")
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: () => {

            const submitData = {
                email: formik.values.email, 
                password: formik.values.password
            }
            login(submitData);
        }
    })

    return(
        <Container>
            <CardLogin>
                <TitleCardLogin>SIGMA</TitleCardLogin>
                <InnerCard>
                    <SubTitle>Login</SubTitle>
                    <form onSubmit={formik.handleSubmit}>
                        <InputText 
                            inputId="email"
                            type="text"
                            placeholder="E-mail"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        <InputText
                            inputId="password"
                            type="password"
                            placeholder="Senha"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        <DivButton>
                            <Button type="submit">Entrar</Button>
                        </DivButton>
                    </form>
                </InnerCard>
            </CardLogin>
        </Container>
    )
}