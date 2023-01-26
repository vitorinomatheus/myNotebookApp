import { View, Text } from "react-native"
import { Background } from "../../components/Background"
import { Form } from "../../components/Form"
import { Header } from "../../components/Header"
import { Field, FormProps } from "../../types"

export const Login = ({ navigation }: any) => {

    const navigateToScreen = (screen: string) => {
        navigation.navigate(screen)
    }

    return (
        <Background>
            <Header>
                Welcome back!
            </Header>

            <Form {...formProps}>

                <Text style={{ textAlign: 'center', marginBottom: 5 }}>
                    Don't have an account? 
                    <Text
                        style={{ color: 'blue' }}
                        onPress={() => navigateToScreen('newAccount')}
                        > Create new Account
                    </Text>
                </Text>
                <Text 
                    style={{ textAlign: "center", color: 'blue' }}
                    onPress={() => navigateToScreen('forgotPassword')}>
                    Forgot password
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