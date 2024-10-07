
import { Button } from '../../components/button/index';
import { MdEmail, MdLock } from 'react-icons/md';
import { Header } from "../../components/header";
import { Column, Container, CreateText, ForgetText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from "./styles";
import {Input} from '../../components/input';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();

    const handleClickSigIn = () => {
        navigate('/feed')
    }

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                    <form>
                        <Input placeholder='E-mail' leftIcon={<MdEmail />} />
                        <Input placeholder='Senha' type="password" leftIcon={<MdLock />}/>
                        <Button title='Entrar' variant='secondary' onClick={handleClickSigIn} type="button"/>
                    </form>
                    <Row>
                        <ForgetText>Esqueci minha senha</ForgetText>
                        <CreateText>Criar conta</CreateText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
       
    </>)
}

 export {Login}