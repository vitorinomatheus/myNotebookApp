import { Background } from "../../components/Background"
import { Form } from "../../components/Form"
import { Header } from "../../components/Header"
import { Field, FormProps } from "../../types"

export const ForgotPassword = () => {
    return (
        <>
            <Background>
                <Header>
                    Retrieve your password
                </Header>

                <Form {...formProps}>
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
        name: 'email',
        label: 'E-mail',
        keyboardType: 'email-address'
    }
];

const formProps: FormProps = {
    fields: fields,
    submitMethod: (formData) => handleSubmit(formData),
    actionButtonText: 'Retrieve password'
}