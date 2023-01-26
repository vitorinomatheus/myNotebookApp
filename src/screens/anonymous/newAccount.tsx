import { Text, View } from 'react-native';
import { Background } from '../../components/Background';
import { Form } from '../../components/Form';
import { Header } from '../../components/Header';
import { Field, FormProps } from '../../types';

export const NewAccount = ({ navigation }: any) => {

    const goToLoginScreen = () => {
        navigation.navigate('login')
    }

    return (
        <>
            <Background>
                <Header>
                    Create new account
                </Header>

                <Form {...formProps}>  
                    <Text style={{ textAlign: 'center' }}>
                        Already have an account? 
                        <Text 
                            style={{ color: 'blue' }}
                            onPress={() => goToLoginScreen()}
                            > Login
                        </Text>
                    </Text> 
                </Form>  
            </Background>     
        </>
    )
}

const handleSubmit = (formData: any) => {
    console.log(formData)
}

const fields: Array<Field> = [
    {
        name: "name",
        label: "Full Name",
        required: true
    },
    {
        name: "login",
        label: "Login",
        required: true
    },
    {
        name: "email",
        label: "E-mail",
        keyboardType: 'email-address',
        required: true,
        validationRegex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
    },
    {
        name: "password",
        label: "Password",
        hideContent: true,
        required: true
    },
    {
        name: "passowordConfirm",
        label: "Confirm Password",
        hideContent: true,
        required: true
    }
]

const formProps: FormProps = {
    fields: fields,
    submitMethod: (formData) => handleSubmit(formData),
    actionButtonText: 'Create account'
}