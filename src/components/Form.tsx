import React, { useRef, useState } from "react";
import { TextInput, View } from "react-native";
import { Field, FormProps } from "../types";
import { Button } from "./Button";
import * as Paper from "react-native-paper";

type ChildProp = {
    children: React.ReactNode
}

export const Form = ({children, ...formProps}: FormProps & ChildProp) => {

    const [formData, setFormData] = useState({});

    const inputs = useRef<TextInput[]>([]);

    const handleSubmit = () => {
        formProps.submitMethod(formData)
    }

    const focusNextField = (field: Field) => {
        const fieldIndex = formProps.fields.indexOf(field);
        if(fieldIndex != formProps.fields.length - 1)
            inputs.current[fieldIndex + 1].focus();
    }

    const defineReturnType = (field: Field) => {
        const fieldIndex = formProps.fields.indexOf(field);
        return fieldIndex == (formProps.fields.length - 1) ? 'done' : 'next';
    }

    const defineBlurSubmit = (field: Field) => {
        const fieldIndex = formProps.fields.indexOf(field);
        return fieldIndex == (formProps.fields.length - 1);
    }

    return (
        <>
            <View
                style= {{
                    width: '100%'
                }}
            >
                {formProps.fields.map((field: Field) =>

                    <Paper.TextInput
                        key={field.name}
                        ref={(input: TextInput) => {
                            inputs.current[formProps.fields.indexOf(field)] = input
                        }}
                        onSubmitEditing = {() => {focusNextField(field)}}
                        blurOnSubmit = {defineBlurSubmit(field)}
                        returnKeyType={defineReturnType(field)}
                        style={{ marginBottom: 20 }}
                        mode={formProps.inputMode || 'flat'}
                        placeholder={field.placeholder || undefined}
                        label={field.label}
                        defaultValue={field.recoveredValue || undefined}
                        onChangeText={(text) => setFormData({...formData, [field.name]: text})}
                        keyboardType={ field.keyboardType || undefined }
                        secureTextEntry = { field.hideContent || undefined }
                    />
                )}

                <Button
                    mode="contained"
                    onPress={handleSubmit}
                >
                    {formProps.actionButtonText}
                </Button> 

                {children}
                
            </View>
        </>
    )

}