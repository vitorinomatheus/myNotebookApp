import { Text, View } from 'react-native';
import { Background } from '../../components/Background';
import { Form } from '../../components/Form';
import { Header } from '../../components/Header';
import { CreateUserDto } from '../../services/api/dtos/createUser.dto';
import { createUser } from '../../services/api/user';
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

const handleSubmit = (formData: CreateUserDto) => {
    createUser(formData)
        .then(createdUser => console.log(createdUser))
        .catch(error => console.log(error))
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
        // validationRegex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
    },
    {
        name: "password",
        label: "Password",
        hideContent: true,
        required: true
    },
    {
        name: "confirmPassword",
        label: "Confirm Password",
        hideContent: true,
        // required: true,
        customValidationMessage: 'Senhas são diferentes',
        isConfirmField: true,
        fieldToConfirm: 'password'
    }
]

const formProps: FormProps = {
    fields: fields,
    submitMethod: (formData) => handleSubmit(formData),
    actionButtonText: 'Create account'
}