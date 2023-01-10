import { View, Text } from "react-native"
import { Background } from "../../components/Background"
import { Form } from "../../components/Form"
import { Header } from "../../components/Header"
import { Field, FormProps } from "../../types"

export const Login = ({ navigation }: any) => {

    const goToNewAccountScreen = () => {
        navigation.navigate('newAccount')
    }

    return (
        <Background>
            <Header>
                Welcome back!
            </Header>

            <Form {...formProps}>

                <Text style={{ textAlign: 'center' }}>
                    Don't have an account? 
                    <Text
                        style={{ color: 'blue' }}
                        onPress={() => goToNewAccountScreen()}
                        > Create new Account</Text>
                </Text>

            </Form>

        </Background>
        
    )
}

const handleSubmit = (formData: any) => {
    console.log(formData)
}

const fields: Array<Field> = [
    {
        name: "login",
        label: "Login"
    },
    {
        name: "passoword",
        label: "Password",
        hideContent: true
    }
]

const formProps: FormProps = {
    fields: fields,
    submitMethod: (formData) => handleSubmit(formData),
    actionButtonText: 'Login'
}