import { View } from 'react-native';
import { Background } from '../../components/Background';
import { Form } from '../../components/Form';
import { Header } from '../../components/Header';
import { Field, FormProps } from '../../types';

export const NewAccount = () => {
    return (
        <>
        <Background>

            <Header>
                Criar nova conta
            </Header>

        </Background>

        <Form {...formProps} />            
        </>
    )
}

const handleSubmit = () => {
    alert('hello')
}

const fields: Array<Field> = [
    {
        name: "name",
        label: "Nome"
    },
    {
        name: "login",
        label: "Login"
    },
    {
        name: "email",
        label: "E-mail",
        keyboardType: 'email-address'
    },
    {
        name: "password",
        label: "Senha",
        hideContent: true
    },
    {
        name: "passowordConfirm",
        label: "Confirmar Senha",
        hideContent: true
    }
]

const formProps: FormProps = {
    fields: fields,
    submitMethod: () => {handleSubmit},
    actionButtonText: 'Criar Conta'
}